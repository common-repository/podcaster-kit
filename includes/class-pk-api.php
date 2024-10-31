<?php
/**
 * Author: Mykhailo Polshyn https://icontentorguild.com
 * Licence: GPLv2 http://www.gnu.org/licenses/gpl-2.0.txt
 */

namespace Podcaster_Kit;

if ( ! defined( 'ABSPATH' ) ) exit;

class PK_API {

    private const OPTIONS_NAME = 'podcaster_kit_options';

    private const POST_META_KEY_PODCAST_ID = '_pk_podcast_id';

    private $request_cache = array();

    public function __construct() {}

    public function is_options_not_set_yet():bool {
        return empty( get_option( PK_API::OPTIONS_NAME ) );
    }

    public function get_options():array {
    
        $options = get_option( PK_API::OPTIONS_NAME );
        if ( !is_array($options) ) {

            $options = array( 'pricing_plans' => array() );
        }
        return $options;
    }

    public function update_options( array $podkit_options ):bool {

        return update_option( PK_API::OPTIONS_NAME, $podkit_options );
    }

    public function get_podcast_lock_audio_id():?int {

        $pk_options = $this->get_options();

        return isset( $pk_options['podcast_lock_audio_id'] ) ? (int) $pk_options['podcast_lock_audio_id'] : null;
    }

    public function get_podcast_lock_audio_url():?string {

        $pk_podcast_lock_audio_id = $this->get_podcast_lock_audio_id();
        $podcast_lock_audio_url = null;
        if ( null != $pk_podcast_lock_audio_id ) {
            $podcast_lock_audio_url = wp_get_attachment_url( $pk_podcast_lock_audio_id );
        }
        return $podcast_lock_audio_url;
    }

    public function get_podcast_lock_message():?string {
    
        $pk_options = $this->get_options();

        return !empty( $pk_options['podcast_lock_message'] ) ? $pk_options['podcast_lock_message'] : null;
    }

    public function get_podcast_id_from_post( int $post_id ):?int {

        $result = get_post_meta( $post_id, static::POST_META_KEY_PODCAST_ID, true );
        return ( (string)(int) $result === $result) ? (int) $result : null;
    }

    /**
     * @return array of WPPost
     */
    public function get_post_id_by_podcast_id( int $podcast_id ):array {

        $query = new \WP_Query( array(
            'post_type' => 'post',
            'post_status' => 'publish',
            'meta_key' => static::POST_META_KEY_PODCAST_ID,
            'meta_value' => $podcast_id,
            'meta_compare' => '='
        ) );

        return $query->posts;
    }

    public function get_podcast_url_from_post( int $post_id ):?string {

        $podcast_id = $this->get_podcast_id_from_post($post_id);
        $result = null;
        if ( null != $podcast_id ) {
            $result = wp_get_attachment_url( $podcast_id );
        }
        return $result;
    }

    /**
     *  $podcast_id - is audio attachement id
     */
    public function set_podcast_id_to_post( int $post_id, ?int $podcast_id ):bool {

        return update_post_meta( $post_id, '_pk_podcast_id', $podcast_id );
    }
    /**
     * @return lock time in seconds or null if it was not set
     */
    public function get_podcast_lock_time_from_post( int $post_id ):?int {

        $result = get_post_meta( $post_id, '_pk_podcast_lock_time', true );
        return ( (string)(int) $result === $result) ? (int) $result : null;
    }

    public function set_podcast_lock_time_to_post( int $post_id, ?int $podcast_lock_time_in_seconds ):bool {

        return update_post_meta( $post_id, '_pk_podcast_lock_time', $podcast_lock_time_in_seconds );
    }

    /**
     * Function for integration with Easy Digital Downloads
     */
    public function get_all_edd_downloads():array {

        $result = array();

        if ( Podcaster_Kit::get_instance()->is_edd_activated() ) {

            $edd_downloads = get_posts( array(
                'post_type'      => 'download',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
                'orderby'        => 'title',
                'order'          => 'DESC',
            ) );

            foreach( $edd_downloads as $edd_download ) {
                $result[] = new \EDD_Download( $edd_download->ID );
            }
        }
        return $result;
    }

    private function get_category_with_all_parents( \WP_Term $starting_category, array $all_categories ):array {
        
        $result = array();

        if ( 0 < $starting_category->parent ) {

            foreach( $all_categories as $category ) {
                if ( $category->ID == $starting_category->parent ) {
                    $result = $this->get_category_with_all_parents( $category, $all_categories );
                    break;
                }
            }
        }
        $result[] = $starting_category;
        return $result;
    }
    // TOD: add caching access with https://codex.wordpress.org/Class_Reference/WP_Object_Cache
    public function is_user_has_access_to_podcast( ?int $post_id = null, ?int $user_id = null ):bool {

        $user_id = empty( $user_id ) ? get_current_user_id() : $user_id;
        $post_id = empty( $post_id ) ? get_the_ID() : $post_id;

        if ( null == $this->get_podcast_lock_time_from_post($post_id) ) {
            return true; // for not locked podcasts
        }

        // if Easy Digital Downloads not active then we open all podcast for any logged in user
        if ( !Podcaster_Kit::is_edd_activated() ) {
            return is_user_logged_in();
        }
        
        if ( !empty($this->request_cache['is_user_has_access_to_podcast']) &&
            !empty($this->request_cache['is_user_has_access_to_podcast'][$user_id]) &&
            !empty($this->request_cache['is_user_has_access_to_podcast'][$user_id][$post_id]) ) {
            
            return $this->request_cache['is_user_has_access_to_podcast'][$user_id][$post_id];
        }

        $user = new \WP_User( $user_id );
        if ( $user->has_cap( 'edit_pages' ) ) { // for editors and administrators
            $this->request_cache['is_user_has_access_to_podcast'][$user_id][$post_id] = true;
            return true;
        }

        // find all top 3 level post categories (parent categories give access to children)
        $all_categories = get_categories();
        $post_categories = wp_get_post_categories( $post_id, array('fields' => 'all_with_object_id') );
        $top_3_levels_post_categories_ids = array();

        foreach( $post_categories as $category ) {
            $category_with_parents = $this->get_category_with_all_parents( $category, $all_categories );
            $max_third_level_category_index = count($category_with_parents) - 1;
            if ( 2 < $max_third_level_category_index ) {
                $max_third_level_category_index = 2;
            }
            $top_3_levels_post_categories_ids[] = $category_with_parents[ $max_third_level_category_index ]->term_id;
        }

        // find edd downloads which give access to requested post
        $pk_options = $this->get_options();
        $edd_downloads_with_access = array();
        $edd_downloads_ids_with_access = array();

        foreach( $pk_options['pricing_plans'] as $edd_download_id => $edd_price_option ) {

            foreach( $edd_price_option as $edd_price_option_id => $edd_price_option_data ) {

                if ( !empty( array_intersect($edd_price_option_data['categories'], $top_3_levels_post_categories_ids) ) ) {

                    $edd_downloads_with_access[ absint($edd_download_id) ][ absint($edd_price_option_id) ] = absint( $edd_price_option_data['days'] );
                    $edd_downloads_ids_with_access[] = absint( $edd_download_id );
                }
            }
        }

        // check is user have required paid edd downloads during corresponding time
        $user_completed_edd_payments = edd_get_payments( array(
            'user'    => $user_id,
            'number'  => 0,
            'status'  => 'publish', // it is complete status
            'nopaging' => false,
            'output' => 'payments',
            'download' => $edd_downloads_ids_with_access,
            'orderby' => 'start_date',
            'order' => 'ASC'
        ));
        $now = new \DateTime();
        $last_paid_access_date = null;

        foreach( $user_completed_edd_payments as $edd_payment ) {

            $payment_complete_datetime = \DateTime::createFromFormat( 'Y-m-d G:i:s', $edd_payment->completed_date );

            if ( null == $last_paid_access_date || $last_paid_access_date < $payment_complete_datetime ) {
                $last_paid_access_date = $payment_complete_datetime;
            } else {
                $paid_but_not_used_yet_time = $last_paid_access_date->diff( $payment_complete_datetime, true );
                $last_paid_access_date->add( $paid_but_not_used_yet_time );
            }

            foreach( $edd_payment->downloads as $edd_download ) {
                
                $edd_price_option = $edd_download['options'];
                if ( empty($edd_price_option) ) {
                    $edd_price_option = array(
                        'price_id' => 0,
                        'quantity' => $edd_download['quantity'],
                    );
                }

                $edd_download_id = absint( $edd_download['id'] );
                $edd_price_option_id = absint($edd_price_option['price_id']);

                if ( !empty( $edd_downloads_with_access[ $edd_download_id ] ) &&
                    !empty( $edd_downloads_with_access[ $edd_download_id ][ $edd_price_option_id ] ) ) {

                        $days = new \DateInterval( 'P'.( $edd_downloads_with_access[ $edd_download_id ][ $edd_price_option_id ] * absint($edd_price_option['quantity']) ).'D' );
                        $last_paid_access_date->add( $days );

                        if ( $now <= $last_paid_access_date ) {
                            $this->request_cache['is_user_has_access_to_podcast'][$user_id][$post_id] = true;
                            return true;
                        }
                }
            }
        }
        $this->request_cache['is_user_has_access_to_podcast'][$user_id][$post_id] = false;
        return false;
    }
}
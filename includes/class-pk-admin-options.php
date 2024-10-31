<?php
/**
 * Author: Mykhailo Polshyn https://icontentorguild.com
 * Licence: GPLv2 http://www.gnu.org/licenses/gpl-2.0.txt
 */

namespace Podcaster_Kit;

if ( ! defined( 'ABSPATH' ) ) exit;

class PK_Admin_Options {

    public function __construct( string $plugin_url ) {

        add_action( 'admin_menu', function() use ($plugin_url) {
            add_menu_page( 'WP Podcast Kit', 'Podcaster Kit', 'manage_options', 'pk-admin-options', array( $this, 'create_pk_admin_options_page'), 
                $plugin_url.'images/pk-icon-white.svg', 10 );    
        } );

        // add styles for podcast menu icon
        add_action( 'admin_head', function() {
            echo '<style>
                    #adminmenu #toplevel_page_pk-admin-options img { padding-top: 6px; }
                    #wpwrap { overflow-x: hidden; }
                    .pk-admin-options .mce-btn.mce-active button, 
                    .pk-admin-options .mce-btn.mce-active:hover button, 
                    .pk-admin-options .mce-btn.mce-active i, 
                    .pk-admin-options .mce-btn.mce-active:hover i {
                        color: #595959;
                    }
                </style>';
        });

        // show UI only for post edit admin page
        if ( !empty( $_GET['page'] ) && 'pk-admin-options' == $_GET['page'] ) {
        
            add_action( 'admin_enqueue_scripts', function() use ($plugin_url) {

                // add wordpress media library script
                wp_enqueue_media();
                // add wordpress tiny mce editor script
                wp_enqueue_editor();

                wp_enqueue_script( 'pk-admin-view', $plugin_url . 'views/pk-admin.js',
                    array('media-upload'), '1.0', true );
                // TODO: uncomment when bug with styles in svelte will be fixed
                // wp_enqueue_style( 'pk-admin-view_css', $plugin_url . 'views/admin-view.css', false, false, '1.0.0' );

                // set default text lock messa
                $podcast_lock_message = Podcaster_Kit::get_API()->get_podcast_lock_message();

                if ( empty($podcast_lock_message) && Podcaster_Kit::get_API()->is_options_not_set_yet() ) {

                    $podcast_lock_message = '<div style="padding: 40px 0 20px; background-color: #fff3b1; border-radius: 5px;">
                        <p style="text-align: center;">This part of the podcast summary is available only for paid subscribers.</p>
                        <p style="text-align: center;"><a href="#">Learn more about subscriptions</a></p>
                        </div>';
                }

                $podcastLockAudioURL = Podcaster_Kit::get_API()->get_podcast_lock_audio_url();

                wp_localize_script( 'pk-admin-view', 'pkScriptData', array(

                    'currentPkView' => 'pk-admin-options-view',
                    'pkNonce' => wp_nonce_field('pk_admin_options_nonce', 'pk_nonce', true, false),
                    'adminActionURL' => esc_url( admin_url('admin-post.php') ),
                    'pkImagesURL' => Podcaster_Kit::get_plugin_url().'images/',
                    'podcastLockAudioId' => Podcaster_Kit::get_API()->get_podcast_lock_audio_id(),
                    'podcastLockAudioURL' => empty( $podcastLockAudioURL ) ? null : esc_url( $podcastLockAudioURL ),
                    'podcastLockMessage' => esc_html( $podcast_lock_message ),
                    'pricingPlansOptions' => $this->get_pricing_plans_options_for_js(),
                    'textTranslations' => array(

                        'selectLockAudio' =>  __( 'Select lock audio', 'podcaster-kit' ),
                        'aboutPlugin' => __( 'About plugin', 'podcaster-kit' ),
                        'monetization' => __( 'Monetization', 'podcaster-kit' ),
                        'pluginWebsite' => __( 'Plugin website', 'podcaster-kit' ),
                        'activateEDD' => __( 'To configure the rules, you need to install <a href="https://easydigitaldownloads.com/">Easy Digital Downloads</a> plugin and configure at least one product.', 'podcaster-kit' ),
                        'accessRules' => __( 'Podcast access rules after payment', 'podcaster-kit' ),
                        'accessRulesDescription' => __( 'Here you can configure which categories with locked podcasts your visitors will have access after payment. If any category is not selected in any product, its locked podcasts will be available to all logged in users!', 'podcaster-kit' ),
                        'days' => __( 'days', 'podcaster-kit' ),
                        'toCategories' => __( 'To categories', 'podcaster-kit' ),
                        'lockAudioMessage' => __( 'Audio message for locked podcast part', 'podcaster-kit' ),
                        'lockAudioDescription' => __( 'The visitor will hear it when he tries to listen to the locked part of the podcast.', 'podcaster-kit' ),
                        'addLockAudio' => __( 'Add lock audio', 'podcaster-kit' ),
                        'removelockAudio' => __( 'Remove lock audio', 'podcaster-kit' ),
                        'lockTextMessage' => __( 'Text message for the locked part of podcast summary', 'podcaster-kit' ),
                        'lockTextDescription' => __( 'The visitor will see it instead of the locked part of the podcast summary.', 'podcaster-kit' ),
                        'saveOptions' => __( 'Save options', 'podcaster-kit' ),
                    ),
                ) );
            } );
        }
        add_action( 'admin_post_pk_save_monetisation_options', array( $this, 'save_monetisation_options' ), 10 );
    }

    public function create_pk_admin_options_page(): void {

        if ( !current_user_can( 'manage_options' ) )  {
            wp_die( __( 'You do not have sufficient permissions to access this page.', 'podcaster-kit' ) );
        }
        echo '<div id="pk-admin-options-view"></div>';
    }

    public function save_monetisation_options() {

        $wp_podcaster_kit_nonce = isset( $_POST['pk_nonce'] ) ? sanitize_text_field( $_POST['pk_nonce'] ) : '';

        if ( !wp_verify_nonce( $wp_podcaster_kit_nonce, 'pk_admin_options_nonce' ) ||
            ( defined( 'DOING_AJAX' ) && DOING_AJAX ) ||
            !current_user_can( 'edit_posts' ) ) {

            return;
        }

        $pk_options = Podcaster_Kit::get_API()->get_options();

        $pricing_plans = array();

        if ( !empty( $_POST['pk_edd_downloads_used'] ) && is_array( $_POST['pk_edd_downloads_used'] ) ) {

            foreach( $_POST['pk_edd_downloads_used'] as $edd_download_id => $edd_download_data ) {

                if ( !empty( $edd_download_data ) && is_array( $edd_download_data ) ) {

                    $edd_download_id = absint( $edd_download_id );

                    foreach( $edd_download_data as $edd_download_price_id => $edd_download_price_used ) {

                        $edd_download_price_id = absint( $edd_download_price_id );

                        $days = 0;

                        if ( !empty( $_POST['pk_edd_downloads_days'] ) && is_array( $_POST['pk_edd_downloads_days'] ) &&
                            !empty($_POST['pk_edd_downloads_days'][ $edd_download_id ]) && is_array($_POST['pk_edd_downloads_days'][ $edd_download_id ]) &&
                            !empty($_POST['pk_edd_downloads_days'][ $edd_download_id ][ $edd_download_price_id ]) ) {

                            $days = absint( $_POST['pk_edd_downloads_days'][ $edd_download_id ][ $edd_download_price_id ] );
                        }

                        $categories = array();

                        if ( !empty( $_POST['pk_edd_downloads_categories'] ) && is_array( $_POST['pk_edd_downloads_categories'] ) &&
                            !empty($_POST['pk_edd_downloads_categories'][ $edd_download_id ]) && is_array($_POST['pk_edd_downloads_categories'][ $edd_download_id ]) &&
                            !empty($_POST['pk_edd_downloads_categories'][ $edd_download_id ][ $edd_download_price_id ]) ) {

                            $categories = $_POST['pk_edd_downloads_categories'][ $edd_download_id ][ $edd_download_price_id ];
                        }

                        if ( 0 < $days && !empty($categories) && is_array($categories) ) {

                            $pricing_plans[ $edd_download_id ][ $edd_download_price_id ]['days'] = $days;
                            $pricing_plans[ $edd_download_id ][ $edd_download_price_id ]['categories'] = array_keys( $categories );
                        }
                    }
                }
            }
        }
        $pk_options['pricing_plans'] = $pricing_plans;

        $pk_podcast_lock_audio_id = null;
        if ( !empty( $_POST['pk_podcast_lock_audio_id'] ) ) {
            $pk_podcast_lock_audio_id = absint( $_POST['pk_podcast_lock_audio_id'] );
        }
        $pk_options['podcast_lock_audio_id'] = $pk_podcast_lock_audio_id;

        $pk_podcast_lock_message = null;
        if ( !empty( $_POST['pk_podcast_lock_message'] ) ) {
            $pk_podcast_lock_message = wp_kses_post( $_POST['pk_podcast_lock_message'] );
        }
        $pk_options['podcast_lock_message'] = $pk_podcast_lock_message;

        Podcaster_Kit::get_API()->update_options( $pk_options );

        wp_redirect( admin_url('admin.php?page=pk-admin-options#tab2') );
        exit();
    }

    /**
     * Helper functions for preparing data for javascript and for storing it in database
     */
    /**
     * @return array( edd_download_id => array( name, prices => array( index => name_with_price_amount)) )
     */
     private function get_pricing_plans_options_for_js():array {

        $pk_options = Podcaster_Kit::get_API()->get_options();
        $pricing_plans = $pk_options[ 'pricing_plans' ];
        $all_edd_downloads = Podcaster_Kit::get_API()->get_all_edd_downloads();

        $result = array();
        $result_index = 0;

        foreach( $all_edd_downloads as $edd_download ) {

            $price_options = $edd_download->get_prices();

            if ( empty($price_options) ) {

                $price_options[] = array(
                    'index' => 0,
                    'name' => '',
                    'amount' => $edd_download->get_price(),
                );
            }

            foreach( $price_options as $price ) {

                $is_pricing_plan_options_set = !empty( $pricing_plans[$edd_download->ID] ) && !empty( $pricing_plans[$edd_download->ID][$price['index']] );

                $result[ $result_index ] = array(

                    'id' => $edd_download->ID,
                    'priceId' => $price['index'],
                    'name' => html_entity_decode( $edd_download->get_name() ) . 
                        ( empty($price['name']) ? '' : ' (' . $price['name'] . ')' ) . ': ' .
                        html_entity_decode( edd_currency_filter( (int)(float) $price['amount'] ) ),
                    'used' => $is_pricing_plan_options_set,
                    'days' => $is_pricing_plan_options_set ? $pricing_plans[$edd_download->ID][$price['index']]['days'] : 31,
                    'categories' => $this->get_all_post_categories_for_js( $is_pricing_plan_options_set ? $pricing_plans[$edd_download->ID][$price['index']]['categories'] : array(), 0 ),
                );

                $result_index++;
            }
        }
        return $result;
     }

     private function get_all_post_categories_for_js( array $pk_pricing_plan_categories, int $categories_level, ?int $parent_category_id = null ):array {

        $categories = get_categories( array(
            'taxonomy'     => 'category',
            'type'         => 'post',
            'parent'       => $parent_category_id,
            'orderby'      => 'name',
            'order'        => 'ASC',
            'hide_empty'   => false,
            'number'       => 0,
            'pad_counts'   => false,
         ));
        
        $result = array();
        for( $i = 0; $i < count( $categories ); $i++ ) {

            $result[$i] = array(
                'id' => $categories[$i]->term_id,
                'name' => $categories[$i]->name,
                'used' => in_array( $categories[$i]->term_id, $pk_pricing_plan_categories ),
            );

            if ( 3 > $categories_level ) { // do not send more then 3 levels of categories
                $result[$i]['children'] = $this->get_all_post_categories_for_js( $pk_pricing_plan_categories, $categories_level + 1, $categories[$i]->term_id );
            }
        }

        return $result;
     }
}
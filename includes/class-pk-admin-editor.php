<?php
/**
 * Author: Mykhailo Polshyn https://icontentorguild.com
 * Licence: GPLv2 http://www.gnu.org/licenses/gpl-2.0.txt
 */

namespace Podcaster_Kit;

if ( ! defined( 'ABSPATH' ) ) exit;

class PK_Admin_Editor {

    public function __construct( string $plugin_url ) {

        global $pagenow;

        $requested_post_id = !empty( $_GET['post'] ) ? absint( $_GET['post'] ) : null;
        $is_post_post_type_requested = empty( $_GET['post_type'] ) || 'post' == $_GET['post_type'];

        // show UI only for post edit admin page
        if ( ( 'post.php' == $pagenow && !empty( $requested_post_id ) && 'post' == get_post_type( $requested_post_id ) )  ||
            ( 'post-new.php' == $pagenow && $is_post_post_type_requested ) ) {

            add_action( 'add_meta_boxes', function() {
                add_meta_box(
                    'pk_editor', 
                    esc_html__( 'Add podcast', 'podcaster-kit' ),
                    function() {
                        echo '<div id="pk-admin-editor-view"></div>';
                    },
                    'post',
                    'normal',
                    'high'
                );
            }, 1 );

            add_action( 'admin_enqueue_scripts', function() use ($plugin_url) {

                wp_enqueue_script( 'pk-admin-view', $plugin_url . 'views/pk-admin.js', false, '1.0', true );
                // TODO: uncomment when bug with styles in svelte will be fixed
                // wp_enqueue_style( 'pk-admin-view_css', $plugin_url . 'views/admin-view.css', false, false, '1.0.0' );
                
                $podcastURL = Podcaster_Kit::get_API()->get_podcast_url_from_post( get_the_ID() );
                $podcastLockAudioURL = Podcaster_Kit::get_API()->get_podcast_lock_audio_url();

                wp_localize_script( 'pk-admin-view', 'pkScriptData', array(

                    'currentPkView' => 'pk-admin-editor-view',
                    'pkNonce' => wp_nonce_field( 'pk_admin_editor_nonce', 'pk_nonce', true, false ),
                    'podcastId' => Podcaster_Kit::get_API()->get_podcast_id_from_post( get_the_ID() ),
                    'podcastURL' => empty( $podcastURL ) ? null : esc_url( $podcastURL ),
                    'podcastLockTime' => Podcaster_Kit::get_API()->get_podcast_lock_time_from_post( get_the_ID() ),
                    'podcastLockAudioURL' => empty( $podcastLockAudioURL ) ? null : esc_url( $podcastLockAudioURL ),

                    'iconAddPodcast' => Podcaster_Kit::get_plugin_url().'images/pk-icon.svg',

                    'textTranslations' => array(
                        'addPodcast' => __( 'Add podcast', 'podcaster-kit' ),
                        'removePodcast' => __( 'Remove podcast', 'podcaster-kit' ),
                        'backward' => __( 'Backward for 15 seconds', 'podcaster-kit' ),
                        'play' => __( 'Play', 'podcaster-kit' ),
                        'pause' => __( 'Pause', 'podcaster-kit' ),
                        'forward' => __( 'Forward for 60 seconds', 'podcaster-kit' ),
                        'speed' => __( 'Change audio speed', 'podcaster-kit' ),
                        'volume' => __( 'Change audio volume', 'podcaster-kit' ),
                        'addBookmark' => ( get_current_screen()->is_block_editor() ) ? __( 'Copy bookmark shortcode to clipboard', 'podcaster-kit' ) : __( 'Add bookmark shortcode under cursor', 'podcaster-kit' ),
                        'lockPodcast' => __( 'Lock podcast', 'podcaster-kit' ),
                        'unlockPodcast' => __( 'Unlock podcast', 'podcaster-kit' ),
                    ),
                ) );
            } ); 
        }
        add_action( 'save_post', array( $this, 'save_podcast_meta_data' ), 10, 1 );

        // add custom column to the post list in admin area
        if ( 'edit.php' == $pagenow && $is_post_post_type_requested ) {

            // add styles for podcast column
            add_action( 'admin_head', function() {
                echo '<style>
                    th.column-podcast { width: 3em; padding: 0; }
                    </style>';
            });

            add_filter( 'manage_edit-post_columns', function ( $columns ) {

                $podcast_column_name = '<div style="margin-top: 4px; text-align: center;" title="' . __( 'Podcast', 'podcaster-kit' ) . '">
                    <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M180.93 512v-23.506c0-10.724 8.694-19.416 19.418-19.416h35.767v-76.646h-12.264c-47.974 0-86.865-38.893-86.865-86.868v-76.646h20.44v21.461H191v21.461h-33.574v33.724c0 36.122 29.282 65.407 65.404 65.407h66.428c36.121 0 65.404-29.285 65.404-65.407V271.84H322v-21.461h32.662v-21.461h21.461v76.646c0 47.975-38.891 86.868-86.865 86.868h-10.221v76.646h34.748c10.724 0 19.416 8.692 19.416 19.416V512zM69.537 402.65c-11.288 0-20.439-9.151-20.439-20.439v-1.022H26.615c-11.288 0-20.439-9.151-20.439-20.439v-44.965c0-11.288 9.151-20.439 20.439-20.439h22.483v-3.067c0-11.288 9.151-20.439 20.439-20.439h1.021v-91.975h.024C71.973 80.297 154.473 0 256.045 0c101.571 0 184.07 80.297 185.461 179.865h.023v91.975h2.043c11.288 0 20.44 9.151 20.44 20.439v2.045H486.496c11.288 0 20.437 9.15 20.437 20.438v44.967c0 11.288-9.149 20.439-20.437 20.439h-22.484v2.043c0 11.288-9.152 20.439-20.44 20.439h-3.064c-1.043 0-2.066-.078-3.067-.228v.228h-27.593V271.84h10.22v-89.932h-.006c-.192-30.654-9.038-59.282-24.242-83.623-.043.029-.082.059-.127.088.101.152.202.303.303.455.412.623-2.169 2.545-5.564 3.367-4.501 1.09-10.221 1.022-10.221 1.022l-14.307-2.043c-4.263-2.281-8.597-2.876-12.263-5.11-4.482-2.729-8.185-7.12-12.264-10.22-28.538-21.689-52.137-31.68-84.861-31.68-36.55 0-66.849 15.699-92.959 38.834-4.251 3.766-14.945 7.448-20.44 9.197l-6.15 1.022h-6.823s-11.144-2.183-13.609-3.713c-14.742 24.076-23.297 52.26-23.486 82.404h-.006v89.932h10.219v130.81H75.668zm367.904-130.58c1.001-.15 2.024-.23 3.067-.23h-3.067z"/><path d="M238.16 337.246c-25.962 0-47.01-21.047-47.01-47.01V271.84H191v-21.461h.15v-62.34c0-25.962 21.048-47.01 47.01-47.01h36.789c25.963 0 47.012 21.048 47.012 47.01v62.34H322v21.461h-.039v18.396c0 25.963-21.049 47.01-47.012 47.01H238.16zm12.754-19.234h11.281v-18.969c5.233-.218 10.221-1.032 14.963-2.449 4.742-1.417 8.938-3.517 12.59-6.297 3.652-2.78 6.566-6.351 8.746-10.711 2.18-4.36 3.272-9.646 3.272-15.859 0-5.342-.844-9.921-2.534-13.737-1.689-3.815-4.088-7.058-7.195-9.728-3.107-2.671-6.896-4.907-11.365-6.705-4.47-1.799-9.482-3.461-15.041-4.987l-5.235-1.306v-22.241c3.053.436 6.079 1.174 9.077 2.209 2.997 1.036 5.723 2.127 8.175 3.272 2.453 1.144 4.471 2.206 6.051 3.187 1.581.981 2.533 1.689 2.86 2.125l11.775-22.238c-4.578-2.616-9.976-5.176-16.189-7.683-6.214-2.508-12.864-4.089-19.95-4.743v-16.515h-11.281v16.515c-5.232.545-10.111 1.715-14.635 3.514-4.524 1.799-8.446 4.28-11.771 7.441-3.325 3.162-5.97 6.949-7.932 11.364-1.962 4.415-2.943 9.458-2.943 15.127 0 4.36.627 8.173 1.881 11.443 1.253 3.27 3.161 6.161 5.722 8.668 2.562 2.507 5.806 4.715 9.731 6.623 3.924 1.908 8.557 3.677 13.898 5.313l7.848 2.289v21.746c-3.924-.545-7.741-1.442-11.447-2.696-3.707-1.253-7.032-2.561-9.975-3.923-2.943-1.363-5.368-2.673-7.275-3.926-1.908-1.254-3.078-2.152-3.514-2.697l-11.775 23.38c5.886 3.925 12.511 7.087 19.869 9.485 7.358 2.398 14.796 3.926 22.318 4.58v19.129zm9.482-43.004v-19.621c3.816 1.308 6.869 2.753 9.159 4.334 2.289 1.58 3.433 3.787 3.433 6.621 0 5.45-4.198 8.339-12.592 8.666zm-7.683-50.033c-3.815-1.199-6.678-2.59-8.586-4.17-1.908-1.581-2.861-3.734-2.861-6.459 0-5.669 3.816-8.831 11.447-9.485v20.114z" fill="#1eb100"/></svg>
                    <span class="screen-reader-text">' . __( 'Podcast', 'podcaster-kit' ) . '</span></div>';

                $new_columns_list = array();
                $is_podcast_column_added = false;

                foreach( $columns as $column_id => $column_name ) {

                    $new_columns_list[$column_id] = $column_name;

                    if ( 'title' == $column_id ) {

                        $new_columns_list['podcast'] = $podcast_column_name;
                        $is_podcast_column_added = true;
                    }
                }

                if ( !$is_podcast_column_added ) {

                    $new_columns_list['podcast'] = $podcast_column_name;
                }
                
                return $new_columns_list;

            }, 99999, 1 );

            add_action( 'manage_posts_custom_column', function( $column_name, $post_id ) {
                
                if ( 'podcast' == $column_name ) {

                    if ( !empty( Podcaster_Kit::get_API()->get_podcast_id_from_post( $post_id ) ) ) {

                        if ( !empty( Podcaster_Kit::get_API()->get_podcast_lock_time_from_post( $post_id ) ) ) {

                            echo '<div aria-hidden="true" title="' . __( 'Podcast locked', 'podcaster-kit' ) . '" style="text-align: center;">
                                <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M180.93 512v-23.506c0-10.724 8.694-19.416 19.418-19.416h35.767v-76.646h-12.264c-47.974 0-86.865-38.893-86.865-86.868v-76.646h20.44v21.461H191v21.461h-33.574v33.724c0 36.122 29.282 65.407 65.404 65.407h66.428c36.121 0 65.404-29.285 65.404-65.407V271.84H322v-21.461h32.662v-21.461h21.461v76.646c0 47.975-38.891 86.868-86.865 86.868h-10.221v76.646h34.748c10.724 0 19.416 8.692 19.416 19.416V512zM69.537 402.65c-11.288 0-20.439-9.151-20.439-20.439v-1.022H26.615c-11.288 0-20.439-9.151-20.439-20.439v-44.965c0-11.288 9.151-20.439 20.439-20.439h22.483v-3.067c0-11.288 9.151-20.439 20.439-20.439h1.021v-91.975h.024C71.973 80.297 154.473 0 256.045 0c101.571 0 184.07 80.297 185.461 179.865h.023v91.975h2.043c11.288 0 20.44 9.151 20.44 20.439v2.045H486.496c11.288 0 20.437 9.15 20.437 20.438v44.967c0 11.288-9.149 20.439-20.437 20.439h-22.484v2.043c0 11.288-9.152 20.439-20.44 20.439h-3.064c-1.043 0-2.066-.078-3.067-.228v.228h-27.593V271.84h10.22v-89.932h-.006c-.192-30.654-9.038-59.282-24.242-83.623-.043.029-.082.059-.127.088.101.152.202.303.303.455.412.623-2.169 2.545-5.564 3.367-4.501 1.09-10.221 1.022-10.221 1.022l-14.307-2.043c-4.263-2.281-8.597-2.876-12.263-5.11-4.482-2.729-8.185-7.12-12.264-10.22-28.538-21.689-52.137-31.68-84.861-31.68-36.55 0-66.849 15.699-92.959 38.834-4.251 3.766-14.945 7.448-20.44 9.197l-6.15 1.022h-6.823s-11.144-2.183-13.609-3.713c-14.742 24.076-23.297 52.26-23.486 82.404h-.006v89.932h10.219v130.81H75.668zm367.904-130.58c1.001-.15 2.024-.23 3.067-.23h-3.067z"/><path d="M238.16 337.246c-25.962 0-47.01-21.047-47.01-47.01V271.84H191v-21.461h.15v-62.34c0-25.962 21.048-47.01 47.01-47.01h36.789c25.963 0 47.012 21.048 47.012 47.01v62.34H322v21.461h-.039v18.396c0 25.963-21.049 47.01-47.012 47.01H238.16zm12.754-19.234h11.281v-18.969c5.233-.218 10.221-1.032 14.963-2.449 4.742-1.417 8.938-3.517 12.59-6.297 3.652-2.78 6.566-6.351 8.746-10.711 2.18-4.36 3.272-9.646 3.272-15.859 0-5.342-.844-9.921-2.534-13.737-1.689-3.815-4.088-7.058-7.195-9.728-3.107-2.671-6.896-4.907-11.365-6.705-4.47-1.799-9.482-3.461-15.041-4.987l-5.235-1.306v-22.241c3.053.436 6.079 1.174 9.077 2.209 2.997 1.036 5.723 2.127 8.175 3.272 2.453 1.144 4.471 2.206 6.051 3.187 1.581.981 2.533 1.689 2.86 2.125l11.775-22.238c-4.578-2.616-9.976-5.176-16.189-7.683-6.214-2.508-12.864-4.089-19.95-4.743v-16.515h-11.281v16.515c-5.232.545-10.111 1.715-14.635 3.514-4.524 1.799-8.446 4.28-11.771 7.441-3.325 3.162-5.97 6.949-7.932 11.364-1.962 4.415-2.943 9.458-2.943 15.127 0 4.36.627 8.173 1.881 11.443 1.253 3.27 3.161 6.161 5.722 8.668 2.562 2.507 5.806 4.715 9.731 6.623 3.924 1.908 8.557 3.677 13.898 5.313l7.848 2.289v21.746c-3.924-.545-7.741-1.442-11.447-2.696-3.707-1.253-7.032-2.561-9.975-3.923-2.943-1.363-5.368-2.673-7.275-3.926-1.908-1.254-3.078-2.152-3.514-2.697l-11.775 23.38c5.886 3.925 12.511 7.087 19.869 9.485 7.358 2.398 14.796 3.926 22.318 4.58v19.129zm9.482-43.004v-19.621c3.816 1.308 6.869 2.753 9.159 4.334 2.289 1.58 3.433 3.787 3.433 6.621 0 5.45-4.198 8.339-12.592 8.666zm-7.683-50.033c-3.815-1.199-6.678-2.59-8.586-4.17-1.908-1.581-2.861-3.734-2.861-6.459 0-5.669 3.816-8.831 11.447-9.485v20.114z" fill="#1eb100"/></svg>
                                </div><span class="screen-reader-text">' . __( 'Podcast locked', 'podcaster-kit' ) . '</span>';

                        } else {

                            echo '<div aria-hidden="true" title="' . __( 'Podcast unlocked', 'podcaster-kit' ) . '" style="text-align: center;">
                                <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M180.93 512v-23.506c0-10.724 8.694-19.416 19.418-19.416h35.767v-76.646h-12.264c-47.974 0-86.865-38.893-86.865-86.868v-76.646h20.44v21.461H191v21.461h-33.574v33.724c0 36.122 29.282 65.407 65.404 65.407h66.428c36.121 0 65.404-29.285 65.404-65.407V271.84H322v-21.461h32.662v-21.461h21.461v76.646c0 47.975-38.891 86.868-86.865 86.868h-10.221v76.646h34.748c10.724 0 19.416 8.692 19.416 19.416V512zM69.537 402.65c-11.288 0-20.439-9.151-20.439-20.439v-1.022H26.615c-11.288 0-20.439-9.151-20.439-20.439v-44.965c0-11.288 9.151-20.439 20.439-20.439h22.483v-3.067c0-11.288 9.151-20.439 20.439-20.439h1.021v-91.975h.024C71.973 80.297 154.473 0 256.045 0c101.571 0 184.07 80.297 185.461 179.865h.023v91.975h2.043c11.288 0 20.44 9.151 20.44 20.439v2.045H486.496c11.288 0 20.437 9.15 20.437 20.438v44.967c0 11.288-9.149 20.439-20.437 20.439h-22.484v2.043c0 11.288-9.152 20.439-20.44 20.439h-3.064c-1.043 0-2.066-.078-3.067-.228v.228h-27.593V271.84h10.22v-89.932h-.006c-.192-30.654-9.038-59.282-24.242-83.623-.043.029-.082.059-.127.088.101.152.202.303.303.455.412.623-2.169 2.545-5.564 3.367-4.501 1.09-10.221 1.022-10.221 1.022l-14.307-2.043c-4.263-2.281-8.597-2.876-12.263-5.11-4.482-2.729-8.185-7.12-12.264-10.22-28.538-21.689-52.137-31.68-84.861-31.68-36.55 0-66.849 15.699-92.959 38.834-4.251 3.766-14.945 7.448-20.44 9.197l-6.15 1.022h-6.823s-11.144-2.183-13.609-3.713c-14.742 24.076-23.297 52.26-23.486 82.404h-.006v89.932h10.219v130.81H75.668zm367.904-130.58c1.001-.15 2.024-.23 3.067-.23h-3.067z"/><path d="M238.16 337.246c-25.962 0-47.01-21.047-47.01-47.01V271.84H191v-21.461h.15v-62.34c0-25.962 21.048-47.01 47.01-47.01h36.789c25.963 0 47.012 21.048 47.012 47.01v62.34H322v21.461h-.039v18.396c0 25.963-21.049 47.01-47.012 47.01H238.16zm12.754-19.234h11.281v-18.969c5.233-.218 10.221-1.032 14.963-2.449 4.742-1.417 8.938-3.517 12.59-6.297 3.652-2.78 6.566-6.351 8.746-10.711 2.18-4.36 3.272-9.646 3.272-15.859 0-5.342-.844-9.921-2.534-13.737-1.689-3.815-4.088-7.058-7.195-9.728-3.107-2.671-6.896-4.907-11.365-6.705-4.47-1.799-9.482-3.461-15.041-4.987l-5.235-1.306v-22.241c3.053.436 6.079 1.174 9.077 2.209 2.997 1.036 5.723 2.127 8.175 3.272 2.453 1.144 4.471 2.206 6.051 3.187 1.581.981 2.533 1.689 2.86 2.125l11.775-22.238c-4.578-2.616-9.976-5.176-16.189-7.683-6.214-2.508-12.864-4.089-19.95-4.743v-16.515h-11.281v16.515c-5.232.545-10.111 1.715-14.635 3.514-4.524 1.799-8.446 4.28-11.771 7.441-3.325 3.162-5.97 6.949-7.932 11.364-1.962 4.415-2.943 9.458-2.943 15.127 0 4.36.627 8.173 1.881 11.443 1.253 3.27 3.161 6.161 5.722 8.668 2.562 2.507 5.806 4.715 9.731 6.623 3.924 1.908 8.557 3.677 13.898 5.313l7.848 2.289v21.746c-3.924-.545-7.741-1.442-11.447-2.696-3.707-1.253-7.032-2.561-9.975-3.923-2.943-1.363-5.368-2.673-7.275-3.926-1.908-1.254-3.078-2.152-3.514-2.697l-11.775 23.38c5.886 3.925 12.511 7.087 19.869 9.485 7.358 2.398 14.796 3.926 22.318 4.58v19.129zm9.482-43.004v-19.621c3.816 1.308 6.869 2.753 9.159 4.334 2.289 1.58 3.433 3.787 3.433 6.621 0 5.45-4.198 8.339-12.592 8.666zm-7.683-50.033c-3.815-1.199-6.678-2.59-8.586-4.17-1.908-1.581-2.861-3.734-2.861-6.459 0-5.669 3.816-8.831 11.447-9.485v20.114z"/></svg>
                                </div><span class="screen-reader-text">' . __( 'Podcast unlocked', 'podcaster-kit' ) . '</span>';
                        }

                    } else {

                        echo '<div aria-hidden="true" title="' . __( 'Podcast is not set', 'podcaster-kit' ) . '" style="text-align: center;">-</div><span class="screen-reader-text">' . __( 'Podcast is not set', 'podcaster-kit' ) . '</span>';
                    }
                }
            }, 10, 2);
        }
    }

    public function save_podcast_meta_data( $post_id ) {

        $wp_podcaster_kit_nonce = isset( $_POST['pk_nonce'] ) ? sanitize_text_field( $_POST['pk_nonce'] ) : '';

        if ( !wp_verify_nonce( $wp_podcaster_kit_nonce, 'pk_admin_editor_nonce' ) ||
            ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) ||
            ( defined( 'DOING_AJAX' ) && DOING_AJAX ) ||
            !current_user_can( 'edit_post', $post_id ) ||
            false !== wp_is_post_revision( $post_id ) ) {

            return;
        }

        $pk_podcast_id = null;

        if ( !empty( $_POST['pk_podcast_id'] ) ) {

            $pk_podcast_id = absint( $_POST['pk_podcast_id'] );
        }
        Podcaster_Kit::get_API()->set_podcast_id_to_post( $post_id, $pk_podcast_id );

        $pk_podcast_lock_time = null;

        if ( !empty( $_POST['pk_podcast_lock_time'] ) ) {

            $pk_podcast_lock_time = absint( $_POST['pk_podcast_lock_time'] );
        }
        Podcaster_Kit::get_API()->set_podcast_lock_time_to_post( $post_id, $pk_podcast_lock_time );
    }

}

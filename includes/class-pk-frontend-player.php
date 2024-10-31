<?php
/**
 * Author: Mykhailo Polshyn https://icontentorguild.com
 * Licence: GPLv2 http://www.gnu.org/licenses/gpl-2.0.txt
 */

namespace Podcaster_Kit;

if ( ! defined( 'ABSPATH' ) ) exit;

class PK_Frontend_Player {

    private $bookmark_times = array();

    public function __construct( string $plugin_url ) {

        add_action('wp', function() use ($plugin_url) {

            if ( is_singular('post') ) {

                if ( !empty(Podcaster_Kit::get_API()->get_podcast_id_from_post( get_the_ID() )) ) {

                    add_action( 'wp_enqueue_scripts', function() use ($plugin_url) {

                        wp_enqueue_script( 'pk-admin-view', $plugin_url . 'views/pk-frontend.js', false, '1.0', true );
                        // TODO: uncomment when bug with styles in svelte will be fixed
                        // wp_enqueue_style( 'pk-admin-view_css', $plugin_url . 'views/admin-view.css', false, false, '1.0.0' );
                        
                        $pkScriptData = array(
                            'currentPkView' => 'pk-frontend-player-view',
                            'podcastURL' => esc_url( $this->get_secured_podcast_url( get_the_ID() ) ),
                            'textTranslations' => array(
                                'jumpToBookmark' => __( 'Jump to summary bookmark', 'podcaster-kit' ),
                                'backward' => __( 'Backward for 15 seconds', 'podcaster-kit' ),
                                'play' => __( 'Play', 'podcaster-kit' ),
                                'pause' => __( 'Pause', 'podcaster-kit' ),
                                'forward' => __( 'Forward for 60 seconds', 'podcaster-kit' ),
                                'speed' => __( 'Change audio speed', 'podcaster-kit' ),
                                'volume' => __( 'Change audio volume', 'podcaster-kit' ),
                            ),
                        );
                        if ( !Podcaster_Kit::get_API()->is_user_has_access_to_podcast() ) {

                            $pkScriptData['podcastLockTime'] = Podcaster_Kit::get_API()->get_podcast_lock_time_from_post( get_the_ID() );
                            $pkScriptData['podcastLockAudioURL'] = esc_url( Podcaster_Kit::get_API()->get_podcast_lock_audio_url() );
                        }
                        wp_localize_script( 'pk-admin-view', 'pkScriptData', $pkScriptData );
                    } ); 

                    // add styles for bookmarks
                    add_action( 'wp_head', function() {
                        echo '<style>
                            .pk-podcast-bookmark { width: 100%; display: flex; align-items: center; text-align: center; border: none; font-size: 16px; color: #ccc; background-color: inherit; cursor: pointer; padding: 0; margin: 1em 0; }
                            .pk-podcast-bookmark svg { fill: #ccc; margin-right: 5px;}
                            .pk-podcast-bookmark::before, .pk-podcast-bookmark::after { content: ""; flex: 1; border-bottom: 2px dashed #ddd; }
                            .pk-podcast-bookmark::before { margin-right: 10px; }
                            .pk-podcast-bookmark::after { margin-left: 10px; }
                            .pk-podcast-bookmark:hover { color: #999; background-color: inherit; }
                            .pk-podcast-bookmark:hover svg { fill: #999; }
                            .pk-podcast-bookmark:hover::before, .pk-podcast-bookmark:hover::after { border-color: #bbb; }
                            .pk-podcast-bookmark:active { color: inherit; background-color: inherit; }
                            .pk-podcast-bookmark:focus { color: #222; background-color: inherit; outline: none; }
                            .pk-podcast-bookmark:focus svg { fill: #222; }
                            </style>';
                    });

                    add_filter( 'the_content', array( $this, 'add_podcast_player_and_lock_message' ), 999999, 1 );
                }

                add_shortcode( 'pk_podcast_bookmark', array( $this, 'process_pk_podcast_bookmark_shortcode' ), 1, 1 );
            }
        });

        add_action( 'init', function() { $this->process_secured_podcast(); } );

        add_action( 'wp', function() {

            if ( wp_attachment_is('audio', get_the_ID() ) && 
                0 < count(Podcaster_Kit::get_API()->get_post_id_by_podcast_id(get_the_ID()) ) ) {

                global $wp_query;
                $wp_query->set_404();
                status_header( 404 );
                get_template_part( 404 ); 
                exit();
            }
        }, 1 );
    }

    private function get_secured_podcast_url( int $post_id ):string {
        
        $podcast_file = get_attached_file( Podcaster_Kit::get_API()->get_podcast_id_from_post( get_the_ID() ) );
        $secured_podcast_url = get_site_url().'?pk_podcast='.$post_id.'&pk_key='.wp_create_nonce( $podcast_file );

        return $secured_podcast_url;
    }

    // TODO: add other audio formats support
    private function process_secured_podcast() {
        
        if ( !empty( $_GET['pk_podcast'] ) && !empty( $_GET['pk_key'] ) ) {

            $podcast_id = absint( $_GET['pk_podcast'] );
            $wp_podcast_file_nonce = sanitize_text_field( $_GET['pk_key'] );

            $podcast_file = get_attached_file( Podcaster_Kit::get_API()->get_podcast_id_from_post( $podcast_id ) );
            $is_nonce_valid = wp_verify_nonce( $wp_podcast_file_nonce, $podcast_file );

            if ( $is_nonce_valid && false !== $podcast_file ) {

                header('Cache-Control: no-cache, must-revalidate');
                header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); // Date in the past
                header('Content-Transfer-Encoding: binary');
                header('Content-Type: audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3'); // sets the output content type to wav
                header('Accept-Ranges: 0-'.filesize( $podcast_file ) );
                header('Connection: Keep-Alive');
                header('Content-Disposition: inline; filename="pk_podcast_'.$podcast_id.'.mp3"'); // set an output file name
                header('X-Pad: avoid browser bug');

                if (isset($_SERVER['HTTP_RANGE']))  { // do it for any device that supports byte-ranges not only iPhone

                    $this->rangeDownload( $podcast_file );
                } else {
            
                    header( 'Content-Length: '.filesize($podcast_file) );
                    readfile( $podcast_file );
                }
                exit;
            }
        }
    }

    private function rangeDownload( $file ) {

        $fp = @fopen($file, 'rb');
    
        $size   = filesize($file); // File size
        $length = $size;           // Content length
        $start  = 0;               // Start byte
        $end    = $size - 1;       // End byte
        // Now that we've gotten so far without errors we send the accept range header
        /* At the moment we only support single ranges.
         * Multiple ranges requires some more work to ensure it works correctly
         * and comply with the spesifications: http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.2
         *
         * Multirange support annouces itself with:
         * header('Accept-Ranges: bytes');
         *
         * Multirange content must be sent with multipart/byteranges mediatype,
         * (mediatype = mimetype)
         * as well as a boundry header to indicate the various chunks of data.
         */
        header("Accept-Ranges: 0-$length");
        // header('Accept-Ranges: bytes');
        // multipart/byteranges
        // http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.2
        if (isset($_SERVER['HTTP_RANGE'])) {
    
            $c_start = $start;
            $c_end   = $end;
            // Extract the range string
            list(, $range) = explode('=', $_SERVER['HTTP_RANGE'], 2);
            // Make sure the client hasn't sent us a multibyte range
            if (strpos($range, ',') !== false) {
    
                // (?) Shoud this be issued here, or should the first
                // range be used? Or should the header be ignored and
                // we output the whole content?
                header('HTTP/1.1 416 Requested Range Not Satisfiable');
                header("Content-Range: bytes $start-$end/$size");
                // (?) Echo some info to the client?
                exit;
            }
            // If the range starts with an '-' we start from the beginning
            // If not, we forward the file pointer
            // And make sure to get the end byte if spesified
            if ($range[0] == '-') {
    
                // The n-number of the last bytes is requested
                $c_start = $size - substr($range, 1);
            }
            else {
    
                $range  = explode('-', $range);
                $c_start = $range[0];
                $c_end   = (isset($range[1]) && is_numeric($range[1])) ? $range[1] : $size;
            }
            /* Check the range and make sure it's treated according to the specs.
             * http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html
             */
            // End bytes can not be larger than $end.
            $c_end = ($c_end > $end) ? $end : $c_end;
            // Validate the requested range and return an error if it's not correct.
            if ($c_start > $c_end || $c_start > $size - 1 || $c_end >= $size) {
    
                header('HTTP/1.1 416 Requested Range Not Satisfiable');
                header("Content-Range: bytes $start-$end/$size");
                // (?) Echo some info to the client?
                exit;
            }
            $start  = $c_start;
            $end    = $c_end;
            $length = $end - $start + 1; // Calculate new content length
            fseek($fp, $start);
            header('HTTP/1.1 206 Partial Content');
        }
        // Notify the client the byte range we'll be outputting
        header("Content-Range: bytes $start-$end/$size");
        header("Content-Length: $length");
    
        // Start buffered download
        $buffer = 1024 * 8;
        while(!feof($fp) && ($p = ftell($fp)) <= $end) {
    
            if ($p + $buffer > $end) {
    
                // In case we're only outputtin a chunk, make sure we don't
                // read past the length
                $buffer = $end - $p + 1;
            }
            set_time_limit(0); // Reset time limit for big files
            echo fread($fp, $buffer);
            flush(); // Free up memory. Otherwise large files will trigger PHP's memory limit.
        }
    
        fclose($fp);
    }

    public function process_pk_podcast_bookmark_shortcode( array $atts ) {

        $result = '';

        if ( !empty($atts['time']) && !empty( Podcaster_Kit::get_API()->get_podcast_id_from_post(get_the_ID()) ) ) {

            $time_values = explode( ':', $atts['time'] );

            if ( 3 == count($time_values) ) {

                // recalculate time because admin can set wrong time
                $time_in_seconds = 3600 * absint( $time_values[0] ) + 60 * absint( $time_values[1] ) + absint( $time_values[2] );

                $hours = intdiv( $time_in_seconds, 3600 );
                $minutes = intdiv( $time_in_seconds % 3600, 60 );
                $seconds = $time_in_seconds - $hours * 3600 - $minutes * 60;
            
                $hours = ( 0 == $hours ? '00' : ( 10 > $hours ? '0'.$hours : $hours ) );
                $minutes = ( 0 == $minutes ? '00' : ( 10 > $minutes ? '0'.$minutes : $minutes ) );
                $seconds = ( 0 == $seconds ? '00' : ( 10 > $seconds ? '0'.$seconds : $seconds ) );
                $timne_string = $hours.':'.$minutes.':'.$seconds;
                
                $result = '<p><a name="'.$time_in_seconds.'"></a><button class="pk-podcast-bookmark" title="'.
                    __( 'Play from', 'podcaster-kit' ).' '.$timne_string.'" data-time="'.$time_in_seconds.'">'.
                    '<svg width="10" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg"><path d="M.561.556v38.888L31.438 20z"/></svg>'.
                    $timne_string.'</button></p>';

                $this->bookmark_times[$time_in_seconds] = $result;
            }
        }

        return $result;
    }

    public function add_podcast_player_and_lock_message( $content ) {

        // insert podcast player placeholder
        $insert_position = strpos( $content, '</p>' ) + 4; // insert player after first paragraph
        $content = substr($content, 0, $insert_position).
            '<div id="pk-frontend-player-view" style="max-width: 1000px; margin-left: auto; margin-right: auto;"></div>' . substr($content, $insert_position);

        // insert lock message if it's needed
        if ( !Podcaster_Kit::get_API()->is_user_has_access_to_podcast() ) {

            $lock_message = Podcaster_Kit::get_API()->get_podcast_lock_message();

            if ( !empty($lock_message) ) {

                $lock_time = Podcaster_Kit::get_API()->get_podcast_lock_time_from_post( get_the_ID() );
                //ksort( $this->bookmark_times );
                
                $lock_message_time_start = null;

                if ( !empty($this->bookmark_times) ) {

                    $bookmark_times = array_keys( $this->bookmark_times );

                    foreach( $bookmark_times as $time ) {
                        if ( $lock_time < $time ) {
                            break;
                        }
                        $lock_message_time_start = $time;
                    }
                }
                
                $search_string = '';

                if ( null != $lock_message_time_start ) {

                    $search_string = $this->bookmark_times[$lock_message_time_start];

                } else {

                    $search_string = '<div id="pk-frontend-player-view"></div>';
                }

                $lock_message_start_pos = strpos( $content, $search_string ) + strlen( $search_string );

                $content = substr($content, 0, $lock_message_start_pos) . wp_kses_post( $lock_message );
            }
        }

        return $content;
    }
}

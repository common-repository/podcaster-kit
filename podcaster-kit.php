<?php
/**
 * Plugin Name: Podcaster Kit
 * Plugin URI: https://icontentorguild.com
 * Description: Plugin for podcast monetization. It lets your fans listen to part of your podcast for free and opens the rest after payment.
 * Version: 1.0.0
 * Requires at least: 5.1
 * Requires PHP: 7.2
 * Author: Mykhailo Polshyn
 * Licence: GPLv2
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: podcaster-kit
 * Domain Path: /languages
 */

namespace Podcaster_Kit;

if ( ! defined( 'ABSPATH' ) ) exit;

final class Podcaster_Kit {

	const PLUGIN_VERSION = '1.0.0';
	// TODO: add database version variable
	private $plugin_dir;
	private $plugin_url;

	private static $instance;

	private $api;

	private $editor;
	private $options;

	private $frontend_player;

	public static function get_instance() : Podcaster_Kit {

		if ( ! isset( self::$instance ) ) {
			self::$instance = new Podcaster_Kit();
			self::$instance->init();
		}
		return self::$instance;
	}

	private function __construct() {
		$this->plugin_dir = plugin_dir_path( __FILE__ );
		$this->plugin_url = plugin_dir_url( __FILE__ );
	}

	private function init() : void {

		require_once $this->plugin_dir . 'includes/class-pk-api.php';
		$this->api = new PK_API();

		add_action( 'plugins_loaded', function() {
			load_plugin_textdomain( 'podcaster-kit', false, basename( dirname( __FILE__ ) ) . '/languages/' );
		} );

		if ( is_admin() ) {

			add_filter( 'plugin_action_links_podcaster-kit/podcaster-kit.php', function( $links ) {
				$links[] = '<a href="'.esc_url( admin_url( 'admin.php?page=pk-admin-options' )).'">'.__('Settings').'</a>';
				return $links;
			}, 10, 1 );

			add_filter( 'plugin_row_meta', function( $links, $file ) {

				if ( false !== strpos( $file, basename( __FILE__, '.php' ) ) ) {
					$links[] = '<a href="https://icontentorguild.com/documentation/" target="_blank">' .
						__( 'Documentation', 'podcaster-kit' ) . '</a>';
				}
				return $links;
			}, 10, 2 );

			require_once $this->plugin_dir . 'includes/class-pk-admin-options.php';
			$this->options = new PK_Admin_Options( $this->plugin_url );

			require_once $this->plugin_dir . 'includes/class-pk-admin-editor.php';
			$this->editor = new PK_Admin_Editor( $this->plugin_url );
			
		} else {
			
			require_once $this->plugin_dir . 'includes/class-pk-frontend-player.php';
			$this->frontend_player = new PK_Frontend_Player( $this->plugin_url );
		}
	}

	public static function get_plugin_dir(): string {
		return static::get_instance()->plugin_dir;
	}

	public static function get_plugin_url(): string {
		return static::get_instance()->plugin_url;
	}

	public static function get_API(): PK_API {
		return static::get_instance()->api;
	}

	public static function is_edd_activated(): bool {
		return class_exists( 'Easy_Digital_Downloads' );
	}
}

// init plugin
Podcaster_Kit::get_instance();

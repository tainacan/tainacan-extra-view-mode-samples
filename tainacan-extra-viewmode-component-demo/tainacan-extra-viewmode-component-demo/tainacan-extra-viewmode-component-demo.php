<?php
/*
Plugin Name: Tainacan Extra View Mode Component Demo
Plugin URI: https://tainacan.org/new
Description: Add one extra viewmode to be used by your theme
Author: your-name-here
Version: 0.0.1
Text Domain: tainacan-extra-viewmode-component-demo
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html
*/

/** Plugin version */
const TAINACAN_EXTRA_VIEWMODES_COMPONENT_DEMO_PLUGIN_VERSION = '0.0.1';

/**
 * View modes that are made of Vuejs components instead of php
 * templates have to be registered first on the plugin
 */
add_action("tainacan-register-vuejs-component", "tainacan_extra_viewmode_component_demo_register_components");
function tainacan_extra_viewmode_component_demo_register_components($helper) {

    if ( function_exists( 'tainacan_register_view_mode' ) ) {
		
		// Enqueues necessary third party or modified libraries to this view mode
		$baseurl =  plugin_dir_url(__FILE__);
//		wp_register_script('modernizr_custom', 	$baseurl . 'vendor/modernizr.custom.js', 	[], TAINACAN_EXTRA_VIEWMODES_COMPONENT_DEMO_PLUGIN_VERSION, false);
//		wp_enqueue_script('modernizr_custom');


        // Registering the Vue Component
        $handle = 'tainacan-demo-2-viewmode';
        $component_script_url = $baseurl . 'components/demo-2-view-mode.bundle.js';
		$helper->register_vuejs_component($handle, $component_script_url, [ 'public' => true, 'deps' => ['wp-i18n'] ], null, true);
		
		// Registering the view mode
        tainacan_register_view_mode('demo-2', [
            'label' 				=> 'Demo 2',
			'description' 			=> __('A boring component demo view mode.', 'tainacan-extra-viewmode-component-demo'),
			'icon' 					=> '<span class="icon"><i><svg fill="var(--tainacan-info-color, #555758)" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M8.492 6.074h7.016v11.852H8.492zM4.943 7.477h2.806v9.046H4.943zM16.251 7.477h2.807v9.046H16.25zM19.8 8.442h1.884v7.116h-1.883zM2.316 8.442h1.883v7.116H2.316z"/></svg></i></span>',
            'type' 					=> 'component',
			'component' 			=> 'view-mode-demo-2',
			'dynamic_metadata' 		=> true,
			'implements_skeleton' 	=> true
        ]);
    }
}

/**
 * Template view modes have their style separated from the php file
 * so we enqueue them here.
 */
add_action( 'wp_print_scripts', 'tainacan_extra_viewmode_component_demo_enqueue_styles' );
function tainacan_extra_viewmode_component_demo_enqueue_styles() {
	
	// Enqueue template view mode styles
	$baseurl =  plugins_url('', __FILE__);
	wp_enqueue_style( 'tainacan-extra-viewmodes-view-mode-demo-2', $baseurl . '/css/_view-mode-demo-2.css', [], TAINACAN_EXTRA_VIEWMODES_COMPONENT_DEMO_PLUGIN_VERSION );

};

?>

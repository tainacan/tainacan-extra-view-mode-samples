<?php
/*
Plugin Name: Tainacan Extra View Mode Demo Template
Plugin URI: https://tainacan.org/
Description: Adds one extra viewmode to be used by your theme
Author: your-name-here
Version: 0.0.1
Text Domain: tainacan-extra-viewmode-demo-template
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html
*/

/** Plugin version */
const TAINACAN_EXTRA_VIEWMODE_DEMO_TEMPLATE_PLUGIN_VERSION = '0.0.1';

/**
 * Here we regster the new view modes using the Tainacan plugin
 * function 'tainacan_register_view_mode'. Checking if it exists also 
 * is a way of making sure that the Tainacan itself is active.
 */
add_action( 'after_setup_theme', 'tainacan_extra_viewmode_template_demo_register_templates' );
function tainacan_extra_viewmode_template_demo_register_templates() {

	if ( function_exists( 'tainacan_register_view_mode' ) ) {

		// Registering the view modes
		tainacan_register_view_mode('demo-1', [
			'label' 			=> 'Demo 1',
			'description' 		=> __('A boring template demo view mode.', 'tainacan-extra-viewmode-template-demo'),
			'icon' 				=> '<span class="icon"><i><svg fill="var(--tainacan-info-color, #555758)" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="-2 -2 48 48"><path d="M24.981 7.464H4.898c-.758 0-1.372.615-1.372 1.373v14.816c0 .758.615 1.373 1.372 1.373h20.084c.758 0 1.373-.615 1.373-1.373V8.838c0-.76-.615-1.374-1.374-1.374zM29.183 15.527h7.927c.758 0 1.373-.615 1.373-1.374h-.001V8.838c0-.76-.614-1.373-1.373-1.373h-7.926c-.757 0-1.372.614-1.372 1.373v5.315c0 .76.615 1.374 1.372 1.374zM38.482 18.336c0-.758-.614-1.373-1.373-1.373h-7.926c-.757 0-1.372.615-1.372 1.373v5.317c0 .758.615 1.373 1.372 1.373h7.927c.758 0 1.373-.615 1.373-1.373h-.001zM38.481 27.847c0-.759-.613-1.373-1.373-1.373h-7.925c-.757 0-1.373.614-1.373 1.373v5.316c0 .758.616 1.373 1.373 1.373h7.927c.758 0 1.373-.615 1.373-1.373h-.002zM24.962 26.473h-7.926c-.758 0-1.373.615-1.373 1.373v5.316c0 .759.615 1.373 1.373 1.373h7.926c.759 0 1.373-.614 1.373-1.373v-5.315c0-.759-.613-1.374-1.373-1.374zM12.815 26.473H4.89c-.758 0-1.373.615-1.373 1.373v5.316c0 .759.615 1.373 1.373 1.373h7.925c.76 0 1.374-.614 1.374-1.373v-5.315c0-.759-.615-1.374-1.374-1.374z"/></svg></i></span>',
			'dynamic_metadata' 	=> false,
			'template' 			=> __DIR__ . '/templates/view-mode-demo-1.php',
			
		]);
	}
};

/**
 * Template view modes have their style separated from the php file
 * so we enqueue them here.
 */
add_action( 'wp_print_scripts', 'tainacan_extra_viewmode_template_demo_enqueue_styles' );
function tainacan_extra_viewmode_template_demo_enqueue_styles() {
	
	// Enqueue template view mode styles
	$baseurl =  plugins_url('', __FILE__);
	wp_enqueue_style( 'tainacan-extra-viewmodes-view-mode-demo-1', $baseurl . '/css/_view-mode-demo-1.css', [], TAINACAN_EXTRA_VIEWMODE_DEMO_TEMPLATE_PLUGIN_VERSION );
};

?>

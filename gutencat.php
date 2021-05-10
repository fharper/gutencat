<?php
/**
 * Plugin Name:       Gutencat
 * Description:       The block that Gutenberg was missing to really take off
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Frédéric Harper
 * License:           Unlicense
 * License URI:       https://github.com/fharper/gutencat/blob/main/LICENSE
 * Text Domain:       gutencat
 *
 * @package           dev-fred-gutencat
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function dev_fred_gutencat_gutencat_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'dev_fred_gutencat_gutencat_block_init' );

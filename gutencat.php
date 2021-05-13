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

//Registers the block using the metadata loaded from the `block.json` file.
function dev_fred_gutencat_gutencat_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'dev_fred_gutencat_gutencat_block_init' );

//Add the options menu into Settings menu
function add_options_menu() {
	add_submenu_page('options-general.php', 'Gutencat', 'Gutencat', 'administrator', 'options-gutencat', 'show_settings_page');
}
add_action('admin_menu', 'add_options_menu');

//Render the settings page
function show_settings_page() {
	?>
    <h1>Gutencat Setting</h1>

	<form action="options.php" method="post">
        <?php
        	settings_fields('dev_fred_gutencat_options');
			do_settings_sections('options-gutencat');
		?>

		<input name="submit" type="submit" role="button" aria-pressed="false" value="Save"/>
	</form>
    <?php
}

//Render the API field
function setting_api_key() {
    	$options = get_option('gutencat_options', '');
	?>

    <input id='gutencat_catapi_key' name='gutencat_options' type='password' value='<?= $options ?>' required />
	<p class="description">
		You need to <a href="https://thecatapi.com/signup" role="link">create a Cat API account</a> to get your API Key (free for you to use on your non-monetized app)
	</p>

	<?php
}

//Render the settings section
function settings_section() {
    echo '<p>Configuration for using TheCatApi</p>';
}

//Valide the settings options: for now, only the API Key
function options_validate($input) {
	//No real for the API since I do not know what constitute a valid TheCatAPI key
    $newinput['catapi_key'] = trim($input['catapi_key'] );

    return $newinput;
}

//Register the settings so we can load, save and use them
function register_settings() {

    register_setting('dev_fred_gutencat_options', 'gutencat_options');

	add_settings_section('catapi_settings', 'TheCatApi Settings', 'settings_section', 'options-gutencat');

    add_settings_field('gutencat_catapi_key', 'TheCatApi Key', 'setting_api_key', 'options-gutencat', 'catapi_settings', ['gutencat_catapi_key']);
}
add_action('admin_init', 'register_settings');

//Add a setting link in the plugins page


function plugins_setting_links($actions)
{
    $links[] = '<a href="' . get_admin_url() . 'options-general.php?page=options-gutencat">Settings</a>';

    return array_merge($actions, $links);
}
add_filter('plugin_action_links_' . plugin_basename( __FILE__ ), 'plugins_setting_links');

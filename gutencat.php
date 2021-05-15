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
 */
function block_init() {
	register_block_type_from_metadata(
		__DIR__,
		array(
			'render_callback' => 'render_dynamic_block',
		)
	);
}
add_action( 'init', 'block_init' );



/**
 * Add the options menu into Settings menu
 */
function add_options_menu() {
	add_submenu_page( 'options-general.php', 'Gutencat', 'Gutencat', 'administrator', 'options-gutencat', 'show_settings_page' );
}
add_action( 'admin_menu', 'add_options_menu' );

/**
 * Render the settings page
 */
function show_settings_page() {
	?>
	<h1>Gutencat Setting</h1>

	<form action="options.php" method="post">
		<?php
			settings_fields( 'dev_fred_gutencat_options' );
			do_settings_sections( 'options-gutencat' );
		?>

		<input name="submit" type="submit" role="button" aria-pressed="false" value="Save"/>
	</form>
	<?php
}

/**
 * Render the API field
 */
function setting_api_key() {
		$options = get_option( 'gutencat_options', '' );
	?>

	<input id='gutencat_catapi_key' name='gutencat_options' type='password' value='<?php echo esc_attr( $options ); ?>' required />
	<p class="description">
		You need to <a href="https://thecatapi.com/signup" role="link">create a Cat API account</a> to get your API Key (free for you to use on your non-monetized app)
	</p>

	<?php
}

/**
 * Render the settings section
 */
function settings_section() {
	echo '<p>Configuration for using TheCatApi</p>';
}

/**
 * Valide the settings options: for now, only the API Key
 *
 * @param string $input the CAT API key.
 */
function options_validate( $input ) {
	// No validation for the API: I do not know what is valid for their key.
	$newinput['catapi_key'] = trim( $input['catapi_key'] );

	return $newinput;
}

/**
 * Register the settings so we can load, save and use them
 */
function register_settings() {

	register_setting( 'dev_fred_gutencat_options', 'gutencat_options' );

	add_settings_section( 'catapi_settings', 'TheCatApi Settings', 'settings_section', 'options-gutencat' );

	add_settings_field( 'gutencat_catapi_key', 'TheCatApi Key', 'setting_api_key', 'options-gutencat', 'catapi_settings', array( 'gutencat_catapi_key' ) );
}
add_action( 'admin_init', 'register_settings' );

/**
 * Add a setting link in the plugins page
 *
 * @param array $actions plugin action links.
 */
function add_menu_link( $actions ) {
	$links[] = '<a href="' . get_admin_url() . 'options-general.php?page=options-gutencat">Settings</a>';

	return array_merge( $actions, $links );
}
add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), 'add_menu_link' );

/**
 * Render the Block
 */
function render_dynamic_block() {
	$image_url = '';

	$response = wp_remote_get(
		'https://api.thecatapi.com/v1/images/search',
		array(
			'headers' => array(
				'x-api-key' => get_option( 'gutencat_options', '' ),
			),
		)
	);

	// I had to inverse those to fix the UnconditionalIfStatement ... ???
	if ( is_wp_error( $response ) ) {
		echo 'error fetching the cat image' . esc_html( $response->get_error_messages() );
	} else {
		$image_url = json_decode( $response['body'] )[0]->{'url'};
	}

	return sprintf(
		'<p { ...useBlockProps() }>
			<img src="' . $image_url . '" alt="random image of a cat" />
		</p>'
	);
}

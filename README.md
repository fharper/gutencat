![a black cat sitting](img/logo.svg)

# Gutencat
Who doesn't love cats? It's why I created this WordPress Gutenberg block that displays a random cat image.

Have an amazing catsperience!

## Install
- Download the [latest release](https://github.com/fharper/gutencat/releases).
- Install the plugin by going into `wp-admin/plugins.php` and clicking `Add New` button.
- Click on the `Upload Plugin` button and the `Choose File` one.
- Select the `zip` file from the folder where you downloaded it and click `Install Now`.
- Activate the plugin.
- You can now use Gutencat Gutenberg Block 😻

**If you want to access to more cats & future Gutencat features, follow those additional steps**
- Click on the `Settings` link.
- [Create a free account](https://thecatapi.com/signup) to access [The Cat API](https://thecatapi.com/).
- Once created, you'll receive an email with the API key: add it into the text box and click save.


## Contribute
- Follow the [WordPress Development Environment Setup tutorial](https://developer.wordpress.org/block-editor/handbook/tutorials/devenv/).

*Note that if you want to use XDebug with `wp-env`, you need to start the developer site with `--xdebug` (add `--update` if you already built the image)*

### Linting
####CSS
`npm run lint:css`

####JavaScript / React
`npm run lint:js`

####PHP
Foolw the WordPress Coding Standards [installation instructions](https://github.com/WordPress/WordPress-Coding-Standards#installation). Once it's done, run the following command
`phpcs gutencat.php`

## What's next
I have some other things I want to implement.
- Specify the cat's breed.
- Specify TheCatAPI's category (i.e.: a cat in a sink).
- Search the file type.
- Add a static picture setting: instead of having a random cat picture each time the page containing the block is loaded, the WordPress administrator could check this option when adding a box. It will fetch a random image that will be saved with the block. Obviously, the user will be able to refresh the image until they get what they want.

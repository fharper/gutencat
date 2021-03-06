![a black cat sitting](assets/logo.svg)

# Gutencat

![Wordpress 5.7.2 tested](https://img.shields.io/badge/wordpress-v5.7.2%20tested-brightgreen) ![Required PHP version](https://img.shields.io/badge/php-%3E%3D7.2-blue) [![Dependabot enabled](assets/dependabot.svg)](https://github.com/fharper/gutencat/security/advisories) [![Percentage of issues still open](http://isitmaintained.com/badge/open/fharper/gutencat.svg)](http://isitmaintained.com/project/fharper/gutencat "Percentage of issues still open") [![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/fharper/gutencat.svg)](http://isitmaintained.com/project/fharper/gutencat "Average time to resolve an issue") [![Maintainability](https://api.codeclimate.com/v1/badges/b272e2922fee9d3d0233/maintainability)](https://codeclimate.com/github/fharper/gutencat/maintainability)

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

We welcome contribution in any capacity. Here are some guidelines to help you. In addition to the steps listed below, you can find more information about how to use `@wordpress/env` in the [WordPress Developer Resources](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/#usage).

### Installation

This project has been setup to use the [@wordpress/env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) npm package, but feel free to disregard the following steps and use something like [VVV](https://varyingvagrantvagrants.org/) or anything else that you already know.

You need to set up your environment first by [installing Node.js](https://nodejs.org/en/download/package-manager/). You also need to have [Docker installed](https://docs.docker.com/get-docker/) and running.

### Running it

```
npm install
wp-env start --xdebug
```

and to ensure your files are up to date on the container.

`npm run start`

You can now open [http://localhost:8888/wp-admin/](http://localhost:8888/wp-admin/). The username is `admin` and the password.... drumrolll... `password`.

#### Important
If you use `wp-env` from the project folder, don't use the `delete` option in the plugins page as it **will delete** most files from the folder.

### Packaging

If you want to install the plugin manually, you can create the `.zip` file using

`npm run package`

### Linting

#### JavaScript / React

`npm run lint:js`

#### CSS

`npm run lint:css`

#### PHP

Follow the WordPress Coding Standards [installation instructions](https://github.com/WordPress/WordPress-Coding-Standards#installation).
`phpcs --standard=WordPress-Extra gutencat.php`

\* *if you run PHP 8.0 you may get an `Uncaught TypeError: vsprintf()` error. Wordpress Coding Standards Sniffer [doesn't support it yet](https://github.com/WordPress/WordPress-Coding-Standards/issues/1967).*

##### Package.json

`npm run lint:pkg-json`

*There is a "Invalid value for license" error even if `Unlicense` is a valid [SPDX identifier](https://spdx.org/licenses/). There must be a problem with `wp-scripts lint-pkg-json`*

#### Markdown

`npm run lint:md`

### Testing

#### End-to-end (E2E)

`npm run test:e2e`

## What's next

First and foremost, fixing the [issues](https://github.com/fharper/gutencat/issues). After that, I have some other things I want to implement.

- Specify the cat's breed.
- Specify TheCatAPI's category (i.e.: a cat in a sink).
- Search the file type.
- Add a static picture setting: instead of having a random cat picture each time the page containing the block is loaded, the WordPress administrator could check this option when adding a box. It will fetch a random image that will be saved with the block. Obviously, the user will be able to refresh the image until they get what they want.
- Who knows, maybe even submit it to the [Gutenberg blocks directory](https://github.com/WordPress/wporg-plugin-guidelines/blob/block-guidelines/blocks.md)!

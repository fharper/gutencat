# The Gutencat journey & lessons learned

Since I created this WordPress Gutenberg Block during my interview process at [Automattic](https://automattic.com), I needed to write down how I proceeded and also how I navigate the WordPress OSS project.

## Learning phase

Let's be honest here, I deactivated Gutenberg first thing when WordPress moved to this new editor: I installed and activated the [Classic Editor plugin](https://wordpress.org/plugins/classic-editor/). I have nothing againsts it, but I don't even use the WYSIWYG editor anymore: I use WordPress on [fred.dev](https://fred.dev) mostly as a blogging platform and pasting my article I've written in [Typora](https://typora.io). So first things first, I had to give it a closer look.

I started the journey as a user, reading the main [Gutenberg documentation page](https://wordpress.org/gutenberg/). It wasn't super helpful, but to be fair, I'm not the target user for it. I realized that I already knew enough to just try it myself. After deactivating the Classic Editor plugin, I played a bit with Gutenberg, so I can know, a bit more, what the user experience is and how my own block should be to give users the same experience. I need to admit that with the right blocks selection, it's making WordPress even more friendly.

Next step was to get to know how to build my amazing block: let's be honest here, everything with cats is better! I read and followed the steps from the [Create a Block Tutorial](https://developer.wordpress.org/block-editor/handbook/tutorials/create-block/). At that point, my *Hello World* plugin wasn't recognized by my hosted WordPress installation, so I tried with Docker and it worked. Not sure if it's because I never created a plugin from scratch, but I assumed that everything needed was in the build folder: when I tried the [Block Plugin Checker](https://wordpress.org/plugins/developers/block-plugin-validator/) I realized I was missing files that were created by `@wordpress/create-block`. Anyway, I *created* my first Gutenberg block 🎉.

Now it's time to give a closer look to the code that was generated so I can better understand and start working on the plugin that will win the hearts and minds of all developers and WordPress users out there...

## Unleash the Kraken

First modification was to create a setting page so the user can enter their API key since it's using [The Cat API](https://thecatapi.com/) to display the random pictures. I don't want them to set up the key each time they want to use the block, hence the setting at the plugin level instead of the block. I spent a bit more time there than I want to admit! It was mostly because adding a setting involves a lot of action hooks and hierarchy of menus that I wasn't aware of. It all make sense: it won't be an issue next time I need to do something similar. The documentation was super helpful though.

Modifying the ReactJS part, even if just a little, was new to me. I resisted to React so far even if I love JavaScript (I know, I'm weird): jokes aside, I just never had to use it. There already so much to learn when you are a Developer Advocate. Anyway, I love to learn new things so this technical assessment was fun. I learned more about how the Gutenberg Blocks & Components works. I also got inspired by looking at the [Gutenberg repository](https://github.com/WordPress/gutenberg) which is one of the benefits of being open source.

Since I love to be transparent, I need to admit that at the beginning, I fought againsts the WordPress coding styles (PHP & JavaScript) cause you know, developers are creatures of habits. I decided to give it a try as even if it's my Gutenberg block, the goal is to evaluate me as a possible role, in said role, I would have to follow those ESlint & PHP_CodeSniffer rules. I surprised myself by liking it: my code was even cleaner than it was before. WordPress 1, Fred 0 🤣

Lastly, I started to add some tests. Not sure why I waited till the end, but better late than never. I added some feedback below about that part.

There are a lot more I could do, but I assumed that at this point, it's enough for a technical assessment that is about *see[ing] a bit of code*, if not, let me know, I added some ideas in the [README.md](README.md). I would really love to have Gutenberg as one of my main focus. It's overkill for my blogging use, but it's an amazing project with endless possibilities in terms of components and what developers can do!

## Feedback

One of the things I like when I start using a new product or technology is to take notes and give feedback. It is one of the reasons I like having a developer advocate role around something I don't know. I'll have the same experience as our users with no bias or assumptions. I also believe that small changes can have a big impact on the users’ experience, and therefore, their happiness! In other words, I may love too much the [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle)...

Keep in mind that it is done with utter respesct for the employee and contributors: theey all did an amazing job! So not everything is important, and for this exercise, I focused on the things that could be improved, from **my** point of view: also, those may already exist or fixed and I just missed them. I will create the proper issues, if they don't exist already, or create a PR for those at a later time.

### Generic

- Could be nice to have the [Block Plugin Checker](https://wordpress.org/plugins/developers/block-plugin-validator/) as part of the `npm run-script` in addition to the web version.
- I can't believe Dashicon didn't have a cat one! I know, this won't be used in the future, but I had to say it.
- I'm thinking of writing an article on how to debug Gutenberg blocks with [Visual Studio Code](https://code.visualstudio.com) while using `wp-env`. The wrapping of multiple things inside means that you have to do 2-3 things differently. Nothing super complicated but it's the kind of blog post that is usually welcome by people not savvy with this tech stack.

### Documentation

- It would be nice to have a copy button for code examples. It's usually the first thing I recommend for any companies asking for feedback on their developer experience as it's usually not complicated to add, but it gives a better experience.
- It's probably written somewhere else, but I would add the tech stack used for blocks in the [Create a Block Tutorial](https://developer.wordpress.org/block-editor/handbook/tutorials/create-block/).
- The [Block Metadata Icon](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/#icon-optional) `wp.primitives.SVG` link is 404.
- The @wordpress/scripts [lint-style section](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/#lint-style) `more examples` link is also 404.
- Multiple documentation page has no examples on how to use the code. I should have taken notes to make some PRs later.
- [@wordpress/e2e-tests](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-e2e-tests/) documentation should have something for people running on the M1 MacBook since Puppeteer will give an error about Chromium which doesn't have an arm64 binary available yet. Should also update the Puppeteer version dependencies to something newer because the Chromium path is hardcoded. I'm not sure what the minimum version which fixed this issue, but the latest (9.1.1) works.
- There are many page where the code examples don't follow WordPress coding style guide: i.e. the code example in [Uninstall Methods - Method 2](https://developer.wordpress.org/plugins/plugin-basics/uninstall-methods/#method-2-uninstall-php).
- It seems like there are a lot of JSDoc missing in the code as I often see `Undocumented declaration.` while checking the documentation: ie.e. there are a lot of these in the [@wordpress/block-editor page](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/).
- I probably missed something, but I wasn't able to find much on blocks settings. Thanks to Google, I found more information.

#### @wordpress/e2e-tests Puppeteer fix for arm64

Mostly as a note to myself, here are the steps needed:

1. Either [build from the sources](https://chromium.googlesource.com/chromium/src/+/HEAD/docs/mac_arm64.md) or install the x86-64 version.
2. Set the environment variable `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD` to `false` and `PUPPETEER_EXECUTABLE_PATH` with the absolute path to Chromium executable (inside the `.app`, not the `.app` itself). It can be found by browsing to `chrome://version/` and checking the value of `Executable Path`.
3. Before installing `@wordpress/e2e-tests` they should install a newer version of Puppeteer that doesn't have Chromium installation path hardcoded to `/usr/bin/chromium-browser`: I think starting at 9.1.1 but I'm not sure about the exact version with the fix.
4. Lastly, they need to install `@wordpress/e2e-tests` with the `--force` option (I know, I know...) so it doesn't raise an error when Puppeteer dependencies `1.10.0 < 9` aren't met. As far as my tests went, I saw no issue by upgrading to a newer version of Puppeteer.

Also, Puppeteer can use any other Chromium based browser, which is worth nothing.

### npm package @wordpress/create-block

- About the plugin detection issue I had, I understand it's about blocks, but I wouldn't be surprised many create their block as plugins, so it would be nice to make a copy in the build folder of `readme.txt`, `block.json` & `MY_PLUGIN.php`. Unless I misunderstood something, I don't want to have the user generate the zip file or manually select the right files for the plugin.
- I know I see the content of `node_modules` after, but I would love a verbose mode to see what is installed during the creation phase.
- Building the plugin should offer to create a zip file out of the box since I assume it's how most users will install their plugin if they don't use `wp-env`.
- It should have some progress bar as for some developers, it may be slow (as mentioned, taking a couple of minutes). There is nothing more annoying than waiting after a process I don't know if it's working or if it just stuck. The user needs visual feedback if it's longer than instantaneous.
- Not sure if it's this script that isn't up to date or the [Block Plugin Checker](https://wordpress.org/plugins/developers/block-plugin-validator/) but I got a `The block.json:apiVersion property must contain a string value.` warning  when checking my plugin.
- I had a couple of errors when using `wp-scripts lint-pkg-json` on the `package.json` created with this script.
- The `wp-scripts lint-pkg-json` give me a "Invalid value for license" error on my license value. Not sure what is happening here as `Unlicense` is a valid [SPDX identifier](https://spdx.org/licenses/). Actually, it may be a bug with [npm-package-json-lint](https://github.com/tclindner/npm-package-json-lint).
- The `wp-scripts lint-pkg-json` should use [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) instead of [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli). It's more extensible, like using prettier plugin (why command line should be ugl!?) and it's created/maintained by the creation of markdownlint.

### npm package @wordpress/env

- Same comment as the `@wordpress/create-block` for the progress bar (i.e.: when it fetches the Docker images).
- Once started, in the MOTD screen, it should show the default username/password.
- The `start` script doesn't fail gracefully when it's already running or when the ports are already in use. Actually, it's more on the Docker side, but you get the point.
- IMNSHO, it should have the testing script installed by default. It would help people understand that testing is important.

### npm package @wordpress/e2e-test-utils

- It should have the equivalent of `isThemeInstalled` but for plugins.
- `installPlugin` (or another endpoint) should also be able to install from a plugin available locally, not just from WP.org repository. It would help test the installation process more easily using Puppeteer.

That's it!

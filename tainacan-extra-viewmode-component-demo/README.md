# Tainacan Extra View Mode (Component Demo)

This repo contains a plugin that registers one component Extra View Mode for Tainacan [Tainacan](https://tainacan.org). This source code is also an example of how to implement [third party view modes](https://tainacan.github.io/tainacan-wiki/#/plugin-extra-view-modes) for Tainacan, which can be learned in the Tainacan Wiki: https://tainacan.github.io/tainacan-wiki/#/dev/extra-view-modes.

## Installation

Like any other WordPress plugin, just move the `tainacan-extra-viewmode-component-demo` folder to your plugins folder.

## Build it!

Make the script executable:

```sh
chmod u+x build.sh
```

The _Demo 2_ view mode is a Vue.js Component, so it needs to be compiled. To simply build the necessary `.vue` files into bundled javascript:

```sh
./build.sh
```

To, besides that, move the necessary plugin files to your wordpress plugin directory:

```sh
./build.sh /var/www/html/wp-content/plugins/
```

If you don't like the script you can bundle things by yourself:

```sh
cd tainacan-extra-viewmode-component-demo/components
npm install
npm run build
```

But keep in mind that the script also takes care of removing some source files not necessary for the plugin to work, such as `.vue`, `package.json` and `webpack.config.json`.

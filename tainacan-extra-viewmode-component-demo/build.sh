echo "Compiling necessary stuff..."
cd ./tainacan-extra-viewmode-component-demo/components/
npm install
npm run build
cd ../../

if [ -z "$1" ]
then
    echo "Done!"
else
    echo "Done. Moving files to destination folder: $1"
    rm -rf $1/tainacan-extra-viewmode-component-demo
    cp -r ./tainacan-extra-viewmode-component-demo $1
    echo "Cleaning some files not necessary for the plugin to work..."
    rm -f $1/tainacan-extra-viewmode-component-demo/components/webpack.config.js
    rm -f $1/tainacan-extra-viewmode-component-demo/components/package.json
    rm -f $1/tainacan-extra-viewmode-component-demo/components/package-lock.json
    rm -f $1/tainacan-extra-viewmode-component-demo/components/*.vue
    rm -f $1/tainacan-extra-viewmode-component-demo/components/demo-2-view-mode.js
    rm -rf $1/tainacan-extra-viewmode-component-demo/components/node_modules
    echo "Done!"
fi
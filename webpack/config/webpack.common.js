const config = require('./webpack.config');
const path = require('path');
const entry = require('./webpack.entry');
const {merge} = require('webpack-merge');
// loader
const loaders = require('./../loaders/index');
// plugins
const plugins = require('./../plugins/index');

module.exports = merge(
    {
        entry,
        mode: 'development',
        // a complete list of "stats" setting is on https://webpack.js.org/configuration/stats/
        resolve: {
            extensions: ['.vue', '.js'/*, '.css', '.tsx', '.ts','.json' */],
            modules: [
                path.resolve(config.path.root, 'node_modules'),
            ],
        },
        output: {
            path: path.resolve(config.path.assets),
            publicPath: path.resolve(config.path.publicPathAssets),
        },
        plugins: [
            plugins.define({
                FIREBASE_AUTHDOMAIN: JSON.stringify(config.firebase.authDomain),
                FIREBASE_API_KEY: JSON.stringify(config.firebase.apiKey),
                FIREBASE_APP_ID: JSON.stringify(config.firebase.appId),
                FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(config.firebase.messagingSenderId),
                FIREBASE_PROJECT_ID: JSON.stringify(config.firebase.projectId),
                FIREBASE_STORAGEBUCKET: JSON.stringify(config.firebase.storageBucket),
                FIREBASE_VAPID_KEY: JSON.stringify(config.firebase.vapidKey),
                FIREBASE_VERSION: JSON.stringify(config.firebase.version),
            }),
            plugins.clean(),
            plugins.copy(),
            plugins.miniCssExtract(),
            // plugins.imageMin(),
            plugins.webpackBar(),
            plugins.ESLint({
                extensions: [
                    '.js',
                    '.vue',
                ],
            }),
        ],
    },
    loaders.workerLoader(),
    loaders.vue(),
    loaders.javaScript(),
    loaders.styleCSS(),
    loaders.styleLess(),
    loaders.styleScss(),
    loaders.imageMinimizer(),
    // loaders.imageMin(),
);

/**
 * @DOC https://www.npmjs.com/package/css-loader
 * @DOC https://www.npmjs.com/package/less-loader
 */
const config = require('./../config/webpack.config');
/* modules */
// const modules = require('./../modules/index');
// loaders
const loader = require('./index');

// plugins
const plugins = require('./../plugins/index');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({include, exclude} = {}) => ({
    plugins: [
        plugins.miniCssExtract()
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                include,
                exclude,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: config.path.publicPathAssets
                            // TODO mrknout na hot reaload. Asi už nebude potřeba
                            // only enable hot in development
                            // hmr: config.isDevelop,
                            // if hmr does not work, this is a forceful method.
                            // reloadAll: config.isProduction
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 4,
                            sourceMap: config.isDevelop
                        }
                    },
                    loader.postCSS(),
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                paths: [
                                    config.path.node_modules,
                                    config.path.src
                                ]
                            },
                            sourceMap: config.isDevelop
                        }
                    }
                ]
            }
        ]
    }
});

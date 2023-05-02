/**
 * @DOC https://www.npmjs.com/package/css-loader
 * @DOC https://www.npmjs.com/package/sass-loader
 * @DOC https://www.npmjs.com/package/resolve-url-loader
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
                test: /\.s[ac]ss$/i,
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
                    /* TODO v připadě nefunkčních url dořešit přes resolve-url-loader
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            removeCR: true
                        }
                    },
                     */
                    loader.postCSS(),
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: config.isDevelop
                        }
                    }
                ]
            }
        ]
    }
});

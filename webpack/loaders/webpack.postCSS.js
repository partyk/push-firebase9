const config = require('./../config/webpack.config');

/* plugins */
const plugins = require('./../plugins/index');

module.exports = () => ({
    loader: 'postcss-loader',
    options: {
        sourceMap: config.isDevelop,
        postcssOptions: {
            plugins: [
                // TODO nefunguje clean duplicitniho kodu
                // plugins.discardDuplicates(),
                plugins.pixrem(),
                'autoprefixer',
                'postcss-preset-env',
                ...(config.isProduction ? [plugins.cssnano()] : [])
            ]
        }
    }
});

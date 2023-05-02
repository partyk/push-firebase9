// webpack.config.js
const {VueLoaderPlugin} = require('vue-loader');

module.exports = ({include, exclude} = {}) => ({
    module: {
        rules: [
            {
                test: /\.vue$/,
                include,
                exclude,
                loader: 'vue-loader',
                options: {}
            }
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
    ]
});

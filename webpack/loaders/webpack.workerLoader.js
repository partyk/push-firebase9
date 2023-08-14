const config = require('./../config/webpack.config');

console.log(config.path.publicPath);

module.exports = ({
    include,
    exclude,
} = {}) => ({
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                include,
                exclude,
                use: [
                    {
                        loader: 'worker-loader',
                        options: {
                            // publicPath: config.path.publicPath,
                        },
                    },
                ],
            },
        ],
    },
});

const config = require('./webpack.config');
const path = require('path');

console.log(path.resolve(config.path.src, 'js/src/index.js'));

module.exports = {
    // src/js javascript files
    'main': path.resolve(config.path.src, 'js/src/index.js'),
};

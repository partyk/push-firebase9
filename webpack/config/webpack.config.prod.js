const path = require('node:path');
const pkg = require('./../../package.json');
// eslint-disable-next-line no-path-concat
const rootDir = path.resolve(__dirname + './../../');

const config = {
    pkg,
    dir: {
        src: 'src',
        dist: 'dist',
    },
    firebase: {
        version: '9.21.0',
        apiKey: 'AIzaSyCqsnxh53Tsd34Ub44Varvxg4KZ308ipZ8',
        authDomain: 'test-push-9afb5.firebaseapp.com',
        databaseURL: 'https://test-push-9afb5.firebaseio.com',
        projectId: 'test-push-9afb5',
        storageBucket: 'test-push-9afb5.appspot.com',
        messagingSenderId: '808497093791',
        appId: '1:808497093791:web:817cf2b70c082a02dd96aa',
        vapidKey: 'BJqXdhuP4dAtYhMeLjRwy1GEYMZHG7a-HVMKzXMFe9xD-Ff6CxDdHtfdqdL1ZmEwvHpi6ovLWkhUTzbQvAPKfEU',
    },
    path: {
        root: rootDir,
        src: path.resolve(rootDir, 'src'),
        dist: path.resolve(rootDir, 'dist'),
        temp: path.resolve(rootDir, 'temp/webpack'),
        assets: path.resolve(rootDir, 'dist/assets'),
        node_modules: path.resolve(rootDir, 'node_modules'),
        publicPath: '/',
        publicPathAssets: '/assets/',
    },
};

module.exports = config;

// It needs for support dynamic import for the older browser
import 'core-js/modules/es.promise';
import 'core-js/modules/es.array.iterator';

Promise.all([
    // babel
    import(/* webpackChunkName: "core-js" */ 'core-js/stable'),
    import(/* webpackChunkName: "runtime" */ 'regenerator-runtime/runtime'),
    // mine file
    import(/* webpackChunkName: "main-index" */ '../main/index'),
]).then();

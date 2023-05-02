importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging-compat.js');

firebase.initializeApp({
    messagingSenderId: '252165740661',
    apiKey: 'AIzaSyCPiJYpPfV88lcR93cGRkAdERxGzowtHck',
    projectId: 'pasmachtest',
    appId: '1:252165740661:web:2024f4b2039c870a9f803c',
    // measurementId: <MEASUREMENT_ID>
});


const isSupported = firebase.messaging.isSupported();
if (isSupported) {
    const messaging = firebase.messaging();
}
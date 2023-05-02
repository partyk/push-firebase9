import {initializeApp} from 'firebase/app';
import {getMessaging, getToken, onMessage} from 'firebase/messaging';

const app = initializeApp({
    messagingSenderId: '252165740661',
    apiKey: 'AIzaSyCPiJYpPfV88lcR93cGRkAdERxGzowtHck',
    projectId: 'pasmachtest',
    appId: '1:252165740661:web:2024f4b2039c870a9f803c',
});

// subsequent calls to getToken will return from cache.
const messaging = getMessaging(app);
// Get registration token. Initially this makes a network call, once retrieved
onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    document.getElementById('message').textContent = JSON.stringify(payload);
});

document.getElementById('push-register').addEventListener('click', event => {
    event.preventDefault();
    getToken(messaging, {vapidKey: 'BPnuI_lSm7s642Gu8H93Dt7zXcB0V6Sij6m7mYmYm0EWnGqC1aMLcbi4tGEDbObj7rQE-SRqsHw__XQuA5f9Dbw'}).then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            console.log(currentToken);
            document.getElementById('token').textContent = currentToken;
            // ...
        } else {
            // Show permission request UI
            console.log('No registration token available. Request permission to generate one.');
            // ...
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        // ...
    });
});

// registrate serviceWorker
/* if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then(function (registration) {
            console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function (err) {
            console.log('Service worker registration failed, error:', err);
        });
} */

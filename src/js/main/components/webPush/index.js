import getCurrentToken from './modules/firebase/geCurrentToken';
import {getMessaging, onMessage} from 'firebase/messaging';
import {initializeApp} from 'firebase/app';
import log from './log';

const app = initializeApp({
    apiKey: FIREBASE_API_KEY,
    appId: FIREBASE_APP_ID,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    projectId: FIREBASE_PROJECT_ID,
});

// subsequent calls to getToken will return from cache.
const messaging = getMessaging(app);
// Get registration token. Initially this makes a network call, once retrieved
onMessage(messaging, (payload) => {
    log(JSON.stringify(payload));
});

document.getElementById('push-register').addEventListener('click', event => {
    getCurrentToken()
        .then(token => {
            log(token, 'Token');
        })
        .catch(error => {
            log(error, 'Error');
        });
});

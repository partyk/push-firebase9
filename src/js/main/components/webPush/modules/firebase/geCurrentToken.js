import 'worker-loader!./firebaseMessagingSw'; // eslint-disable-line
import {initializeApp} from 'firebase/app';
import {getMessaging, getToken} from 'firebase/messaging';
import cookies from 'js-cookie';

const app = initializeApp({
    apiKey: FIREBASE_API_KEY,
    appId: FIREBASE_APP_ID,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    projectId: FIREBASE_PROJECT_ID,
});

// subsequent calls to getToken will return from cache.
const messaging = getMessaging(app);

export default () => {
    return new Promise((resolve, reject) => {
        if (!('serviceWorker' in navigator)) {
            reject(new Error('Service Worker API not supported'));
        }
        navigator.serviceWorker.register('/assets/js/firebaseMessagingSw.worker.js')
            .then((registration) => {
                if (!cookies.get('swVersion') || cookies.get('swVersion') !== FIREBASE_VERSION) {
                    cookies.set('swVersion', FIREBASE_VERSION, {expires: 365});
                    registration.update();
                }
                return getToken(messaging, {
                    vapidKey: FIREBASE_VAPID_KEY,
                    serviceWorkerRegistration: registration,
                })
                    .then((currentToken) => {
                        if (currentToken) {
                            // Send the token to your server and update the UI if necessary
                            resolve(currentToken);
                        } else {
                            // Show permission request UI
                            reject(new Error('No registration token available. Request permission to generate one.'));
                        }
                    });
            }, {
                scope: '/',
            })
            .catch((err) => {
                reject(err);
            });
    });
};

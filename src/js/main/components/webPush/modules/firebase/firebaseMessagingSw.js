import {initializeApp} from 'firebase/app';
import {getMessaging, isSupported, onBackgroundMessage} from 'firebase/messaging/sw';
import notificationClick from './notificationClick';

self.addEventListener('notificationclick', notificationClick);

const firebaseApp = initializeApp({
    authDomain: FIREBASE_AUTHDOMAIN,
    appId: FIREBASE_APP_ID,
    apiKey: FIREBASE_API_KEY,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGEBUCKET,
});

if (isSupported()) {
    const messaging = getMessaging(firebaseApp);

    onBackgroundMessage(messaging, (payload) => {
        console.log('SW Message', payload);
    });
}

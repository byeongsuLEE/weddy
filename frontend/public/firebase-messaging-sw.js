// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp(***REMOVED***
  apiKey: "***REMOVED***",
  authDomain: "***REMOVED***.firebaseapp.com",
  projectId: "***REMOVED***",
  storageBucket: "***REMOVED***.firebasestorage.app",
  messagingSenderId: "***REMOVED***",
  appId: "***REMOVED***",
  measurementId: "***REMOVED***"
***REMOVED***);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => ***REMOVED***
  console.log('Received background message: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = ***REMOVED***
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  ***REMOVED***;
  self.registration.showNotification(notificationTitle, notificationOptions);
***REMOVED***);

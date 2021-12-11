// importScripts('https://www.gstatic.com/firebasejs/[the number of version matching with firebase in package.json]/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/[for example: 7.16.1]/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyA6ZmAKghg72R8M81e8-GIaVuOl27i-Emc",
    authDomain: "appbuffett.firebaseapp.com",
    projectId: "appbuffett",
    storageBucket: "appbuffett.appspot.com",
    messagingSenderId: "800324608778",
    appId: "1:800324608778:web:1126964eb5cebce69150f3",
    measurementId: "${config.measurementId}"
});

const messaging = firebase.messaging();

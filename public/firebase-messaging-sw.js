    importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
    );
    importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
    );
    const firebaseConfig = {
    apiKey: "AIzaSyBZncIo1drOa9U0FwCFB8mg6V40sedTHN0",
    authDomain: "fcm-practice-4a0c2.firebaseapp.com",
    projectId: "fcm-practice-4a0c2",
    storageBucket: "fcm-practice-4a0c2.firebasestorage.app",
    messagingSenderId: "698732965366",
    appId: "1:698732965366:web:0fc48b1c2b367bf77debd7",
    };

    firebase.initializeApp(firebaseConfig);

    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
    console.log("Message Received In Backgroud", payload);
    });

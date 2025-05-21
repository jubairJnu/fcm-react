// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZncIo1drOa9U0FwCFB8mg6V40sedTHN0",
  authDomain: "fcm-practice-4a0c2.firebaseapp.com",
  projectId: "fcm-practice-4a0c2",
  storageBucket: "fcm-practice-4a0c2.firebasestorage.app",
  messagingSenderId: "698732965366",
  appId: "1:698732965366:web:0fc48b1c2b367bf77debd7",
};

const vapidkey =
  "BIfDuAggUNFvDqI7gRHccAVoqsS6FyPWSrcRKvFr05-tgUue5AcND5KYFu_6vpjUuDMIJtsFFfMB-ZMgtKD8KPQ";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export const requestFCMToken = async () => {
  return Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        return getToken(messaging, { vapidkey });
      } else {
        throw new Error("Notification not granted");
      }
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const onMessageLister = () => {
  return new Promise((resolver) => {
    onMessage(messaging, (payload) => {
      resolver(payload);
    });
  });
};

// export const requestFCMToken = async () => {
//   try {
//     const currentToken = await getToken(messaging, {
//       vapidkey,
//     });

//     if (currentToken) {
//       console.log("FCM টোকেন পাওয়া গেছে:", currentToken);
//       // টোকেন সার্ভারে পাঠান
//       sendTokenToServer(currentToken);
//       return currentToken;
//     } else {
//       console.log("নোটিফিকেশন পারমিশন নেই");
//       return null;
//     }
//   } catch (error) {
//     console.log("টোকেন পাওয়া যায়নি", error);
//     return null;
//   }
// };

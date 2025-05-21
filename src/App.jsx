import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { onMessageLister, requestFCMToken } from "./config/firebaseConfig";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const App = () => {
  const [fcmToken, setFcmToken] = useState(null);

  useEffect(() => {
    const fetchFcmToken = async () => {
      try {
        const token = await requestFCMToken();
        setFcmToken(token);
        console.log(token, "token");
      } catch (err) {
        console.error(err);
      }
    };
    fetchFcmToken();
  }, []);

  useEffect(() => {
    const unsubscribe = onMessageLister()
      .then((payload) => {
        console.log(payload, "at on apps");
        toast(
          <div>
            <strong>{payload.notification.title}</strong>
            <p>{payload.notification.body}</p>
          </div>
        );
        setFcmToken(payload);
      })
      .catch((err) => console.log("onMessage error", err));

    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, []);

  return (
    <div>
      <ToastContainer />
      {/* rest of your app */}
      <p style={{ color: "white" }}> Title:{fcmToken?.notification?.title}</p>
    </div>
  );
};

export default App;

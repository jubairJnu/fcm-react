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

  onMessageLister()
    .then((paylaod) => {
      toast(
        <div>
          <strong> {paylaod.notification.title} </strong>
          <p>{paylaod.notification.body}</p>
        </div>
      );
    })
    .catch((err) => console.log(err, "error"));

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default App;

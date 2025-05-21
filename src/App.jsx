import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { requestFCMToken } from "./config/firebaseConfig";

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

  return <div></div>;
};

export default App;

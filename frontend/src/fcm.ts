// src/fcm.ts
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";

admin.initializeApp(***REMOVED***
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
***REMOVED***);



export const sendPushNotification = async (
  token: string,
  title: string,
  body: string
) => ***REMOVED***
  console.log("Token:", token);
  console.log("Title:", title);
  console.log("Body:", body);

  const message = ***REMOVED***
    notification: ***REMOVED***
      title,
      body,
    ***REMOVED***,
    token,
  ***REMOVED***;

  try ***REMOVED***
    const response = await admin.messaging().send(message);
    console.log("Successfully sent message:", response);
  ***REMOVED*** catch (error) ***REMOVED***
    console.error("Error sending message:", error);
  ***REMOVED***
***REMOVED***;

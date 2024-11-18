import ***REMOVED*** initializeApp ***REMOVED*** from "firebase/app";
import ***REMOVED***
  MessagePayload,
  getMessaging,
  getToken,
  onMessage,
***REMOVED*** from "firebase/messaging";

const firebaseConfig = ***REMOVED***
  apiKey: "***REMOVED***",
  authDomain: "***REMOVED***.firebaseapp.com",
  projectId: "***REMOVED***",
  storageBucket: "***REMOVED***.firebasestorage.app",
  messagingSenderId: "***REMOVED***",
  appId: "***REMOVED***",
  measurementId: "***REMOVED***",
***REMOVED***;

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestNotificationPermission = async (): Promise<void> => ***REMOVED***
  const permission = await Notification.requestPermission();

  if (permission === "granted") ***REMOVED***
    await requestForToken();
  ***REMOVED***
***REMOVED***;

export const requestForToken = async (): Promise<string | null> => ***REMOVED***
  try ***REMOVED***
    const registration = await navigator.serviceWorker.getRegistration(
      "/firebase-messaging-sw.js"
    );

    if (!registration) ***REMOVED***
      return null;
    ***REMOVED***

    const currentToken = await getToken(messaging, ***REMOVED***
      vapidKey:
        "***REMOVED***-s",
      serviceWorkerRegistration: registration,
    ***REMOVED***);

    return currentToken ?? null;
  ***REMOVED*** catch ***REMOVED***
    return null;
  ***REMOVED***
***REMOVED***;

export const onMessageListener = (): Promise<MessagePayload> => ***REMOVED***
  return new Promise((resolve) => ***REMOVED***
    onMessage(messaging, (payload: MessagePayload) => ***REMOVED***
      // 디버깅 로그 추가
      console.log("Foreground message payload:", payload);

      if (Notification.permission === "granted") ***REMOVED***
        const title = payload.notification?.title ?? "No title";
        const body = payload.notification?.body ?? "No body";

        // 브라우저 알림 표시
        new Notification(title, ***REMOVED*** body ***REMOVED***);
      ***REMOVED*** else ***REMOVED***
        console.warn("Notification permission not granted");
      ***REMOVED***

      resolve(payload); // 메시지 반환
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***;


export ***REMOVED*** messaging ***REMOVED***;

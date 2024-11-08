// src/firebase.ts
import ***REMOVED*** initializeApp ***REMOVED*** from 'firebase/app';
import ***REMOVED*** MessagePayload, getMessaging, getToken, onMessage ***REMOVED*** from 'firebase/messaging';
// import ***REMOVED*** getFirestore, collection, addDoc ***REMOVED*** from "firebase/firestore";

// Firebase 설정
const firebaseConfig = ***REMOVED***
  apiKey: "***REMOVED***",
  authDomain: "***REMOVED***.firebaseapp.com",
  projectId: "***REMOVED***",
  storageBucket: "***REMOVED***.firebasestorage.app",
  messagingSenderId: "***REMOVED***",
  appId: "***REMOVED***",
  measurementId: "***REMOVED***"
***REMOVED***;

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);  // messaging 초기화
// const firestore = getFirestore();     // Firestore 초기화

// 알림 권한 요청 함수
export const requestNotificationPermission = async (): Promise<void> => ***REMOVED***
  const permission = await Notification.requestPermission();

  if (permission === 'granted') ***REMOVED***
    await requestForToken(); // 권한이 허용되었을 때만 토큰 요청
  ***REMOVED*** else ***REMOVED***
    console.warn("Notification permission denied.");
  ***REMOVED***
***REMOVED***;

// FCM 토큰 요청 함수
export const requestForToken = async (): Promise<string | null> => ***REMOVED***
  try ***REMOVED***
    const currentToken = await getToken(messaging, ***REMOVED***
      vapidKey: "***REMOVED***-s"
    ***REMOVED***);

    if (currentToken) ***REMOVED***
      return currentToken; // 토큰 반환
    ***REMOVED*** else ***REMOVED***
      console.log('No registration token available. Request permission to generate one.');
      return null;
    ***REMOVED***
  ***REMOVED*** catch (err) ***REMOVED***
    console.error('An error occurred while retrieving token.', err);
    return null;
  ***REMOVED***
***REMOVED***;

// 포그라운드 메시지 수신 리스너
export const onMessageListener = (): Promise<MessagePayload> => ***REMOVED***
  return new Promise((resolve) => ***REMOVED***
    onMessage(messaging, (payload: MessagePayload) => ***REMOVED***
      console.log("Message received in foreground:", payload); // 로그 출력
      resolve(payload);
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***;

export ***REMOVED*** messaging ***REMOVED***;

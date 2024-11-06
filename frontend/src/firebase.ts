// src/firebase.ts
import ***REMOVED*** initializeApp ***REMOVED*** from 'firebase/app';
import ***REMOVED*** MessagePayload, getMessaging, getToken, onMessage ***REMOVED*** from 'firebase/messaging';

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

// 알림 권한 요청 함수
export const requestNotificationPermission = async (): Promise<void> => ***REMOVED***
  const permission = await Notification.requestPermission();
  // console.log("Permission result:", permission); // 권한 요청 결과 확인

  if (permission === 'granted') ***REMOVED***
    // console.log("Notification permission granted.");
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
    // console.log("Current token:", currentToken); // 토큰이 제대로 생성되는지 확인

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

// messaging 객체 export
export ***REMOVED*** messaging ***REMOVED***;

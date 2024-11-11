// src/firebase.ts
import ***REMOVED*** initializeApp ***REMOVED*** from "firebase/app";
import ***REMOVED***
  MessagePayload,
  getMessaging,
  getToken,
  onMessage,
***REMOVED*** from "firebase/messaging";
// import ***REMOVED*** getFirestore, collection, addDoc ***REMOVED*** from "firebase/firestore";

// Firebase 설정
const firebaseConfig = ***REMOVED***
  apiKey: "***REMOVED***",
  authDomain: "***REMOVED***.firebaseapp.com",
  projectId: "***REMOVED***",
  storageBucket: "***REMOVED***.firebasestorage.app",
  messagingSenderId: "***REMOVED***",
  appId: "***REMOVED***",
  measurementId: "***REMOVED***",
***REMOVED***;

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app); // messaging 초기화
// const firestore = getFirestore();     // Firestore 초기화

// 알림 권한 요청 함수
export const requestNotificationPermission = async (): Promise<void> => ***REMOVED***
  const permission = await Notification.requestPermission();

  if (permission === "granted") ***REMOVED***
    await requestForToken(); // 권한이 허용되었을 때만 토큰 요청
  ***REMOVED*** else ***REMOVED***
    console.warn("Notification permission denied.");
  ***REMOVED***
***REMOVED***;

// FCM 토큰 요청 함수
export const requestForToken = async (): Promise<string | null> => ***REMOVED***
  try ***REMOVED***
    // 특정 경로에 서비스 워커가 등록되었는지 확인
    const registration = await navigator.serviceWorker.getRegistration(
      "/firebase-messaging-sw.js"
    );

    if (!registration) ***REMOVED***
      console.error("Service Worker is not registered");
      alert("Service Worker 등록 오류");
      return null;
    ***REMOVED***

    console.log("Service Worker is active and ready");

    // FCM 토큰 발급 시도
    const currentToken = await getToken(messaging, ***REMOVED***
      vapidKey:
        "***REMOVED***-s",
      serviceWorkerRegistration: registration,
    ***REMOVED***);

    if (currentToken) ***REMOVED***
      console.log("FCM 토큰 발급 성공:", currentToken);
      return currentToken;
    ***REMOVED*** else ***REMOVED***
      console.warn(
        "No registration token available. Request permission to generate one."
      );
      alert("토큰 생성 실패");
      return null;
    ***REMOVED***
  ***REMOVED*** catch (err) ***REMOVED***
    console.error("토큰 생성 에러:", err);
    alert("토큰 생성 에러: " + err);
    return null;
  ***REMOVED***
***REMOVED***;

// 포그라운드 메시지 수신 리스너
export const onMessageListener = (): Promise<MessagePayload> => ***REMOVED***
  console.log("Message received in foreground");
  return new Promise((resolve) => ***REMOVED***
    onMessage(messaging, (payload: MessagePayload) => ***REMOVED***
      console.log("Message received in foreground:", payload);
      if (payload.data) ***REMOVED***
        alert(`Title: $***REMOVED***payload.data.title***REMOVED***\nBody: $***REMOVED***payload.data.body***REMOVED***`);
      ***REMOVED***
      resolve(payload);
    ***REMOVED***);
  ***REMOVED***);
***REMOVED***;

export ***REMOVED*** messaging ***REMOVED***;

// src/firebase.ts
import ***REMOVED*** initializeApp ***REMOVED*** from 'firebase/app';
import ***REMOVED*** MessagePayload, getMessaging, getToken, onMessage ***REMOVED*** from 'firebase/messaging';
import ***REMOVED*** getFirestore, collection, addDoc ***REMOVED*** from "firebase/firestore";

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
const firestore = getFirestore();     // Firestore 초기화

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

// 일정 데이터 타입 정의
interface Schedule ***REMOVED***
  title: string;
  message: string;
  date: Date; // 알림을 보낼 날짜
***REMOVED***

// Firestore에 일정 데이터를 저장하는 함수
export const saveSchedule = async (schedule: Schedule): Promise<void> => ***REMOVED***
  try ***REMOVED***
    // FCM 토큰 생성
    const fcmToken = await requestForToken();

    if (fcmToken) ***REMOVED***
      // Firestore에 일정 데이터 저장
      await addDoc(collection(firestore, "schedules"), ***REMOVED***
        ...schedule,
        fcmToken,  // 알림을 보낼 FCM 토큰 저장
        alertTime: schedule.date.getTime() - 24 * 60 * 60 * 1000,  // 하루 전 알림 시간 (밀리초로 변환)
        createdAt: new Date().toISOString()  // 생성 시간
      ***REMOVED***);
      console.log("일정이 성공적으로 저장되었습니다.");
    ***REMOVED*** else ***REMOVED***
      console.warn("FCM 토큰 생성에 실패하여 일정 알림을 설정할 수 없습니다.");
    ***REMOVED***
  ***REMOVED*** catch (err) ***REMOVED***
    console.error("Firestore에 일정 데이터를 저장하는 중 오류가 발생했습니다:", err);
  ***REMOVED***
***REMOVED***;

// messaging 객체 export
export ***REMOVED*** messaging, firestore ***REMOVED***;

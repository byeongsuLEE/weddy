import ***REMOVED*** getToken, getUserInfo ***REMOVED*** from "@/api/userApi";
import ***REMOVED*** requestForToken, requestNotificationPermission ***REMOVED*** from "@/firebase";
import ***REMOVED*** firebaseTokenState ***REMOVED*** from "@/store/firebaseToken";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ***REMOVED*** useLocation, useNavigate ***REMOVED*** from "react-router-dom";
import ***REMOVED*** useSetRecoilState ***REMOVED*** from "recoil";

const CallBack = () => ***REMOVED***
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const userId = params.get("id");

  const [userInfoEnabled, setUserInfoEnabled] = useState(false);

  const setToken = useSetRecoilState(firebaseTokenState);

  useQuery(["getToken", userId], () => getToken(userId ?? undefined), ***REMOVED***
    enabled: !!userId,
    onSuccess: () => ***REMOVED***
      setUserInfoEnabled(true);
    ***REMOVED***,
  ***REMOVED***);

  const ***REMOVED*** data: userInfo ***REMOVED*** = useQuery("getUserInfo", getUserInfo, ***REMOVED***
    enabled: userInfoEnabled,
  ***REMOVED***);

  useEffect(() => ***REMOVED***
    const registerServiceWorker = async () => ***REMOVED***
      if ("Notification" in window && "serviceWorker" in navigator) ***REMOVED***
        console.log("푸시 알림 지원");
        // 푸시 알림 및 서비스 워커 관련 초기화 코드 실행
        navigator.serviceWorker.register("/firebase-messaging-sw.js").then(() => ***REMOVED***
          console.log("Service Worker 등록 성공");
        ***REMOVED***).catch((error) => ***REMOVED***
          console.error("Service Worker 등록 실패:", error);
        ***REMOVED***);
      ***REMOVED*** else ***REMOVED***
        console.log("푸시 알림 미지원");
        // 지원하지 않는 환경에 대한 처리 (예: 사용자에게 알림 표시)
      ***REMOVED***
      
    ***REMOVED***;

    registerServiceWorker();
  ***REMOVED***, []);

  useEffect(() => ***REMOVED***
    const requestPermissionsAndToken = async () => ***REMOVED***
      if (userId) ***REMOVED***
        try ***REMOVED***
          await requestNotificationPermission();
          const token = await requestForToken();
          
          if (token) ***REMOVED***
            sessionStorage.setItem('fcmToken', token);
            setToken(token);
            
            if (userInfo && userInfo[0]?.date != null) ***REMOVED***
              navigate("/");
            ***REMOVED*** else if (userInfo) ***REMOVED***
              navigate("/userInfo");
            ***REMOVED***
          ***REMOVED***
        ***REMOVED*** catch***REMOVED***
          // 권한 요청이나 토큰 발급 실패시 에러 처리 로직
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***;
    requestPermissionsAndToken();
  ***REMOVED***, [userId, userInfo, navigate, setToken]);

  return null;
***REMOVED***;

export default CallBack;

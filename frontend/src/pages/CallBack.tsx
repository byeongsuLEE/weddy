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

  useEffect(() => ***REMOVED***
    const registerServiceWorker = async () => ***REMOVED***
      if ("serviceWorker" in navigator) ***REMOVED***
        try ***REMOVED***
          const existingRegistration =
            await navigator.serviceWorker.getRegistration(
              "/firebase-messaging-sw.js"
            );

          if (existingRegistration) ***REMOVED***
            return;
          ***REMOVED***

          await navigator.serviceWorker.register("/firebase-messaging-sw.js");
        ***REMOVED*** catch  ***REMOVED***
          // 서비스 워커 등록 실패시 에러 처리 로직
        ***REMOVED***
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
          ***REMOVED***
        ***REMOVED*** catch***REMOVED***
          // 권한 요청이나 토큰 발급 실패시 에러 처리 로직
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***;
    requestPermissionsAndToken();
  ***REMOVED***, [setToken, userId]);

  const ***REMOVED*** data: userInfo ***REMOVED*** = useQuery("getUserInfo", getUserInfo, ***REMOVED***
    enabled: userInfoEnabled,
  ***REMOVED***);

  useEffect(() => ***REMOVED***
    if (userInfo && userInfo[0]?.date != null) ***REMOVED***
      navigate("/");
    ***REMOVED*** else if (userInfo) ***REMOVED***
      navigate("/userInfo");
    ***REMOVED***
  ***REMOVED***, [userInfo, navigate]);

  return null;
***REMOVED***;

export default CallBack;

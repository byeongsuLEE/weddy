import ***REMOVED*** getToken, getUserInfo ***REMOVED*** from "@/api/userApi";
// import ***REMOVED*** requestForToken, requestNotificationPermission ***REMOVED*** from "@/firebase";
// import ***REMOVED*** firebaseTokenState ***REMOVED*** from "@/store/firebaseToken";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ***REMOVED*** useLocation, useNavigate ***REMOVED*** from "react-router-dom";
// import ***REMOVED*** useSetRecoilState ***REMOVED*** from "recoil";

const CallBack = () => ***REMOVED***
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const userId = params.get('id');

  const [ userInfoEnabled, setUserInfoEnabled ] = useState(false);


  // const setToken = useSetRecoilState(firebaseTokenState);
  // const userId = sessionStorage.getItem("userId");
  
  //== 토큰 정보 ==//
  useQuery(
    ['getToken', userId],
    () => getToken(userId ?? undefined),
    ***REMOVED***
      enabled: !!userId,
      onSuccess: () => ***REMOVED***
        setUserInfoEnabled(true);
      ***REMOVED***
    ***REMOVED***
  );

  // useEffect(() => ***REMOVED***
  //   const registerServiceWorker = async () => ***REMOVED***
  //     if ('serviceWorker' in navigator) ***REMOVED***
  //       const registrations = await navigator.serviceWorker.getRegistrations();
  //       const isRegistered = registrations.some((registration) =>
  //         registration.active && registration.scope === '/firebase-messaging-sw.js'
  //       );

  //       if (!isRegistered) ***REMOVED***
  //         try ***REMOVED***
  //           await navigator.serviceWorker.register('/firebase-messaging-sw.js');
  //           console.log('Service Worker registered successfully');
  //         ***REMOVED*** catch (err) ***REMOVED***
  //           console.error('Service Worker registration failed:', err);
  //         ***REMOVED***
  //       ***REMOVED*** else ***REMOVED***
  //         console.log('Service Worker already registered');
  //       ***REMOVED***
  //     ***REMOVED***
  //   ***REMOVED***;

  //   registerServiceWorker();
  // ***REMOVED***, []);


  // useEffect(() => ***REMOVED***
  //   const requestPermissionsAndToken = async () => ***REMOVED***
  //     if (userId) ***REMOVED***
  //       try ***REMOVED***
  //         await requestNotificationPermission();
  //         const token = await requestForToken();
  //         if (token) ***REMOVED***
  //           setToken(token);
  //           // saveFcmToken(token, userId);
  //         ***REMOVED*** else ***REMOVED***
  //           console.warn("No token received");
  //         ***REMOVED***
  //       ***REMOVED*** catch (error) ***REMOVED***
  //         console.error("Error requesting permissions or token:", error);
  //       ***REMOVED***
  //     ***REMOVED*** else ***REMOVED***
  //       console.warn("User ID is null, skipping requestPermissionsAndToken");
  //     ***REMOVED***
      
  //   ***REMOVED***;
  //     requestPermissionsAndToken();
  //   ***REMOVED***, [setToken, userId]);

  //== 회원 정보 ==//
  const ***REMOVED*** data: userInfo ***REMOVED*** = useQuery('getUserInfo', getUserInfo, ***REMOVED***
    enabled: userInfoEnabled,
  ***REMOVED***);

  useEffect(() => ***REMOVED***
    if (userInfo && userInfo[0]?.date != null) ***REMOVED***
      navigate('/');
    ***REMOVED*** else if (userInfo) ***REMOVED***
      navigate('/userInfo');
    ***REMOVED***
  ***REMOVED***, [userInfo, navigate]);

  return null;
***REMOVED***

export default CallBack;
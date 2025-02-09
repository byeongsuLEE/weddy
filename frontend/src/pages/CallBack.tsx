import { getToken, getUserInfo } from "@/api/userApi";
import { requestForToken, requestNotificationPermission } from "@/firebase";
import { firebaseTokenState } from "@/store/firebaseToken";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const CallBack = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);
  const userId = params.get("id");

  const [userInfoEnabled, setUserInfoEnabled] = useState(false);

  const setToken = useSetRecoilState(firebaseTokenState);

  useQuery(["getToken", userId], () => getToken(userId ?? undefined), {
    enabled: !!userId,
    onSuccess: () => {
      setUserInfoEnabled(true);
    },
  });

  const { data: userInfo } = useQuery("getUserInfo", getUserInfo, {
    enabled: userInfoEnabled,
  });

  useEffect(() => {
    const registerServiceWorker = async () => {
      if ("Notification" in window && "serviceWorker" in navigator) {
        console.log("푸시 알림 지원");
        // 푸시 알림 및 서비스 워커 관련 초기화 코드 실행
        navigator.serviceWorker.register("/firebase-messaging-sw.js").then(() => {
          console.log("Service Worker 등록 성공");
        }).catch((error) => {
          console.error("Service Worker 등록 실패:", error);
        });
      } else {
        console.log("푸시 알림 미지원");
        // 지원하지 않는 환경에 대한 처리 (예: 사용자에게 알림 표시)
      }
      
    };

    registerServiceWorker();
  }, []);

  useEffect(() => {
    const requestPermissionsAndToken = async () => {
      if (userId) {
        try {
          await requestNotificationPermission();
          const token = await requestForToken();
          
          if (token) {
            sessionStorage.setItem('fcmToken', token);
            setToken(token);
            
            if (userInfo && userInfo[0]?.date != null) {
              navigate("/");
            } else if (userInfo) {
              navigate("/userInfo");
            }
          }
        } catch{
          // 권한 요청이나 토큰 발급 실패시 에러 처리 로직
        }
      }
    };
    requestPermissionsAndToken();
  }, [userId, userInfo, navigate, setToken]);

  return null;
};

export default CallBack;

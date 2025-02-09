import axios from "axios";
import { userInformation } from "./user.type";

const BASE_URL = `/api/users`

//== 토큰 정보 ==//
export const getToken = async (userId?: string): Promise<void> => {
  const response = await axios({
    method: "get",
    url: `${BASE_URL}/token/super`,
    params: {
      id: userId,
    },
  });

  if (userId) {
    sessionStorage.setItem("userId", userId);
    sessionStorage.setItem("token", response.data.accessToken);
    sessionStorage.setItem("refreshToken", response.data.refreshToken);
  }
};

//== 로그아웃 ==//
export const logout = () => {
  axios({
    method: "post",
    url: `${BASE_URL}/logout`,
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
  });
};

//== 회원 정보 ==//
export const getUserInfo = async (): Promise<userInformation[]> => {
  const response = await axios({
    method: "get",
    url: BASE_URL,
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
  });
  return response.data.data;
};

//== 회원 프로필 수정 ==//
export const editProfile = async (file: FormData): Promise<void> => {
  await axios({
    method: "patch",
    url: `${BASE_URL}/picture`,
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
    data: file,
  });
};

//== 회원 정보 수정 ==//
export const editInformation = async (
  userInfo?: userInformation
): Promise<void> => {
  await axios({
    method: "patch",
    url: BASE_URL,
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
    data: userInfo,
  });
};

//== 커플 코드 연결 ==//
export const connectCoupleCode = async (code: string): Promise<void> => {
  const response = await axios({
    method: 'patch',
    url: `${BASE_URL}/couple-connect`,
    headers: {
      Authorization: sessionStorage.getItem("token")
    },
    data: {
      "code": code
    }
  });
  console.log(response.data);
};

//== FCM 토큰 저장 ==//
export const saveFcmToken = async (
  fcmToken: string,
  userId: string
): Promise<void> => {
  await axios({
    method: "patch",
    url: `${BASE_URL}/fcm-token/${userId}`,
    headers: {
      Authorization: sessionStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    data: { fcmToken: fcmToken },
  });
};

//== 커플코드로 FCM 토큰 조회 ==//
export const getFcmToken = async (coupleCode: string): Promise<string> => {
  const response = await axios({
    method: "get",
    url: `${BASE_URL}/fcm-token/${coupleCode}`,
    headers: {
      Authorization: sessionStorage.getItem("token"),
    },
  });
  return response.data.data;
};

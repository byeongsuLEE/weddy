import axios from "axios";
import ***REMOVED*** userInformation ***REMOVED*** from "./user.type";

const BASE_URL = "http://localhost:8080/api/users";

//== 토큰 정보 ==//
export const getToken = async (userId?: string): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: `$***REMOVED***BASE_URL***REMOVED***/token/super`,
    params: ***REMOVED***
      id: userId,
    ***REMOVED***,
  ***REMOVED***);

  if (userId) ***REMOVED***
    sessionStorage.setItem("userId", userId);
    sessionStorage.setItem("token", response.data.accessToken);
    sessionStorage.setItem("refreshToken", response.data.refreshToken);
  ***REMOVED***
***REMOVED***;

//== 로그아웃 ==//
export const logout = () => ***REMOVED***
  axios(***REMOVED***
    method: "post",
    url: `$***REMOVED***BASE_URL***REMOVED***/logout`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
    ***REMOVED***,
  ***REMOVED***);
***REMOVED***;

//== 회원 정보 ==//
export const getUserInfo = async (): Promise<userInformation[]> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
    ***REMOVED***,
  ***REMOVED***);
  return response.data.data;
***REMOVED***;

//== 회원 프로필 수정 ==//
export const editProfile = async (file: FormData): Promise<void> => ***REMOVED***
  await axios(***REMOVED***
    method: "patch",
    url: `$***REMOVED***BASE_URL***REMOVED***/picture`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
    ***REMOVED***,
    data: file,
  ***REMOVED***);
***REMOVED***;

//== 회원 정보 수정 ==//
export const editInformation = async (
  userInfo?: userInformation
): Promise<void> => ***REMOVED***
  await axios(***REMOVED***
    method: "patch",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
    ***REMOVED***,
    data: userInfo,
  ***REMOVED***);
***REMOVED***;

//== FCM 토큰 저장 ==//
export const saveFcmToken = async (
  fcmToken: string,
  userId: string
): Promise<void> => ***REMOVED***
  await axios(***REMOVED***
    method: "patch",
    url: `$***REMOVED***BASE_URL***REMOVED***/fcm-token/$***REMOVED***userId***REMOVED***`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
      "Content-Type": "application/json",
    ***REMOVED***,
    data: ***REMOVED*** fcmToken: fcmToken ***REMOVED***,
  ***REMOVED***);
***REMOVED***;

//== 커플코드로 FCM 토큰 조회 ==//
export const getFcmToken = async (coupleCode: string): Promise<string> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: `$***REMOVED***BASE_URL***REMOVED***/fcm-token/$***REMOVED***coupleCode***REMOVED***`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
    ***REMOVED***,
  ***REMOVED***);
  return response.data.data;
***REMOVED***;

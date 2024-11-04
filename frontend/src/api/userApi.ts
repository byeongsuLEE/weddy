import axios from "axios";
import ***REMOVED*** userInformation ***REMOVED*** from "./user.type";

const BASE_URL = "http://localhost:8080/api/users";

//== 토큰 정보 ==//
export const getToken = async (userId: string | null): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: `$***REMOVED***BASE_URL***REMOVED***/token/super`,
    params: ***REMOVED***
      id: userId,
    ***REMOVED***
  ***REMOVED***);
  sessionStorage.setItem("token", response.data.accessToken);
  sessionStorage.setItem("refreshToken", response.data.refreshToken);
***REMOVED***;

//== 로그아웃 ==//
export const logout = () => ***REMOVED***
  axios(***REMOVED***
    method: "post",
    url: `$***REMOVED***BASE_URL***REMOVED***/logout`,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token")
    ***REMOVED***,
  ***REMOVED***);
***REMOVED***;

//== 회원 정보 ==//
export const getUserInfo = async (): Promise<userInformation> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token")
    ***REMOVED***,
  ***REMOVED***);
  return response.data.data;
***REMOVED***;

//== 회원 정보 수정 ==//
export const editInfomation = async ( userInfo?: userInformation ): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "patch",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: sessionStorage.getItem("token"),
    ***REMOVED***,
    data: userInfo
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

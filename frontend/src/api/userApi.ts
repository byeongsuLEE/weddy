import axios from "axios";
import ***REMOVED*** userInformation ***REMOVED*** from "./user.type";

const BASE_URL = "http://localhost:8080/api/users";

//== 토큰 정보 ==//
export const getToken = async (userId: string | null): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: `$***REMOVED***BASE_URL***REMOVED***//token/super`,
    params: ***REMOVED***
      id: userId
    ***REMOVED***
  ***REMOVED***);

  window.localStorage.setItem("token", response.data.accessToken);
***REMOVED***;

//== 로그아웃 ==//
export const logout = () => ***REMOVED***
  axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/logout`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);
***REMOVED***;

//== 회원 정보 ==//
export const getUserInfo = async (): Promise<userInformation> => ***REMOVED***
  // const response = await axios(***REMOVED***
  //   method: 'get',
  //   url: `$***REMOVED***BASE_URL***REMOVED***/userinfo`,
  //   headers: ***REMOVED***
  //     Authorization: `Bearer `
  //   ***REMOVED***
  // ***REMOVED***);
  // console.log(response.data);
  // return response.data;

  //== dummy ==//
  return ***REMOVED***
    name: "이병수",
    phone: "010-1234-5678",
    email: "lbs@naver.com",
    address: "광주광역시 광산구 하남동 1234",
  ***REMOVED***;
***REMOVED***;

//== 회원 정보 수정 ==//
export const editInfomation = async (
  userInfo?: userInformation
): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "patch",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer `,
    ***REMOVED***,
    data: userInfo,
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

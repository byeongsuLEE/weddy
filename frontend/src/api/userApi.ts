import axios from "axios";
import ***REMOVED*** userInformation ***REMOVED*** from "./user.type";

const BASE_URL = "http://localhost:8080/api/users";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwidXNlck5hbWUiOiJb6rSR7KO8XzHrsJhfYzEwM1_snbTrs5HsiJhdIiwiY29kZSI6IkczNzFSTyIsImlhdCI6MTczMDQyNDQ1MSwiZXhwIjoxNzMzMDE2NDUxfQ.R7YFdmlN-IZkTeo0veuMA4W2eW_9-dXJJ-pGU8SRmPk";

//== 토큰 정보 ==//
export const getToken = async (userId: string | null): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: `$***REMOVED***BASE_URL***REMOVED***//token/super`,
    params: ***REMOVED***
      id: userId,
    ***REMOVED***,
  ***REMOVED***);
  window.localStorage.setItem("token", response.data.accessToken);
***REMOVED***;

//== 로그아웃 ==//
export const logout = () => ***REMOVED***
  axios(***REMOVED***
    method: "post",
    url: `$***REMOVED***BASE_URL***REMOVED***/logout`,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`
    ***REMOVED***
    // headers: ***REMOVED***
    //   Authorization: `Bearer $***REMOVED***sessionStorage.getItem("token")***REMOVED***`,
    // ***REMOVED***,
  ***REMOVED***);
***REMOVED***;

//== 회원 정보 ==//
export const getUserInfo = async (): Promise<userInformation> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "get",
    url: `$***REMOVED***BASE_URL***REMOVED***/userinfo`,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`,
    ***REMOVED***
    // headers: ***REMOVED***
    //   Authorization: `Bearer $***REMOVED***sessionStorage.getItem("token")***REMOVED***`,
    // ***REMOVED***,
  ***REMOVED***);
  console.log(response.data);
  return response.data;
***REMOVED***;

//== 회원 정보 수정 ==//
export const editInfomation = async ( userInfo?: userInformation ): Promise<void> => ***REMOVED***
  const response = await axios(***REMOVED***
    method: "patch",
    url: BASE_URL,
    headers: ***REMOVED***
      Authorization: `Bearer $***REMOVED***token***REMOVED***`,
    ***REMOVED***,
    // headers: ***REMOVED***
    //   Authorization: `Bearer $***REMOVED***sessionStorage.getItem("token")***REMOVED*** `,
    // ***REMOVED***,
    data: userInfo
  ***REMOVED***);
  console.log(response.data);
***REMOVED***;

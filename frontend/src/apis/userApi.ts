import axios from "axios"

const BASE_URL = 'http://localhost:8080/api/user'

//== 카카오 로그인 ==//
export const kakaoLogin = () => ***REMOVED***

***REMOVED***

//== 구글 로그인 ==//
export const googleLogin = () => ***REMOVED***

***REMOVED***

//== 로그아웃 ==//
export const logout = () => ***REMOVED***
  axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/logout`
  ***REMOVED***);
***REMOVED***

//== 내 정보 조회 ==//
export const myInfo = async (): Promise<void> => ***REMOVED***
  const response = await axios (***REMOVED***
    method: 'get',
    url: `$***REMOVED***BASE_URL***REMOVED***/info/`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***
  ***REMOVED***);

  console.log(response.data);
***REMOVED***
import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/auth'

//== 카카오 로그인 ==//
export const kakaoLogin = () => ***REMOVED***
  axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/login`,
  ***REMOVED***);
***REMOVED***;

//== 구글 로그인 ==//
export const googleLogin = () => ***REMOVED***
  axios(***REMOVED***
    method: 'post',
    url: `$***REMOVED***BASE_URL***REMOVED***/login`,
  ***REMOVED***);
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
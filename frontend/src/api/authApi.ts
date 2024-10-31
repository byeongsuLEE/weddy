import axios from "axios";

const BASE_URL = 'http://localhost:8080/api/users/auth'

//== 카카오 로그인 ==//
export const kakaoLogin = () => ***REMOVED***
  window.location.href = `http://localhost:8080/api/oauth2/authorization/naver`;
***REMOVED***;

//== 구글 로그인 ==//
export const googleLogin = () => ***REMOVED***
  window.location.href = `http://localhost:8080/api/oauth2/authorization/google`;
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
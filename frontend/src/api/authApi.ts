const URL = process.env.VITE_PUBLIC_URL
const BASE_URL = `$***REMOVED***URL***REMOVED***/api/oauth2/authorization`
//== 네이버 로그인 ==//
export const naverLogin = () => ***REMOVED***
  window.location.href = `$***REMOVED***BASE_URL***REMOVED***/naver`;
***REMOVED***;

//== 구글 로그인 ==//
export const googleLogin = () => ***REMOVED***
  window.location.href = `$***REMOVED***BASE_URL***REMOVED***/google`;
***REMOVED***;
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";

const BASE_URL = "https://weddy.info/oauth2/authorization";
//== 네이버 로그인 ==//
export const naverLogin = () => ***REMOVED***
  window.location.href = `$***REMOVED***BASE_URL***REMOVED***/naver`;
***REMOVED***;

//== 구글 로그인 ==//
export const googleLogin = () => ***REMOVED***
  const navigate = useNavigate();
  // window.location.href = `$***REMOVED***BASE_URL***REMOVED***/google`;
  sessionStorage.setItem('token', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MywidXNlck5hbWUiOiLstZzsirntmLgiLCJjb3VwbGVDb2RlIjoiamM3VllhIiwiaWF0IjoxNzMxNDgwNjEwLCJleHAiOjE3MzQwNzI2MTB9.Cyd6ujpcIBHibkdfBBq-OApOHykmVdlzRnRfyp5rfXI')
  sessionStorage.setItem('userId', '3')
  navigate('/callback?id=3');
***REMOVED***;

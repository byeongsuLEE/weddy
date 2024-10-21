import axios from "axios"

const BASE_URL = 'http://localhost:8080/api/users'

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

//== 회원 정보 수정 ==//
export const editInfomation = async (data: any) => ***REMOVED***
  const response = await axios(***REMOVED***
    method: 'patch',
    url: `$***REMOVED***BASE_URL***REMOVED***`,
    headers: ***REMOVED***
      Authorization: `Bearer `
    ***REMOVED***,
    data: data
  ***REMOVED***);
  console.log(response.data);
***REMOVED***
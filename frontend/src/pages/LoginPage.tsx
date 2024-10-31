import ***REMOVED*** googleLogin, kakaoLogin ***REMOVED*** from "../api/authApi";

const Login = () => ***REMOVED***
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <img className="w-[120px] mb-10" src="logos/Logo.png" alt="" />
      <button
        className="bg-white flex my-2 items-center justify-center w-72 h-14 rounded-xl"
        onClick=***REMOVED***googleLogin***REMOVED***
      >
        <img className="w-6 h-6 mr-7" src="icons/google.png" alt="google" />
        구글로 시작하기
      </button>

      <button
        className="flex bg-naver my-4 items-center font-bold justify-center w-72 h-14 text-white rounded-xl"
        onClick=***REMOVED***kakaoLogin***REMOVED***
      >
        <img
          className="w-11 h-10 mr-3"
          src="icons/naver.png"
          alt="카카오로 시작하기"
        />
        네이버로 시작하기
      </button>
      ***REMOVED***/* <button
        className="flex bg-yellow-400 my-2 items-center justify-center w-72 h-14 rounded-xl"
        onClick=***REMOVED***kakaoLogin***REMOVED***
      >
        <img
          className="w-7 h-7 mr-3"
          src="icons/kakao.png"
          alt="카카오로 시작하기"
        />
        카카오로 시작하기
      </button> */***REMOVED***
    </div>
  )
***REMOVED***
export default Login;
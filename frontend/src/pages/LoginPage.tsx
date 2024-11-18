import ***REMOVED*** googleLogin ***REMOVED*** from "@/api/authApi";

const Login = () => ***REMOVED***

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <img className="w-[120px] mb-10" src="logos/Logo.png" alt="logo" />
      <button
        className="bg-white flex my-2 items-center justify-center w-72 h-14 rounded-xl"
        onClick=***REMOVED***googleLogin***REMOVED***
      >
        <img className="w-6 h-6 mr-7" src="icons/google.png" alt="google" />
        구글로 시작하기
      </button>
    </div>
  );
***REMOVED***;
export default Login;

import ***REMOVED*** googleLogin ***REMOVED*** from "@/api/authApi";

const Login = () => ***REMOVED***
  // const navigate = useNavigate();

  // useEffect(() => ***REMOVED***
  //   sessionStorage.setItem('token', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MywidXNlck5hbWUiOiLstZzsirntmLgiLCJjb3VwbGVDb2RlIjoiamM3VllhIiwiaWF0IjoxNzMxNDgwNjEwLCJleHAiOjE3MzQwNzI2MTB9.Cyd6ujpcIBHibkdfBBq-OApOHykmVdlzRnRfyp5rfXI')
  //   sessionStorage.setItem('userId', '3')
  // ***REMOVED***, [])

  // const goCallback = () => ***REMOVED***
  //   navigate("/callback?=3");
  // ***REMOVED***;

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

      ***REMOVED***/* <button
        className="flex bg-naver my-4 items-center font-bold justify-center w-72 h-14 text-white rounded-xl"
        onClick=***REMOVED***naverLogin***REMOVED***
      >
        <img className="w-11 h-10 mr-3" src="icons/naver.png" alt="naver" />
        네이버로 시작하기
      </button> */***REMOVED***
    </div>
  );
***REMOVED***;
export default Login;

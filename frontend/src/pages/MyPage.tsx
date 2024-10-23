// import ***REMOVED*** connectCoupleCode, getCoupleCode ***REMOVED*** from "@/apis/coupleApi";
// import ***REMOVED*** EditUserInfo ***REMOVED*** from "@/apis/user.type";
// import ***REMOVED*** editInfomation ***REMOVED*** from "@/apis/userApi";
// import ***REMOVED*** useState ***REMOVED*** from "react";
// import ***REMOVED*** useQuery ***REMOVED*** from "react-query";

import TodoButton from "@/common/TodoButton";

const Mypage = () => ***REMOVED***
  // const [ userInfo, setUserInfo ] = useState<EditUserInfo>();

  // //== 커플 코드 조회 ==//
  // const ***REMOVED*** data: myCode ***REMOVED*** = useQuery('getCoupleCode', getCoupleCode);

  // //== 커플 코드 연결 ==//
  // const handleConnect = async (code: string) => ***REMOVED***
  //   await connectCoupleCode(code);
  // ***REMOVED***;

  // //== 회원 정보 수정 ==//
  // const handleUpdate = async () => ***REMOVED***
  //   await editInfomation(userInfo);
  // ***REMOVED***;



  return (
    <div className="m-5 bg-white h-[630px] rounded-xl p-5">
      <div className="relative inline-block">
        <img
          className="bg-main1 rounded-full h-[100px] w-[100px] mt-3"
          src="/icons/profile.png"
          alt="profile image"
        />
        <img
          className="h-[30px] w-[30px] absolute bottom-0 right-0"
          src="/icons/camera.png"
          alt="camera image"
        />
      </div>
      <div className="flex justify-between ml-3 mr-10">
        <div className="flex flex-col mt-10">
          <span className="my-2 text-gray-600">이름</span>
          <span className="my-3 text-gray-600">전화번호</span>
          <span className="my-3 text-gray-600">이메일</span>
        </div>
        <div className="flex flex-col mt-10">
          <input defaultValue=***REMOVED***'김싸피'***REMOVED*** className="my-2 p-2 w-[150px] border border-gray-400 rounded-lg h-[30px]" type="text" />
          <input defaultValue=***REMOVED***'010-1234-5678'***REMOVED*** className="my-2 p-2 w-[150px] border border-gray-400 rounded-lg h-[30px]" type="text" />
          <input defaultValue=***REMOVED***'ssafy@ssafy.com'***REMOVED*** className="my-2 border p-2 w-[150px] border-gray-400 rounded-lg h-[30px]" type="text" />
        </div>
      </div>
      <div className="text-end my-5">
        <TodoButton title="수정하기" colorId=***REMOVED***1***REMOVED*** />
      </div>
      <div className="bg-main1 flex flex-col items-center p-5 h-[150px] w-[310px] mt-12 rounded-xl">
        <h1 className="mb-5">커플 커넥트</h1>
        <span className="font-bold text-lg">커플 코드</span>
      </div>
    </div>
  )
***REMOVED***
export default Mypage;
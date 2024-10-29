import ***REMOVED*** getCoupleCode ***REMOVED*** from "@/api/coupleApi";
import ***REMOVED*** userInformation ***REMOVED*** from "@/api/user.type";
import ***REMOVED*** editInfomation, getUserInfo ***REMOVED*** from "@/api/userApi";
import TodoButton from "@/common/TodoButton";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";

const Mypage = () => ***REMOVED***
  const [userInfo, setUserInfo] = useState<userInformation>(***REMOVED***
    name: '',
    phone: '',
    email: '',
    address: '',
  ***REMOVED***);

  //== 회원 정보 ==//
  const ***REMOVED*** data: userData, isSuccess ***REMOVED*** = useQuery('getUserInfo', getUserInfo);

  //== userdata 업데이트 후 userInfo 업데이트 ==//
  useEffect(() => ***REMOVED***
    if (isSuccess && userData) ***REMOVED***
      setUserInfo(userData);
    ***REMOVED***
  ***REMOVED***, [isSuccess, userData]);

  //== 회원 정보 수정 ==//
  const handleUpdate = async () => ***REMOVED***
    await editInfomation(userInfo);
  ***REMOVED***;

  //== 상태 업데이트 ==//
  const updateUserInfo = (key: keyof userInformation, value: string) => ***REMOVED***
    setUserInfo((prev) => ***REMOVED*** return ***REMOVED*** ...prev, [key]: value ***REMOVED*** ***REMOVED***);
  ***REMOVED***;

  //== 커플 코드 조회 ==//
  const ***REMOVED*** data: myCode ***REMOVED*** = useQuery('getCoupleCode', getCoupleCode);

  // //== 커플 코드 연결 ==//
  // const handleConnect = async (code: string) => ***REMOVED***
  //   await connectCoupleCode(code);
  // ***REMOVED***;

  return (
    <div className="m-5 bg-white h-auto rounded-xl p-5 mb-20">
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
          <span className="my-3 text-gray-600">쥬소</span>
        </div>
        <div className="flex flex-col mt-10">
          <input
            defaultValue=***REMOVED***userInfo.name***REMOVED***
            className="my-2 p-2 w-[150px] border border-gray-400 rounded-lg h-[30px]"
            type="text"
            onChange=***REMOVED***(e) => updateUserInfo('name', e.target.value)***REMOVED***
          />
          <input
            defaultValue=***REMOVED***userInfo.phone***REMOVED***
            className="my-2 p-2 w-[150px] border border-gray-400 rounded-lg h-[30px]"
            type="text"
            onChange=***REMOVED***(e) => updateUserInfo('phone', e.target.value)***REMOVED***
          />
          <input
            defaultValue=***REMOVED***userInfo.email***REMOVED***
            className="my-2 border p-2 w-[150px] border-gray-400 rounded-lg h-[30px]"
            type="text"
            onChange=***REMOVED***(e) => updateUserInfo('email', e.target.value)***REMOVED***
          />
          <input
            defaultValue=***REMOVED***userInfo.address***REMOVED***
            className="my-2 border p-2 w-[150px] border-gray-400 rounded-lg h-[30px]"
            type="text"
            onChange=***REMOVED***(e) => updateUserInfo('address', e.target.value)***REMOVED***
          />
        </div>
      </div>
      <div className="text-end my-5" onClick=***REMOVED***handleUpdate***REMOVED***>
        <TodoButton title="수정하기" colorId=***REMOVED***1***REMOVED*** />
      </div>
      <div className="flex justify-center">
        <div className="bg-main1 flex flex-col items-center p-5 h-[150px] w-[310px] mt-12 mb-12 rounded-xl">
          <h1 className="mb-5">커플 커넥트</h1>
          <span className="font-bold text-lg">***REMOVED***myCode***REMOVED***</span>
        </div>
      </div>
    </div>
  )
***REMOVED***
export default Mypage;
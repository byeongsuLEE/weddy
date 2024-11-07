import ***REMOVED*** userInformation ***REMOVED*** from "@/api/user.type";
import ***REMOVED*** editInformation, getUserInfo ***REMOVED*** from "@/api/userApi";
import TodoButton from "@/common/TodoButton";
import DatePick from "@/components/SchedulePage/DatePick";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";

const UserInfo = () => ***REMOVED***
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState<string>("/icons/profile.png")
  const [ imageData, setImageData ] = useState<File>();

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) ***REMOVED***
    const files = event.target.files;
    if (files && files.length > 0) ***REMOVED***
      setImageData(files[0]);
    ***REMOVED***

    if (files === null || files.length === 0) ***REMOVED***
      return;
    ***REMOVED***

    const file = files[0];

    const reader = new FileReader();
    reader.onload = (e) => ***REMOVED***
      setImageSrc(e.target?.result as string)
    ***REMOVED***
    reader.readAsDataURL(file);
  ***REMOVED***

   //== 회원 정보 수정 ==//
   const handleUpdate = async () => ***REMOVED***
    editInformation(userInfo);
    navigate('/');
  ***REMOVED***;

  useEffect(() => ***REMOVED***
  ***REMOVED***, [imageSrc])

  const [userInfo, setUserInfo] = useState<userInformation>(***REMOVED***
    name: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    coupleCode: ''
  ***REMOVED***);

  //== 회원 정보 ==//
  const ***REMOVED*** data: userData, isSuccess, isLoading ***REMOVED*** = useQuery('getUserInfo', getUserInfo);

  //== 상태 업데이트 ==//
  const updateUserInfo = (key: keyof userInformation, value: string) => ***REMOVED***
    setUserInfo((prev) => ***REMOVED*** return ***REMOVED*** ...prev, [key]: value ***REMOVED*** ***REMOVED***);
  ***REMOVED***;

  //== userdata 업데이트 후 userInfo 업데이트 ==//
  useEffect(() => ***REMOVED***
    if (isSuccess && userData) ***REMOVED***
      setUserInfo(userData[0]);
    ***REMOVED***
  ***REMOVED***, [isSuccess, userData]);

  if (isLoading) ***REMOVED***
    return <div>로딩중...</div>
  ***REMOVED***

  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="text-main2 font-bold text-xl">회원 정보</h1>
      <span className="text-gray-500 text-sm mt-1">정보를 입력해주세요.</span>
      <div className="mx-5 mt-14 h-full bg-white rounded-xl p-5 mb-20">
        <div className="relative inline-block">
          <img
            className="bg-main1 rounded-full h-[100px] w-[100px] mt-10"
            src=***REMOVED***imageSrc***REMOVED***
            alt="profile image"
          />
          <label htmlFor="profile-image">
            <img
              className="h-[30px] w-[30px] absolute bottom-0 right-0"
              src="/icons/camera.png"
              alt="camera image"
            />
            <input accept="image/*" onChange=***REMOVED***handleFileUpload***REMOVED*** className="hidden" id="profile-image" type="file" />
          </label>
        </div>
        <div className="flex justify-between ml-3 mr-10">
          <div className="flex flex-col mt-10">
            <span className="my-3 text-gray-600">예식 예정일</span>
            <span className="my-2 text-gray-600">이름</span>
            <span className="my-3 text-gray-600">전화번호</span>
            <span className="my-3 text-gray-600">이메일</span>
            <span className="my-3 text-gray-600">주소</span>

          </div>
          <div className="flex flex-col mt-10">
            <DatePick
              type="start"
              title="예식 예정일"
              changeDate=***REMOVED***(newDate) => updateUserInfo('date', newDate.toISOString().slice(0, 10))***REMOVED***
            />
            <input
              defaultValue=***REMOVED***userInfo.name***REMOVED***
              className="my-2 p-2 w-[180px] border border-gray-400 rounded-lg h-[30px]"
              type="text"
              onChange=***REMOVED***(e) => updateUserInfo('name', e.target.value)***REMOVED***
            />
            <input
              defaultValue=***REMOVED***userInfo.phone***REMOVED***
              className="my-2 p-2 w-[180px] border border-gray-400 rounded-lg h-[30px]"
              type="text"
              onChange=***REMOVED***(e) => updateUserInfo('phone', e.target.value)***REMOVED***
            />
            <input
              defaultValue=***REMOVED***userInfo.email***REMOVED***
              className="my-2 border p-2 w-[180px] border-gray-400 rounded-lg h-[30px]"
              type="text"
              onChange=***REMOVED***(e) => updateUserInfo('email', e.target.value)***REMOVED***
            />
            <input
              defaultValue=***REMOVED***userInfo.address***REMOVED***
              className="my-2 border p-2 w-[180px] border-gray-400 rounded-lg h-[30px]"
              type="text"
              onChange=***REMOVED***(e) => updateUserInfo('address', e.target.value)***REMOVED***
            />
            <div className="w-[180px]">
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10 mr-3" onClick=***REMOVED***handleUpdate***REMOVED***>
          <TodoButton title="저장" colorId=***REMOVED***2***REMOVED*** />
        </div>
      </div>
    </div>
  )
***REMOVED***

export default UserInfo;
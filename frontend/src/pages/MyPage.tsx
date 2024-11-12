import ***REMOVED*** userInformation ***REMOVED*** from "@/api/user.type";
import ***REMOVED*** editInformation, editProfile, getUserInfo ***REMOVED*** from "@/api/userApi";
import TodoButton from "@/common/TodoButton";
import RingIcon from "@/icons/RingIcon";
// import ***REMOVED*** firebaseTokenState ***REMOVED*** from "@/store/firebaseToken";
import CoupleCodeModal from "@/components/MyPage/CoupleCodeModal";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";

const Mypage = () => ***REMOVED***
  // const token = useRecoilValue(firebaseTokenState);
  const [ isConneted, setIsconnected] = useState<boolean>(false);
  const [ imageSrc, setImageSrc] = useState<string>("/icons/profile.png");
  const [ coupleImageSrc, setCoupleImageSrc ] = useState<string>("/icons/profile.png");

  const [userInfo, setUserInfo] = useState<userInformation>(***REMOVED***
    name: '',
    phone: '',
    email: '',
    address: '',
    coupleCode: '',
    date: '',
  ***REMOVED***);

  const [coupleInfo, setCoupleInfo] = useState<userInformation>(***REMOVED***
    name: '',
    phone: '',
    email: '',
    address: '',
    coupleCode: '',
    date: '',
  ***REMOVED***);

  const formdata = new FormData();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => ***REMOVED***
    const files = event.target.files;

    if (files && files.length > 0) ***REMOVED***
      formdata.append('picture', files[0]);
      await editProfile(formdata);
    ***REMOVED***

    if (files === null || files.length === 0) ***REMOVED***
      return;
    ***REMOVED***

    const file = files[0];

    const reader = new FileReader();
    reader.onload = (e) => ***REMOVED***
      setImageSrc(e.target?.result as string);
    ***REMOVED***
    reader.readAsDataURL(file);
  ***REMOVED***

  useEffect(() => ***REMOVED***
  ***REMOVED***, [imageSrc])

  //== 회원 정보 ==//
  const ***REMOVED*** data: userData, isSuccess, isLoading ***REMOVED*** = useQuery('getUserInfo', getUserInfo);

  //== userdata 업데이트 후 userInfo 업데이트 ==//
  useEffect(() => ***REMOVED***
    if (isSuccess && userData) ***REMOVED***
      //== 커플 연결 여부 확인 ==//
      if (userData.length === 1) ***REMOVED***
        setIsconnected(false);
      ***REMOVED*** else if (userData.length === 2) ***REMOVED***
        setIsconnected(true);
        setCoupleInfo(userData[1]);
        //== 커플 이미지 업데이트 ==//
        if (userData[1].picture != null) ***REMOVED***
          setCoupleImageSrc(userData[1].picture);
        ***REMOVED***
      ***REMOVED***

      //== 유저 정보 업데이트 ==//
      setUserInfo(userData[0]);

      //== 유저 이미지 업데이트 ==//
      if (userData[0].picture) ***REMOVED***
        setImageSrc(userData[0].picture);
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***, [isSuccess, userData]);

  //== 회원 정보 수정 ==//
  const handleUpdate = async () => ***REMOVED***
    await editInformation(userInfo);
  ***REMOVED***;

  //== 상태 업데이트 ==//
  const updateUserInfo = (key: keyof userInformation, value: string) => ***REMOVED***
    setUserInfo((prev) => ***REMOVED*** return ***REMOVED*** ...prev, [key]: value ***REMOVED*** ***REMOVED***);
  ***REMOVED***;

  const today = new Date();
  const differenceInTime = new Date(userInfo.date).getTime() - today.getTime();
  const dDay = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

  if (isLoading) ***REMOVED***
    return <div>로딩중...</div>
  ***REMOVED***

  return (
    <div className="m-5 bg-white h-[750px] rounded-xl p-5 mb-24">
      <h1 className="text-center mt-5">마이페이지</h1>
      
      <div className="flex justify-between">
        <div className="bg-main1 flex flex-col items-center p-5 h-[200px] w-[300px] mx-3 mt-10 rounded-xl">
          <span className="font-bold text-3xl text-main2">D-***REMOVED***dDay***REMOVED***</span>
          <span className="text-gray-400 text-sm">***REMOVED***userInfo.date***REMOVED***</span>

          ***REMOVED***isConneted ? (
            <div className="flex items-center justify-center">
              <div>
                <img
                  className="bg-main1 rounded-full h-[70px] w-[70px] mt-5"
                  src=***REMOVED***imageSrc***REMOVED***
                  alt="profile image"
                />
                <div className="text-xs text-center mt-1">
                  <span>***REMOVED***userInfo.name***REMOVED***</span>
                </div>
              </div>
              <RingIcon />
              <div>
                <img
                  className="bg-main1 rounded-full h-[70px] w-[70px] mt-5"
                  src=***REMOVED***coupleImageSrc***REMOVED***
                  alt="profile image"
                />
                <div className="text-xs text-center mt-1">
                  <span>***REMOVED***coupleInfo.name***REMOVED***</span>
                </div>
              </div>
            </div>
          ) : (
            <>
              <span className="text-sm text-gray-500">상대방과 커플코드를 공유하세요!</span>
              <span className="my-3 font-bold">***REMOVED***userInfo.coupleCode***REMOVED***</span>
              <CoupleCodeModal />
            </>
          )***REMOVED***
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img
          className="bg-main1 rounded-full h-[100px] w-[100px] mt-5"
          src=***REMOVED***imageSrc***REMOVED***
          alt="profile image"
        />
        <div className="text-xs mt-1 text-blue-400">
          <label htmlFor="profile-image">
            <span>이미지 변경</span>
            <input accept="image/*" onChange=***REMOVED***handleFileUpload***REMOVED*** className="hidden" id="profile-image" type="file" />
          </label>
        </div>
      </div>

      <div className="flex justify-between ml-3 mr-10 mt-2">
        
        <div className="flex flex-col">
          <span className="my-2 text-gray-600">이름</span>
          <span className="my-3 text-gray-600">전화번호</span>
          <span className="my-3 text-gray-600">이메일</span>
          <span className="my-3 text-gray-600">주소</span>
        </div>
        <div className="flex flex-col">
          <input
            defaultValue=***REMOVED***userInfo.name***REMOVED***
            className="my-2 p-2 w-[190px] border border-gray-400 rounded-lg h-[30px]"
            type="text"
            onChange=***REMOVED***(e) => updateUserInfo('name', e.target.value)***REMOVED***
          />
          <input
            defaultValue=***REMOVED***userInfo.phone***REMOVED***
            className="my-2 p-2 w-[190px] border border-gray-400 rounded-lg h-[30px]"
            type="text"
            onChange=***REMOVED***(e) => updateUserInfo('phone', e.target.value)***REMOVED***
          />
          <input
            defaultValue=***REMOVED***userInfo.email***REMOVED***
            className="my-2 border p-2 w-[190px] border-gray-400 rounded-lg h-[30px]"
            type="text"
            onChange=***REMOVED***(e) => updateUserInfo('email', e.target.value)***REMOVED***
          />
          <input
            defaultValue=***REMOVED***userInfo.address***REMOVED***
            className="my-2 border p-2 w-[190px] border-gray-400 rounded-lg h-[30px]"
            type="text"
            onChange=***REMOVED***(e) => updateUserInfo('address', e.target.value)***REMOVED***
          />
        </div>
      </div>
      <div className="flex justify-end mt-10 mb-10 mr-3" onClick=***REMOVED***handleUpdate***REMOVED***>
        <TodoButton title="수정하기" colorId=***REMOVED***1***REMOVED*** />
      </div>
    </div>
  )
***REMOVED***

export default Mypage;
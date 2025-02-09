import { Schedule } from "@/api/schedule.type";
import { schedule } from "@/api/scheduleApi";
import { userInformation } from "@/api/user.type";
import { editInformation, editProfile, getUserInfo } from "@/api/userApi";
import TodoButton from "@/common/TodoButton";
import DatePick from "@/components/SchedulePage/DatePick";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const formdata = new FormData();
  const fcmToken = sessionStorage.getItem('fcmToken');
  const [imageSrc, setImageSrc] = useState<string>("/icons/profile.png");
  const [userInfo, setUserInfo] = useState<userInformation>({
    name: '',
    phone: '',
    email: '',
    address: '',
    date: '',
    coupleCode: ''
  });

  //== 프로필 이미지 ==//
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      formdata.append('picture', files[0]);
      await editProfile(formdata);
    }

    if (files === null || files.length === 0) {
      return;
    }

    const file = files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target?.result as string)
    }
    reader.readAsDataURL(file);
  }

   //== 회원 정보 수정 ==//
   const handleUpdate = async () => {
    if (fcmToken) {
      //== 결혼 예정일 등록 ==//
      const weddingSchedule: Schedule = {
        type: "WEDDING",
        startDate: userInfo.date,
        endDate: userInfo.date,
        content: "결혼식",
        userCoupleToken: {
          myFcmToken: fcmToken
        }
      }
      await editInformation(userInfo);
      await schedule(weddingSchedule);
      navigate('/');
    }
  };

  useEffect(() => {
  }, [imageSrc])

  //== 회원 정보 ==//
  const { data: userData, isSuccess, isLoading } = useQuery('getUserInfo', getUserInfo);

  //== 상태 업데이트 ==//
  const updateUserInfo = (key: keyof userInformation, value: string | Date) => {
    const formattedValue = key === 'date' && value instanceof Date
        ? value.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }).replace(/\./g, '').replace(/\s/g, '-')
        : value;

    setUserInfo((prev) => ({ ...prev, [key]: formattedValue }));
};

  //== userdata 업데이트 후 userInfo 업데이트 ==//
  useEffect(() => {
    if (isSuccess && userData) {
      setUserInfo(userData[0]);
    }
  }, [isSuccess, userData]);

  if (isLoading) {
    return <div>로딩중...</div>
  }

  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="text-main2 font-bold text-xl">회원 정보</h1>
      <span className="text-gray-500 text-sm mt-1">정보를 입력해주세요.</span>
      <div className="mx-5 mt-14 h-full bg-white rounded-xl p-5 mb-20">
        <div className="relative inline-block">
          <img
            className="bg-main1 rounded-full h-[100px] w-[100px] mt-10"
            src={imageSrc}
            alt="profile image"
          />
          <label htmlFor="profile-image">
            <img
              className="h-[30px] w-[30px] absolute bottom-0 right-0"
              src="/icons/camera.png"
              alt="camera image"
            />
            <input accept="image/*" onChange={handleFileUpload} className="hidden" id="profile-image" type="file" />
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
                changeDate={(newDate) => updateUserInfo('date', newDate)}
            />
            <input
              defaultValue={userInfo.name}
              className="my-2 p-2 w-[190px] border border-gray-400 rounded-lg h-[30px]"
              type="text"
              onChange={(e) => updateUserInfo('name', e.target.value)}
            />
            <input
              defaultValue={userInfo.phone}
              className="my-2 p-2 w-[190px] border border-gray-400 rounded-lg h-[30px]"
              type="text"
              onChange={(e) => updateUserInfo('phone', e.target.value)}
            />
            <input
              defaultValue={userInfo.email}
              className="my-2 border p-2 w-[190px] border-gray-400 rounded-lg h-[30px]"
              type="text"
              onChange={(e) => updateUserInfo('email', e.target.value)}
            />
            <input
              defaultValue={userInfo.address}
              className="my-2 border p-2 w-[190px] border-gray-400 rounded-lg h-[30px]"
              type="text"
              onChange={(e) => updateUserInfo('address', e.target.value)}
            />
            <div className="w-[180px]">
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-10 mr-3" onClick={handleUpdate}>
          <TodoButton title="저장" colorId={2} />
        </div>
      </div>
    </div>
  )
}

export default UserInfo;
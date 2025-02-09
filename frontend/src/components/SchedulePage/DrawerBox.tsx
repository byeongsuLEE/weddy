import { Schedule } from "@/api/schedule.type";
import { schedule } from "@/api/scheduleApi";
import CategoryButton from "@/common/CategoryButton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DatePick from "./DatePick";

interface AlertDialogDemoProps {
  isOpen: boolean;
  addSchedule: () => void;
  onClose: () => void;
}

const FlexCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export function AlertDialogDemo({ isOpen, addSchedule, onClose }: AlertDialogDemoProps) {
  const firebaseToken = sessionStorage.getItem('fcmToken');

  const [scheduleInfo, setScheduleInfo] = useState<Schedule>({
    startDate: null,
    endDate: null,
    content: '',
    type: '',
    userCoupleToken: {
      myFcmToken: ""
    },
  });

  useEffect(() => {
    if (firebaseToken) {
      setScheduleInfo((prev) => ({
        ...prev,
        userCoupleToken: {
          myFcmToken: firebaseToken,
        },
      }));
    }
  }, [firebaseToken]);

  function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

  const updateScheduleInfo = (key: keyof Schedule, value: any) => {
    setScheduleInfo((prev) => {
      const formattedValue =
        (key === "startDate" || key === "endDate") && value instanceof Date
          ? formatDate(value)
          : value;
  
      return { ...prev, [key]: formattedValue };
    });
  };
  
  const [isSubmitting, setIsSubmitting] = useState(false);

const updateSchedule = async () => {
  if (isSubmitting) return; // 중복 요청 방지
  setIsSubmitting(true);
  try {
    await schedule(scheduleInfo);
    addSchedule();
    onClose();
  } catch (error) {
    console.error("Failed to update schedule:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  // const updateSchedule = async () => {
  //   await schedule(scheduleInfo);
  //   addSchedule();
  //   onClose();
  // };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>일정 추가</AlertDialogTitle>
          <AlertDialogDescription>
            <DatePick
              type="start"
              title="시작일"
              changeDate={(date) => updateScheduleInfo("startDate", date)}
            />
            <DatePick
              type="end"
              title="종료일"
              changeDate={(date) => updateScheduleInfo("endDate", date)}
            />
          </AlertDialogDescription>
          <FlexCenterWrapper>
            <input
              type="text"
              placeholder="일정을 입력하세요."
              className="w-[320px] border rounded-md p-3 my-2 text-[16px]"
              onChange={(e) => updateScheduleInfo("content", e.target.value)}
            />
          </FlexCenterWrapper>
          <FlexCenterWrapper>
            <CategoryButton changeCategory={(category) => updateScheduleInfo("type", category)} />
          </FlexCenterWrapper>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>취소</AlertDialogCancel>
          <AlertDialogAction onClick={updateSchedule}>추가</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

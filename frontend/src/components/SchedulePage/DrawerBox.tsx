import ***REMOVED*** Schedule ***REMOVED*** from "@/api/schedule.type";
import ***REMOVED*** schedule ***REMOVED*** from "@/api/scheduleApi";
import CategoryButton from "@/common/CategoryButton";
import ***REMOVED***
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
***REMOVED*** from "@/components/ui/alert-dialog";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import styled from "styled-components";
import DatePick from "./DatePick";

interface AlertDialogDemoProps ***REMOVED***
  isOpen: boolean;
  addSchedule: () => void;
  onClose: () => void;
***REMOVED***

const FlexCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export function AlertDialogDemo(***REMOVED*** isOpen, addSchedule, onClose ***REMOVED***: AlertDialogDemoProps) ***REMOVED***
  const firebaseToken = sessionStorage.getItem('firebaseToken');

  const [scheduleInfo, setScheduleInfo] = useState<Schedule>(***REMOVED***
    startDate: null,
    endDate: null,
    content: '',
    type: '',
    userCoupleToken: ***REMOVED***
      myFcmToken: ""
    ***REMOVED***,
  ***REMOVED***);

  useEffect(() => ***REMOVED***
    if (firebaseToken) ***REMOVED***
      setScheduleInfo((prev) => (***REMOVED***
        ...prev,
        userCoupleToken: ***REMOVED***
          myFcmToken: firebaseToken,
        ***REMOVED***,
      ***REMOVED***));
    ***REMOVED***
  ***REMOVED***, [firebaseToken]);

  function formatDate(date: Date): string ***REMOVED***
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `$***REMOVED***year***REMOVED***-$***REMOVED***month***REMOVED***-$***REMOVED***day***REMOVED***`;
***REMOVED***

  const updateScheduleInfo = (key: keyof Schedule, value: any) => ***REMOVED***
    setScheduleInfo((prev) => ***REMOVED***
      const formattedValue =
        (key === "startDate" || key === "endDate") && value instanceof Date
          ? formatDate(value)
          : value;
  
      return ***REMOVED*** ...prev, [key]: formattedValue ***REMOVED***;
    ***REMOVED***);
  ***REMOVED***;
  
  const updateSchedule = async () => ***REMOVED***
    await schedule(scheduleInfo);
    addSchedule();
    onClose();
  ***REMOVED***;

  return (
    <AlertDialog open=***REMOVED***isOpen***REMOVED*** onOpenChange=***REMOVED***onClose***REMOVED***>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>일정 추가</AlertDialogTitle>
          <AlertDialogDescription>
            <DatePick
              type="start"
              title="시작일"
              changeDate=***REMOVED***(date) => updateScheduleInfo("startDate", date)***REMOVED***
            />
            <DatePick
              type="end"
              title="종료일"
              changeDate=***REMOVED***(date) => updateScheduleInfo("endDate", date)***REMOVED***
            />
          </AlertDialogDescription>
          <FlexCenterWrapper>
            <input
              type="text"
              placeholder="일정을 입력하세요."
              className="w-[320px] border rounded-md p-3 my-2 text-[16px]"
              onChange=***REMOVED***(e) => updateScheduleInfo("content", e.target.value)***REMOVED***
            />
          </FlexCenterWrapper>
          <FlexCenterWrapper>
            <CategoryButton changeCategory=***REMOVED***(category) => updateScheduleInfo("type", category)***REMOVED*** />
          </FlexCenterWrapper>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick=***REMOVED***onClose***REMOVED***>취소</AlertDialogCancel>
          <AlertDialogAction onClick=***REMOVED***updateSchedule***REMOVED***>추가</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
***REMOVED***

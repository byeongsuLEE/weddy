import ***REMOVED*** Schedule ***REMOVED*** from "@/apis/schedule.type";
import ***REMOVED*** schedule ***REMOVED*** from "@/apis/scheduleApi";
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
  AlertDialogTrigger,
***REMOVED*** from "@/components/ui/alert-dialog";
import ***REMOVED*** useState ***REMOVED*** from "react";
import styled from "styled-components";
import DatePick from "./DatePick";

interface AlertDialogDemoProps ***REMOVED***
  isOpen: boolean;
  onClose: () => void; // 다이얼로그를 닫을 때 사용할 콜백 함수
***REMOVED***
const FlexCenterWrapper = styled.div`
display: flex;
justify-content: center;
`;

export function AlertDialogDemo(***REMOVED*** isOpen, onClose ***REMOVED***: AlertDialogDemoProps) ***REMOVED***
  const [scheduleInfo, setScheduleInfo] = useState<Schedule>(***REMOVED***
    startDate: null,
    endDate: null,
    content: '',
    type: '',
  ***REMOVED***);

  //== 상태 업데이트 ==//
  const updateScheduleInfo = (key: keyof Schedule, value: any) => ***REMOVED***
    setScheduleInfo((prev) => ***REMOVED***
      const formattedValue = (key === "startDate" || key === "endDate") && value instanceof Date ?
        value.toISOString().split("T")[0] : value;

      return ***REMOVED*** ...prev, [key]: formattedValue ***REMOVED***;
    ***REMOVED***);
  ***REMOVED***;

  //== 일정 업데이트 ==//
  const updateSchedule = async () => ***REMOVED***
    schedule(scheduleInfo);
    onClose();
    console.log(scheduleInfo);
  ***REMOVED***;
  return (
    <AlertDialog open=***REMOVED***isOpen***REMOVED*** onOpenChange=***REMOVED***onClose***REMOVED***>
      <AlertDialogTrigger asChild>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>일정 추가</AlertDialogTitle>
          <AlertDialogDescription>
              <DatePick title="시작일" changeDate=***REMOVED***(date) => updateScheduleInfo("startDate", date)***REMOVED*** />
              <DatePick title="종료일" changeDate=***REMOVED***(date) => updateScheduleInfo("endDate", date)***REMOVED*** />
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
  )
***REMOVED***

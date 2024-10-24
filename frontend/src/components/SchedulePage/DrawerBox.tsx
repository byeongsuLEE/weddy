import ***REMOVED*** Schedule ***REMOVED*** from "@/apis/schedule.type";
import ***REMOVED*** schedule ***REMOVED*** from "@/apis/scheduleApi";
import CategoryButton from "@/common/CategoryButton";
import React, ***REMOVED*** useState ***REMOVED*** from "react";
import styled from 'styled-components';
import ***REMOVED*** Button ***REMOVED*** from "../ui/button";
import ***REMOVED***
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
***REMOVED*** from "../ui/drawer";
import DatePick from "./DatePick";

interface DrawerBoxProps ***REMOVED***
  isOpen: boolean;
  onClose: () => void;
***REMOVED***;

const FlexCenterWrapper = styled.div`
display: flex;
justify-content: center;
`;
const DrawerBox: React.FC<DrawerBoxProps> = (***REMOVED*** isOpen, onClose ***REMOVED***) => ***REMOVED***

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
  ***REMOVED***;

  return (
    <Drawer shouldScaleBackground open=***REMOVED***isOpen***REMOVED*** onOpenChange=***REMOVED***onClose***REMOVED***>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-gray-500">일정 추가</DrawerTitle>
          <DrawerDescription>
            <DatePick title="시작일" changeDate=***REMOVED***(date) => updateScheduleInfo("startDate", date)***REMOVED*** />
            <DatePick title="종료일" changeDate=***REMOVED***(date) => updateScheduleInfo("endDate", date)***REMOVED*** />
          </DrawerDescription>
          <div>
            <input
              type="text"
              placeholder="일정을 입력하세요."
              className="w-[320px] border rounded-md p-3 my-2 text-[16px]"
              onChange=***REMOVED***(e) => updateScheduleInfo("content", e.target.value)***REMOVED***
            />
            <FlexCenterWrapper>
              <CategoryButton changeCategory=***REMOVED***(category) => updateScheduleInfo("type", category)***REMOVED*** />
            </FlexCenterWrapper>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <Button onClick=***REMOVED***updateSchedule***REMOVED***>추가</Button>
          <DrawerClose asChild>
            <Button variant="outline">취소</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
***REMOVED***;

export default DrawerBox;
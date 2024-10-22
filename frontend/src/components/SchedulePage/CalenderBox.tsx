import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** Calendar ***REMOVED*** from "../ui/calendar";
import DrawerBox from "./DrawerBox";

const CalenderBox = () => ***REMOVED***
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer의 열림 상태 관리

  return (
    <div className="flex justify-center w-full mt-12">
      <Calendar
        mode="single"
        selected=***REMOVED***date***REMOVED***
        onSelect=***REMOVED***(date) => ***REMOVED***
          // 날짜가 선택되면 상태를 업데이트
          setDate(date ?? new Date()); // 선택되지 않으면 현재 날짜를 기본값으로 설정
          setIsDrawerOpen(true); // 날짜 선택 시 Drawer 열림
        ***REMOVED******REMOVED***
        className="rounded-md border shadow"
      />
      <DrawerBox isOpen=***REMOVED***isDrawerOpen***REMOVED*** onClose=***REMOVED***() => setIsDrawerOpen(false)***REMOVED*** />
    </div>
  );
***REMOVED***;

export default CalenderBox;

import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** Calendar ***REMOVED*** from "../ui/calendar";

const CalenderBox = () => ***REMOVED***
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="flex justify-center w-full">
      <Calendar
        mode="single"
        selected=***REMOVED***date***REMOVED***
        onSelect=***REMOVED***(date) => ***REMOVED***
          // 날짜가 선택되면 상태를 업데이트
          setDate(date ?? new Date()); // 선택되지 않으면 현재 날짜를 기본값으로 설정
        ***REMOVED******REMOVED***
        className="rounded-md border shadow"
      />
    </div>
  )
***REMOVED***

export default CalenderBox;
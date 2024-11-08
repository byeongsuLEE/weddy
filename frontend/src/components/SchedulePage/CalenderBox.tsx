// CalenderBox.tsx
import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** Calendar ***REMOVED*** from "../ui/calendar";

interface CalenderBoxProps ***REMOVED***
  onDateChange: (date: Date) => void;
***REMOVED***

const CalenderBox = (***REMOVED*** onDateChange ***REMOVED***: CalenderBoxProps) => ***REMOVED***
  const [date, setDate] = useState<Date | undefined>(new Date());

  // 이벤트 날짜 리스트를 Date 객체로 정의
  const eventDays = [new Date("2024-10-01"), new Date("2024-10-15")];

  const handleSelect = (selectedDate: Date | undefined) => ***REMOVED***
    const newDate = selectedDate ?? new Date();
    setDate(newDate);
    onDateChange(newDate);
  ***REMOVED***;

  return (
    <div className="flex relative flex-col justify-center w-full mt-12">
      <Calendar
        mode="single"
        selected=***REMOVED***date***REMOVED***
        onSelect=***REMOVED***handleSelect***REMOVED***
        className="rounded-md border shadow"
        eventDays=***REMOVED***eventDays***REMOVED*** // 이벤트 날짜 리스트를 prop으로 전달
      />
      ***REMOVED***/* <span className="bg-red-500 rounded-full h-3 w-3 absolute bottom-1 left-1/2 transform -translate-x-1/2 z-10"></span> */***REMOVED***

    </div>
  );
***REMOVED***;

export default CalenderBox;

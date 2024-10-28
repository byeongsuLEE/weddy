import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** Calendar ***REMOVED*** from "../ui/calendar";

interface CalenderBoxProps ***REMOVED***
  onDateChange: (date: Date) => void;
***REMOVED***

const CalenderBox = (***REMOVED*** onDateChange ***REMOVED***: CalenderBoxProps) => ***REMOVED***
  const [date, setDate] = useState<Date | undefined>(new Date());
  const handleSelect = (selectedDate: Date | undefined) => ***REMOVED***
    const newDate = selectedDate ?? new Date();
    setDate(newDate);
    onDateChange(newDate); // 부모 컴포넌트로 날짜 전달
  ***REMOVED***;

  return (
    <div className="flex justify-center w-full mt-12">
      <Calendar
        mode="single"
        selected=***REMOVED***date***REMOVED***
        onSelect=***REMOVED***handleSelect***REMOVED***
        className="rounded-md border shadow"
      />
    </div>
  );
***REMOVED***;

export default CalenderBox;

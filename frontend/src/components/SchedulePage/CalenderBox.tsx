import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** Calendar ***REMOVED*** from "../ui/calendar";
import DrawerBox from "./DrawerBox";

const CalenderBox = () => ***REMOVED***
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex justify-center w-full mt-12">
      <Calendar
        mode="single"
        selected=***REMOVED***date***REMOVED***
        onSelect=***REMOVED***(date) => ***REMOVED***
          setDate(date ?? new Date());
          setIsDrawerOpen(true);
        ***REMOVED******REMOVED***
        className="rounded-md border shadow"
      />
      <DrawerBox isOpen=***REMOVED***isDrawerOpen***REMOVED*** onClose=***REMOVED***() => setIsDrawerOpen(false)***REMOVED*** />
    </div>
  );
***REMOVED***;

export default CalenderBox;

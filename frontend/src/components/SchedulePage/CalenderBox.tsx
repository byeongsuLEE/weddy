import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** Calendar ***REMOVED*** from "../ui/calendar";
import ***REMOVED*** AlertDialogDemo ***REMOVED*** from "./DrawerBox";
// import DrawerBox from "./DrawerBox";

const CalenderBox = () => ***REMOVED***
  const [date, setDate] = useState<Date | undefined>(new Date());
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseDialog = () => ***REMOVED***
    setIsOpen(false); // 다이얼로그를 닫는 함수
  ***REMOVED***;


  return (
    <div className="flex justify-center w-full mt-12">
      <Calendar
        mode="single"
        selected=***REMOVED***date***REMOVED***
        onSelect=***REMOVED***(date) => ***REMOVED***
          setDate(date ?? new Date());
          // setIsDrawerOpen(true);
          setIsOpen(true);
        ***REMOVED******REMOVED***
        className="rounded-md border shadow"
      />
      <AlertDialogDemo isOpen=***REMOVED***isOpen***REMOVED*** onClose=***REMOVED***handleCloseDialog***REMOVED***/>
      ***REMOVED***/* <DrawerBox isOpen=***REMOVED***isDrawerOpen***REMOVED*** onClose=***REMOVED***() => setIsDrawerOpen(false)***REMOVED*** /> */***REMOVED***
    </div>
  );
***REMOVED***;

export default CalenderBox;

import ***REMOVED*** GetSchedule ***REMOVED*** from "@/api/schedule.type";
import ***REMOVED*** getSchedule ***REMOVED*** from "@/api/scheduleApi";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useQuery, useQueryClient ***REMOVED*** from "react-query";
import CalenderBox from "../components/SchedulePage/CalenderBox";
import ***REMOVED*** AlertDialogDemo ***REMOVED*** from "../components/SchedulePage/DrawerBox";
import ScheduleBox from "../components/SchedulePage/ScheduleBox";
import PlusIcon from "../icons/PlusIcon";

const Schedule = () => ***REMOVED***
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [ selectedDate, setSelectedDate ] = useState<Date>(new Date());
  const [ formattedDate, setFormattedDate ] = useState<string>('');

  useEffect(() => ***REMOVED***
    setFormattedDate(
      selectedDate.toLocaleString('ko-KR', ***REMOVED***
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour12: false,
      ***REMOVED***)
      .replace(/\./g, '')
      .replace(/\s/g, '-')
      .slice(0, 19)
    );
  ***REMOVED***, [selectedDate]);
  

  const ***REMOVED*** data: scheduleList = [] ***REMOVED*** = useQuery(
    ['getSchedule', formattedDate],
    () => getSchedule(formattedDate),
    ***REMOVED*** enabled: !!formattedDate***REMOVED***
  );

  const handleAddSchedule = () => ***REMOVED***
    queryClient.invalidateQueries('getSchedule');
  ***REMOVED***;

  const handleCloseDialog = () => ***REMOVED***
    setIsOpen(false);
  ***REMOVED***;

  const handleDateChange = (date: Date) => ***REMOVED***
    setSelectedDate(date);
  ***REMOVED***;

  return (
    <div className="m-5 flex flex-col">
      <CalenderBox onDateChange=***REMOVED***handleDateChange***REMOVED*** />
      <div className="my-5 mx-3 font-bold">
        ***REMOVED***selectedDate.toLocaleDateString("ko-KR", ***REMOVED***
          weekday: "long",
          day: "numeric",
        ***REMOVED***)***REMOVED***
      </div>

      ***REMOVED***scheduleList.length > 0 ? (
        scheduleList.map((schedule: GetSchedule) => (
          <ScheduleBox key=***REMOVED***schedule.id***REMOVED*** type=***REMOVED***schedule.contractType***REMOVED*** title=***REMOVED***schedule.content***REMOVED***/>
        ))
      ) : (
        <ScheduleBox type="etc" title="일정이 없습니다." />
      )***REMOVED***

      <div onClick=***REMOVED***() => ***REMOVED*** setIsOpen(true); ***REMOVED******REMOVED*** className="plusIconButton">
        <PlusIcon />
      </div>

      <AlertDialogDemo isOpen=***REMOVED***isOpen***REMOVED*** addSchedule=***REMOVED***handleAddSchedule***REMOVED*** onClose=***REMOVED***handleCloseDialog***REMOVED*** />
    </div>
  )
***REMOVED***

export default Schedule;
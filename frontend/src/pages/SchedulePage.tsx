import ***REMOVED*** GetSchedule ***REMOVED*** from "@/api/schedule.type";
import ***REMOVED*** getSchedule ***REMOVED*** from "@/api/scheduleApi";
import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import CalenderBox from "../components/SchedulePage/CalenderBox";
import ***REMOVED*** AlertDialogDemo ***REMOVED*** from "../components/SchedulePage/DrawerBox";
import ScheduleBox from "../components/SchedulePage/ScheduleBox";
import PlusIcon from "../icons/PlusIcon";

const Schedule = () => ***REMOVED***
  const [isOpen, setIsOpen] = useState(false);
  const [ selectedDate, setSelectedDate ] = useState<Date>(new Date());

  const ***REMOVED*** data: scheduleList ***REMOVED*** = useQuery(
    ['getSchedule', selectedDate.toISOString().slice(0, 10)],
    () => getSchedule(selectedDate.toISOString().slice(0, 10)),
    ***REMOVED*** enabled: !!selectedDate.toISOString().slice(0, 10)***REMOVED***
  );

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

      <div></div>

      ***REMOVED***!scheduleList || scheduleList?.length <= 0 ? (
        <ScheduleBox type="etc" title="일정이 없습니다." />
      ) : (
        scheduleList?.map((schedule: GetSchedule) => ***REMOVED***
          switch (schedule.contractType) ***REMOVED***
            case 'STUDIO':
              return <ScheduleBox key=***REMOVED***schedule.id***REMOVED*** type="studio" title=***REMOVED***schedule.content***REMOVED*** />;
            
            case 'DRESS':
              return <ScheduleBox key=***REMOVED***schedule.id***REMOVED*** type="dress" title="드레스 피팅" />;

            case 'MAKEUP':
              return <ScheduleBox key=***REMOVED***schedule.id***REMOVED*** type="makeup" title="메이크업" />;

            default:
              return <ScheduleBox key=***REMOVED***schedule.id***REMOVED*** type="etc" title=***REMOVED***schedule.content***REMOVED*** />;
          ***REMOVED***
        ***REMOVED***)
      )***REMOVED***

      <div onClick=***REMOVED***() => ***REMOVED*** setIsOpen(true); ***REMOVED******REMOVED*** className="plusIconButton">
        <PlusIcon />
      </div>

      <AlertDialogDemo isOpen=***REMOVED***isOpen***REMOVED*** onClose=***REMOVED***handleCloseDialog***REMOVED*** />
    </div>
  )
***REMOVED***

export default Schedule;
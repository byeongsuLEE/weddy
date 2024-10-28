import CategoryButton from "@/common/CategoryButton";
import CalenderBox from "../components/SchedulePage/CalenderBox";
import ScheduleBox from "../components/SchedulePage/ScheduleBox";
import PlusIcon from "../icons/PlusIcon";
import ***REMOVED*** AlertDialogDemo ***REMOVED*** from "../components/SchedulePage/DrawerBox";
import ***REMOVED*** useState ***REMOVED*** from "react";

// import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
// import ***REMOVED*** getSchedule ***REMOVED*** from "@/apis/scheduleApi";

const Schedule = () => ***REMOVED***
  // const ***REMOVED*** data:schedulList ***REMOVED*** = useQuery('getSchedule', getSchedule);

  const selectCategory = (category: string) => ***REMOVED***
    console.log(category);
  ***REMOVED***;
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseDialog = () => ***REMOVED***
    setIsOpen(false);
  ***REMOVED***;

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => ***REMOVED***
    setSelectedDate(date); // 선택된 날짜를 부모 상태로 설정
  ***REMOVED***;

  return (
    <div className="m-5 flex flex-col">
      <CalenderBox onDateChange=***REMOVED***handleDateChange***REMOVED***/>
      <div className="my-5 mx-3 font-bold">
        ***REMOVED***selectedDate.toLocaleDateString("ko-KR", ***REMOVED***
          weekday: "long",
          day: "numeric",
        ***REMOVED***)***REMOVED***
      </div>
      ***REMOVED***/* <div className="my-5 flex justify-center">
        <CategoryButton changeCategory=***REMOVED***selectCategory***REMOVED*** />
      </div> */***REMOVED***
      <div></div>
      <ScheduleBox type="studio" title="스튜디오 촬영" />
      <ScheduleBox type="dress" title="드레스 피팅"/>
      <ScheduleBox type="makeup" title="메이크업" />
      <ScheduleBox type="etc" title="일정이 없습니다." />

      <div onClick=***REMOVED***() => ***REMOVED*** setIsOpen(true); ***REMOVED******REMOVED*** className="plusIconButton">
        <PlusIcon />
      </div>
        <AlertDialogDemo isOpen=***REMOVED***isOpen***REMOVED*** onClose=***REMOVED***handleCloseDialog***REMOVED*** />

    </div>
  )
***REMOVED***

export default Schedule;
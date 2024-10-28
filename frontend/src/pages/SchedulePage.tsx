import CalenderBox from "../components/SchedulePage/CalenderBox";
import ScheduleBox from "../components/SchedulePage/ScheduleBox";
import PlusIcon from "../icons/PlusIcon";
import ***REMOVED*** AlertDialogDemo ***REMOVED*** from "../components/SchedulePage/DrawerBox";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";

import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ***REMOVED*** getSchedule ***REMOVED*** from "@/apis/scheduleApi";
import ***REMOVED*** GetSchedule ***REMOVED*** from "@/apis/schedule.type";

const Schedule = () => ***REMOVED***
  const [isOpen, setIsOpen] = useState(false);
  const [ selectedDate, setSelectedDate ] = useState<Date>(new Date());
  const [ filteredList, setFilteredList ] = useState<GetSchedule[]>([]);

  const ***REMOVED*** data:scheduleList ***REMOVED*** = useQuery('getSchedule', getSchedule);

  const handleCloseDialog = () => ***REMOVED***
    setIsOpen(false);
  ***REMOVED***;

  const handleDateChange = (date: Date) => ***REMOVED***
    setSelectedDate(date);
  ***REMOVED***;

  //== 해당 날짜의 스케줄 ==//
  useEffect(() => ***REMOVED***
    const update = async () => ***REMOVED***
      const data = scheduleList?.filter((schedule: GetSchedule) => schedule.startDate <= selectedDate && schedule.endDate >= selectedDate);
      if (data) ***REMOVED***
        setFilteredList(data);
      ***REMOVED***
    ***REMOVED***;
    
    update();
  ***REMOVED***, [selectedDate]);

  return (
    <div className="m-5 flex flex-col">
      <CalenderBox onDateChange=***REMOVED***handleDateChange***REMOVED***/>
      <div className="my-5 mx-3 font-bold">
        ***REMOVED***selectedDate.toLocaleDateString("ko-KR", ***REMOVED***
          weekday: "long",
          day: "numeric",
        ***REMOVED***)***REMOVED***
      </div>

      <div></div>
      ***REMOVED***/* <ScheduleBox type="studio" title="스튜디오 촬영" />
      <ScheduleBox type="dress" title="드레스 피팅"/>
      <ScheduleBox type="makeup" title="메이크업" />
      <ScheduleBox type="etc" title="일정이 없습니다." /> */***REMOVED***

      ***REMOVED***filteredList.length <= 0 ? (
        <ScheduleBox type="etc" title="일정이 없습니다." /> 
      ) : (
        filteredList.map((schedule: GetSchedule) => ***REMOVED***
          switch (schedule.product.type) ***REMOVED***
            case 'studio':
              return <ScheduleBox key=***REMOVED***schedule.id***REMOVED*** type="studio" title="스튜디오 촬영" />;
            case 'dress':
              return <ScheduleBox key=***REMOVED***schedule.id***REMOVED*** type="dress" title="드레스 피팅" />;
            case 'makeup':
              return <ScheduleBox key=***REMOVED***schedule.id***REMOVED*** type="makeup" title="메이크업" />;
            default:
              return <ScheduleBox key=***REMOVED***schedule.id***REMOVED*** type="etc" title="기타 일정" />;
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
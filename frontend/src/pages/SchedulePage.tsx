import { GetSchedule } from "@/api/schedule.type";
import { getSchedule } from "@/api/scheduleApi";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import CalenderBox from "../components/SchedulePage/CalenderBox";
import { AlertDialogDemo } from "../components/SchedulePage/DrawerBox";
import ScheduleBox from "../components/SchedulePage/ScheduleBox";
import PlusIcon from "../icons/PlusIcon";

const Schedule = () => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const [ selectedDate, setSelectedDate ] = useState<Date>(new Date());
  const [ formattedDate, setFormattedDate ] = useState<string>('');

  useEffect(() => {
    setFormattedDate(
      selectedDate.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour12: false,
      })
      .replace(/\./g, '')
      .replace(/\s/g, '-')
      .slice(0, 19)
    );
  }, [selectedDate]);
  

  const { data: scheduleList = [] } = useQuery(
    ['getSchedule', formattedDate],
    () => getSchedule(formattedDate),
    { enabled: !!formattedDate}
  );

  const handleAddSchedule = () => {
    queryClient.invalidateQueries('getSchedule');
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="m-5 flex flex-col">
      <CalenderBox onDateChange={handleDateChange} />
      <div className="my-5 mx-3 font-bold">
        {selectedDate.toLocaleDateString("ko-KR", {
          weekday: "long",
          day: "numeric",
        })}
      </div>

      {scheduleList.length > 0 ? (
        scheduleList.map((schedule: GetSchedule) => (
          <ScheduleBox key={schedule.id} type={schedule.contractType} title={schedule.content}/>
        ))
      ) : (
        <ScheduleBox type="etc" title="일정이 없습니다." />
      )}

      <div onClick={() => { setIsOpen(true); }} className="plusIconButton">
        <PlusIcon />
      </div>

      <AlertDialogDemo isOpen={isOpen} addSchedule={handleAddSchedule} onClose={handleCloseDialog} />
    </div>
  )
}

export default Schedule;
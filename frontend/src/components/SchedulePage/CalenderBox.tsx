// CalenderBox.tsx
import { useState } from "react";
import { Calendar } from "../ui/calendar";

interface CalenderBoxProps {
  onDateChange: (date: Date) => void;
}

const CalenderBox = ({ onDateChange }: CalenderBoxProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // 이벤트 날짜 리스트를 Date 객체로 정의
  const eventDays = [new Date("2024-10-01"), new Date("2024-10-15")];

  const handleSelect = (selectedDate: Date | undefined) => {
    const newDate = selectedDate ?? new Date();
    setDate(newDate);
    onDateChange(newDate);
  };

  return (
    <div className="flex relative flex-col justify-center w-full mt-12">
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleSelect}
        className="rounded-md border shadow"
        eventDays={eventDays} // 이벤트 날짜 리스트를 prop으로 전달
      />
      {/* <span className="bg-red-500 rounded-full h-3 w-3 absolute bottom-1 left-1/2 transform -translate-x-1/2 z-10"></span> */}

    </div>
  );
};

export default CalenderBox;

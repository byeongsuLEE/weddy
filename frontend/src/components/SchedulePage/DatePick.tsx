import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"
import { useEffect, useState } from "react"

interface DatePickProps {
  title:string;
  changeDate: (newDate: Date) => void;
  type: "start" | "center" | "end"; 
};

const DatePick = ({title, changeDate,type}:DatePickProps ) => {
  const [date, setDate] = useState<Date>();
  

  useEffect(() => {
    if(date) {
      changeDate(date);
    };
  }, [date]);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[150px] justify-start text-left mx-2 my-1 font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "yyyy-MM-dd") : <span>{title}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align={type}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </>
  )
}

export default DatePick
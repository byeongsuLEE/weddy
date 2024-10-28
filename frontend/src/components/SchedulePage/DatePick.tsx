import ***REMOVED*** CalendarIcon ***REMOVED*** from "@radix-ui/react-icons"
import ***REMOVED*** format ***REMOVED*** from "date-fns"

import ***REMOVED*** cn ***REMOVED*** from "@/lib/utils"
import ***REMOVED*** Button ***REMOVED*** from "../ui/button"
import ***REMOVED*** Calendar ***REMOVED*** from "../ui/calendar"
import ***REMOVED***
  Popover,
  PopoverContent,
  PopoverTrigger,
***REMOVED*** from "../ui/popover"
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react"

interface DatePickProps ***REMOVED***
  title:string;
  changeDate: (newDate: Date) => void;
***REMOVED***;

const DatePick = (***REMOVED***title, changeDate***REMOVED***:DatePickProps ) => ***REMOVED***
  const [date, setDate] = useState<Date>();
  
  useEffect(() => ***REMOVED***
    if(date) ***REMOVED***
      changeDate(date);
    ***REMOVED***;
  ***REMOVED***, [date]);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant=***REMOVED***"outline"***REMOVED***
            className=***REMOVED***cn(
              "w-[150px] justify-start text-left mx-2 my-1 font-normal",
              !date && "text-muted-foreground"
            )***REMOVED***
          >
            <CalendarIcon />
            ***REMOVED***date ? format(date, "yyyy-MM-dd") : <span>***REMOVED***title***REMOVED***</span>***REMOVED***
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected=***REMOVED***date***REMOVED***
            onSelect=***REMOVED***setDate***REMOVED***
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </>
  )
***REMOVED***

export default DatePick
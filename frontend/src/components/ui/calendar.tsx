import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  eventDays?: Date[]; // Date 형식의 이벤트 날짜 배열
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  eventDays = [],
  ...props
}: CalendarProps) {
  
  // `eventDays` 배열에서 날짜가 이벤트에 해당하는지 확인하는 함수
  // const isEventDay = (day: Date) => {
  //   const result = eventDays.some((eventDay: Date) =>
  //     eventDay.toDateString() === day.toDateString()
  //   );
  //   console.log(`Date: ${day.toDateString()}, Is Event Day: ${result}`);
  //   return result;
  // };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 w-full h-[350px]", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
        month: "space-y-4 w-full",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1 flex flex-col items-center",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-10 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-10 w-10 p-0 font-normal aria-selected:opacity-100 relative"
        ),
        day_selected: "bg-main2 text-main2-foreground hover:bg-main2 hover:text-main2-foreground focus:bg-main2 focus:text-main2-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
      }}
      
      // renderDay={(day: Date) => (
      //   <div className="relative">
      //     {day.getDate()}
      //     {isEventDay(day) && (
      //       <div className="bg-red-500 rounded-full h-2 w-2 absolute bottom-1 left-1/2 transform -translate-x-1/2"></div>
      //     )}
      //   </div>
      // )}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };

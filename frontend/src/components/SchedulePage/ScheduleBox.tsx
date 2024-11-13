interface ScheduleProps ***REMOVED***
  type: "STUDIO" | "DRESS" | "MAKEUP" | "WEDDING" |"etc";
  title: string;
***REMOVED***

const ScheduleBox = (***REMOVED*** type,title ***REMOVED***: ScheduleProps) => ***REMOVED***
  const backgroundColor = ***REMOVED***
    STUDIO: "bg-main3",
    DRESS: "bg-main1",
    MAKEUP: "bg-main4",
    WEDDING: "bg-red-400",
    etc: "bg-gray-200",
  ***REMOVED***[type];

  return (
    <div className="flex items-center my-2">
    <div className=***REMOVED***`$***REMOVED***backgroundColor***REMOVED***  rounded-lg h-[50px] w-[10px] mr-2`***REMOVED***></div>
      <span>***REMOVED***title***REMOVED***</span>
    </div>
  )
***REMOVED***

export default ScheduleBox;
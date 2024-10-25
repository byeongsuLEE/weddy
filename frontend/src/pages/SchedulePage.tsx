import CategoryButton from "@/common/CategoryButton";
import CalenderBox from "../components/SchedulePage/CalenderBox";
// import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
// import ***REMOVED*** getSchedule ***REMOVED*** from "@/apis/scheduleApi";

const Schedule = () => ***REMOVED***
  // const ***REMOVED*** data:schedulList ***REMOVED*** = useQuery('getSchedule', getSchedule);

  const selectCategory = (category: string) => ***REMOVED***
    console.log(category);
  ***REMOVED***;

  return (
    <div className="m-5 flex flex-col">
      <CalenderBox />
      <div className="my-5 flex justify-center">
        <CategoryButton changeCategory=***REMOVED***selectCategory***REMOVED*** />
      </div>

    </div>
  )
***REMOVED***

export default Schedule;
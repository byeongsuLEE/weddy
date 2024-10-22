import ***REMOVED*** Checkbox ***REMOVED*** from "@/components/ui/checkbox";
import SearchIcon from "@/icons/searchIcon";

interface PlannerBoxProps ***REMOVED***
  title: string;
***REMOVED***

const PlannerBox = ((***REMOVED*** title ***REMOVED***: PlannerBoxProps) => ***REMOVED***
  return (
    <div className="planner-box-style w-[350px] h-[100px] bg-white rounded-3xl p-5 my-5 flex items-center justify-between">
      <div className="flex items-center">
        <Checkbox />
        <h1 className="font-bold mx-4">***REMOVED***title***REMOVED***</h1>
      </div>
      <div className="flex items-center">
        <SearchIcon />
      </div>
    </div>
  );
***REMOVED***);



export default PlannerBox;

import ***REMOVED*** Checkbox ***REMOVED*** from "@/components/ui/checkbox";
import SearchIcon from "@/icons/searchIcon";
import ***REMOVED*** Accordion, AccordionDetails, AccordionSummary ***REMOVED*** from "@mui/material";

interface PlannerBoxProps ***REMOVED***
  title: string;
***REMOVED***

const PlannerBox = ((***REMOVED*** title ***REMOVED***: PlannerBoxProps) => ***REMOVED***
  return (
    <Accordion 
    sx=***REMOVED******REMOVED***
      boxShadow: "none",
      border: "none",
      borderRadius: "8px",
      marginY: 3,
      "&:before": ***REMOVED***
        display: "none",
      ***REMOVED***,
    ***REMOVED******REMOVED***>
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        className="w-[350px] h-[100px]"
        sx=***REMOVED******REMOVED***
          boxShadow: "none",
          borderBottom: "none",
          padding: "16px",
          margin: 0,
        ***REMOVED******REMOVED***
      >
        <div className="flex justify-between w-[300px]">
        <div className="flex">
        <Checkbox />
        <h1 className="font-bold mx-4">***REMOVED***title***REMOVED***</h1>
        </div>
        <div className="flex items-center">
        ***REMOVED***/* 업체 선택되었으면, 선택하기 버튼 없애기 */***REMOVED***
        <p className="mr-1">선택하기</p>
        <SearchIcon />
        </div>
        </div>

      </AccordionSummary>
      <AccordionDetails sx=***REMOVED******REMOVED*** border: "none" ***REMOVED******REMOVED***>
        업체 세부 정보
      </AccordionDetails>
    </Accordion>
  );
***REMOVED***);



export default PlannerBox;

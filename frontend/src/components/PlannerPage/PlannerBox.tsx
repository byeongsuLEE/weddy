import ***REMOVED*** Checkbox ***REMOVED*** from "@/components/ui/checkbox";
import GotoIcon from "@/icons/Goto";
import ***REMOVED*** Accordion, AccordionDetails, AccordionSummary ***REMOVED*** from "@mui/material";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";

interface PlannerBoxProps ***REMOVED***
  title: string;


***REMOVED***

const PlannerBox = ((***REMOVED*** title ***REMOVED***: PlannerBoxProps) => ***REMOVED***
  const category = ***REMOVED***
    스튜디오: 'studio',
    드레스: 'dress',
    메이크업: 'makeup',
  ***REMOVED***[title];

  const navigate = useNavigate()
  const goRecommend = () => ***REMOVED***
    navigate(`/planner/list/$***REMOVED***category***REMOVED***`)
  ***REMOVED***

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
          <div onClick=***REMOVED***goRecommend***REMOVED*** className="flex items-center">
            ***REMOVED***/* 업체 선택되었으면, 선택하기 버튼 없애기 */***REMOVED***
            <p className="mr-1">상품 보러가기</p>
            <GotoIcon />
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

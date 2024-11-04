import DropdownIcon from "@/icons/DropdownIcon";
import GotoIcon from "@/icons/Goto";
import ***REMOVED*** Accordion, AccordionDetails, AccordionSummary ***REMOVED*** from "@mui/material";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";

interface PlannerBoxProps ***REMOVED***
  title: string;
  company: string;
  price: string;
  content: string;
***REMOVED***

const PlannerBox = ((***REMOVED*** title, company, price, content ***REMOVED***: PlannerBoxProps) => ***REMOVED***
  const category = ***REMOVED***
    스튜디오: 'studio',
    드레스: 'dress',
    메이크업: 'makeup',
  ***REMOVED***[title];

  const navigate = useNavigate()
  const goRecommend = () => ***REMOVED***
    navigate(`/planner/list/$***REMOVED***category***REMOVED***`)
  ***REMOVED***

  const [isChecked, setIsChecked] = useState(false);

  // company가 있는 경우 체크 상태를 true로 설정
  useEffect(() => ***REMOVED***
    setIsChecked(!!company); // company가 존재하면 true
  ***REMOVED***, [company]);

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
          <div className="flex items-center">
            <button
              className=***REMOVED***`$***REMOVED***isChecked ? 'text-main2 bg-mainbg rounded-full h-[35px] w-[35px]' : 'text-gray-400 bg-gray-100 rounded-full h-[35px] w-[35px]'***REMOVED***`***REMOVED***
            >
              <div className="flex items-center justify-center">
                <span className="font-bold text-xs">WEDDY</span>
              </div>
            </button>
            <h1 className="font-bold mx-4">***REMOVED***title***REMOVED***</h1>
          </div>

          ***REMOVED***isChecked == true ?(
            <div className="flex items-center">
            <DropdownIcon />
            </div>
          ):
          (
            <div onClick=***REMOVED***goRecommend***REMOVED*** className="flex items-center">
              <p className="mr-1">상품 보러가기</p>
              <GotoIcon />
            </div>
          )***REMOVED***
        </div>

      </AccordionSummary>
      <AccordionDetails sx=***REMOVED******REMOVED*** border: "none" ***REMOVED******REMOVED***>
        <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-bold text-lg text-main2">
            ***REMOVED***company***REMOVED***
          </span>
          <span>
            ***REMOVED***content***REMOVED***
          </span>
          <span className="font-bold">
            ***REMOVED***price.toLocaleString()***REMOVED***원
          </span>
        </div>
        <button className="mr-3 rounded-full w-[35px] h-[35px] bg-gray-100">삭제</button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
***REMOVED***);



export default PlannerBox;

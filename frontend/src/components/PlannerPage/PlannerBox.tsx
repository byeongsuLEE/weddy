import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import ***REMOVED*** deleteFromCart ***REMOVED*** from "@/api/productApi";
import DropdownIcon from "@/icons/DropdownIcon";
import GotoIcon from "@/icons/Goto";
import ***REMOVED*** Accordion, AccordionDetails, AccordionSummary ***REMOVED*** from "@mui/material";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** Link, useNavigate ***REMOVED*** from "react-router-dom";

interface PlannerBoxProps ***REMOVED***
  category: string;
  item?: Product;
***REMOVED***

const PlannerBox = ((***REMOVED*** category, item ***REMOVED***: PlannerBoxProps) => ***REMOVED***

  const navigate = useNavigate()
  const goRecommend = () => ***REMOVED***
    navigate(`/planner/list/$***REMOVED***category***REMOVED***`);
  ***REMOVED***

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => ***REMOVED***
    setIsChecked(!!item?.vendorName);
  ***REMOVED***, [item?.vendorName]);

  const deleteCartItem = async () => ***REMOVED***
    await deleteFromCart(item?.id);
    navigate(0);
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
          <div className="flex items-center">
            <button
              className=***REMOVED***`$***REMOVED***isChecked ? 'text-main2 bg-mainbg rounded-full h-[35px] w-[35px]' : 'text-gray-400 bg-gray-100 rounded-full h-[35px] w-[35px]'***REMOVED***`***REMOVED***
            >
              <div className="flex items-center justify-center">
                <span className="font-bold text-xs">WEDDY</span>
              </div>
            </button>
            <h1 className="font-bold mx-4">***REMOVED***category***REMOVED***</h1>
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
      ***REMOVED***isChecked ? (
        <AccordionDetails sx=***REMOVED******REMOVED*** border: "none" ***REMOVED******REMOVED***>
          <div className="flex justify-between items-center">
            <Link to=***REMOVED***`/board/detail/$***REMOVED***item?.id***REMOVED***`***REMOVED***>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-main2">
                  ***REMOVED***item?.vendorName***REMOVED***
                </span>
                <span>
                  ***REMOVED***item?.name***REMOVED***
                </span>
                <span className="font-bold">
                  ***REMOVED***Number(item?.price).toLocaleString()***REMOVED***원
                </span>
              </div>
            </Link>
            <button className="mr-3 rounded-full w-[35px] h-[35px] bg-gray-100" onClick=***REMOVED***deleteCartItem***REMOVED***>삭제</button>
          </div>
        </AccordionDetails>
      ) : (
        <AccordionDetails sx=***REMOVED******REMOVED*** border: "none" ***REMOVED******REMOVED***>
          <div className="flex justify-center items-center">
            <p>상품이 없습니다.</p>
          </div>
        </AccordionDetails>
      )***REMOVED***
      
    </Accordion>
  );
***REMOVED***);

export default PlannerBox;

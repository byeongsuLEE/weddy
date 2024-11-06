import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import ***REMOVED*** AccordionDetails ***REMOVED*** from "@mui/material";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";

interface PlannerListBoxProps ***REMOVED***
  item: Product;
***REMOVED***

const PlannerListBox = (***REMOVED*** item ***REMOVED***: PlannerListBoxProps) => ***REMOVED***
  return (
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
            <button className="mr-3 rounded-full w-[35px] h-[35px] bg-gray-100">삭제</button>
          </div>
        </AccordionDetails>
  );
***REMOVED***;

export default PlannerListBox;
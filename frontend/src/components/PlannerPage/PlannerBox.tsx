import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import ***REMOVED*** AccordionDetails ***REMOVED*** from "@mui/material";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";
import ***REMOVED*** Checkbox ***REMOVED*** from "../ui/checkbox";

interface PlannerBoxProps ***REMOVED***
  item: Product;
  isSelected: boolean;
  onProductSelect: (product: Product | null) => void;
***REMOVED***

const PlannerBox = (***REMOVED*** item, isSelected, onProductSelect ***REMOVED***: PlannerBoxProps) => ***REMOVED***
  const handleCheckboxChange = () => ***REMOVED***
    onProductSelect(isSelected ? null : item);
  ***REMOVED***;

  return (
    <AccordionDetails sx=***REMOVED******REMOVED*** border: "none" ***REMOVED******REMOVED***>
      <div className="flex items-center space-x-4">
        <Checkbox checked=***REMOVED***isSelected***REMOVED*** onCheckedChange=***REMOVED***handleCheckboxChange***REMOVED*** />
        <Link
          to=***REMOVED***`/board/detail/$***REMOVED***item.id***REMOVED***`***REMOVED***
          className="flex flex-1 justify-between items-center space-x-4"
        >
          <div className="flex flex-col space-y-1">
            <span className="font-bold text-lg text-main2">***REMOVED***item.vendorName***REMOVED***</span>
            <span>***REMOVED***item.name***REMOVED***</span>
            <span className="font-bold">***REMOVED***Number(item.price).toLocaleString()***REMOVED***원</span>
          </div>
        </Link>
        <button className="ml-auto mr-3 rounded-full w-[35px] h-[35px] bg-gray-100">
          삭제
        </button>
      </div>
    </AccordionDetails>
  );
***REMOVED***;

export default PlannerBox;

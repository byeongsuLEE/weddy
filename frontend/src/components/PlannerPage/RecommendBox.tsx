import ***REMOVED*** Checkbox ***REMOVED*** from "@/components/ui/checkbox";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";

interface RecommendBoxProps ***REMOVED***
  src: string;
  name: string;
  price: string;
  isSelected: boolean;
  onSelect: () => void;
***REMOVED***

const RecommendBox = (***REMOVED*** src, name, price, isSelected, onSelect ***REMOVED***: RecommendBoxProps) => ***REMOVED***
  return (
    <div className="flex flex-col">
      <Link to='/board/detail'>
        <img className="w-[150px] h-[150px] rounded-xl" src=***REMOVED***src***REMOVED*** alt="image" />
      </Link>
      <div className="flex items-center justify-between">
        <Checkbox
          checked=***REMOVED***isSelected***REMOVED***
          onCheckedChange=***REMOVED***onSelect***REMOVED***
        />
        <Link to='/board/detail'>
          <div className="flex flex-col text-end">
            <span className="text-gray-500 mt-2">***REMOVED***name***REMOVED***</span>
            <span>***REMOVED***Number(price).toLocaleString()***REMOVED***원</span>
          </div>
        </Link>
      </div>
    </div>
  );
***REMOVED***;

export default RecommendBox;

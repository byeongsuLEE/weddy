import ***REMOVED*** RadioGroupItem ***REMOVED*** from "@/components/ui/radio-group";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";

interface RecommendBoxProps ***REMOVED***
  src: string;
  name: string;
  price: number;
  onSelect: (value: string) => void;
  isSelected: boolean; // 선택 여부를 나타내는 prop 추가
***REMOVED***

const RecommendBox = (***REMOVED*** src, name, price, onSelect, isSelected ***REMOVED***: RecommendBoxProps) => ***REMOVED***
  return (
    <div className="flex flex-col">
      <Link to='/board/detail'>
        <img className="w-[150px] h-[150px] rounded-xl" src=***REMOVED***src***REMOVED*** alt="image" />
      </Link>
      <div className="flex items-center justify-between">
        <Link to='/board/detail'>
          <div className="flex flex-col">
            <span className="text-gray-500 mt-2">***REMOVED***name***REMOVED***</span>
            <span>***REMOVED***price.toLocaleString()***REMOVED***원</span>
          </div>
        </Link>
        <div className="mr-3">
          <button
            onClick=***REMOVED***() => onSelect(name)***REMOVED***
            className=***REMOVED***`mt-2 $***REMOVED***isSelected ? 'text-main2' : 'text-gray-400'***REMOVED***`***REMOVED*** // 선택된 경우 색상 변경
          >
            <div className="flex items-center justify-center rounded-full h-[40px] w-[40px] bg-white ">
            <span className="font-bold text-xs">WEDDY</span>
            </div>
          </button>
          <RadioGroupItem value=***REMOVED***name***REMOVED*** id=***REMOVED***name***REMOVED*** className="hidden" />
        </div>
      </div>
    </div>
  );
***REMOVED***;

export default RecommendBox;

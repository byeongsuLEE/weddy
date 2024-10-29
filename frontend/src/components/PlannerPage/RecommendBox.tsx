import ***REMOVED*** RadioGroupItem ***REMOVED*** from "@/components/ui/radio-group";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";

interface RecommendBoxProps ***REMOVED***
  src: string;
  name: string;
  price: number;
***REMOVED***

const RecommendBox = (***REMOVED*** src, name, price ***REMOVED***: RecommendBoxProps) => ***REMOVED***
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
        <RadioGroupItem value=***REMOVED***name***REMOVED*** id=***REMOVED***name***REMOVED*** />
        </div>
      </div>
    </div >
  )
***REMOVED***

export default RecommendBox;
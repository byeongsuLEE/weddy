import BestIcon from "@/icons/BestIcon";
interface BestBoxProps ***REMOVED***
  src: string;
  title: string;
  price: number;
  index?: number;
***REMOVED***

const BestBox = (***REMOVED***src, title, price, index***REMOVED***:BestBoxProps) => ***REMOVED***
  return(
    <div className="flex flex-col relative">
      <img className="w-[150px] h-[150px] rounded-md" src=***REMOVED***src***REMOVED*** alt="" />
      <div className="absolute top-0 left-0">
      <BestIcon />
      <span className="absolute top-3 left-5 text-white font-bold text-xs z-10">***REMOVED***index***REMOVED***</span>
      </div>
      <span>***REMOVED***title***REMOVED***</span>
      <span>***REMOVED***price.toLocaleString()***REMOVED***원</span>
    </div>
  )
***REMOVED***

export default BestBox;
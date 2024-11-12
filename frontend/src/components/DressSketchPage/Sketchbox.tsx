import GotoIcon from "@/icons/Goto";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";

interface SketchBoxProps ***REMOVED***
  studioName: string;
  dressName: string;
  imgSrc?: string;
***REMOVED***

const SketchBox = (***REMOVED*** studioName, dressName, imgSrc ***REMOVED***: SketchBoxProps) => ***REMOVED***
  return (
    <>
      <div className="bg-white h-[70px] rounded-lg w-[350px] my-3 p-5 flex justify-between items-center">
        <span>***REMOVED***studioName***REMOVED*** _ ***REMOVED***dressName***REMOVED***</span>
        <Link 
          to=***REMOVED******REMOVED***
            pathname: "/dress/img",
          ***REMOVED******REMOVED***
          state=***REMOVED******REMOVED*** imgSrc, studioName, dressName ***REMOVED******REMOVED***
        >
          <GotoIcon />
        </Link>
      </div>
    </>
  );
***REMOVED***;

export default SketchBox;

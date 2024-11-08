import TodoButton from "@/common/TodoButton";
import SketchBox from "@/components/DressSketchPage/Sketchbox";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";

const DressSketch = () => ***REMOVED***
  return (
    <div className="m-5 flex flex-col items-center">
      <div className="mt-5 mb-7">
        <Link to="/sketch">
          <TodoButton title="스케치 하기"/>
        </Link>
      </div>
      <SketchBox/>
    </div>
  )
***REMOVED***

export default DressSketch;
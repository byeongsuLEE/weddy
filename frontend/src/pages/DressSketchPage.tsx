import ***REMOVED*** Dress ***REMOVED*** from "@/api/dress.type";
import ***REMOVED*** getDressList ***REMOVED*** from "@/api/dressApi";
import TodoButton from "@/common/TodoButton";
import SketchBox from "@/components/DressSketchPage/Sketchbox";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";

const DressSketch = () => ***REMOVED***
  const [dressList, setDressList] = useState<Dress[]>([]);
  
  useEffect(() => ***REMOVED***
    getDressList().then((data: Dress[]) => ***REMOVED***
      setDressList(data); // 가져온 데이터를 dressList에 저장
    ***REMOVED***);
  ***REMOVED***, []);
  return (
    <div className="m-5 flex flex-col items-center">
      <div className="mt-5 mb-7">
        <Link to="/sketch">
          <TodoButton title="스케치 하기"/>
        </Link>
      </div>      
        ***REMOVED***dressList.map((sketch, index) => (
            <SketchBox key=***REMOVED***index***REMOVED*** imgSrc=***REMOVED***sketch.image***REMOVED*** studioName=***REMOVED***sketch.studio***REMOVED*** dressName=***REMOVED***sketch.dressName***REMOVED***/>
        ))***REMOVED***
    </div>
  );
***REMOVED***;

export default DressSketch;

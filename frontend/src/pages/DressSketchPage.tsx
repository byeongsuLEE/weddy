import ***REMOVED*** Dress ***REMOVED*** from "@/api/dress.type";
import ***REMOVED*** getDressList ***REMOVED*** from "@/api/dressApi";
import TodoButton from "@/common/TodoButton";
import SketchBox from "@/components/DressSketchPage/Sketchbox";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";

const DressSketch = () => ***REMOVED***
  const [dressList, setDressList] = useState<Dress[]>([]);

  useEffect(() => ***REMOVED***
    getDressList()
      .then((data: Dress[]) => ***REMOVED***
        console.log("Fetched Data:", data);
        setDressList(data || []); // 데이터 없을 경우 빈 배열 설정
      ***REMOVED***)
      .catch(error => console.error("Error fetching dress list:", error));
  ***REMOVED***, []);

  return (
    <div className="m-5 flex flex-col items-center">
      <div className="mt-5 mb-7">
        <Link to="/sketch">
          <TodoButton title="스케치 하기" />
        </Link>
      </div>
      ***REMOVED***dressList && dressList.length > 0 ? (
        dressList.map((sketch, index) => (
          <SketchBox
            key=***REMOVED***index***REMOVED***
            imgSrc=***REMOVED***sketch.image***REMOVED***
            studioName=***REMOVED***sketch.studio***REMOVED***
            dressName=***REMOVED***sketch.dressName***REMOVED***
          />
        ))
      ) : (
        <p>드레스 정보를 불러오는 중입니다...</p>
      )***REMOVED***
    </div>
  );
***REMOVED***;

export default DressSketch;

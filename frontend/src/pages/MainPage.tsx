import BestBox from "@/components/MianPage/BestBox";
import ***REMOVED*** MainCarousel ***REMOVED*** from "../components/MainPage/MainCarousel";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";

const Main = () => ***REMOVED***
  const navigate = useNavigate();

  const dummyData = [
    '/dummy/test1.jpg',
    '/dummy/test2.jpg',
    '/dummy/test1.jpg',
    '/dummy/test2.jpg',
    '/dummy/test1.jpg',
    '/dummy/test2.jpg',
  ];

  const dummyMain = [
    '/main/main1.png',
    '/main/main2.png',
    '/main/main3.png',
  ];

  const toDetail = () => ***REMOVED***
    navigate('/board/detail');
  ***REMOVED***;

  return (
    <div className="flex flex-col items-center mb-24">
      <MainCarousel dummyData=***REMOVED***dummyMain***REMOVED*** />
      <div className="grid grid-cols-2 gap-8 mt-10"> ***REMOVED***/* 그리드 적용 */***REMOVED***
        ***REMOVED***dummyData.map((src, index) => (
          <div key=***REMOVED***index***REMOVED*** onClick=***REMOVED***toDetail***REMOVED***>
            <BestBox key=***REMOVED***index***REMOVED*** index=***REMOVED***index+1***REMOVED*** src=***REMOVED***src***REMOVED*** title="test" price=***REMOVED***10000***REMOVED*** />
          </div>
        ))***REMOVED***
      </div>
    </div>
  );
***REMOVED***;

export default Main;

import SDM from "@/components/BoardPage/SDM";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";

const PlannerList = () => ***REMOVED***
  const sdmItems = Array.from(***REMOVED*** length: 10 ***REMOVED***);
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-5 mb-20">
      ***REMOVED***sdmItems.map((_, index) => (
        <div key=***REMOVED***index***REMOVED***>
          <Link to='/board/detail'>
          <SDM src=***REMOVED***"/dummy/test1.jpg"***REMOVED*** name="업체명" price=***REMOVED***1000000***REMOVED*** />
          </Link>
        </div>
      ))***REMOVED***
    </div>
  )
***REMOVED***
export default PlannerList;
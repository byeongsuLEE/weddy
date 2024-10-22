import ***REMOVED*** TabsContent ***REMOVED*** from "@radix-ui/react-tabs";
import SDM from "./SDM";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";

interface SDMListProps ***REMOVED***
  value: string;
***REMOVED***

const SDMList = (***REMOVED*** value ***REMOVED***: SDMListProps) => ***REMOVED***
  // dummy data
  const sdmItems = Array.from(***REMOVED*** length: 10 ***REMOVED***);
  const navigate = useNavigate();
  const toDetail = () => ***REMOVED***
    navigate("/board/detail");
  ***REMOVED***
  return (
      
    <div>
      <TabsContent
        value=***REMOVED***value***REMOVED***
        className="flex flex-wrap justify-center gap-8"
      >
        ***REMOVED***sdmItems.map((_, index) => (
          <div key=***REMOVED***index***REMOVED*** onClick=***REMOVED***toDetail***REMOVED***>
            <SDM src=***REMOVED***"./dummy/test1.jpg"***REMOVED*** name="업체명" price=***REMOVED***1000000***REMOVED*** />
          </div>
        ))***REMOVED***
      </TabsContent>
    </div>
  );
***REMOVED***

export default SDMList;

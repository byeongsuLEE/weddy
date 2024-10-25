import ***REMOVED*** TabsContent ***REMOVED*** from "@radix-ui/react-tabs";
import SDM from "./SDM";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";
import Search from "@/common/Search";

interface SDMListProps ***REMOVED***
  value: string;
  // productList: Product[]
***REMOVED***

const SDMList = (***REMOVED*** value ***REMOVED***: SDMListProps) => ***REMOVED***
  // const [filteredList, setFilteredList] = useState<Product[]>([]);

  // dummy data
  const sdmItems = Array.from(***REMOVED*** length: 10 ***REMOVED***);
  const navigate = useNavigate();

  const toDetail = () => ***REMOVED***
    navigate("/board/detail");
  ***REMOVED***;

  const search = (searchTerm: string) => ***REMOVED***
    console.log(searchTerm);
    // const data = productList.filter((product: Product) => product.vendorName === searchTerm);
    // setFilteredList(data);
  ***REMOVED***;

  return (

    <div>
      <TabsContent
        value=***REMOVED***value***REMOVED***
        className="flex flex-wrap justify-center gap-8"
      >
        <Search search=***REMOVED***search***REMOVED***/>
        ***REMOVED***sdmItems.map((_, index) => (
          <div key=***REMOVED***index***REMOVED*** onClick=***REMOVED***toDetail***REMOVED***>
            <SDM src=***REMOVED***"./dummy/test1.jpg"***REMOVED*** name="업체명" price=***REMOVED***1000000***REMOVED*** />
          </div>
        ))***REMOVED***
      </TabsContent>

      ***REMOVED***/* api 연결 후 */***REMOVED***

      ***REMOVED***/* <TabsContent value=***REMOVED***value***REMOVED*** className="flex flex-wrap justify-center gap-8">
        <Search search=***REMOVED***search***REMOVED*** />

        ***REMOVED***filteredList.length > 0 ? (
          filteredList.map((product) => (
            <div key=***REMOVED***product.productId***REMOVED*** onClick=***REMOVED***toDetail***REMOVED***>
              <SDM src=***REMOVED*** ***REMOVED*** name=***REMOVED*** ***REMOVED*** price=***REMOVED*** ***REMOVED*** />
            </div>
          ))
        ) : (
          productList.map((product) => (
            <div key=***REMOVED***product.productId***REMOVED*** onClick=***REMOVED***toDetail***REMOVED***>
              <SDM src=***REMOVED*** ***REMOVED*** name=***REMOVED*** ***REMOVED*** price=***REMOVED*** ***REMOVED*** />
            </div>
          ))
        )***REMOVED***
      </TabsContent> */***REMOVED***
    </div>
  );
***REMOVED***

export default SDMList;

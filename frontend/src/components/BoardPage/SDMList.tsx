import Search from "@/common/Search";
import ***REMOVED*** TabsContent ***REMOVED*** from "@radix-ui/react-tabs";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";
import SDMBox from "./SDMbox";
// import ***REMOVED*** Product ***REMOVED*** from "@/apis/product.type";
// import ***REMOVED*** useState ***REMOVED*** from "react";

interface SDMListProps ***REMOVED***
  value: string;
  // productList: Product[];
***REMOVED***

const SDMList = (***REMOVED*** value ***REMOVED***: SDMListProps) => ***REMOVED***
  // const [ searchTerm, setSearchTerm ] = useState<string>();
  // const [filteredList, setFilteredList] = useState<Product[]>([]);

  // dummy data
  const sdmItems = Array.from(***REMOVED*** length: 10 ***REMOVED***);

  const search = (searchTerm: string) => ***REMOVED***
    console.log(searchTerm);
    // const data = productList.filter((product: Product) => product.vendorName === searchTerm);
    // setFilteredList(data);
    // setSearchTerm(searchTerm);
  ***REMOVED***;

  return (
    <div>
      <TabsContent
        value=***REMOVED***value***REMOVED***
        className="flex flex-wrap justify-center gap-8"
      >
        <Search search=***REMOVED***search***REMOVED*** />
        ***REMOVED***sdmItems.map((_, index) => (
          <Link to=***REMOVED***"/board/detail"***REMOVED*** key=***REMOVED***index***REMOVED***>
            <SDMBox src=***REMOVED***"./dummy/test1.jpg"***REMOVED*** name="업체명" price=***REMOVED***1000000***REMOVED*** />
          </Link>
        ))***REMOVED***
      </TabsContent>

      ***REMOVED***/* api 연결 후 */***REMOVED***

      ***REMOVED***/* <TabsContent
        value=***REMOVED***value***REMOVED***
        className="flex flex-wrap justify-center gap-8"
      >
        <Search search=***REMOVED***search***REMOVED*** />

        ***REMOVED***searchTerm ? (
          filteredList.length > 0 ? (
            filteredList.map((product: Product) => (
              <Link to=***REMOVED***`board/detail/$***REMOVED***product.id***REMOVED***`***REMOVED*** key=***REMOVED***product.id***REMOVED***>
                <SDM src=***REMOVED***"./dummy/test1.jpg"***REMOVED*** name="업체명" price=***REMOVED***1000000***REMOVED*** />
              </Link>
            ))
          ) : (
            <p>해당 상품이 없습니다.</p>
          )
        ) : (
          productList.map((product: Product) => (
            <Link to=***REMOVED***`board/detail/$***REMOVED***product.id***REMOVED***`***REMOVED*** key=***REMOVED***product.id***REMOVED***>
              <SDM src=***REMOVED***"./dummy/test1.jpg"***REMOVED*** name="업체명" price=***REMOVED***1000000***REMOVED*** />
            </Link>
          ))
        )***REMOVED***
      </TabsContent> */***REMOVED***
    </div>
  );
***REMOVED***;

export default SDMList;

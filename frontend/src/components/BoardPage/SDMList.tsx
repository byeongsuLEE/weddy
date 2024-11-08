import Search from "@/common/Search";
import ***REMOVED*** TabsContent ***REMOVED*** from "@radix-ui/react-tabs";
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";
import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import SDMBox from "./SDMBox";

interface SDMListProps ***REMOVED***
  value: string;
  productList: Product[];
***REMOVED***

const SDMList = (***REMOVED*** value, productList ***REMOVED***: SDMListProps) => ***REMOVED***
  const [searchTerm, setSearchTerm] = useState<string>();
  const [filteredList, setFilteredList] = useState<Product[]>([]);

  const search = (searchTerm: string) => ***REMOVED***
    console.log(searchTerm);
    const data = productList.filter((product: Product) => product.name === searchTerm);
    setFilteredList(data);
    setSearchTerm(searchTerm);
  ***REMOVED***;

  return (
    <div>
      <TabsContent value=***REMOVED***value***REMOVED*** className="flex flex-wrap justify-center gap-8">
        <Search search=***REMOVED***search***REMOVED*** />

        ***REMOVED***searchTerm ? (
          filteredList && filteredList.length > 0 ? (
            filteredList.map((product: Product) => (
              <Link to=***REMOVED***`board/detail/$***REMOVED***product.id***REMOVED***`***REMOVED*** key=***REMOVED***product.id***REMOVED***>
                <SDMBox src=***REMOVED***product.images[0].imageUrl***REMOVED*** name=***REMOVED***product.name***REMOVED*** price=***REMOVED***product.price***REMOVED*** />
              </Link>
            ))
          ) : (
            <p>해당 상품이 없습니다.</p>
          )
        ) : productList && productList.length > 0 ? (
          productList.map((product: Product) => (
            <Link to=***REMOVED***`/board/detail/$***REMOVED***product.id***REMOVED***`***REMOVED*** key=***REMOVED***product.id***REMOVED***>
              <SDMBox src=***REMOVED***product.images[0].imageUrl***REMOVED*** name=***REMOVED***product.name***REMOVED*** price=***REMOVED***product.price***REMOVED*** />
            </Link>
          ))
        ) : (
          <p>상품이 없습니다.</p>
        )***REMOVED***
      </TabsContent>
    </div>
  );
***REMOVED***;

export default SDMList;

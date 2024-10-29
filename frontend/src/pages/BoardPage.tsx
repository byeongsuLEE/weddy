import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** ComboboxDemo ***REMOVED*** from "../common/Filter";
import SDMList from "../components/BoardPage/SDMList";
import ***REMOVED*** Tabs, TabsContent, TabsList, TabsTrigger ***REMOVED*** from "../components/ui/tabs";
import ***REMOVED*** allProducts ***REMOVED*** from "@/api/productApi";
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";

const Board = () => ***REMOVED***
  const [ productList, setProductList ] = useState<Product[]>([]);
  const [ selectedRegion, setSelectedRegion ] = useState<string>("");
  const [ selectedPrice, setSelectedPrice ] = useState<string>("");
  const [ studioList, setStudioList ] = useState<Product[]>([]);
  const [ dressList, setDressList ] = useState<Product[]>([]);
  const [ makeupList, setMakeupList ] = useState<Product[]>([]);

  const ***REMOVED*** data: allProductList ***REMOVED*** = useQuery('allProducts', allProducts);

  const handleregionSelect = (value: string) => ***REMOVED***
    setSelectedRegion(value);
  ***REMOVED***;

  const handlePriceSelect = (value: string) => ***REMOVED***
    setSelectedPrice(value);
  ***REMOVED***;
  //dummy data
  const regions = [
    ***REMOVED***
      value: "서울",
      label: "서울",
    ***REMOVED***,
    ***REMOVED***
      value: "부산",
      label: "부산",
    ***REMOVED***,
    ***REMOVED***
      value: "대구",
      label: "대구",
    ***REMOVED***,
    ***REMOVED***
      value: "대전",
      label: "대전",
    ***REMOVED***,
    ***REMOVED***
      value: "인천",
      label: "인천",
    ***REMOVED***,
    ***REMOVED***
      value: "광주",
      label: "광주",
    ***REMOVED***,
    ***REMOVED***
      value: "울산",
      label: "울산",
    ***REMOVED***,
  ];

  const prices = [
    ***REMOVED***
      value: "5,000,000",
      label: "5,000,000",
    ***REMOVED***,
    ***REMOVED***
      value: "10,000,000",
      label: "10,000,000",
    ***REMOVED***,
    ***REMOVED***
      value: "15,000,000",
      label: "15,000,000",
    ***REMOVED***,
  ];

  useEffect(() => ***REMOVED***
    if (allProductList) ***REMOVED***
      setProductList(allProductList);
    ***REMOVED***
  ***REMOVED***, [allProductList]);

  useEffect(() => ***REMOVED***
    const data = productList?.filter((product: Product) => product.address.includes(selectedRegion) && product.price <= selectedPrice);
    setProductList(data);
  ***REMOVED***, [selectedPrice, selectedRegion]);
  
  useEffect(() => ***REMOVED***
    if (productList) ***REMOVED***
      setStudioList(productList?.filter((product: Product) => product.type === 'studio'));
      setDressList(productList?.filter((product: Product) => product.type === 'dress'));
      setMakeupList(productList?.filter((product: Product) => product.type === 'makeup'));
    ***REMOVED***
  ***REMOVED***, [productList]);

  return (
    <div className="mb-20 mt-5">
      <Tabs defaultValue="studio" >
        <TabsList className="flex justify-center">
          <TabsTrigger value="studio">스튜디오</TabsTrigger>
          <TabsTrigger value="dress">드레스</TabsTrigger>
          <TabsTrigger value="makeup">메이크업</TabsTrigger>
        </TabsList>

        <div className="flex text-gray-600 justify-center gap-4 mt-5">
          <ComboboxDemo lists=***REMOVED***regions***REMOVED*** title="지역" onSelect=***REMOVED***handleregionSelect***REMOVED***/>
          <ComboboxDemo lists=***REMOVED***prices***REMOVED*** title="가격" onSelect=***REMOVED***handlePriceSelect***REMOVED***/>
        </div>

        <TabsContent value="studio">
          <SDMList value="studio" productList=***REMOVED***studioList ?? []***REMOVED***/>
        </TabsContent>

        <TabsContent value="dress">
          <SDMList value="dress" productList=***REMOVED***dressList ?? []***REMOVED***/>
        </TabsContent>

        <TabsContent value="makeup">
          <SDMList value="makeup" productList=***REMOVED***makeupList ?? []***REMOVED***/>
        </TabsContent>

      </Tabs>
    </div>
  );
***REMOVED***;

export default Board;
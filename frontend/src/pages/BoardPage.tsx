import ***REMOVED*** useState, useMemo ***REMOVED*** from "react";
import ***REMOVED*** ComboboxDemo ***REMOVED*** from "../common/Filter";
import SDMList from "../components/BoardPage/SDMList";
import ***REMOVED*** Tabs, TabsContent, TabsList, TabsTrigger ***REMOVED*** from "../components/ui/tabs";
import ***REMOVED*** allProducts ***REMOVED*** from "@/api/productApi";
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ***REMOVED*** useSearchParams ***REMOVED*** from "react-router-dom";

const Board = () => ***REMOVED***
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "studio";

  const ***REMOVED*** data: allProductList = [] ***REMOVED*** = useQuery("allProducts", allProducts);

  const handleTabChange = (value: string) => setSearchParams(***REMOVED*** category: value ***REMOVED***);

  const handleRegionSelect = (value: string) => setSelectedRegion(value);

  const handlePriceSelect = (value: string) =>
    setSelectedPrice(parseInt(value.replace(/,/g, ""), 10));

  const filteredProductList = useMemo(() => ***REMOVED***
    return allProductList.filter((product: Product) => ***REMOVED***
      const matchesRegion = selectedRegion ? product.address.includes(selectedRegion) : true;
      const matchesPrice = selectedPrice ? Number(product.price) <= selectedPrice : true;
      return matchesRegion && matchesPrice;
    ***REMOVED***);
  ***REMOVED***, [selectedRegion, selectedPrice, allProductList]);

  const regions = [
    ***REMOVED*** value: "서울", label: "서울" ***REMOVED***,
    ***REMOVED*** value: "부산", label: "부산" ***REMOVED***,
    ***REMOVED*** value: "대구", label: "대구" ***REMOVED***,
    ***REMOVED*** value: "대전", label: "대전" ***REMOVED***,
    ***REMOVED*** value: "인천", label: "인천" ***REMOVED***,
    ***REMOVED*** value: "광주", label: "광주" ***REMOVED***,
    ***REMOVED*** value: "울산", label: "울산" ***REMOVED***,
  ];

  const prices = [
    ***REMOVED*** value: "5000000", label: "5,000,000" ***REMOVED***,
    ***REMOVED*** value: "10000000", label: "10,000,000" ***REMOVED***,
    ***REMOVED*** value: "15000000", label: "15,000,000" ***REMOVED***,
  ];

  return (
    <div className="mb-20 mt-5">
      <Tabs defaultValue=***REMOVED***category***REMOVED*** onValueChange=***REMOVED***handleTabChange***REMOVED***>
        <TabsList className="flex justify-center">
          <TabsTrigger value="studio">스튜디오</TabsTrigger>
          <TabsTrigger value="dress">드레스</TabsTrigger>
          <TabsTrigger value="makeup">메이크업</TabsTrigger>
        </TabsList>

        <div className="flex text-gray-600 justify-center gap-4 mt-5">
          <ComboboxDemo lists=***REMOVED***regions***REMOVED*** title="지역" onSelect=***REMOVED***handleRegionSelect***REMOVED*** />
          <ComboboxDemo lists=***REMOVED***prices***REMOVED*** title="가격" onSelect=***REMOVED***handlePriceSelect***REMOVED*** />
        </div>

        ***REMOVED***["studio", "dress", "makeup"].map((type) => (
          <TabsContent key=***REMOVED***type***REMOVED*** value=***REMOVED***type***REMOVED***>
            <SDMList
              value=***REMOVED***type***REMOVED***
              productList=***REMOVED***filteredProductList.filter(
                (product) => product.type === type.toUpperCase()
              )***REMOVED***
            />
          </TabsContent>
        ))***REMOVED***
      </Tabs>
    </div>
  );
***REMOVED***;

export default Board;
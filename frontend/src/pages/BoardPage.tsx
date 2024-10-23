import ***REMOVED*** ComboboxDemo ***REMOVED*** from "../common/Filter";
import SDMList from "../components/BoardPage/SDMList";
import ***REMOVED*** Tabs, TabsContent, TabsList, TabsTrigger ***REMOVED*** from "../components/ui/tabs";

const Board = () => ***REMOVED***
  // const ***REMOVED*** data: productList ***REMOVED*** = useQuery('allProduct', allProduct);
  
  // //== 스드메 필터링 ==//
  // const studioProducts = productList.filter((product: Product) => product.type === 'studio');
  // const dressProducts = productList.filter((product: Product) => product.type === 'dress');
  // const makeupProducts = productList.filter((product: Product) => product.type === 'makeup');

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

  return (
    <div className="mb-20 mt-5">
      <Tabs defaultValue="studio">
        <TabsList className="flex justify-center">
          <TabsTrigger value="studio">스튜디오</TabsTrigger>
          <TabsTrigger value="dress">드레스</TabsTrigger>
          <TabsTrigger value="makeup">메이크업</TabsTrigger>
        </TabsList>
        <div className="flex justify-center gap-4 mt-5">
          <ComboboxDemo lists=***REMOVED***regions***REMOVED*** title="지역" />
          <ComboboxDemo lists=***REMOVED***prices***REMOVED*** title="가격" />
        </div>
        ***REMOVED***/* 각 탭에 대응하는 콘텐츠를 렌더링 */***REMOVED***
        <TabsContent value="studio">
          <SDMList value="studio" />
        </TabsContent>

        <TabsContent value="dress">
          <SDMList value="dress" />
        </TabsContent>
        
        <TabsContent value="makeup">
          <SDMList value="makeup" />
        </TabsContent>

      </Tabs>
    </div>
  );
***REMOVED***;

export default Board;

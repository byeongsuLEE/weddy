import ***REMOVED*** ContractProduct ***REMOVED*** from "@/api/contract.type";
import ***REMOVED*** requestContract ***REMOVED*** from "@/api/contractApi";
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import TodoButton from "@/common/TodoButton";
import CartBox from "@/components/CartPage/CartBox";
import ***REMOVED*** useState ***REMOVED*** from 'react';

const CartPage = () => ***REMOVED***
  const dummyData: Product[] = [
    ***REMOVED***
      id: "1",
      type: "DRESS",
      name: "웨딩 드레스 대여",
      price: "150000",
      address: "서울 강남구",
      content: "고급스러운 웨딩 드레스 대여 서비스입니다.",
      vendorName: "Elegant Bridal",
      vendorId: "vendor1",
      images: [],
    ***REMOVED***,
    ***REMOVED***
      id: "2",
      type: "STUDIO",
      name: "웨딩 촬영 패키지",
      price: "30000",
      address: "서울 마포구",
      content: "웨딩 사진 촬영 패키지로 특별한 순간을 담아드립니다.",
      vendorName: "Studio Bliss",
      vendorId: "vendor2",
      images: [],
    ***REMOVED***,
    ***REMOVED***
      id: "3",
      type: "MAKEUP",
      name: "본식 메이크업",
      price: "100000",
      address: "서울 종로구",
      content: "본식 메이크업 서비스로 최고의 하루를 준비하세요.",
      vendorName: "Wedding Palace",
      vendorId: "vendor3",
      images: [],
    ***REMOVED***,
    ***REMOVED***
      id: "4",
      type: "STUDIO",
      name: "꽃 장식 서비스",
      price: "2000000",
      address: "서울 서초구",
      content: "아름다운 꽃 장식으로 예식을 더욱 빛나게 만들어드립니다.",
      vendorName: "Blooming Flora",
      vendorId: "vendor4",
      images: [],
    ***REMOVED***,
    ***REMOVED***
      id: "5",
      type: "DRESS",
      name: "본식+피로연 드레스",
      price: "500000",
      address: "서울 강남구",
      content: "본식과 피로연에서 입을 수 있는 드레스 대여 서비스입니다.",
      vendorName: "Gourmet Delight",
      vendorId: "vendor5",
      images: [],
    ***REMOVED***,
  ];

  const [selectedList, setSelectedList] = useState<***REMOVED*** [type: string]: Product | null ***REMOVED***>(***REMOVED***
    studio: null,
    dress: null,
    makeup: null,
  ***REMOVED***);
  const [selectedAmounts, setSelectedAmounts] = useState<***REMOVED*** [key: string]: number ***REMOVED***>(***REMOVED***
    studio: 0,
    dress: 0,
    makeup: 0,
  ***REMOVED***);

  const totalAmount = Object.values(selectedAmounts).reduce((acc, amount) => acc + amount, 0);

  const handleAmountChange = (type: string, selectedCartItem: Product | null) => ***REMOVED***
    setSelectedAmounts((prev) => (***REMOVED***
      ...prev,
      [type]: selectedCartItem ? parseInt(selectedCartItem.price) : 0,
    ***REMOVED***));

    setSelectedList((prev) => (***REMOVED***
      ...prev,
      [type]: selectedCartItem,
    ***REMOVED***));
  ***REMOVED***;

  const handleCreateContract = async () => ***REMOVED***
    const contractItems = Object.values(selectedList).filter(
      (item): item is Product => item !== null
    );

    const contracts = contractItems.map((item) => ***REMOVED***
      const date = new Date().toISOString().slice(0, 10);
  
      const contractProduct: ContractProduct = ***REMOVED***
        productId: item.id,
        productName: item.name,
        productContent: item.content,
        type: item.type,
      ***REMOVED***;
  
      return ***REMOVED***
        userId: "5",
        totalMount: item.price,
        companyName: item.vendorName,
        startDate: date,
        endDate: date,
        product: contractProduct,
      ***REMOVED***;
    ***REMOVED***);
  
    await requestContract(contracts);
  ***REMOVED***;

  const studio = dummyData.filter((item) => item.type === "STUDIO");
  const dress = dummyData.filter((item) => item.type === "DRESS");
  const makeup = dummyData.filter((item) => item.type === "MAKEUP");

  return (
    <div className="mt-10">
      <CartBox title="STUDIO" type="studio" cartItem=***REMOVED***studio***REMOVED*** onAmountChange=***REMOVED***handleAmountChange***REMOVED*** />
      <CartBox title="DRESS" type="dress" cartItem=***REMOVED***dress***REMOVED*** onAmountChange=***REMOVED***handleAmountChange***REMOVED*** />
      <CartBox title="MAKEUP" type="makeup" cartItem=***REMOVED***makeup***REMOVED*** onAmountChange=***REMOVED***handleAmountChange***REMOVED*** />
      <div className="flex justify-between mt-10 mx-10">
        <span className="text-lg font-bold">총 합계: ***REMOVED***totalAmount.toLocaleString()***REMOVED***원</span>
        <div onClick=***REMOVED***handleCreateContract***REMOVED***>
          <TodoButton title="계약 요청" />
        </div>
      </div>
    </div>
  );
***REMOVED***;

export default CartPage;
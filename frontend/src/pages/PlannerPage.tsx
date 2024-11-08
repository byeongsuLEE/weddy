import ***REMOVED*** createContract ***REMOVED*** from "@/api/contractApi";
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import TodoButton from "@/common/TodoButton";
import CartBox from "@/components/PlannerPage/PlannerBox";
// import ***REMOVED*** recommendState ***REMOVED*** from "@/store/recommendState";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";
// import ***REMOVED*** useRecoilValue ***REMOVED*** from "recoil";

const PlannerPage = () => ***REMOVED***
  const navigate = useNavigate();
  // const recommendList = useRecoilValue(recommendState);

  const [studioList, setStudioList] = useState<Product[]>([]);
  const [dressList, setDressList] = useState<Product[]>([]);
  const [makeupList, setMakeupList] = useState<Product[]>([]);

  const recommendList: Product[] = [
    ***REMOVED***
      id: "1",
      type: "DRESS",
      name: "웨딩 드레스 대여",
      price: "1500000",
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
      price: "3000000",
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

  const [selectedList, setSelectedList] = useState<***REMOVED***
    [type: string]: Product | null;
  ***REMOVED***>(***REMOVED***
    studio: null,
    dress: null,
    makeup: null,
  ***REMOVED***);

  const [selectedAmounts, setSelectedAmounts] = useState<***REMOVED***
    [key: string]: number;
  ***REMOVED***>(***REMOVED***
    studio: 0,
    dress: 0,
    makeup: 0,
  ***REMOVED***);

  const totalAmount = Object.values(selectedAmounts).reduce(
    (acc, amount) => acc + amount,
    0
  );

  const handleAmountChange = (
    type: string,
    selectedCartItem: Product | null
  ) => ***REMOVED***
    const amount = selectedCartItem ? parseInt(selectedCartItem.price) : 0;

    setSelectedAmounts((prev) => (***REMOVED*** ...prev, [type]: amount ***REMOVED***));
    setSelectedList((prev) => (***REMOVED*** ...prev, [type]: selectedCartItem ***REMOVED***));
  ***REMOVED***;

  const handleCreateContract = async () => ***REMOVED***
    const contractItems = Object.values(selectedList).filter(
      Boolean
    ) as Product[];
    await createContract(contractItems);
    navigate("/contract/list");
  ***REMOVED***;

  useEffect(() => ***REMOVED***
    setStudioList(
      recommendList.filter((product: Product) => product.type === "STUDIO")
    );
    setDressList(
      recommendList.filter((product: Product) => product.type === "DRESS")
    );
    setMakeupList(
      recommendList.filter((product: Product) => product.type === "MAKEUP")
    );
  ***REMOVED***, []);

  return (
    <>
      <div className="m-5 flex flex-col items-center">
        <div className="flex items-center mt-5">
          <span className="text-m">
            <span className="text-main2 font-bold">WEDDY 플래너&nbsp;</span>
            추천 상품
          </span>
        </div>
      </div>
      <div className="mt-10">
        <CartBox
          title="STUDIO"
          type="studio"
          cartItem=***REMOVED***studioList***REMOVED***
          onAmountChange=***REMOVED***handleAmountChange***REMOVED***
        />
        <CartBox
          title="DRESS"
          type="dress"
          cartItem=***REMOVED***dressList***REMOVED***
          onAmountChange=***REMOVED***handleAmountChange***REMOVED***
        />
        <CartBox
          title="MAKEUP"
          type="makeup"
          cartItem=***REMOVED***makeupList***REMOVED***
          onAmountChange=***REMOVED***handleAmountChange***REMOVED***
        />
        <div className="flex justify-between mt-10 mx-10">
          <span className="text-lg font-bold">
            총 합계: ***REMOVED***totalAmount.toLocaleString()***REMOVED***원
          </span>
          <div onClick=***REMOVED***handleCreateContract***REMOVED***>
            <TodoButton title="계약 요청" />
          </div>
        </div>
      </div>
    </>
  );
***REMOVED***;

export default PlannerPage;

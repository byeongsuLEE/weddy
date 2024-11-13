import ***REMOVED*** createContract ***REMOVED*** from "@/api/contractApi";
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import TodoButton from "@/common/TodoButton";
import PlannerBox from "@/components/PlannerPage/PlannerBox";
import ***REMOVED*** recommendState ***REMOVED*** from "@/store/recommendState";
import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";
import ***REMOVED*** useRecoilValue ***REMOVED*** from "recoil";

const PlannerPage = () => ***REMOVED***
  const navigate = useNavigate();
  const recommendList = useRecoilValue(recommendState);
  
  const [selectedList, setSelectedList] = useState<***REMOVED*** [type: string]: Product | null; ***REMOVED***>(***REMOVED***
    studio: null,
    dress: null,
    makeup: null,
  ***REMOVED***);

  const [selectedAmounts, setSelectedAmounts] = useState<***REMOVED*** [key: string]: number; ***REMOVED***>(***REMOVED***
    studio: 0,
    dress: 0,
    makeup: 0,
  ***REMOVED***);

  const totalAmount = Object.values(selectedAmounts).reduce((acc, amount) => acc + amount, 0);

  const handleAmountChange = ( type: string, selectedCartItem: Product | null ) => ***REMOVED***
    const amount = selectedCartItem ? parseInt(selectedCartItem.price) : 0;

    setSelectedAmounts((prev) => (***REMOVED*** ...prev, [type]: amount ***REMOVED***));
    setSelectedList((prev) => (***REMOVED*** ...prev, [type]: selectedCartItem ***REMOVED***));
  ***REMOVED***;

  const handleCreateContract = async () => ***REMOVED***
    const contractItems = Object.values(selectedList).filter(Boolean) as Product[];
    await createContract(contractItems);
    navigate("/contract/list");
  ***REMOVED***;

  const goPrompt = () => ***REMOVED***
    navigate('/prompt');
  ***REMOVED***;

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
        ***REMOVED***recommendList.length > 0 ? (
          <>
            ***REMOVED***/* ***REMOVED***["STUDIO", "DRESS", "MAKEUP"].map((category: string) => (
              <PlannerBox
                key=***REMOVED***category***REMOVED***
                title=***REMOVED***category***REMOVED***
                type=***REMOVED***category***REMOVED***
                cartItem=***REMOVED***recommendList.filter(
                  (item: Product) => item.type === category
                )***REMOVED***
                onAmountChange=***REMOVED***handleAmountChange***REMOVED***
              />
            ))***REMOVED***

            <div className="flex justify-between mt-10 mx-10">
              <span className="text-lg font-bold">
                총 합계: ***REMOVED***totalAmount.toLocaleString()***REMOVED***원
              </span>
              <div onClick=***REMOVED***handleCreateContract***REMOVED***>
                <TodoButton title="계약 요청" />
              </div>
            </div> */***REMOVED***
          </>
        ) : (
          <div className="flex flex-col m-5">
            <p className="text-center mb-5">추천받은 상품이 없습니다.</p>
            <div className="ml-auto" onClick=***REMOVED***goPrompt***REMOVED***>
              <TodoButton title="추천 받기"/>
            </div>
          </div>
        )***REMOVED***
        
      </div>
    </>
  );
***REMOVED***;

export default PlannerPage;

import { createContract } from "@/api/contractApi";
import { Product } from "@/api/product.type";
import TodoButton from "@/common/TodoButton";
import PlannerBox from "@/components/PlannerPage/PlannerBox";
import { recommendState } from "@/store/recommendState";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

const PlannerPage = () => {
  const navigate = useNavigate();
  const recommendList = useRecoilValue(recommendState);

  const [selectedList, setSelectedList] = useState<{ [type: string]: Product | null; }>({
    studio: null,
    dress: null,
    makeup: null,
  });

  const [selectedAmounts, setSelectedAmounts] = useState<{ [key: string]: number; }>({
    studio: 0,
    dress: 0,
    makeup: 0,
  });

  const totalAmount = Object.values(selectedAmounts).reduce((acc, amount) => acc + amount, 0);

  const handleAmountChange = (type: string, selectedCartItem: Product | null) => {
    const amount = selectedCartItem ? parseInt(selectedCartItem.price) : 0;

    setSelectedAmounts((prev) => ({ ...prev, [type]: amount }));
    setSelectedList((prev) => ({ ...prev, [type]: selectedCartItem }));
  };

  const handleCreateContract = async () => {
    const contractItems = Object.values(selectedList).filter(Boolean) as Product[];
    await createContract(contractItems);
    navigate("/contract/list");
  };

  const goPrompt = () => {
    navigate('/prompt');
  };

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
        {Array.isArray(recommendList) && recommendList.length > 0 ? (
          <>
            <PlannerBox
              key={"STUDIO"}
              title={"STUDIO"}
              type={"STUDIO"}
              cartItem={
                recommendList.filter(
                  (item: Product) => item.type === "STUDIO"
                )
              }
              onAmountChange={handleAmountChange}
            />

            <div className="flex justify-between mt-10 mx-10">
              <span className="text-lg font-bold">
                총 합계: {totalAmount.toLocaleString()}원
              </span>
              <div onClick={handleCreateContract}>
                <TodoButton title="계약 요청" />
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col m-5">
            <p className="text-center mb-5">추천받은 상품이 없습니다.</p>
            <div className="ml-auto" onClick={goPrompt}>
              <TodoButton title="추천 받기" />
            </div>
          </div>
        )}


      </div>
    </>
  );
};

export default PlannerPage;
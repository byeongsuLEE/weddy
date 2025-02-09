import { getCartItems } from "@/api/cartApi";
import { createContract } from "@/api/contractApi";
import { Product } from "@/api/product.type";
import TodoButton from "@/common/TodoButton";
import CartListBox from "@/components/CartPage/CartListBox";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [selectedList, setSelectedList] = useState<{ [type: string]: Product | null; }>({
    STUDIO: null,
    DRESS: null,
    MAKEUP: null,
  });

  const { data: cartList } = useQuery("getCartItems", getCartItems);

  const handleRemove = () => {
    queryClient.invalidateQueries("getCartItems");
  };

  //== 총 가격 계산 ==//
  const totalAmount = Object.values(selectedList).reduce((acc, item) => acc + (Number(item?.price) || 0), 0).toLocaleString();

  //== 선택한 상품 변경 ==//
  const handleProductChange = (category: string, product: Product | null) => {
    setSelectedList((prev) => ({
      ...prev,
      [category]: product,
    }));
  };

  //== 계약서 요청 ==//
  const handleCreateContract = async () => {
    const contractItems = Object.values(selectedList).filter(Boolean) as Product[];
    await createContract(contractItems);
    navigate("/contract/list");
  };

  return (
    <div className="flex flex-col relative">
      <div className="m-5 flex flex-col items-center">
        {["STUDIO", "DRESS", "MAKEUP"].map((category: string) => (
          <CartListBox
            key={category}
            category={category}
            productList={Array.isArray(cartList) ? cartList?.filter((item: Product) => item.type === category) : []}
            selectedList={selectedList}
            onProductChange={handleProductChange}
            onRemove={handleRemove}
          />
        ))}
      </div>

      <div className="flex justify-end mr-10 mt-14">
        <div className="flex flex-col mr-3">
          {Object.entries(selectedList).map(([category, item]) =>
            item?.name ? (
              <span key={category} className="my-1">
                {item.name}
              </span>
            ) : null
          )}
          <span className="font-bold mt-2">총 가격: </span>
        </div>
        <div className="flex flex-col text-end">
          {Object.entries(selectedList).map(([category, item]) =>
            item?.price ? (
              <span key={category} className="my-1">
                {Number(item.price).toLocaleString()}원
              </span>
            ) : null
          )}
          <span className="font-bold mt-2">
            {totalAmount.toLocaleString()}원
          </span>
        </div>
      </div>

      <div
        className="flex justify-end mr-10 mt-5 mb-24"
        onClick={handleCreateContract}
      >
        <TodoButton title="계약 요청" />
      </div>
    </div>
  );
};

export default CartPage;

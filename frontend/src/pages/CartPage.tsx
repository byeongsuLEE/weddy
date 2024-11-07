import ***REMOVED*** createContract ***REMOVED*** from "@/api/contractApi";
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import ***REMOVED*** deleteFromCart, getCartItems ***REMOVED*** from "@/api/productApi";
import TodoButton from "@/common/TodoButton";
import CartListBox from "@/components/CartPage/CartListBox";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";

const CartPage = () => ***REMOVED***
  const navigate = useNavigate();

  const [studioList, setStudioList] = useState<Product[]>([]);
  const [dressList, setDressList] = useState<Product[]>([]);
  const [makeupList, setMakeupList] = useState<Product[]>([]);

  const [selectedList, setSelectedList] = useState<***REMOVED*** [type: string]: Product | null ***REMOVED***>(***REMOVED***
    STUDIO: null,
    DRESS: null,
    MAKEUP: null,
  ***REMOVED***);

  const ***REMOVED*** data: cartList ***REMOVED*** = useQuery("getCartItems", getCartItems);

  useEffect(() => ***REMOVED***
    if (Array.isArray(cartList)) ***REMOVED***
      setStudioList(cartList.filter((item: Product) => item.type === "STUDIO"));
      setDressList(cartList.filter((item: Product) => item.type === "DRESS"));
      setMakeupList(cartList.filter((item: Product) => item.type === "MAKEUP"));
    ***REMOVED***
  ***REMOVED***, [cartList]);

  //== 총 가격 계산 ==//
  const totalAmount = Object.values(selectedList).reduce((acc, item) => acc + (Number(item?.price) || 0), 0).toLocaleString();

  //== 선택한 상품 변경 ==//
  const handleProductChange = (category: string, product: Product | null) => ***REMOVED***
    setSelectedList((prev) => (***REMOVED***
      ...prev,
      [category]: product,
    ***REMOVED***));
  ***REMOVED***;

  //== 계약서 요청 ==//
  const handleCreateContract = async () => ***REMOVED***
    const contractItems = Object.values(selectedList).filter(Boolean) as Product[];
    await createContract(contractItems);
    navigate("/contract/list");
  ***REMOVED***;

  const deleteCartItem = async(category: string, id: string) => ***REMOVED***
    if (category === 'STUDIO') ***REMOVED***
      setStudioList(studioList.filter((item) => item.id !== id));
    ***REMOVED*** else if (category === 'DRESS') ***REMOVED***
      setDressList(dressList.filter((item) => item.id !== id));
    ***REMOVED*** else if (category === 'MAKEUP') ***REMOVED***
      setMakeupList(makeupList.filter((item) => item.id !== id));
    ***REMOVED***

    await deleteFromCart(id);
  ***REMOVED***;

  return (
    <div className="flex flex-col relative">
      <div className="m-5 flex flex-col items-center">

        <CartListBox
          category="STUDIO"
          productList=***REMOVED***studioList***REMOVED***
          selectedList=***REMOVED***selectedList***REMOVED***
          onProductChange=***REMOVED***handleProductChange***REMOVED***
          onRemove=***REMOVED***deleteCartItem***REMOVED***
        />
        <CartListBox
          category="DRESS"
          productList=***REMOVED***dressList***REMOVED***
          selectedList=***REMOVED***selectedList***REMOVED***
          onProductChange=***REMOVED***handleProductChange***REMOVED***
          onRemove=***REMOVED***deleteCartItem***REMOVED***
        />
        <CartListBox
          category="MAKEUP"
          productList=***REMOVED***makeupList***REMOVED***
          selectedList=***REMOVED***selectedList***REMOVED***
          onProductChange=***REMOVED***handleProductChange***REMOVED***
          onRemove=***REMOVED***deleteCartItem***REMOVED***
        />
      </div>
      
      <div className="flex justify-end mr-10 mt-14">
        <div className="flex flex-col mr-3">
        ***REMOVED***Object.entries(selectedList).map(([category, item]) =>
          item?.name ? (
            <span key=***REMOVED***category***REMOVED*** className="my-1">
              ***REMOVED***item.name***REMOVED***
            </span>
          ) : null
        )***REMOVED***
          <span className="font-bold mt-2">총 가격: </span>
        </div>
        <div className="flex flex-col text-end">
        ***REMOVED***Object.entries(selectedList).map(([category, item]) =>
          item?.price ? (
            <span key=***REMOVED***category***REMOVED*** className="my-1">
              ***REMOVED***Number(item.price).toLocaleString()***REMOVED***원
            </span>
          ) : null
        )***REMOVED***
          <span className="font-bold mt-2">***REMOVED***totalAmount.toLocaleString()***REMOVED***원</span>
        </div>
      </div>
      
      <div className="flex justify-end mr-10 mt-5 mb-24" onClick=***REMOVED***handleCreateContract***REMOVED***>
        <TodoButton title="계약 요청" />
      </div>
    </div>
  );
***REMOVED***;

export default CartPage;
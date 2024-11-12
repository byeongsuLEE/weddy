import ***REMOVED*** createContract ***REMOVED*** from "@/api/contractApi";
import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import ***REMOVED*** deleteFromCart, getCartItems ***REMOVED*** from "@/api/productApi";
import TodoButton from "@/common/TodoButton";
import CartListBox from "@/components/CartPage/CartListBox";
import ***REMOVED*** useState ***REMOVED*** from "react";
import ***REMOVED*** useMutation, useQuery, useQueryClient ***REMOVED*** from "react-query";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";

const CartPage = () => ***REMOVED***
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const ***REMOVED*** data: cartList ***REMOVED*** = useQuery("getCartItems", getCartItems);
  
  const [selectedList, setSelectedList] = useState<***REMOVED*** [type: string]: Product | null; ***REMOVED***>(***REMOVED***
    STUDIO: null,
    DRESS: null,
    MAKEUP: null,
  ***REMOVED***);

  const deleteMutation = useMutation(deleteFromCart, ***REMOVED***
    onSuccess: () => ***REMOVED***
      queryClient.invalidateQueries("getCartItems");
    ***REMOVED***
  ***REMOVED***);

  const handleRemove = (productId: string) => ***REMOVED***
    deleteMutation.mutate(productId);
  ***REMOVED***;

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

  return (
    <div className="flex flex-col relative">
      <div className="m-5 flex flex-col items-center">
        ***REMOVED***["STUDIO", "DRESS", "MAKEUP"].map((category: string) => (
          <CartListBox
            key=***REMOVED***category***REMOVED***
            category=***REMOVED***category***REMOVED***
            productList=***REMOVED***cartList?.filter((item: Product) => item.type === category)***REMOVED***
            selectedList=***REMOVED***selectedList***REMOVED***
            onProductChange=***REMOVED***handleProductChange***REMOVED***
            onRemove=***REMOVED***handleRemove***REMOVED***
          />
        ))***REMOVED***
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
          <span className="font-bold mt-2">
            ***REMOVED***totalAmount.toLocaleString()***REMOVED***원
          </span>
        </div>
      </div>

      <div
        className="flex justify-end mr-10 mt-5 mb-24"
        onClick=***REMOVED***handleCreateContract***REMOVED***
      >
        <TodoButton title="계약 요청" />
      </div>
    </div>
  );
***REMOVED***;

export default CartPage;

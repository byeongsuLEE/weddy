import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ***REMOVED*** getCartItems ***REMOVED*** from "../apis/productApi";

import CartBox from "@/components/CartPage/CartBox";
// import ***REMOVED*** Product ***REMOVED*** from "@/apis/product.type";

const Cart = () => ***REMOVED***
  // //== 장바구니 목록 데이터 ==//
  // const ***REMOVED*** data: cartItem ***REMOVED*** = useQuery('getCartItems', getCartItems);

  // const studio = cartItem?.find((item: Product) => item.type === 'studio');
  // const dress = cartItem?.find((item: Product) => item.type === 'dress');
  // const makeup = cartItem?.find((item: Product) => item.type === 'makeup');
  
  return (
    <div className="m-5">
      <CartBox title="스튜디오 업체명" />
      <CartBox title="드레스 업체명" />
      <CartBox title="헤어/메이크업 업체명" />
    </div>
  )
***REMOVED***

export default Cart;
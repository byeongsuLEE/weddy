import TodoButton from "@/common/TodoButton";
import CartBox from "@/components/CartPage/CartBox";
import ***REMOVED*** useState ***REMOVED*** from 'react';

interface dummyProps ***REMOVED***
  product: string;
  totalMount: number;
  company: string;
  type: string;
***REMOVED***

const CartPage = () => ***REMOVED***
  const dummyData = [
    ***REMOVED*** product: "웨딩 드레스 대여", totalMount: 150000, company: "Elegant Bridal", type: "dress" ***REMOVED***,
    ***REMOVED*** product: "웨딩 촬영 패키지", totalMount: 30000, company: "Studio Bliss", type: "studio" ***REMOVED***,
    ***REMOVED*** product: "본식 메이크업", totalMount: 100000, company: "Wedding Palace", type: "makeup" ***REMOVED***,
    ***REMOVED*** product: "꽃 장식 서비스", totalMount: 2000000, company: "Blooming Flora", type: "studio" ***REMOVED***,
    ***REMOVED*** product: "본식+피로연 드레스", totalMount: 500000, company: "Gourmet Delight", type: "dress" ***REMOVED***,
  ];

  const [selectedAmounts, setSelectedAmounts] = useState<***REMOVED*** [key: string]: number ***REMOVED***>(***REMOVED***
    studio: 0,
    dress: 0,
    makeup: 0,
  ***REMOVED***);

  const totalAmount = Object.values(selectedAmounts).reduce((acc, amount) => acc + amount, 0);

  const handleAmountChange = (type: string, amount: number) => ***REMOVED***
    setSelectedAmounts((prev) => (***REMOVED***
      ...prev,
      [type]: amount,
    ***REMOVED***));
  ***REMOVED***;

  const studio = dummyData.filter((item: dummyProps) => item.type === 'studio');
  const dress = dummyData.filter((item: dummyProps) => item.type === 'dress');
  const makeup = dummyData.filter((item: dummyProps) => item.type === 'makeup');

  return (
    <div className='mt-10'>
      <CartBox
        title="STUDIO"
        type="studio"
        cartItem=***REMOVED***studio***REMOVED***
        onAmountChange=***REMOVED***handleAmountChange***REMOVED***
      />
      <CartBox
        title="DRESS"
        type="dress"
        cartItem=***REMOVED***dress***REMOVED***
        onAmountChange=***REMOVED***handleAmountChange***REMOVED***
      />
      <CartBox
        title="MAKEUP"
        type="makeup"
        cartItem=***REMOVED***makeup***REMOVED***
        onAmountChange=***REMOVED***handleAmountChange***REMOVED***
      />
      <div className="flex justify-between mt-10 mx-10">
        <span className="text-lg font-bold">총 합계: ***REMOVED***totalAmount.toLocaleString()***REMOVED***원</span>
        <TodoButton title="계약 요청" />
      </div>
    </div>
  );
***REMOVED***;

export default CartPage;

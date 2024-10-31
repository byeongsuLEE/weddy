import ***REMOVED*** useState, useEffect ***REMOVED*** from 'react';
import ***REMOVED*** Checkbox ***REMOVED*** from "@/components/ui/checkbox";

interface dummyProps ***REMOVED***
  product: string;
  totalMount: number;
  company: string;
  type: string;
***REMOVED***

interface CartBoxProps ***REMOVED***
  title: string;
  type: string;
  cartItem: dummyProps[];
  onAmountChange: (type: string, amount: number) => void;
***REMOVED***

const CartBox = (***REMOVED*** title, type, cartItem, onAmountChange ***REMOVED***: CartBoxProps) => ***REMOVED***
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCheckboxChange = (index: number) => ***REMOVED***
    setSelectedIndex(selectedIndex === index ? null : index);
  ***REMOVED***;

  useEffect(() => ***REMOVED***
    const selectedAmount = selectedIndex !== null ? cartItem[selectedIndex].totalMount : 0;
    onAmountChange(type, selectedAmount);
  ***REMOVED***, [selectedIndex, cartItem, type, onAmountChange]);

  return (
    <div className="m-5">
      <h2 className="font-bold text-lg mb-3">***REMOVED***title***REMOVED***</h2>
      ***REMOVED***cartItem.map((item, index) => (
        <div
          key=***REMOVED***index***REMOVED***
          className="mx-1 my-5 bg-white h-[70px] w-auto rounded-lg px-5 py-3 flex justify-between"
        >
          <div className="flex items-center">
            <Checkbox
              checked=***REMOVED***selectedIndex === index***REMOVED***
              onCheckedChange=***REMOVED***() => handleCheckboxChange(index)***REMOVED***
            />
            <div className="flex flex-col ml-3">
              <span className="font-bold">***REMOVED***item.product***REMOVED***</span>
              <span className="text-sm text-gray-600">***REMOVED***item.company***REMOVED***</span>
            </div>
          </div>
          <div>
            ***REMOVED***item.totalMount.toLocaleString()***REMOVED***원
          </div>
          <div>
            <button className="text-sm">삭제</button>
          </div>
        </div>
      ))***REMOVED***
    </div>
  );
***REMOVED***;

export default CartBox;

import ***REMOVED*** useState ***REMOVED*** from 'react';
import ***REMOVED*** Checkbox ***REMOVED*** from "@/components/ui/checkbox";
import ***REMOVED*** Product ***REMOVED*** from '@/api/product.type';
import ***REMOVED*** Link ***REMOVED*** from 'react-router-dom';

interface PlannerBoxProps ***REMOVED***
  title: string;
  type: string;
  cartItem: Product[];
  onAmountChange: (type: string, selectedProduct: Product | null) => void;
***REMOVED***

const PlannerBox = (***REMOVED*** title, type, cartItem, onAmountChange ***REMOVED***: PlannerBoxProps) => ***REMOVED***
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCheckboxChange = (index: number) => ***REMOVED***
    const isSelected = selectedIndex === index;
    setSelectedIndex(isSelected ? null : index);
    
    const selectedItem = isSelected ? null : cartItem[index];
    onAmountChange(type, selectedItem);
  ***REMOVED***;
  
  return (
    <div className="m-5">
      <h2 className="font-bold text-lg mb-3">***REMOVED***title***REMOVED***</h2>
      ***REMOVED***cartItem.map((item, index) => (
        <div
          key=***REMOVED***item.id***REMOVED***
          className="mx-1 my-5 bg-white h-[70px] w-auto rounded-lg px-5 py-3 flex justify-between"
        >
          <div className="flex items-center">
            <Checkbox
              checked=***REMOVED***selectedIndex === index***REMOVED***
              onCheckedChange=***REMOVED***() => handleCheckboxChange(index)***REMOVED***
            />
            <Link to=***REMOVED***`/board/detail/$***REMOVED***item.id***REMOVED***`***REMOVED***>
              <div className="flex flex-col ml-3">
                <span className="font-bold">***REMOVED***item.name***REMOVED***</span>
                <span className="text-sm text-gray-600">***REMOVED***item.vendorName***REMOVED***</span>
              </div>
            </Link>
          </div>
          <div>
            ***REMOVED***Number(item.price).toLocaleString()***REMOVED***원
          </div>
          ***REMOVED***/* <div>
            <button className="text-sm">삭제</button>
          </div> */***REMOVED***
        </div>
      ))***REMOVED***
    </div>
  );
***REMOVED***;

export default PlannerBox;

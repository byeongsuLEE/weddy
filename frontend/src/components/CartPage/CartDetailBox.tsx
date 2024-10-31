import ***REMOVED*** Checkbox ***REMOVED*** from "@/components/ui/checkbox";

interface CartDetailBoxProps ***REMOVED***
  product: string;
  totalMount: number;
  company: string;
***REMOVED***

const CartDetailBox = (***REMOVED*** product, totalMount, company ***REMOVED***: CartDetailBoxProps) => ***REMOVED***

  return (
    <div className="mx-1 my-2 bg-mainbg h-[70px] w-auto rounded-lg px-5 py-3 flex justify-between">
      <div className="flex items-center">
        <Checkbox
        />
        <div className="flex flex-col ml-3">
          <span className="font-bold">***REMOVED***product***REMOVED***</span>
          <span className="text-sm text-gray-600">***REMOVED***company***REMOVED***</span>
        </div>
      </div>
      <div>
        ***REMOVED***totalMount.toLocaleString()***REMOVED***원
      </div>
    </div>
  );
***REMOVED***;

export default CartDetailBox;

import { Checkbox } from "@/components/ui/checkbox";

interface CartDetailBoxProps {
  product: string;
  totalMount: number;
  company: string;
}

const CartDetailBox = ({ product, totalMount, company }: CartDetailBoxProps) => {

  return (
    <div className="mx-1 my-2 bg-mainbg h-[70px] w-auto rounded-lg px-5 py-3 flex justify-between">
      <div className="flex items-center">
        <Checkbox
        />
        <div className="flex flex-col ml-3">
          <span className="font-bold">{product}</span>
          <span className="text-sm text-gray-600">{company}</span>
        </div>
      </div>
      <div>
        {totalMount.toLocaleString()}원
      </div>
    </div>
  );
};

export default CartDetailBox;

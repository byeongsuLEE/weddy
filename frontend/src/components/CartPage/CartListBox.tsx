import ***REMOVED*** Product ***REMOVED*** from "@/api/product.type";
import DropdownIcon from "@/icons/DropdownIcon";
import GotoIcon from "@/icons/Goto";
import ***REMOVED*** Accordion, AccordionDetails, AccordionSummary ***REMOVED*** from "@mui/material";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** useNavigate ***REMOVED*** from "react-router-dom";
import CartBox from "./CartBox";

interface CartListBoxProps ***REMOVED***
  category: string;
  productList?: Product[];
  selectedList: ***REMOVED*** [type: string]: Product | null ***REMOVED***;
  onProductChange: (category: string, product: Product | null) => void;
  onRemove: (productId: string) => void;
***REMOVED***

const CartListBox = (***REMOVED*** category, productList, selectedList, onProductChange, onRemove ***REMOVED***: CartListBoxProps) => ***REMOVED***
  const navigate = useNavigate();

  const goboard = () => ***REMOVED***
    navigate(`/board?category=$***REMOVED***category.toLowerCase()***REMOVED***`);
  ***REMOVED***

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => ***REMOVED***
    setIsChecked(!!productList?.length);
  ***REMOVED***, [productList]);

  const handleProductSelect = (product: Product | null) => ***REMOVED***
    onProductChange(category, product);
  ***REMOVED***;

  return (
    <Accordion
      sx=***REMOVED******REMOVED***
        boxShadow: "none",
        border: "none",
        borderRadius: "8px",
        marginY: 3,
        "&:before": ***REMOVED***
          display: "none",
        ***REMOVED***,
      ***REMOVED******REMOVED***
    >
      <AccordionSummary
        aria-controls="panel1-content"
        id="panel1-header"
        className="w-[350px] h-[100px]"
        sx=***REMOVED******REMOVED***
          boxShadow: "none",
          borderBottom: "none",
          padding: "16px",
          margin: 0,
        ***REMOVED******REMOVED***
      >
        <div className="flex justify-between w-[300px]">
          <div className="flex items-center">
            <button
              className=***REMOVED***`$***REMOVED***isChecked ? 'text-main2 bg-mainbg rounded-full h-[35px] w-[35px]' : 'text-gray-400 bg-gray-100 rounded-full h-[35px] w-[35px]'***REMOVED***`***REMOVED***
            >
              <div className="flex items-center justify-center">
                <span className="font-bold text-xs">WEDDY</span>
              </div>
            </button>
            <h1 className="font-bold mx-4">***REMOVED***category***REMOVED***</h1>
          </div>

          ***REMOVED***isChecked ? (
            <div className="flex items-center">
              <DropdownIcon />
            </div>
          ) : (
            <div onClick=***REMOVED***goboard***REMOVED*** className="flex items-center">
              <p className="mr-1">상품 보러가기</p>
              <GotoIcon />
            </div>
          )***REMOVED***
        </div>
      </AccordionSummary>
      ***REMOVED***isChecked ? (
        productList?.map((item: Product, index) => (
          <div key=***REMOVED***index***REMOVED***>
            <CartBox
              item=***REMOVED***item***REMOVED***
              isSelected=***REMOVED***selectedList[category]?.id === item.id***REMOVED***
              onProductSelect=***REMOVED***handleProductSelect***REMOVED***
              onRemove=***REMOVED***() => onRemove(item.id)***REMOVED***
            />
          </div>
        ))
      ) : (
        <AccordionDetails sx=***REMOVED******REMOVED*** border: "none" ***REMOVED******REMOVED***>
          <div className="flex justify-center items-center">
            <p>상품이 없습니다.</p>
          </div>
        </AccordionDetails>
      )***REMOVED***
    </Accordion>
  );
***REMOVED***;

export default CartListBox;

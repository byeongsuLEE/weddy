import ***REMOVED*** deleteFromCart ***REMOVED*** from "@/apis/productApi";
import ***REMOVED*** Accordion, AccordionDetails, AccordionSummary ***REMOVED*** from "@mui/material";

interface CartBoxProps ***REMOVED***
  title: string;
  // product: Product;
***REMOVED***

const CartBox = (***REMOVED*** title ***REMOVED***: CartBoxProps) => ***REMOVED***
  const handleDelete = async () => ***REMOVED***
    await deleteFromCart();
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
      ***REMOVED******REMOVED***>
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
          <h1 className="font-bold mx-4">***REMOVED***title***REMOVED***</h1>
          <button className="w-[50px] h-[25px] text-sm bg-main2 rounded-lg" onClick=***REMOVED***handleDelete***REMOVED***>삭제</button>
        </div>

      </AccordionSummary>
      <AccordionDetails sx=***REMOVED******REMOVED*** border: "none" ***REMOVED******REMOVED***>
        상품 세부 정보
      </AccordionDetails>
    </Accordion>
  )
***REMOVED***
export default CartBox;
import ***REMOVED*** Link ***REMOVED*** from "react-router-dom";
import TodoButton from "../../common/TodoButton";

interface ContractListBoxProps ***REMOVED***
  title: string;
***REMOVED***

const ContractListBox = (***REMOVED*** title ***REMOVED***: ContractListBoxProps) => ***REMOVED***
  return (
    <div className="w-auto h-[100px] bg-white rounded-3xl p-5 flex items-center justify-between my-5">
      <h1 className="font-bold">***REMOVED***title***REMOVED***</h1>
      ***REMOVED***/* <TodoButton title="계약 요청" colorId=***REMOVED***1***REMOVED*** /> */***REMOVED***
      ***REMOVED***/* <TodoButton title="계약 요청중" colorId=***REMOVED***2***REMOVED*** /> */***REMOVED***
      <Link to='/contract'>
      <TodoButton title="서명하기" colorId=***REMOVED***1***REMOVED*** />
      </Link>
      ***REMOVED***/* <TodoButton title="결제하기" colorId=***REMOVED***1***REMOVED*** /> */***REMOVED***
    </div>
  )
***REMOVED***
export default ContractListBox

import ***REMOVED*** Link, useNavigate ***REMOVED*** from "react-router-dom";
import TodoButton from "../../common/TodoButton";
import SearchIcon from "../../icons/searchIcon";
import ***REMOVED*** ContractData ***REMOVED*** from "@/apis/contract.type";

interface ContractListBoxProps ***REMOVED***
  title: string;
  contractInfo: ContractData;
***REMOVED***

const ContractListBox = (***REMOVED*** title ***REMOVED***: ContractListBoxProps) => ***REMOVED***
  const navigate = useNavigate();

  const toDetail = () => ***REMOVED***
    navigate('/board/detail');
  ***REMOVED***;
  
  return (
    <>
    <div className="w-auto h-[100px] bg-white rounded-3xl p-5 flex items-center justify-between my-10">
      <div className="flex items-center" onClick=***REMOVED***toDetail***REMOVED***>
      <h1 className="font-bold mr-4">***REMOVED***title***REMOVED***</h1>
      <SearchIcon />
      </div>
      ***REMOVED***/* <TodoButton title="계약 요청" colorId=***REMOVED***1***REMOVED*** /> */***REMOVED***
      ***REMOVED***/* <TodoButton title="계약 요청중" colorId=***REMOVED***2***REMOVED*** /> */***REMOVED***
      <Link to='/contract'>
      <TodoButton title="서명하기" colorId=***REMOVED***1***REMOVED*** />
      </Link>
      ***REMOVED***/* <TodoButton title="결제하기" colorId=***REMOVED***1***REMOVED*** /> */***REMOVED***

      ***REMOVED***/* ***REMOVED***contractInfo.status === 'CONTRACT_PENDING' ? (
        <TodoButton title="계약 요청" colorId=***REMOVED***1***REMOVED*** />
        // <TodoButton title="계약 요청중" colorId=***REMOVED***2***REMOVED*** />
      ) : (
        contractInfo.status === 'CONTRACT_COMPLETED' ? (
          <Link to='/contract'>
            <TodoButton title="서명하기" colorId=***REMOVED***1***REMOVED*** />
          </Link>
        ) : (
          contractInfo.status === 'SIGN_COMPLETED' ? (
            <TodoButton title="결제하기" colorId=***REMOVED***1***REMOVED*** />
          ) : (
            <TodoButton title="결제완료" colorId=***REMOVED***1***REMOVED*** />
          )
        )
      )***REMOVED*** */***REMOVED***
    </div>
    </>
  )
***REMOVED***
export default ContractListBox

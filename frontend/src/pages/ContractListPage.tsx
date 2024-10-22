// import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ContractListBox from "../components/ContractListPage/ContractListBox";
// import ***REMOVED*** myContract ***REMOVED*** from "@/apis/contractApi";

const ContractList = () => ***REMOVED***
  // const ***REMOVED*** data: contractList ***REMOVED*** = useQuery('myContract', myContract);

  return (
    <div className="m-5">
      <ContractListBox title="스튜디오" />
      <ContractListBox title="드레스" />
      <ContractListBox title="메이크업" />
    </div>
  )
***REMOVED***
export default ContractList;
import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ContractListBox from "../components/ContractListPage/ContractListBox";
import ***REMOVED*** ContractData ***REMOVED*** from "@/api/contract.type";
import ***REMOVED*** myContract ***REMOVED*** from "@/api/contractApi";

const ContractList = () => ***REMOVED***
  const ***REMOVED*** data: contractList ***REMOVED*** = useQuery("myContract", myContract);
  
  return (
    <div className="mt-12 mb-32 mx-5">
      ***REMOVED***contractList?.map((contract: ContractData) => (
        <ContractListBox key=***REMOVED***contract.id***REMOVED*** type=***REMOVED***contract.product.type***REMOVED*** contractInfo=***REMOVED***contract***REMOVED*** />
      ))***REMOVED***
    </div>
  );
***REMOVED***;

export default ContractList;
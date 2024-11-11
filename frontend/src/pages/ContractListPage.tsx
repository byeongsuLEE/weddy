import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ContractListBox from "../components/ContractListPage/ContractListBox";
import ***REMOVED*** ContractData ***REMOVED*** from "@/api/contract.type";
import ***REMOVED*** myContract ***REMOVED*** from "@/api/contractApi";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";

const ContractList = () => ***REMOVED***
  const [ studioContract, setStudioContract ] = useState<ContractData>();
  const [ dressContract, setDressContract ] = useState<ContractData>();
  const [ makeupContract, setMakeupContract ] = useState<ContractData>();

  const ***REMOVED*** data: contractList ***REMOVED*** = useQuery("myContract", myContract);

  useEffect(() => ***REMOVED***
    setStudioContract(contractList?.find((contract: ContractData) => contract.product.type === "STUDIO"));
    setDressContract(contractList?.find((contract: ContractData) => contract.product.type === "DRESS"));
    setMakeupContract(contractList?.find((contract: ContractData) => contract.product.type === "MAKEUP"));
  ***REMOVED***, [contractList]);
  
  return (
    <div className="mt-12 mb-32 mx-5">
      <ContractListBox type="STUDIO" contractInfo=***REMOVED***studioContract***REMOVED***/>
      <ContractListBox type="DRESS" contractInfo=***REMOVED***dressContract***REMOVED***/>
      <ContractListBox type="MAKEUP" contractInfo=***REMOVED***makeupContract***REMOVED***/>
    </div>
  );
***REMOVED***;

export default ContractList;
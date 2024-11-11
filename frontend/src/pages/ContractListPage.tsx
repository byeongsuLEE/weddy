import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ContractListBox from "../components/ContractListPage/ContractListBox";
import ***REMOVED*** ContractData ***REMOVED*** from "@/api/contract.type";
import ***REMOVED*** myContract ***REMOVED*** from "@/api/contractApi";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** NftType ***REMOVED*** from "@/api/nft.type";
import ***REMOVED*** getNFT ***REMOVED*** from "@/hooks/getNFT";

const ContractList = () => ***REMOVED***
  const [ NFTList, setNFTLIst ] = useState<NftType[]>([]);
  const [ studioContract, setStudioContract ] = useState<ContractData>();
  const [ dressContract, setDressContract ] = useState<ContractData>();
  const [ makeupContract, setMakeupContract ] = useState<ContractData>();

  const ***REMOVED*** data: contractList ***REMOVED*** = useQuery("myContract", myContract);

  
  useEffect(() => ***REMOVED***
    setStudioContract(contractList?.find((contract: ContractData) => contract.product.type === "STUDIO"));
    setDressContract(contractList?.find((contract: ContractData) => contract.product.type === "DRESS"));
    setMakeupContract(contractList?.find((contract: ContractData) => contract.product.type === "MAKEUP"));
  ***REMOVED***, [contractList]);
  
  useEffect(() => ***REMOVED***
    const update = async () => ***REMOVED***
      const myNFT = await getNFT();
      setNFTLIst(myNFT);
    ***REMOVED***;
    update();
  ***REMOVED***, []);
  return (
    <div className="mt-12 mb-32 mx-5">
      ***REMOVED***NFTList ? (
        <>
          <ContractListBox type="STUDIO" NftData=***REMOVED***NFTList?.find((nft: NftType) => nft.contractId === studioContract?.id)***REMOVED*** contractInfo=***REMOVED***studioContract***REMOVED***/>
          <ContractListBox type="DRESS" NftData=***REMOVED***NFTList?.find((nft: NftType) => nft.contractId === dressContract?.id)***REMOVED*** contractInfo=***REMOVED***dressContract***REMOVED***/>
          <ContractListBox type="MAKEUP" NftData=***REMOVED***NFTList?.find((nft: NftType) => nft.contractId === makeupContract?.id)***REMOVED*** contractInfo=***REMOVED***makeupContract***REMOVED***/>
        </>
      ) : null***REMOVED***
    </div>
  );
***REMOVED***;

export default ContractList;
import ***REMOVED*** useMutation, useQuery, useQueryClient ***REMOVED*** from "react-query";
import ContractListBox from "../components/ContractListPage/ContractListBox";
import ***REMOVED*** changeStatus, myContract ***REMOVED*** from "@/api/contractApi";
import ***REMOVED*** useEffect, useState ***REMOVED*** from "react";
import ***REMOVED*** NftType ***REMOVED*** from "@/api/nft.type";
import ***REMOVED*** getNFT ***REMOVED*** from "@/hooks/getNFT";
import ***REMOVED*** ContractData ***REMOVED*** from "@/api/contract.type";

const ContractList = () => ***REMOVED***
  const queryClient = useQueryClient();
  const [ nftList, setNftLIst ] = useState<NftType[]>([]);

  const ***REMOVED*** data: contractList ***REMOVED*** = useQuery("myContract", myContract);

  const changeMutation = useMutation(changeStatus, ***REMOVED***
    onSuccess: () => ***REMOVED***
      queryClient.invalidateQueries("myContract");
    ***REMOVED***
  ***REMOVED***);

  const handleChangeStatus = (contractId: string) => ***REMOVED***
    changeMutation.mutate(contractId);
  ***REMOVED***;
  
  useEffect(() => ***REMOVED***
    const update = async () => ***REMOVED***
      const myNFT = await getNFT();
      setNftLIst(myNFT);
    ***REMOVED***;
    update();
  ***REMOVED***, []);

  return (
    <div className="mt-12 mb-32 mx-5">
      ***REMOVED***nftList ? (
        <>
          ***REMOVED***['STUDIO', 'DRESS', 'MAKEUP'].map((category: string) => (
            <ContractListBox
            key=***REMOVED***category***REMOVED***
            type=***REMOVED***category***REMOVED***
            nftList=***REMOVED***nftList.filter((nft: NftType) => nft.type === category)***REMOVED***
            contractInfo=***REMOVED***contractList?.find((contract: ContractData) => contract.product.type == category)***REMOVED***
            onChange=***REMOVED***handleChangeStatus***REMOVED***
            />
          ))***REMOVED***
        </>
      ) : null***REMOVED***
    </div>
  );
***REMOVED***;

export default ContractList;
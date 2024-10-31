import ContractListBox from "../components/ContractListPage/ContractListBox";
import ***REMOVED*** ContractData ***REMOVED*** from "@/api/contract.type";


const ContractList = () => ***REMOVED***
  // const ***REMOVED*** data: contractList ***REMOVED*** = useQuery('myContract', myContract);

  // const studioContract = contractList?.find((contract: ContractData) => contract.type === 'STUDIO');
  // const dressContract = contractList?.find((contract: ContractData) => contract.type === 'DRESS');
  // const makeupContract = contractList?.find((contract: ContractData) => contract.type === 'MAKEUP');

  //dummy data
  const contracts: ContractData[] = [
    ***REMOVED***
      id: 1,
      productName: "STUDIO Package",
      type: "STUDIO",
      status: "PAYMENT_PENDING",
      totalMount: "2000000",
      downPayment: "1000000",
      finalPayment: "1000000",
      companyName: "SSAFY Studio",
      startDate: new Date("2024-10-01"),
      endDate: new Date("2024-10-10")
    ***REMOVED***,
    ***REMOVED***
      id: 2,
      productName: "Dress Rental",
      type: "DRESS",
      status: "SIGN_PENDING",
      totalMount: "1500000",
      downPayment: "500000",
      finalPayment: "1000000",
      companyName: "SSAFY Dresses",
      startDate: new Date("2024-10-15"),
      endDate: new Date("2024-10-20")
    ***REMOVED***,
    ***REMOVED***
      id: 3,
      productName: "Makeup Service",
      type: "MAKEUP",
      status: "PAYMENT_COMPLETED",
      totalMount: "1000000",
      downPayment: "500000",
      finalPayment: "500000",
      companyName: "SSAFY Makeup",
      startDate: new Date("2024-10-25"),
      endDate: new Date("2024-10-30")
    ***REMOVED***
  ];
  return (
    <div className="my-12 mx-5">
      ***REMOVED***contracts.map((contract) => (
        <ContractListBox key=***REMOVED***contract.id***REMOVED*** type=***REMOVED***contract.type***REMOVED*** contractInfo=***REMOVED***contract***REMOVED*** />
      ))***REMOVED***
    </div>
  );
***REMOVED***;
export default ContractList;

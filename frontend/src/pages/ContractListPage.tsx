// import ***REMOVED*** useQuery ***REMOVED*** from "react-query";
import ContractListBox from "../components/ContractListPage/ContractListBox";
import ***REMOVED*** ContractData ***REMOVED*** from "@/api/contract.type";
// import ***REMOVED*** myContract ***REMOVED*** from "@/api/contractApi";

const ContractList = () => ***REMOVED***
  // const ***REMOVED*** data: contractList ***REMOVED*** = useQuery("myContract", myContract);

  //dummy data
  const contracts: ContractData[] = [
    ***REMOVED***
      id: 1,
      product: ***REMOVED***
        productId: "P001",
        productName: "STUDIO Package",
        productContent: "Comprehensive studio package including photo and video sessions",
        type: "STUDIO",
      ***REMOVED***,
      customer: "Customer 1",
      content: "Detailed contract for studio package",
      status: "PAYMENT_PENDING",
      totalMount: "2000000",
      companyName: "SSAFY Studio",
      startDate: new Date("2024-10-01"),
      endDate: new Date("2024-10-10"),
      title: "STUDIO Package Contract",
      userName: "John Doe",
      code: "C001"
    ***REMOVED***,
    ***REMOVED***
      id: 2,
      product: ***REMOVED***
        productId: "P002",
        productName: "Dress Rental",
        productContent: "Rental of formal dresses for special events",
        type: "DRESS",
      ***REMOVED***,
      customer: "Customer 2",
      content: "Contract for dress rental service",
      status: "SIGN_PENDING",
      totalMount: "1500000",
      companyName: "SSAFY Dresses",
      startDate: new Date("2024-10-15"),
      endDate: new Date("2024-10-20"),
      title: "Dress Rental Contract",
      userName: "Jane Doe",
      code: "C002"
    ***REMOVED***,
    ***REMOVED***
      id: 3,
      product: ***REMOVED***
        productId: "P003",
        productName: "Makeup Service",
        productContent: "Professional makeup service for events",
        type: "MAKEUP",
      ***REMOVED***,
      customer: "Customer 3",
      content: "Contract for makeup service",
      status: "PAYMENT_COMPLETED",
      totalMount: "1000000",
      companyName: "SSAFY Makeup",
      startDate: new Date("2024-10-25"),
      endDate: new Date("2024-10-30"),
      title: "Makeup Service Contract",
      userName: "Alice Doe",
      code: "C003"
    ***REMOVED***
  ];
  
  return (
    <div className="my-12 mx-5">
      ***REMOVED***contracts.map((contract) => (
        <ContractListBox key=***REMOVED***contract.id***REMOVED*** type=***REMOVED***contract.product.type***REMOVED*** contractInfo=***REMOVED***contract***REMOVED*** />
      ))***REMOVED***

      ***REMOVED***/* ***REMOVED***contractList?.map((contract: ContractData) => (
        <ContractListBox key=***REMOVED***contract.id***REMOVED*** type=***REMOVED***contract.type***REMOVED*** contractInfo=***REMOVED***contract***REMOVED*** />
      ))***REMOVED*** */***REMOVED***
    </div>
  );
***REMOVED***;
export default ContractList;

import ContractListBox from "../components/ContractListPage/ContractListBox";

const ContractList = () => ***REMOVED***
  // const ***REMOVED*** data: contractList ***REMOVED*** = useQuery('myContract', myContract);

  // const studioContract = contractList?.find((contract: ContractData) => contract.type === 'studio');
  // const dressContract = contractList?.find((contract: ContractData) => contract.type === 'dress');
  // const makeupContract = contractList?.find((contract: ContractData) => contract.type === 'makeup');

  return (
    <div className="my-12 mx-5">
      <ContractListBox title="스튜디오" />
      <ContractListBox title="드레스" />
      <ContractListBox title="메이크업" />
    </div>
  );
***REMOVED***;
export default ContractList;

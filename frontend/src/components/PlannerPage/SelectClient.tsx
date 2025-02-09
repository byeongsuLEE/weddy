import ClientBox from "./ClientBox";

const SelectClient = () => {
  const clientBoxes = Array.from({ length: 10 });

  return (
    <>
     <div className="flex flex-wrap -mx-2">
      {clientBoxes.map((_, index) => (
        <div key={index} className="w-1/2 px-2 mb-4">
          <ClientBox />
        </div>
      ))}
    </div></>
  )
}

export default SelectClient;
import ClientBox from "./ClientBox";

const SelectClient = () => ***REMOVED***
  const clientBoxes = Array.from(***REMOVED*** length: 10 ***REMOVED***);

  return (
    <>
     <div className="flex flex-wrap -mx-2">
      ***REMOVED***clientBoxes.map((_, index) => (
        <div key=***REMOVED***index***REMOVED*** className="w-1/2 px-2 mb-4">
          <ClientBox />
        </div>
      ))***REMOVED***
    </div></>
  )
***REMOVED***

export default SelectClient;
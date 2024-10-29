interface SDMProps ***REMOVED***
  src: string;
  name: string;
  price: number;
***REMOVED***

const SDMBox = (***REMOVED*** src, name, price ***REMOVED***: SDMProps) => ***REMOVED***
  return (
    <div className="flex flex-col">
      <img className="w-[150px] h-[150px] rounded-xl" src=***REMOVED***src***REMOVED*** alt="image" />
      <div className="flex flex-col">
        <span className="text-gray-500 mt-2">***REMOVED***name***REMOVED***</span>
        <span>***REMOVED***price.toLocaleString()***REMOVED***원</span>
      </div>
    </div >
  )
***REMOVED***

export default SDMBox;
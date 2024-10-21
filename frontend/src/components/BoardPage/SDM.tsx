interface SDMProps ***REMOVED***
  src:string;
  name:string;
  price:number;
***REMOVED***


const SDM = (***REMOVED***src,name, price***REMOVED***:SDMProps) => ***REMOVED***
  return (
    <div className="flex flex-col">
      <img className="w-[150px] h-[150px] rounded-xl" src=***REMOVED***src***REMOVED*** alt="" />
      <span className="text-gray-500">***REMOVED***name***REMOVED***</span>
      <span>***REMOVED***price.toLocaleString()***REMOVED***원</span>
    </div>
  )
***REMOVED***

export default SDM;
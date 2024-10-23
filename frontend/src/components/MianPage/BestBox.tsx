interface BestBoxProps ***REMOVED***
  src: string;
  title: string;
  price: number;
***REMOVED***

const BestBox = (***REMOVED***src, title, price***REMOVED***:BestBoxProps) => ***REMOVED***
  return(
    <div className="flex flex-col">
      <img className="w-[150px] h-[150px]" src=***REMOVED***src***REMOVED*** alt="" />
      <span>***REMOVED***title***REMOVED***</span>
      <span>***REMOVED***price***REMOVED***</span>
    </div>
  )
***REMOVED***

export default BestBox;
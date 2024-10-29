
interface TodoButtonProps ***REMOVED***
  title: string;
  colorId?: number;
***REMOVED***

const TodoButton = (***REMOVED*** title, colorId ***REMOVED***: TodoButtonProps) => ***REMOVED***
  const colorClass = colorId === 1 ? 'bg-main1' : 'bg-main2';
  return (
    <button className=***REMOVED***`w-[120px] h-[30px] flex items-center justify-center $***REMOVED***colorClass***REMOVED*** rounded-3xl p-2`***REMOVED***>***REMOVED***title***REMOVED***</button>
  )
***REMOVED***
export default TodoButton;
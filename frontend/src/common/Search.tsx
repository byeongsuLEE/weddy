import SearchIcon from "@/icons/searchIcon";
import ***REMOVED*** useState ***REMOVED*** from "react";

interface SearchProp ***REMOVED***
  search: (searchTerm: string) => void;
***REMOVED***

const Search = (***REMOVED*** search ***REMOVED***: SearchProp) => ***REMOVED***
  const [searchInput, setSearchInput] = useState<string>();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => ***REMOVED***
    if (event.key === 'Enter') ***REMOVED***
      //== 입력값이 없을 때 ==//
      if (!searchInput || searchInput.trim() === "") ***REMOVED***
        alert('검색어를 입력해주세요.');
        setSearchInput("");
      ***REMOVED***
      //== 있을 때 prop ==//
      search(searchInput || "");
    ***REMOVED***
  ***REMOVED***;

  const handleClick = () => ***REMOVED***
    //== 입력값이 없을 때 ==//
    if (!searchInput || searchInput.trim() === "") ***REMOVED***
      alert('검색어를 입력해주세요.');
      setSearchInput("");
    ***REMOVED***
    //== 있을 때 prop ==//
    search(searchInput || "");
  ***REMOVED***;

  return (
    <div className="flex relative justify-center items-center mt-3">
      <input
        className="w-[280px] h-[40px] rounded-lg border border-gray-300 p-2 pr-10"
        type="text"
        value=***REMOVED***searchInput || ""***REMOVED***
        onChange=***REMOVED***(e) => setSearchInput(e.target.value)***REMOVED***
        onKeyDown=***REMOVED***handleKeyDown***REMOVED***
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2" onClick=***REMOVED***handleClick***REMOVED***>
        <SearchIcon />
      </div>
    </div>

  )
***REMOVED***

export default Search;
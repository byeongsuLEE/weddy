import SearchIcon from "@/icons/SearchIcon";
import { useState } from "react";

interface SearchProp {
  search: (searchTerm: string) => void;
}

const Search = ({ search }: SearchProp) => {
  const [searchInput, setSearchInput] = useState<string>();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      //== 입력값이 없을 때 ==//
      if (!searchInput || searchInput.trim() === "") {
        alert('검색어를 입력해주세요.');
        setSearchInput("");
      }
      //== 있을 때 prop ==//
      search(searchInput || "");
    }
  };

  const handleClick = () => {
    //== 입력값이 없을 때 ==//
    if (!searchInput || searchInput.trim() === "") {
      alert('검색어를 입력해주세요.');
      setSearchInput("");
    }
    //== 있을 때 prop ==//
    search(searchInput || "");
  };

  return (
    <div className="flex relative justify-center items-center mt-3">
      <input
        className="w-[280px] h-[40px] rounded-lg border border-gray-300 p-2 pr-10"
        type="text"
        value={searchInput || ""}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2" onClick={handleClick}>
        <SearchIcon />
      </div>
    </div>

  )
}

export default Search;
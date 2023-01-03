import React from "react";
// Components
import Spinner from "./Spinner";

interface SearchBoxProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({ text, setText, isLoading }) => {
  return (
    <div className="px-2 py-1">
      <div className="rounded-full overflow-hidden relative">
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          className="w-full p-4 border-none outline-none text-sm text-gray-900 placeholder:text-gray-500"
          placeholder="Search user by name..."
        />
        {!isLoading && text.length > 0 && (
          <button
            className="bg-transparent border-none outline-none p-4 absolute right-4 top-[50%] translate-y-[-50%] text-gray-600"
            onClick={() => {
              setText("");
            }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        )}
        {isLoading && (
          <div className="absolute right-5 top-[50%] translate-y-[-50%]">
            <Spinner color="fill-gray-700" size="w-4 h-4" />
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;

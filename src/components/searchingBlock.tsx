import React, { useState } from "react";

interface searchingInputProps {
  searchingFunction: Function;
}

const SearchingBlock = (props: searchingInputProps) => {
  const { searchingFunction } = props;
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    searchingFunction(inputValue);
    setInputValue(inputValue);
  };

  return (
    <div className="p-8">
      <div className="border-2 rounded-2xl border-harp flex flex-row items-center gap-5 p-1">
        <svg className="w-8 h-8 m-2 mx-4" fill="none" viewBox="0 0 20 20">
          <path
            stroke="#deede1"
            strokeWidth="10%"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <input
          type="text"
          id="inputId"
          placeholder="Buscar..."
          value={inputValue ?? ""}
          onChange={handleChange}
          className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3"
        />
      </div>
    </div>
  );
};

export default SearchingBlock;

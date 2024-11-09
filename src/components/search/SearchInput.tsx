'use client';

import { useState } from 'react';
import SearchIcon from '@public/icons/search2.svg';
import CloseIcon from '@public/icons/close.svg';

interface InputProps {
  onChange: (query: string) => void;
  query: string;
}

export default function SearchInput({ onChange, query }: InputProps) {
  const [keyword, setKeyword] = useState(query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setKeyword(text);
    onChange(text);
  };

  const handleClear = () => {
    setKeyword('');
    onChange('');
  };

  return (
    <div className="flex h-[3.25rem] flex-shrink-0 flex-row bg-[#424242] items-center pl-5 pr-[1.12rem] mt-11">
      <SearchIcon />
      <input
        className="flex w-[16.875rem] text-[#c4c4c4] text-[0.951rem] bg-transparent ml-2 mr-6"
        placeholder="Search for a show, movie, genre, etc."
        value={keyword}
        onChange={handleChange}
      />
      <CloseIcon onClick={handleClear} />
    </div>
  );
}

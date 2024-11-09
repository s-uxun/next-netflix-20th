'use client';
import SearchIcon from '@public/icons/search2.svg';
import CloseIcon from '@public/icons/close.svg';

interface InputProps {
  onChange: (query: string) => void;
  query: string;
}

export default function SearchInput({ onChange, query }: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange('');
  };

  return (
    <div className="flex h-[3.25rem] flex-shrink-0 flex-row bg-[#424242] items-center pl-5 pr-[1.12rem] mt-11">
      <SearchIcon />
      <input
        className="flex w-[16.875rem] text-[#c4c4c4] text-[0.951rem] bg-transparent ml-2 mr-6"
        placeholder="Search for a show, movie, genre, etc."
        value={query}
        onChange={handleChange}
      />
      <CloseIcon onClick={handleClear} />
    </div>
  );
}

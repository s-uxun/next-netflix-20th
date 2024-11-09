'use client';
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

// components
import SearchInput from '@components/search/SearchInput';
import Item from '@components/search/Item';

// type & api
import { Content } from '@api/types';
import { getSearch } from '@api/search';

export default function SearchClient() {
  const [contents, setContents] = useState<Content[]>([]);
  const [query, setQuery] = useState('');

  // 입력값 디바운싱
  const debouncedSearch = useDebouncedCallback(async (input) => {
    const response = await getSearch(input);
    setContents(response || []);
  }, 300);

  const handleChange = (input: string) => {
    setQuery(input);
    debouncedSearch(input);
  };

  // 초기 데이터 불러오기
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const response = await getSearch('');
        setContents(response || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInitialData();
  }, []);

  return (
    <div className="flex flex-col flex-grow overflow-auto">
      <SearchInput onChange={handleChange} query={query} />
      <div className="text-White text-[1.67175rem] font-bold my-4">
        Top Searches
      </div>
      {contents.map((content) => (
        <div key={content.id}>
          <Item
            id={content.id}
            title={content.original_title as string}
            posterUrl={content.poster_path as string}
          />
        </div>
      ))}
    </div>
  );
}

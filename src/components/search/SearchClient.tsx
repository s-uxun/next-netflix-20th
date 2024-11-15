'use client';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';

// components
import SearchInput from '@components/search/SearchInput';
import Item from '@components/search/Item';

// type & api
import { Content } from '@api/types';
import { getSearchInfinite } from '@api/search';

export default function SearchClient() {
  const [contents, setContents] = useState<Content[]>([]);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { ref, inView } = useInView();

  // 입력값 디바운싱
  const debouncedSearch = useDebouncedCallback((input: string) => {
    setDebouncedQuery(input);
  }, 300);

  const handleChange = (input: string) => {
    setQuery(input);
    debouncedSearch(input);
  };

  // 무한 스크롤
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['items', debouncedQuery],
      queryFn: ({ pageParam = 1 }) => {
        return getSearchInfinite({ page: pageParam, query: debouncedQuery });
      },
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
      initialPageParam: 1,
    });

  useEffect(() => {
    if (data) {
      const allItems = data?.pages.flatMap((page) => page.results) || [];
      console.log('All fetched items:', allItems);
      setContents(allItems);
      console.log('ref' + ref);
    }
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="flex flex-col flex-grow overflow-auto">
      <SearchInput onChange={handleChange} query={query} />
      <div className="text-White text-[1.67175rem] font-bold my-4">
        Top Searches
      </div>

      <div>
        {contents.map((content: Content, index) => (
          <div key={`${content.id}-${index}`}>
            <Item
              id={content.id}
              title={content.original_title as string}
              posterUrl={content.poster_path as string}
            />
          </div>
        ))}
        <div className="w-full h-[5px] bg-transparent">
          {isFetchingNextPage ? (
            <span></span>
          ) : (
            hasNextPage && <div ref={ref}></div>
          )}
        </div>
      </div>
    </div>
  );
}

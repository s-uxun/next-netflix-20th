'use client';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

// components
import SearchInput from '@components/search/SearchInput';
const Item = dynamic(() => import('@components/search/Item')); // 레이지 로딩
import SkeletonItem from '@components/search/SkeletonItem'; // 스켈레톤 컴포넌트

// type & api
import { Content } from '@api/types';
import { getSearchInfinite } from '@api/search';

export default function SearchClient() {
  const [contents, setContents] = useState<Content[]>([]); // 결과 데이터
  const [query, setQuery] = useState(''); // 입력한 검색어
  const [debouncedQuery, setDebouncedQuery] = useState(''); // 디바운싱된 검색어
  const { ref, inView } = useInView(); // 스크롤 영역 판단
  const [isLoading, setIsLoading] = useState(true);

  // 입력값 디바운싱
  const debouncedSearch = useDebouncedCallback((input: string) => {
    setDebouncedQuery(input);
  }, 300);

  const handleChange = (input: string) => {
    setQuery(input);
    debouncedSearch(input);
  };

  // 무한 스크롤
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: queryLoading,
  } = useInfiniteQuery({
    queryKey: ['items', debouncedQuery],
    queryFn: ({ pageParam = 1 }) => {
      return getSearchInfinite({ page: pageParam, query: debouncedQuery });
    },
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    initialPageParam: 1, // 첫 번째 페이지 초기화 필수
  });

  // 로딩 상태 관리
  useEffect(() => {
    if (queryLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [queryLoading]);

  // 무한 스크롤 트리거 (스크롤이 ref 요소에 도달 시 다음 페이지 fetch)
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  // 새 데이터 불러올 때 검색 결과 업데이트
  useEffect(() => {
    if (data) {
      const allItems = data?.pages.flatMap((page) => page.results) || [];
      setContents(allItems);
    }
  }, [data]);

  return (
    <div className="flex flex-col flex-grow overflow-auto">
      <SearchInput onChange={handleChange} query={query} />
      <div className="text-White text-[1.67175rem] font-bold my-4">
        Top Searches
      </div>
      {isLoading ? (
        <div>
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonItem key={index} />
          ))}
        </div>
      ) : (
        <div>
          {contents.map((content: Content, index) => (
            <div key={`${content.id}-${index}`}>
              {' '}
              {/*key 중복 방지*/}
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
              hasNextPage && <div ref={ref}></div> // 다음 페이지 로드 트리거
            )}
          </div>
        </div>
      )}
    </div>
  );
}

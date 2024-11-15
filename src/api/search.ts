import { PageParams, SearchResponse } from './types';

export const getSearchInfinite = async ({
  page = 1,
  query,
}: PageParams): Promise<SearchResponse> => {
  try {
    const apiUrl = query
      ? `/api/searchMovies?query=${query}&page=${page}`
      : `/api/searchDefault?page=${page}`;

    const searchRes = await fetch(apiUrl, {
      cache: 'no-store',
    });
    const searchData = await searchRes.json();
    return searchData;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch search results');
  }
};

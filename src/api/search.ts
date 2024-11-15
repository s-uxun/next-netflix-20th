import { PageParams, SearchResponse } from './types';

export const getSearch = async (query: string) => {
  try {
    const apiUrl =
      query.length > 0
        ? `/api/searchMovies?query=${query}`
        : '/api/searchDefault';

    const searchRes = await fetch(apiUrl, {
      cache: 'no-store',
    });
    const searchData = await searchRes.json();
    console.log('정상');
    return searchData.results;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchInfinite = async ({
  page = 1,
  query,
}: PageParams): Promise<SearchResponse> => {
  try {
    const apiUrl =
      query && query.length > 0
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

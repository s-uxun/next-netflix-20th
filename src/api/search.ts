//import instance from './instance';

export async function getSearch(query = '') {
  // return await instance.get(
  //   `/search/movie?&language=en-US&page=1&include_adult=false&query=you`,
  // );

  const apiUrl = query
    ? `/api/searchMovies?query=${encodeURIComponent(query)}`
    : '/api/searchDefault';

  const searchRes = await fetch(apiUrl, {
    cache: 'no-store',
  });
  const searchData = await searchRes.json();

  return searchData.results;
}

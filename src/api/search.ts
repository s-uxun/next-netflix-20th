//import instance from './instance';

export async function getSearch() {
  // return await instance.get(
  //   `/search/movie?&language=en-US&page=1&include_adult=false&query=you`,
  // );

  const searchRes = await fetch(`/api/searchMovies`, {
    cache: 'no-store',
  });
  const searchData = await searchRes.json();
  return searchData.results;
}

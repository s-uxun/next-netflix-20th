import instance from './axios';

export async function getSearch() {
  return await instance.get(
    `/search/movie?&language=en-US&page=1&include_adult=false&query=you`,
  );

  // const searchRes = await fetch(`/api/searchMovies`);
  // const searchData = await searchRes.json();
  // // console.log(searchData);
  // return searchData.results;
}

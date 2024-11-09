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

    return searchData.results;
  } catch (error) {
    console.log(error);
  }
};

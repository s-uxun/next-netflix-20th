import instance from './instance';

export const getContents = async (category: string) => {
  try {
    const res = await instance.get(`${category}`, {
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    const media_type = category.includes('/tv') ? 'tv' : 'movie';

    return res.data.results.map((item: any) => ({
      ...item,
      media_type,
    }));
  } catch (error) {
    console.error();
  }
};

export const getAllMovies = async () => {
  const categories = [
    '/movie/popular',
    '/movie/top_rated',
    '/movie/now_playing',
    '/movie/upcoming',
    '/tv/airing_today',
    '/tv/on_the_air',
    '/tv/popular',
    'tv/top_rated',
  ];
  try {
    const movies = await Promise.all(categories.map(getContents));
    return movies;
  } catch (error) {
    console.log(error);
  }
};

export const getDetails = async (id: string) => {
  try {
    const res = await instance.get(`/find/${id}`, {
      params: {
        external_source: 'imdb_id',
        language: 'en-US',
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

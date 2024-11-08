import instance from './instance';

export const getMovies = async (category: string) => {
  try {
    const res = await instance.get(`/movie/${category}`, {
      params: {
        language: 'en-US',
        page: 1,
      },
    });
    return res.data.results;
  } catch (error) {
    console.error();
  }
};

export const getAllMovies = async () => {
  const categories = ['popular', 'top_rated', 'now_playing', 'upcoming'];
  try {
    const movies = await Promise.all(categories.map(getMovies));
    return movies;
  } catch (error) {
    console.error();
  }
};

export const getDetails = async (id: string) => {
  try {
    const res = await instance.get(`/movie/${id}`, {
      params: {
        language: 'en-US',
        page: 1,
      },
    });
    return res.data;
  } catch (error) {
    console.error();
  }
};

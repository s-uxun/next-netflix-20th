import { Content } from './types';

export const getContents = async (category: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_URL}${category}?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

    const res = await fetch(url, {
      next: { revalidate: 300 }, // 5분 동안 데이터 캐싱하도록 함(매번 새로 불러오지 않도록)
    });

    const data = await res.json();
    const media_type = category.includes('/tv') ? 'tv' : 'movie';

    return data.results.map((item: Content) => ({
      ...item,
      media_type,
    }));
  } catch (error) {
    return [];
  }
};

export const getAllContents = async () => {
  const categories = [
    '/movie/popular',
    '/movie/top_rated',
    '/movie/now_playing',
    '/movie/upcoming',
    '/tv/airing_today',
    '/tv/on_the_air',
    '/tv/popular',
    '/tv/top_rated',
  ];

  try {
    const movies = await Promise.all(categories.map(getContents));
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const getDetails = async (media_type: string, id: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_URL}/${media_type}/${id}?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

    const res = await fetch(url, {
      next: { revalidate: 300 },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return null;
  }
};

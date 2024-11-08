import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/searchMovies',
        destination: `${process.env.NEXT_PUBLIC_URL}/search/movie?language=en-US&page=2&include_adult=false&query=the&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
        //destination: `${process.env.NEXT_PUBLIC_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    ];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;

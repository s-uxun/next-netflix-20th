import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/searchDefault',
        destination: `${process.env.NEXT_PUBLIC_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      {
        source: '/api/searchMovies',
        destination: `${process.env.NEXT_PUBLIC_URL}/search/movie?&language=en-US&page=1&include_adult=false&api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
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

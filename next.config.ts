import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/searchDefault',
        destination: `${process.env.NEXT_PUBLIC_URL}/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
      },
      {
        source: '/api/searchMovies',
        destination: `${process.env.NEXT_PUBLIC_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&include_adult=false&language=en-US`,
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

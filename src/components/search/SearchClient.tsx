'use client';
import { useState, useEffect } from 'react';

// components
import SearchInput from '@components/search/SearchInput';
import Item from '@components/search/Item';
// type & api
import { SearchedMovie } from '@api/types';
import { getSearch } from '@api/search';

export default function SearchClient() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<SearchedMovie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getSearch(query);
        setMovies(response || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [query]);

  const handleChange = (input: string) => {
    setQuery(input);
  };

  return (
    <div className="flex flex-col flex-grow overflow-auto">
      <SearchInput onChange={handleChange} query={query} />
      <div className="text-White text-[1.67175rem] font-bold my-4">
        Top Searches
      </div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Item title={movie.original_title} posterUrl={movie.poster_path} />
        </div>
      ))}
    </div>
  );
}

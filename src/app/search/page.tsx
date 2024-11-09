'use client';
import { useEffect, useState } from 'react';
import Footer from '@components/common/Footer';
import Item from '@components/search/Item';
import SearchIcon from '@public/icons/search2.svg';
import CloseIcon from '@public/icons/close.svg';
import { getSearch } from '@api/search';

interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
}

export default function Search() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getSearch(query);
        setMovies(response || []);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-col flex-grow overflow-auto">
        <div className="flex h-[3.25rem] flex-shrink-0 flex-row bg-[#424242] items-center pl-5 pr-[1.12rem] mt-11">
          <SearchIcon />
          <input
            className="flex w-[16.875rem] text-[#c4c4c4] text-[0.951rem] bg-transparent ml-2 mr-6"
            placeholder="Search for a show, movie, genre, etc."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <CloseIcon onClick={() => setQuery('')} />
        </div>
        <div className="text-White text-[1.67175rem] font-bold my-[1.31rem]">
          Top Searches
        </div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Item title={movie.original_title} posterUrl={movie.poster_path} />
          </div>
        ))}
      </div>
      <Footer tab={2} />
    </div>
  );
}

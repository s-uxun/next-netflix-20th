import { Movie } from '@api/types';

const SquareList = ({ movies, title }: { movies: Movie[]; title: string }) => {
  return (
    <div className="pl-4">
      <p className="text-xl font-bold mb-3">{title}</p>
      <div className="flex content-center overflow-scroll gap-2">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            className="h-40 min-w-24 object-cover rounded-sm cursor-pointer hover:scale-105 my-1"
          />
        ))}
      </div>
    </div>
  );
};

export default SquareList;

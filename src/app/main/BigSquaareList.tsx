import { Movie } from '@api/types';

const BigSquareList = ({
  movies,
  title,
}: {
  movies: Movie[];
  title: string;
}) => {
  return (
    <div className="pl-4">
      <p className="text-xl font-bold mb-4">{title}</p>
      <div className="flex overflow-scroll gap-2">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            className="h-60 min-w-36 object-cover rounded-sm cursor-pointer hover:scale-105 hover: my-1"
          />
        ))}
      </div>
    </div>
  );
};

export default BigSquareList;

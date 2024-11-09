import { Movie } from '@api/types';

const CircleList = ({ movies, title }: { movies: Movie[]; title: string }) => {
  return (
    <div className="pl-4">
      <p className="text-2xl font-bold">{title}</p>
      <div className="flex overflow-scroll">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default CircleList;

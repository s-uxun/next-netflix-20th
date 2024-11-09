import { Movie } from '@api/types';

const CircleList = ({ movies, title }: { movies: Movie[]; title: string }) => {
  return (
    <div className="pl-4 mb-4">
      <p className="text-3xl font-bold mb-6">{title}</p>
      <div className="flex overflow-scroll">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            className="h-24 min-w-24 object-cover rounded-full cursor-pointer hover:scale-105 m-1"
          />
        ))}
      </div>
    </div>
  );
};

export default CircleList;

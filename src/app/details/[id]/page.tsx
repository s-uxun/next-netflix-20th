import { getDetails } from '@api/getData';
import Footer from '@components/common/Footer';
import { Content } from '@api/types';

export default async function Detail({ params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const movie: Content = await getDetails(id);
    console.log('Movie:', movie);

    return (
      <div className="flex flex-col w-full h-screen">
        <div className="flex-grow w-full overflow-auto">
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
          <p>{movie.title}</p>
          <p>{movie.overview}</p>
        </div>
        <Footer tab={1} />
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}

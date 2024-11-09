import { getDetails } from '@api/getData';
import Footer from '@components/common/Footer';
import { Content } from '@api/types';

export default async function Detail({
  params,
}: {
  params: { media_type: string; id: string };
}) {
  const { media_type, id } = params;

  try {
    const content = await getDetails(media_type, id);
    console.log('Movie:', content);

    return (
      <div className="flex flex-col w-full h-screen">
        <div className="flex-grow w-full overflow-auto">
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
              alt={content.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
          <p>{content.title || content.name}</p>
          <p>{content.overview}</p>
        </div>
        <Footer tab={1} />
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}

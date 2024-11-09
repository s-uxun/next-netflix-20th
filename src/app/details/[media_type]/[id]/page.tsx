import { getDetails } from '@api/getData';
import Footer from '@components/common/Footer';
import Play from '@public/icons/play.svg';

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
          <div className="p-7">
            <div className="flex w-full h-12 items-center justify-center bg-[#C4C4C4] rounded-md hover:opacity-70 cursor-pointer mb-7">
              <Play />
            </div>
            <p className="text-2xl font-bold mb-4">
              {content.title || content.name}
            </p>
            <p className="text-xs font-normal ">{content.overview}</p>
          </div>
        </div>
        <Footer tab={1} />
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}

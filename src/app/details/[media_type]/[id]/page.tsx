import { getDetails } from '@api/getData';
import Footer from '@components/common/Footer';
import Play from '@public/icons/play.svg';
import { Content } from '@api/types';

export default async function Detail({
  params,
}: {
  params: { [key: string]: string | string[] | undefined };
}) {
  const media_type = Array.isArray(params.media_type)
    ? params.media_type[0]
    : params.media_type;
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  if (!media_type || !id) {
    return <p>잘못된 요청입니다</p>;
  }

  try {
    const content: Content = await getDetails(media_type, id);

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
            <p className="text-xs font-normal ">
              {content.overview || '상세 정보가 없습니다.'}
            </p>
          </div>
        </div>
        <Footer tab={1} />
      </div>
    );
  } catch (error) {
    console.error(error);
  }
}
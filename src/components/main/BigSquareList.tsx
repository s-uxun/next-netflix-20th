import { Content } from '@api/types';
import Link from 'next/link';
import Image from 'next/image';

const BigSquareList = ({
  contents,
  title,
}: {
  contents: Content[];
  title: string;
}) => {
  return (
    <div className="pl-4">
      <p className="text-xl font-bold mb-4">{title}</p>
      <div className="flex overflow-scroll gap-2">
        {contents.map((content) => (
          <Link
            key={content.id}
            href={`/details/${content.media_type}/${content.id}`}
          >
            <div className="h-60 min-w-36 relative">
              {' '}
              {/* Image를 사용할 때 부모 div에 상대적 크기를 설정 */}
              <Image
                src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
                alt={content.title || content.name || ''}
                layout="fill" // 이미지가 부모 div의 크기에 맞게 채워지도록 설정
                objectFit="cover" // 기존 object-cover 스타일과 동일하게 설정
                className="rounded-sm cursor-pointer hover:scale-105 my-1"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BigSquareList;

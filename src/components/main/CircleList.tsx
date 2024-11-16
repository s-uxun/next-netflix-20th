import { Content } from '@api/types';
import Link from 'next/link';
import Image from 'next/image';

const CircleList = ({
  contents,
  title,
}: {
  contents: Content[];
  title: string;
}) => {
  return (
    <div className="pl-4 mb-4">
      <p className="text-3xl font-bold mb-6">{title}</p>
      <div className="flex overflow-scroll">
        {contents.map((content) => (
          <Link
            key={content.id}
            href={`/details/${content.media_type}/${content.id}`}
          >
            <div className="h-24 min-w-24 relative rounded-full m-1">
              <Image
                src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
                alt={content.title || content.name || 'Default Image'}
                layout="fill"
                objectFit="cover"
                className="rounded-full cursor-pointer hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CircleList;

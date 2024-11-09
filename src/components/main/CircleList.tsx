import { Content } from '@api/types';
import Link from 'next/link';

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
            <img
              key={content.id}
              src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
              alt={content.title}
              className="h-24 min-w-24 object-cover rounded-full cursor-pointer hover:scale-105 m-1"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CircleList;

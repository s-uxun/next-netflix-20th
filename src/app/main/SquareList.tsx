import { Content } from '@api/types';

const SquareList = ({
  contents,
  title,
}: {
  contents: Content[];
  title: string;
}) => {
  return (
    <div className="pl-4">
      <p className="text-xl font-bold mb-3">{title}</p>
      <div className="flex content-center overflow-scroll gap-2">
        {contents.map((content) => (
          <img
            key={content.id}
            src={`https://image.tmdb.org/t/p/original${content.poster_path}`}
            alt={content.title}
            className="h-40 min-w-24 object-cover rounded-sm cursor-pointer hover:scale-105 my-1"
          />
        ))}
      </div>
    </div>
  );
};

export default SquareList;

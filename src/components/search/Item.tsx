import Link from 'next/link';
import PlayBtn from '@public/icons/play_btn.svg';

interface ItemProps {
  id: number;
  title: string;
  posterUrl: string;
}

export default function Item({ id, title, posterUrl }: ItemProps) {
  return (
    <Link href={`/details/movie/${id}`}>
      <span className="flex flex-row w-full h-[4.75rem] bg-[#424242] mb-[0.19rem] hover:scale-95">
        <span className="w-[9.125rem] h-full">
          <img
            src={`https://image.tmdb.org/t/p/w500${posterUrl}`}
            className="w-full h-full object-cover"
          />
        </span>
        <span className="flex flex-row w-[14.31rem] items-center pl-[1.13rem] pr-3 justify-between">
          <span className="text-White w-40 h-10 flex items-center text-[0.92013rem] overflow-hidden">
            {title}
          </span>
          <PlayBtn />
        </span>
      </span>
    </Link>
  );
}

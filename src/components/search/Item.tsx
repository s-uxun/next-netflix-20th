import PlayBtn from '@public/icons/play_btn.svg';

interface ItemProps {
  title: string;
  posterUrl: string;
}

export default function Item({ title, posterUrl }: ItemProps) {
  return (
    <span className="flex flex-row w-full h-[4.75rem] bg-[#424242] mb-[0.19rem]">
      <span className="w-[9.125rem] h-full">
        <img
          src={`https://image.tmdb.org/t/p/w500${posterUrl}`}
          className="w-full h-full object-cover"
        />
      </span>
      <span className="flex flex-row w-[14.31rem] items-center pl-[1.13rem] pr-3 justify-between">
        <span className="text-White w-40 text-[0.92013rem]">{title}</span>
        <PlayBtn />
      </span>
    </span>
  );
}

import PlayBtn from '@public/icons/play_btn.svg';

export default function SkeletonItem() {
  return (
    <span className="flex flex-row w-full h-[4.75rem] bg-[#424242] mb-[0.19rem] animate-pulse">
      <span className="w-[9.125rem] h-full bg-[#333333]"></span>
      <span className="flex flex-row w-[14.31rem] items-center pl-[1.13rem] pr-3 justify-between">
        <span className="flex items-center text-[0.92013rem] overflow-hidden"></span>
        <PlayBtn />
      </span>
    </span>
  );
}

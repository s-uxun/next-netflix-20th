import PlayBtn from '@public/icons/play_btn.svg';

export default function Item() {
  return (
    <span className="flex flex-row w-full h-[4.75rem] bg-[#424242] mb-[0.19rem]">
      <span className="w-[9.125rem] h-full bg-White">썸네일</span>
      <span className="flex flex-row w-[14.31rem] items-center pl-[1.13rem] pr-3 justify-between">
        <span className="text-White text-[0.92013rem] ">제목제목제목</span>
        <PlayBtn />
      </span>
    </span>
  );
}

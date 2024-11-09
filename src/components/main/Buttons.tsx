import Top10 from '@public/icons/top10.svg';
import Plus from '@public/icons/plus.svg';
import Play from '@public/icons/play.svg';
import Info from '@public/icons/info.svg';

const Buttons = () => {
  const center = 'flex justify-center items-center';

  return (
    <div className="mb-12">
      <div className={`${center} mb-3 gap-2`}>
        <Top10 className="w-4" />
        <p>#2 in Nigeria Today</p>
      </div>
      <div className="flex justify-evenly items-center">
        <div className={`${center} flex-col cursor-pointer hover:opacity-70`}>
          <Plus className="w-6" />
          <p>My List</p>
        </div>
        <div className="flex w-32 h-12 items-center justify-center bg-[#C4C4C4] rounded-md hover:opacity-70 cursor-pointer">
          <Play />
        </div>
        <div className={`${center} flex-col cursor-pointer hover:opacity-70`}>
          <Info className="w-6" />
          <p>Info</p>
        </div>
      </div>
    </div>
  );
};

export default Buttons;

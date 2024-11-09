import Top10 from '@public/icons/top10.svg';
import Plus from '@public/icons/plus.svg';
import Play from '@public/icons/play.svg';
import Info from '@public/icons/info.svg';

const Buttons = () => {
  const center = 'flex justify-center items-center';

  return (
    <div>
      <div className={`${center} mb-3 gap-2`}>
        <Top10 className="w-4" />
        <p>#1 in Nigeria Today</p>
      </div>
      <div className="flex justify-evenly items-center">
        <div className={`${center} flex-col cursor-pointer`}>
          <Plus className="w-6" />
          <p>My List</p>
        </div>
        <Play w-28 className="cursor-pointer" />
        <div className={`${center} flex-col cursor-pointer`}>
          <Info className="w-6" />
          <p>Info</p>
        </div>
      </div>
    </div>
  );
};

export default Buttons;

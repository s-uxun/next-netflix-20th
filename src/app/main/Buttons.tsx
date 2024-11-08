import Top10 from '@public/icons/top10.svg';
import Plus from '@public/icons/plus.svg';
import Play from '@public/icons/play.svg';
import Info from '@public/icons/info.svg';

const Buttons = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <Top10 w-4 />
        <p>#1 in Nigeria Today</p>
      </div>
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col justify-center items-center">
          <Plus w-6 />
          <p>My List</p>
        </div>
        <Play w-28 />
        <div className="flex flex-col justify-center items-center">
          <Info w-6 />
          <p>Info</p>
        </div>
      </div>
    </div>
  );
};

export default Buttons;

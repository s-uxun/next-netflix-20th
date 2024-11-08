import Footer from '@components/common/Footer';
import Item from '@components/search/Item';
import SearchIcon from '@public/icons/search2.svg';
import CloseIcon from '@public/icons/close.svg';

export default function Search() {
  return (
    <div className="flex flex-col w-full">
      <span className="flex flex-row bg-[#424242] h-[3.25rem] items-center pl-5 pr-[1.12rem] mt-11">
        <SearchIcon />
        <input
          className="flex w-[16.875rem] text-[#c4c4c4] text-[0.951rem] bg-transparent ml-2 mr-6"
          placeholder="Search for a show, movie, genere, e.t.c."
        />
        <CloseIcon />
      </span>
      <div className="text-White text-[1.67175rem] font-bold my-[1.31rem]">
        Top Searches
      </div>
      <Item />
      <Footer />
    </div>
  );
}

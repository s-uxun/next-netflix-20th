import Logo from '@public/icons/logo.svg';

export default function Header() {
  const headerItemClass = 'text-[1.07rem] text-white font-normal';
  return (
    <div className="flex py-6 px-5 items-center fixed top-0 z-10 w-full max-w-[375px]">
      <Logo className="w-14 h-14 mr-7" />
      <div className="flex w-full justify-between">
        <p className={headerItemClass}>TV Shows</p>
        <p className={headerItemClass}>Movies</p>
        <p className={headerItemClass}>My List</p>
      </div>
    </div>
  );
}

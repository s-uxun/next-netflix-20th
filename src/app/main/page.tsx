import Header from '@components/common/Header';
import Top10 from '@public/icons/top10.svg';
import Plus from '@public/icons/plus.svg';
import Play from '@public/icons/play.svg';
import Info from '@public/icons/info.svg';
import Footer from '@components/common/Footer';

export default function Main() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <div className="flex-grow bg-Gray w-full"></div>
      <Footer tab={1} />
    </div>
  );
}

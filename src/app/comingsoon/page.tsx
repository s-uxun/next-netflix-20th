import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

export default async function Comingsoon() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <div className="flex-grow flex w-full overflow-auto text-center text-Gray">
        <span className="w-full flex justify-center items-center">
          Coming Soon!
        </span>
      </div>
      <Footer tab={3} />
    </div>
  );
}

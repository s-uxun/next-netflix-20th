import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

export default async function Downloads() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <div className="flex-grow flex w-full overflow-auto text-center text-Gray">
        <span className="w-full flex justify-center items-center">
          Download your contents
        </span>
      </div>
      <Footer tab={4} />
    </div>
  );
}

import Footer from '@components/common/Footer';
import SearchClient from '@components/search/SearchClient';

export default async function Search() {
  return (
    <div className="flex flex-col w-full h-screen">
      <SearchClient />
      <Footer tab={2} />
    </div>
  );
}

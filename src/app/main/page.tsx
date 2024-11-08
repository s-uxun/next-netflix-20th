import Header from '@components/common/Header';
import { getAllMovies } from '@api/fetchData';
import CircleList from './CircleList';
import Buttons from './Buttons';
import SquareList from './squareList';
import BigSquareList from './BigSquaareList';
import Footer from '@components/common/Footer';

export default async function Main() {
  try {
    const movies = await getAllMovies();
    console.log('Movies:', movies);

    return (
      <div className="flex flex-col w-full h-screen">
        <Header />
        <div className="flex-grow bg-Gray w-full">
          <CircleList />
          <Buttons />
          <SquareList />
          <BigSquareList />
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

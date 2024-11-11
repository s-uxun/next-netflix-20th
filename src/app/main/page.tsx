import Header from '@components/common/Header';
import { getAllMovies } from '@api/getData';
import CircleList from '@components/main/CircleList';
import Buttons from '@components/main/Buttons';
import SquareList from '@components/main/SquareList';
import BigSquareList from '@components/main/BigSquareList';
import Footer from '@components/common/Footer';

export default async function Main() {
  try {
    const contents = (await getAllMovies()) || [];
    const posterMovie = contents[2][1];
    const circleListData = {
      contents: contents[4],
      title: 'Previews',
    };

    const squareListData = [
      {
        type: 'SquareList',
        contents: contents[0],
        title: 'Popular on Netflix',
      },
      {
        type: 'SquareList',
        contents: contents[1],
        title: 'Trending Now',
      },
      {
        type: 'SquareList',
        contents: contents[2],
        title: 'Top 10 in Nigeria Today',
      },
      { type: 'SquareList', contents: contents[3], title: 'My List' },
      {
        type: 'BigSquareList',
        contents: contents[5],
        title: 'Netflix Originals',
      },
      { type: 'SquareList', contents: contents[6], title: 'Watch It Again' },
      { type: 'SquareList', contents: contents[7], title: 'US TV Shows' },
    ];

    return (
      <div className="flex flex-col w-full h-screen">
        <Header />
        <div className="flex-grow w-full overflow-auto">
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/original${posterMovie.poster_path}`}
              alt={posterMovie.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
          </div>
          <Buttons />
          <CircleList
            contents={circleListData.contents}
            title={circleListData.title}
          />
          {squareListData.map((data, index) => {
            if (data.type === 'SquareList') {
              return (
                <SquareList
                  key={index}
                  contents={data.contents}
                  title={data.title}
                />
              );
            } else if (data.type === 'BigSquareList') {
              return (
                <BigSquareList
                  key={index}
                  contents={data.contents}
                  title={data.title}
                />
              );
            }
            return null;
          })}
        </div>
        <Footer tab={1} />
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

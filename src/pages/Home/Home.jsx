import { useState, useEffect } from 'react';
import { FetchTrendingMovies } from 'services/TmdbApiServices';
import { TrendingMovieItem } from 'components/TrendingMovieItem';
import { Outlet } from 'react-router-dom';
export const Home = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    FetchTrendingMovies().then(response => {
      setMovieList(prevState => [...prevState, ...response.data.results]);
    });
  }, []);

  return (
    <main>
      {movieList.length !== 0 && (
        <ul>
          {movieList.map((movie, i) => {
            return <TrendingMovieItem key={i} link={movie} />;
          })}
        </ul>
      )}
      <Outlet />
    </main>
  );
};

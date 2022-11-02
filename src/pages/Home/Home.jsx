import { useState, useEffect } from 'react';
import { FetchTrendingMovies } from 'services/TmdbApiServices';
import { TrendingMovieItem } from 'components/TrendingMovieList';
export const Home = () => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    FetchTrendingMovies().then(response => {
      setMovieList(prevState => [...prevState, ...response.data.results]);
      console.log(response);
    });
  }, []);

  return (
    <main>
      {movieList.map(movie => {
        return <TrendingMovieItem key={movie.id} link={movie} />;
      })}
    </main>
  );
};

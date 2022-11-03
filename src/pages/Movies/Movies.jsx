import { useState, useEffect } from 'react';
import { StyledInput } from './Movies.styled';
import { FetchSearchMovies } from 'services/TmdbApiServices';
import { TrendingMovieItem } from 'components/TrendingMovieItem';
export const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState('');
  console.log('MoviesList');

  useEffect(() => {
    if (!query) {
      return;
    }
    FetchSearchMovies(query).then(response => {
      setMovieList(prevState => [...prevState, ...response.data.results]);
    });
  }, [query]);
  console.log(movieList);
  const handleSubmit = evt => {
    evt.preventDefault();
    setQuery(evt.target.searshQuery.value);
    evt.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="search"
          name="searshQuery"
          placeholder="Movie search"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movieList.map((movie, i) => {
          return <TrendingMovieItem key={i} link={movie} />;
        })}
      </ul>
    </>
  );
};

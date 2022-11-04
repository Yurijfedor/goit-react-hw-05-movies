import { useSearchParams, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { StyledInput } from './Movies.styled';
import { FetchSearchMovies } from 'services/TmdbApiServices';
import { TrendingMovieItem } from 'components/TrendingMovieItem';

export const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    setQuery(movieName);
    FetchSearchMovies(query).then(response => {
      setMovieList(prevState => [...prevState, ...response.data.results]);
    });
  }, [movieName, query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setQuery(evt.target.searshQuery.value);

    evt.target.reset();
  };

  const updateQuery = evt => {
    console.log(movieName);
    const nextParams =
      evt.target.value !== '' ? { movieName: evt.target.value } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="search"
          name="searshQuery"
          placeholder="Movie search"
          value={movieName}
          onChange={updateQuery}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movieList.map((movie, i) => {
          return <TrendingMovieItem key={i} link={movie} location={location} />;
        })}
      </ul>
    </>
  );
};

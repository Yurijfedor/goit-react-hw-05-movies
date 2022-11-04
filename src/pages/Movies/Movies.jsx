import { useSearchParams, useLocation, Outlet } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { StyledInput } from './Movies.styled';
import { FetchSearchMovies } from 'services/TmdbApiServices';
import { TrendingMovieItem } from 'components/TrendingMovieItem';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState();
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!movieName) {
      return;
    }
    FetchSearchMovies(movieName).then(response => {
      setMovieList([...response.data.results]);
    });
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: query });
    // evt.target.reset();
    formReset();
  };

  const formReset = () => setQuery('');

  const updateQuery = evt => {
    // const nextParams =
    //   evt.target.value !== '' ? { query: evt.target.searshQuery.value } : {};
    // setSearchParams(nextParams);
    setQuery(evt.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledInput
          type="search"
          name="searshQuery"
          placeholder="Movie search"
          value={query}
          onChange={updateQuery}
        />
        <button type="submit">Search</button>
      </form>
      {movieName ? (
        <ul>
          {movieList.map((movie, i) => {
            return (
              <TrendingMovieItem key={i} link={movie} location={location} />
            );
          })}
        </ul>
      ) : (
        ''
      )}
      <Outlet />
    </>
  );
};
export default Movies;

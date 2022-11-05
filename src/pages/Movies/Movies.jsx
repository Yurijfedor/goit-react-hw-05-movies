import { useSearchParams, useLocation, Outlet } from 'react-router-dom';
import { Pagination, Stack } from '@mui/material';
import { useState, useEffect, Suspense } from 'react';

import { StyledInput } from './Movies.styled';
import { FetchSearchMovies } from 'services/TmdbApiServices';
import { TrendingMovieItem } from 'components/TrendingMovieItem';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!movieName) {
      return;
    }
    FetchSearchMovies(movieName, page).then(response => {
      setMovieList([...response.data.results]);
      setTotalPages(response.data.total_pages);
    });
  }, [movieName, page]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: query });
    setPage(1);
    formReset();
  };

  const formReset = () => setQuery('');

  const updateQuery = evt => {
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
      <Stack spacing={2}>
        {!!totalPages && (
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
          />
        )}
      </Stack>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Movies;

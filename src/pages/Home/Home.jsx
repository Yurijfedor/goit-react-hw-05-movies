import { useState, useEffect, Suspense } from 'react';
import { Pagination, Stack } from '@mui/material';
import { FetchTrendingMovies } from 'services/TmdbApiServices';
import { TrendingMovieItem } from 'components/TrendingMovieItem';
import { Outlet } from 'react-router-dom';
const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    FetchTrendingMovies(page).then(response => {
      setMovieList([...response.data.results]);
      setTotalPages(response.data.total_pages);
    });
  }, [page]);

  return (
    <main>
      <h1>Trending today</h1>
      {movieList.length !== 0 && (
        <ul>
          {movieList.map((movie, i) => {
            return <TrendingMovieItem key={i} link={movie} />;
          })}
        </ul>
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
    </main>
  );
};
export default Home;

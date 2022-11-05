import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { StyledButton, StyledNav } from './MovieDetails.styled';
import { ImArrowLeft2 } from 'react-icons/im';
import { FetchMovieById, IMAGE_URL } from 'services/TmdbApiServices';
import { Box } from 'constans';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    FetchMovieById(movieId).then(response => {
      response.data
        ? setMovie(response.data)
        : alert('The resource you requested could not be found.');
    });
  }, [movieId]);

  const handleClick = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <main>
      <StyledButton onClick={handleClick}>
        <ImArrowLeft2 />
        Go back
      </StyledButton>
      {movie && (
        <>
          <Box
            display={'flex'}
            gridGap={5}
            pb={4}
            borderBottom={'normal'}
            mb={4}
          >
            <div>
              <img
                src={IMAGE_URL + movie.poster_path}
                alt={movie.title || movie.name}
                widht="300"
                height="450"
              />
            </div>

            <div>
              <h2>
                {movie.title || movie.name} (
                {new Date(movie.release_date).getFullYear()})
              </h2>
              <p>User score: {Math.round(movie.vote_average * 10)} %</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
            </div>
          </Box>
          <h5>Additional information</h5>
          <StyledNav>
            <li>
              <NavLink to={`cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`reviews`}>Reviews</NavLink>
            </li>
          </StyledNav>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
};
export default MovieDetails;

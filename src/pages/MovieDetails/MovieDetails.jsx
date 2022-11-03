import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { StyledLink, StyledButton, StyledNav } from './MovieDetails.styled';
import { ImArrowLeft2 } from 'react-icons/im';
import { FetchMovieById, IMAGE_URL } from 'services/TmdbApiServices';
import { Box } from 'constans';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    FetchMovieById(movieId).then(response => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <main>
      <StyledButton>
        <ImArrowLeft2 />
        <StyledLink to={'/'}>Go back</StyledLink>
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
              <h2>{movie.title || movie.name}</h2>
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
          <Outlet />
        </>
      )}
    </main>
  );
};

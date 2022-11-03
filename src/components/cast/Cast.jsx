import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchMovieCast, IMAGE_URL } from 'services/TmdbApiServices';
import { Box } from 'constans';
export const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    FetchMovieCast(movieId).then(response => {
      setCastList([...response.data.cast]);
    });
  }, [movieId]);

  return (
    <>
      <ul>
        {castList.map(cast => {
          return (
            <Box key={cast.id} as={'li'} display={'grid'} gridGap={3} mb={5}>
              {cast.profile_path && (
                <img
                  src={IMAGE_URL + cast.profile_path}
                  width={'100px'}
                  alt={cast.name}
                />
              )}
              {cast.name}
              <p>character: {cast.character}</p>
            </Box>
          );
        })}
      </ul>
    </>
  );
};

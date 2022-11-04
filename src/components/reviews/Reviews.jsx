import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchMovieReview } from 'services/TmdbApiServices';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    FetchMovieReview(movieId).then(response => {
      setReviewList([...response.data.results]);
    });
  }, [movieId]);

  return (
    <>
      {reviewList.length !== 0 ? (
        <ul>
          {reviewList.map((review, i) => {
            return (
              <li key={i}>
                <h4>Author:{review.author}</h4>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        `We don't have any review for this video`
      )}
    </>
  );
};
export default Reviews;

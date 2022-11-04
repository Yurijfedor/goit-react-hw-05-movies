import { Link } from 'react-router-dom';

export const TrendingMovieItem = ({ link: { title, name, id }, location }) => {
  return title ? (
    <li>
      <Link to={{ pathname: `/movies/${id}` }} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ) : (
    <li>
      <Link to={{ pathname: `/movies/${id}` }} state={{ from: location }}>
        {name}
      </Link>
    </li>
  );
};

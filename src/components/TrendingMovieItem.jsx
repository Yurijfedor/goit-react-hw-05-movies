import { Link } from 'react-router-dom';
export const TrendingMovieItem = ({ link: { title, name, id } }) => {
  return title ? (
    <li>
      <Link to={`${id}`}>{title}</Link>
    </li>
  ) : (
    <li>
      <Link to={`${id}`}>{name}</Link>
    </li>
  );
};

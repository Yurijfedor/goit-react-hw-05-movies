import { Link } from 'react-router-dom';
export const TrendingMovieItem = ({ link: { title, name } }) => {
  return title ? (
    <li>
      <Link>{title}</Link>
    </li>
  ) : (
    <li>
      <Link>{name}</Link>
    </li>
  );
};

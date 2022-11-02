import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '262a417f78469232900b1579d8d8e776';

export const FetchTrendingMovies = async () => {
  const options = new URLSearchParams({
    api_key: API_KEY,
  });

  try {
    const trendingMovies = await axios.get(
      `${BASE_URL}trending/all/week?${options}`
    );
    return trendingMovies;
  } catch (error) {
    console.log(error);
  }
};

import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '262a417f78469232900b1579d8d8e776';
const options = new URLSearchParams({
  api_key: API_KEY,
});

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const FetchTrendingMovies = async () => {
  try {
    const trendingMovies = await axios.get(
      `${BASE_URL}trending/all/week?${options}`
    );
    return trendingMovies;
  } catch (error) {
    console.log(error);
  }
};

export const FetchMovieById = async id => {
  try {
    const moviesById = await axios.get(`${BASE_URL}movie/${id}?${options}`);
    return moviesById;
  } catch (error) {
    console.log(error);
  }
};

export const FetchMovieCast = async id => {
  try {
    const movieCast = await axios.get(
      `${BASE_URL}movie/${id}/credits?${options}`
    );
    return movieCast;
  } catch (error) {
    console.log(error);
  }
};

export const FetchMovieReview = async id => {
  try {
    const movieReview = await axios.get(
      `${BASE_URL}movie/${id}/reviews?${options}`
    );
    return movieReview;
  } catch (error) {
    console.log(error);
  }
};

export const FetchSearchMovies = async query => {
  try {
    const searchMovies = await axios.get(
      `${BASE_URL}search/movie?${options}&query=${query}`
    );
    return searchMovies;
  } catch (error) {
    console.log(error);
  }
};

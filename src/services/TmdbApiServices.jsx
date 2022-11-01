const axios = require('axios');

export const FetchTrendingMovies = async page => {
  try {
    const BASE_URL = 'https://api.themoviedb.org/3/';
    const API_KEY = '262a417f78469232900b1579d8d8e776';
    const options = new URLSearchParams({
      api_key: API_KEY,
      page: page,
    });
    console.log(this.searchQuery, this.page);
    const trendingMovies = await axios.get(
      `${BASE_URL}trending/all/week?${options}`
    );
    return trendingMovies;
  } catch (error) {
    console.log(error);
  }
};

import { tmdb } from "./api.js";

const tvGenreMap = {
  10759: "Action & Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  10762: "Kids",
  9648: "Mystery",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
  37: "Western",
};

export function getSeriesGenreName(id) {
  return tvGenreMap[id] || "Unknown";
}

// list all the series
export async function fetchPopularSeries(page = 1) {
  const data = await tmdb("/tv/popular", `&page=${page}`);
  return data;
}

// list all the Top Rated series
export async function fetchTopRatedSeries(page = 1) {
  const data = await tmdb("/tv/top_rated", `&page=${page}`);
  return data;
}

// List all the series that will be airing today
export async function fetchPremierTodaySeries(page = 1) {
  const today = new Date().toISOString().split("T")[0];

  const data = await tmdb(
    "/discover/tv",
    `&first_air_date.gte=${today}&first_air_date.lte=${today}&sort_by=popularity.desc&include_null_first_air_dates=false&page=${page}`,
  );

  return data;
}

// List all the series that will be airing today
export async function fetchAiringTodaySeries(page = 1) {
  const today = new Date().toISOString().split("T")[0];

  const data = await tmdb(
    "/discover/tv",
    `&air_date.gte=${today}&air_date.lte=${today}&sort_by=popularity.desc&include_null_first_air_dates=false&page=${page}`,
  );

  return data;
}

// list the upcoming series for the next 7 days
export async function fetchUpcomingSeries(page = 1) {
  const today = new Date();

  // Get tomorrow's date
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Get the date 7 days after tomorrow
  const sevenDaysLater = new Date(tomorrow);
  sevenDaysLater.setDate(tomorrow.getDate() + 6);

  // Format dates as YYYY-MM-DD
  const formatDate = (date) => date.toISOString().split("T")[0];
  const startDate = formatDate(tomorrow);
  const endDate = formatDate(sevenDaysLater);

  // Build the query
  const data = await tmdb(
    "/discover/tv",
    `&air_date.gte=${startDate}&air_date.lte=${endDate}&sort_by=popularity.desc&page=${page}`,
  );

  return data;
}

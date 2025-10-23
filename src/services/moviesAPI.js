import { tmdb } from "./api.js";

// popular movies list (page defaults to 1)
export function getPopularMovies(page = 1) {
  return tmdb("/movie/popular", `&page=${page}`);
}

// list all movie genres
export function getMovieGenres(language = "en-US") {
  return tmdb("/trending/all/week", `&language=${language}`);
}

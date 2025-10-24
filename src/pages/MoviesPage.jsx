/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import MoviesHero from "../features/movies/MoviesHero";
import MoviesTitle from "../features/movies/MoviesTitle";
import { fetchMovieGenres, fetchTopRatedMovies } from "../services/moviesAPI";
import MoviesGenres from "../features/movies/MoviesGenres";
import TopRatedMovies from "../features/movies/TopRatedMovies";

function MoviesPage() {
  const { genres, topRatedMovies } = useLoaderData();

  return (
    <>
      <MoviesHero />
      <MoviesTitle />
      <MoviesGenres genres={genres} />
      <TopRatedMovies topRatedMovies={topRatedMovies} />
    </>
  );
}

export async function loader() {
  const [genres, topRatedMovies] = await Promise.all([
    fetchMovieGenres(),
    fetchTopRatedMovies(),
  ]);

  return { genres, topRatedMovies };
}

export default MoviesPage;

/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

import MoviesHero from "./MoviesHero";
import MoviesTitle from "./MoviesTitle";
import MoviesGenres from "./MoviesGenres";
import MoviesSection from "./MoviesSection";

import {
  fetchMovieGenres,
  fetchTopRatedMovies,
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  fetchPopularMovies,
} from "../../services/moviesAPI";

function MoviesPage() {
  const {
    genres,
    topRatedMovies,
    nowPlayingMovies,
    upcomingMovies,
    popularMovies,
  } = useLoaderData();

  return (
    <>
      <MoviesHero />
      <MoviesTitle />
      <MoviesGenres genres={genres} />
      <MoviesSection
        title="Our Top Rated Movies"
        text="Critically acclaimed and loved by audiences—these are the must-watch masterpieces."
        moviesArray={topRatedMovies.results}
        fetchMore={fetchTopRatedMovies}
      />
      <MoviesSection
        title="Now Playing in Theatres"
        text="Fresh from the big screen, these are the stories lighting up theatres
        right now."
        moviesArray={nowPlayingMovies.results}
        sectionId="now"
      />
      <MoviesSection
        title="Coming Soon to Theatres"
        text="A sneak peek at the most anticipated releases hitting theatres soon."
        moviesArray={upcomingMovies.results}
        sectionId="soon"
      />
      <MoviesSection
        title="Hot Picks of the Moment"
        text="These are the films lighting up screens and sparking conversations—see what's trending right now."
        moviesArray={popularMovies.results}
        fetchMore={fetchPopularMovies}
      />
    </>
  );
}

export async function loader() {
  const [
    genres,
    topRatedMovies,
    nowPlayingMovies,
    upcomingMovies,
    popularMovies,
  ] = await Promise.all([
    fetchMovieGenres(),
    fetchTopRatedMovies(),
    fetchNowPlayingMovies(),
    fetchUpcomingMovies(),
    fetchPopularMovies(),
  ]);

  return {
    genres,
    topRatedMovies,
    nowPlayingMovies,
    upcomingMovies,
    popularMovies,
  };
}

export default MoviesPage;

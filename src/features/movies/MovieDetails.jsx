/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

import { fetchMovieById, fetchMovieCastById } from "../../services/moviesAPI";

import Main from "../../ui/Main";
import MovieStats from "./MovieStats";
import MovieDescription from "./MovieDescription";
import MovieCast from "./MovieCast";
import MovieHero from "./MovieHero";

function MovieDetails() {
  const { movie, castData } = useLoaderData();

  return (
    <section>
      <MovieHero movie={movie} />
      <div className="flex flex-row flex-wrap-reverse gap-4 lg:flex-nowrap">
        <div>
          {/* First Part of description */}
          <MovieDescription movie={movie} />

          {/* Third part that will have the cast */}
          <MovieCast castData={castData} />

          {/* Forth part that will shows the reviews */}
          <div className="">
            <Main>
              <h3>Overviews</h3>
              <p>Overviews section</p>
            </Main>
          </div>
        </div>

        {/* Second part that will shows the release year, genres, ratings, etc */}
        <MovieStats movie={movie} />
      </div>
    </section>
  );
}

export async function loader({ params }) {
  const [movie, castData] = await Promise.all([
    fetchMovieById(params.movieId),
    fetchMovieCastById(params.movieId),
  ]);

  return { movie, castData };
}

export default MovieDetails;

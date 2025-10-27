/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

import { fetchMovieById } from "../../services/moviesAPI";

import MediaImage from "../../ui/MediaImage";
import Main from "../../ui/Main";
import MovieStats from "./MovieStats";
import MovieDescription from "./MovieDescription";

function MovieDetails() {
  const movie = useLoaderData();

  console.log(movie);

  return (
    <section>
      <div className="relative h-dvh overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(42,42,42,0.5), #000 80%)",
          }}
        ></div>
        <div className="max-h-dvh">
          <MediaImage
            path={movie["backdrop_path"]}
            alt={`${movie.title} Image`}
            size="original"
          />
          <div className="text-text-primary absolute inset-0 top-[30%] z-50 flex flex-col items-center justify-center">
            <h3 className="mb-3 text-4xl font-bold uppercase">
              Featured Title
            </h3>
            <p className="text-text-secondary text-4xl font-semibold">
              {movie.title}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap-reverse gap-4 lg:flex-nowrap">
        <div>
          {/* First Part of description */}
          <MovieDescription movie={movie} />

          {/* Third part that will have the cast */}
          <div className="">
            <Main>
              <h3>Cast</h3>
              <p>Here will be the cast</p>
            </Main>
          </div>
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
  const data = await fetchMovieById(params.movieId);

  return data;
}

export default MovieDetails;

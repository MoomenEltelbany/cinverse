import { useState } from "react";
import Button from "../../ui/Button";
import Main from "../../ui/Main";
import MediaImage from "../../ui/MediaImage";
import TopRatedMovieCard from "./TopRatedMovieCard";

function TopRatedMovies({ topRatedMovies }) {
  const movies = topRatedMovies.results;

  const [showAll, setShowAll] = useState(false);

  const previewTopMovies = movies.slice(0, 5);

  return (
    <Main>
      <h2 className="text-text-primary text-center text-3xl font-semibold uppercase">
        Our Top Rated Movies
      </h2>
      <p className="mt-2 mb-10 text-center text-sm text-gray-500 dark:text-gray-400">
        Critically acclaimed and loved by audiences—these are the must-watch
        masterpieces.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {(showAll ? movies : previewTopMovies).map((movie) => (
          <TopRatedMovieCard topMovie={movie} />
        ))}
      </div>
      <div className="mt-5 ml-auto w-fit">
        <Button onClick={() => setShowAll((show) => !show)}>
          {showAll ? "Show less" : "Show more"}
        </Button>
      </div>
    </Main>
  );
}

export default TopRatedMovies;

import { useState } from "react";
import MovieCard from "./MovieCard";
import Button from "../../ui/Button";
import Main from "../../ui/Main";

function MoviesSection({ title, text, moviesArray, sectionId }) {
  const [showAll, setShowAll] = useState(false);

  const previewMovies = moviesArray.slice(0, 5);

  return (
    <Main id={sectionId}>
      <h2 className="text-text-primary text-center text-3xl font-semibold uppercase">
        {title}
      </h2>
      <p className="mt-2 mb-10 text-center text-sm text-gray-500 dark:text-gray-400">
        {text}
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {(showAll ? moviesArray : previewMovies).map((movie) => (
          <MovieCard movie={movie} />
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

export default MoviesSection;

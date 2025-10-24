import { useState } from "react";
import Main from "../../ui/Main";
import GenreCard from "./GenreCard";
import Button from "../../ui/Button";

function MoviesGenres({ genres }) {
  const [showAll, setShowAll] = useState(false);

  const previewGenres = genres.slice(0, 8);

  return (
    <Main>
      <h2 className="text-text-primary text-center text-3xl font-semibold uppercase">
        Our Genres
      </h2>
      <div className="my-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {(showAll ? genres : previewGenres).map((genre) => (
          <GenreCard name={genre.name} key={genre.id} genreId={genre.id} />
        ))}
      </div>
      <div className="ml-auto w-fit">
        <Button onClick={() => setShowAll((show) => !show)}>
          {showAll ? "Show less" : "Show more"}
        </Button>
      </div>
    </Main>
  );
}

export default MoviesGenres;

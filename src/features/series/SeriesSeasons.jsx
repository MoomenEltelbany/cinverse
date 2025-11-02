import { useState } from "react";
import Main from "../../components/common/Main";
import Button from "../../components/common/Button";
import SeasonCard from "./SeasonCard";

function SeriesSeasons({ series }) {
  const { seasons, id } = series;

  const [showAll, setShowAll] = useState(false);

  const previewSeasons = seasons.slice(1, 5);

  return (
    <Main>
      <h3 className="text-text-secondary mb-4 text-xl font-semibold">
        Seasons Overview
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(showAll ? seasons : previewSeasons).map((season) => (
          <SeasonCard key={season.id} season={season} seriesId={id} />
        ))}
      </div>
      <div className="mt-3 ml-auto w-fit">
        <Button onClick={() => setShowAll((show) => !show)}>
          {showAll ? "Show less" : "Show more"}
        </Button>
      </div>
    </Main>
  );
}

export default SeriesSeasons;

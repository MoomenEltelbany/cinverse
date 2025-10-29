import { Link } from "react-router-dom";

import MediaImage from "../../components/common/MediaImage";

import { formatDate } from "../../utils/dateUtils";
import { getSeriesGenreName } from "../../services/seriesApi";

function PopularSeriesCard({ series }) {
  return (
    <div className="bg-surface-card border-border-subtle flex h-[650px] flex-col gap-2 rounded border p-5 shadow shadow-black">
      <div className="mx-auto">
        <MediaImage path={series.poster_path} />
      </div>
      <h3 className="text-text-primary text-lg font-semibold">
        {series.title}
      </h3>
      <p className="text-text-tertiary text-sm">
        {formatDate(series.release_date)}
      </p>
      <p>⭐ {series.vote_average}</p>
      <div className="flex flex-wrap gap-1.5">
        {series["genre_ids"].map((item) => (
          <span
            className="bg-surface-main inline-block rounded px-2 py-1"
            key={item}
          >
            {getSeriesGenreName(item)}
          </span>
        ))}
      </div>
      <Link
        to={`/series/${series.id}`}
        className="bg-surface-alt mt-auto w-full rounded py-2 text-center font-semibold transition-colors duration-200 hover:bg-black"
      >
        Show Movie Details
      </Link>
    </div>
  );
}

export default PopularSeriesCard;

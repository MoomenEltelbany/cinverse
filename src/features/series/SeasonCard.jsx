import { Link } from "react-router-dom";
import MediaImage from "../../components/common/MediaImage";
import { formatDate } from "../../utils/dateUtils";

function SeasonCard({ season, seriesId }) {
  return (
    <div
      key={season.id}
      className="bg-surface-card flex flex-col rounded-lg p-4 shadow-sm"
    >
      {season.poster_path && (
        <div className="mb-4">
          <MediaImage
            path={season.poster_path}
            alt={`The photo of ${season.name}`}
            size="original"
            className="w-full rounded-md object-cover"
          />
        </div>
      )}
      <h4 className="text-text-primary text-lg font-semibold">{season.name}</h4>
      <p className="text-text-secondary mb-3 text-sm">
        Aired: {formatDate(season.air_date)} • {season.episode_count} episodes
      </p>
      <Link
        to={`/series/${seriesId}/season/${season.season_number}`}
        className="bg-surface-alt mt-auto block rounded px-2 py-1 text-center"
      >
        Show More
      </Link>
    </div>
  );
}

export default SeasonCard;

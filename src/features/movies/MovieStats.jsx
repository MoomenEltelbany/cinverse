import MediaStatsData from "../../components/common/MediaStatsData";

import { formatDate, formatRuntime } from "../../utils/dateUtils";
import { FaCalendar, FaRegStar, FaRegMoneyBillAlt } from "react-icons/fa";
import { LuLanguages, LuBlocks } from "react-icons/lu";
import { AiOutlineClockCircle } from "react-icons/ai";
import WatchlistButtons from "../../components/common/WatchlistButtons";
import BookmarkButtons from "../../components/common/BookmarkButtons";

function MovieStats({ movie }) {
  return (
    <div className="text-text-primary relative m-8 mx-auto flex max-w-7xl min-w-2xs grow flex-col gap-5 rounded-xl bg-neutral-900 p-6 tracking-wider shadow-lg sm:p-8 lg:max-h-fit">
      <MediaStatsData icon={FaCalendar} title="Release year">
        {formatDate(movie.release_date)}
      </MediaStatsData>

      <MediaStatsData icon={LuLanguages} title="Available languages">
        {movie?.spoken_languages.map((lang) => (
          <p className="bg-surface-alt w-fit rounded px-2 py-1" key={lang.name}>
            {lang.name}
          </p>
        ))}
      </MediaStatsData>

      <MediaStatsData icon={FaRegStar} title="Ratings">
        ⭐️ {movie.vote_average} ({movie.vote_count} votes)
      </MediaStatsData>

      <MediaStatsData icon={LuBlocks} title="Genres">
        <div className="flex flex-wrap gap-2">
          {movie?.genres.map((genre) => (
            <p
              className="bg-surface-alt w-fit rounded px-2 py-1"
              key={genre.name}
            >
              {genre.name}
            </p>
          ))}
        </div>
      </MediaStatsData>

      <MediaStatsData icon={AiOutlineClockCircle} title="Screen runtime">
        {formatRuntime(movie.runtime)}
      </MediaStatsData>

      <MediaStatsData icon={FaRegMoneyBillAlt} title="Movie's revenue">
        $ {movie.revenue.toLocaleString()}
      </MediaStatsData>

      <WatchlistButtons media={movie} />
      <BookmarkButtons media={movie} />
    </div>
  );
}

export default MovieStats;

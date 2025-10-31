import Main from "../../components/common/Main";
import { formatDate, formatRuntime } from "../../utils/dateUtils";
import { FaCalendar, FaRegStar, FaRegMoneyBillAlt } from "react-icons/fa";
import { LuLanguages, LuBlocks } from "react-icons/lu";
import { AiOutlineClockCircle } from "react-icons/ai";
import MovieStatData from "./MovieStatData";

function MovieStats({ movie }) {
  return (
    <Main>
      <div className="text-text-primary flex min-w-2xs grow flex-col gap-5 lg:max-h-fit">
        <MovieStatData icon={FaCalendar} title="Release year">
          {formatDate(movie.release_date)}
        </MovieStatData>

        <MovieStatData icon={LuLanguages} title="Available languages">
          {movie?.spoken_languages.map((lang) => (
            <p
              className="bg-surface-alt w-fit rounded px-2 py-1"
              key={lang.name}
            >
              {lang.name}
            </p>
          ))}
        </MovieStatData>

        <MovieStatData icon={FaRegStar} title="Ratings">
          ⭐️ {movie.vote_average} ({movie.vote_count} votes)
        </MovieStatData>

        <MovieStatData icon={LuBlocks} title="Genres">
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
        </MovieStatData>

        <MovieStatData icon={AiOutlineClockCircle} title="Screen runtime">
          {formatRuntime(movie.runtime)}
        </MovieStatData>

        <MovieStatData icon={FaRegMoneyBillAlt} title="Movie's revenue">
          $ {movie.revenue.toLocaleString()}
        </MovieStatData>
      </div>
    </Main>
  );
}

export default MovieStats;

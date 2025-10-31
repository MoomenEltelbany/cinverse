import Main from "../../components/common/Main";
import { formatDate } from "../../utils/dateUtils";
import { FaCalendar, FaRegStar } from "react-icons/fa";
import { LuLanguages, LuBlocks } from "react-icons/lu";
import SeriesStatData from "./SeriesStatsData";
import { MdNumbers } from "react-icons/md";
import { GrStatusInfo } from "react-icons/gr";

function SeriesStats({ series }) {
  return (
    <Main>
      <div className="text-text-primary flex min-w-2xs grow flex-col gap-5 lg:max-h-fit">
        <SeriesStatData icon={FaCalendar} title="Air Dates">
          <p>First: {formatDate(series.first_air_date)}</p>
          {series.last_air_date && (
            <p>Last: {formatDate(series.last_air_date)}</p>
          )}
        </SeriesStatData>

        <SeriesStatData icon={LuLanguages} title="Available languages">
          {series?.spoken_languages.map((lang) => (
            <p
              className="bg-surface-alt w-fit rounded px-2 py-1"
              key={lang.name}
            >
              {lang.name}
            </p>
          ))}
        </SeriesStatData>

        <SeriesStatData icon={FaRegStar} title="Ratings">
          ⭐️ {series.vote_average} ({series.vote_count} votes)
        </SeriesStatData>

        <SeriesStatData icon={MdNumbers} title="Number of episodes">
          {series.number_of_episodes}
        </SeriesStatData>

        <SeriesStatData icon={MdNumbers} title="Number of seasons">
          {series.number_of_seasons}
        </SeriesStatData>

        <SeriesStatData icon={LuBlocks} title="Genres">
          <div className="flex flex-wrap gap-2">
            {series?.genres.map((genre) => (
              <p
                className="bg-surface-alt w-fit rounded px-2 py-1"
                key={genre.name}
              >
                {genre.name}
              </p>
            ))}
          </div>
        </SeriesStatData>

        <SeriesStatData icon={GrStatusInfo} title="Series Status">
          {series.status}
        </SeriesStatData>
      </div>
    </Main>
  );
}

export default SeriesStats;

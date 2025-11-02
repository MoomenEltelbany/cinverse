/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { fetchSeasonDetails } from "../../services/seriesApi";
import { formatDate } from "../../utils/dateUtils";
import Main from "../../components/common/Main";
import MediaImage from "../../components/common/MediaImage";

function SeasonDetails() {
  const season = useLoaderData();

  return (
    <>
      <section className="bg-surface-card relative flex flex-col gap-3 rounded-lg p-6 shadow-md lg:flex-row">
        <div className="mx-auto w-full max-w-[300px] rounded-md object-cover lg:mx-0">
          <MediaImage
            path={season.poster_path}
            size="w300"
            alt={`Poster of ${season.name}`}
          />
        </div>
        <div className="flex flex-col justify-between">
          <h2 className="text-text-primary text-2xl font-bold">
            {season.name}
          </h2>
          <p className="text-text-secondary mt-2 text-sm">
            Aired: {formatDate(season.air_date)} • {season.episodes.length}{" "}
            episodes
          </p>
          <p className="text-text-secondary mt-4 text-base leading-relaxed">
            {season.overview}
          </p>
          <p className="mt-2 font-medium text-yellow-500">
            ⭐️ {season.vote_average} / 10
          </p>
        </div>
      </section>
      <Main className="mt-8">
        <h3 className="text-text-secondary mb-4 text-xl font-semibold">
          Episodes
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {season.episodes.map((ep) => (
            <div
              key={ep.id}
              className="bg-surface-alt flex flex-col rounded-lg p-4 shadow-sm"
            >
              {ep.still_path && (
                <MediaImage
                  path={ep.still_path}
                  size="w300"
                  alt={`Still from ${ep.name}`}
                />
              )}
              <h4 className="text-text-primary mt-2 text-lg font-semibold">
                S{season.season_number}E{ep.episode_number} – {ep.name}
              </h4>
              <p className="text-text-secondary text-sm">
                Aired: {formatDate(ep.air_date)} • {ep.runtime || "?"} min
              </p>
              {ep.overview && (
                <p className="text-text-secondary mt-2 text-sm leading-relaxed">
                  {ep.overview}
                </p>
              )}
            </div>
          ))}
        </div>
      </Main>
    </>
  );
}

export async function loader({ params }) {
  const data = await fetchSeasonDetails(params.seriesId, params.seasonNumber);

  return data;
}

export default SeasonDetails;

import { useLoaderData } from "react-router-dom";
import {
  fetchSeriesDetails,
  fetchSeriesCredits,
  fetchSimilarSeries,
} from "../../services/seriesApi";
import SeriesHero from "./SeriesHero";
import SeriesDescription from "./SeriesDescription";
import SeriesCredits from "./SeriesCredits";
import SeriesStats from "./SeriesStats";
import SeriesRecommendations from "./SeriesRecommendations";

/* eslint-disable react-refresh/only-export-components */
function SeriesDetails() {
  const { seriesDetails, seriesCredits, seriesRecommendations } =
    useLoaderData();

  return (
    <section>
      <SeriesHero series={seriesDetails} />
      <div className="flex flex-col-reverse gap-6 lg:flex-row lg:gap-4">
        <div className="min-w-0 flex-1">
          <SeriesDescription series={seriesDetails} />
          <SeriesCredits credits={seriesCredits} />
        </div>

        <div className="w-full shrink-0 lg:w-[300px]">
          <SeriesStats series={seriesDetails} />
        </div>
      </div>
      <SeriesRecommendations series={seriesRecommendations} />
    </section>
  );
}

export async function loader({ params }) {
  const [seriesDetails, seriesCredits, seriesRecommendations] =
    await Promise.all([
      fetchSeriesDetails(params.seriesId),
      fetchSeriesCredits(params.seriesId),
      fetchSimilarSeries(params.seriesId),
    ]);

  return { seriesDetails, seriesCredits, seriesRecommendations };
}

export default SeriesDetails;

// <MoviesRecommendations movies={moviesRecommendations} />

import { useLoaderData } from "react-router-dom";
import {
  fetchSeriesDetails,
  fetchSeriesCredits,
  fetchSimilarSeries,
} from "../../services/seriesApi";
import SeriesStats from "./SeriesStats";
import SeriesSeasons from "./SeriesSeasons";
import MediaRecommendations from "../../components/common/MediaRecommendations";
import MediaHero from "../../components/common/MediaHero";
import MediaDescription from "../../components/common/MediaDescription";
import MediaCredits from "../../components/common/MediaCredits";

/* eslint-disable react-refresh/only-export-components */
function SeriesDetails() {
  const { seriesDetails, seriesCredits, seriesRecommendations } =
    useLoaderData();

  return (
    <section>
      <MediaHero media={seriesDetails} />
      <div className="flex flex-col-reverse gap-6 lg:flex-row lg:gap-4">
        <div className="min-w-0 flex-1">
          <MediaDescription media={seriesDetails} />
          <MediaCredits credits={seriesCredits} />
        </div>

        <div className="w-full shrink-0 lg:w-[300px]">
          <SeriesStats series={seriesDetails} />
        </div>
      </div>

      <SeriesSeasons />
      {/* <SeriesRecommendations series={seriesRecommendations} /> */}
      <MediaRecommendations
        title="Series You Might Like"
        media={seriesRecommendations}
      />
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

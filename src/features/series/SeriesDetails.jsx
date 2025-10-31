import { useLoaderData } from "react-router-dom";
import {
  fetchSeriesDetails,
  fetchSeriesCredits,
} from "../../services/seriesApi";
import SeriesHero from "./SeriesHero";
import SeriesDescription from "./SeriesDescription";
import SeriesCredits from "./SeriesCredits";

/* eslint-disable react-refresh/only-export-components */
function SeriesDetails() {
  const { seriesDetails, seriesCredits } = useLoaderData();

  // console.log(series);
  return (
    <section>
      <SeriesHero series={seriesDetails} />
      <div className="flex flex-col-reverse gap-6 lg:flex-row lg:gap-4">
        <div className="min-w-0 flex-1">
          <SeriesDescription series={seriesDetails} />
          <SeriesCredits credits={seriesCredits} />
        </div>

        {/* <div className="w-full shrink-0 lg:w-[300px]">
          <MovieStats movie={movie} />
        </div> */}
      </div>
    </section>
  );
}

export async function loader({ params }) {
  const [seriesDetails, seriesCredits] = await Promise.all([
    fetchSeriesDetails(params.seriesId),
    fetchSeriesCredits(params.seriesId),
  ]);

  return { seriesDetails, seriesCredits };
}

export default SeriesDetails;

{
  /*<section>
  <MovieHero movie={movie} />

  <div className="flex flex-col-reverse gap-6 lg:flex-row lg:gap-4">
    <div className="min-w-0 flex-1">
      <MovieDescription movie={movie} />
      <MovieCast castData={castData} />
    </div>

    <div className="w-full shrink-0 lg:w-[300px]">
      <MovieStats movie={movie} />
    </div>
  </div>
  <MoviesRecommendations movies={moviesRecommendations} />
</section>;*/
}

/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import HeroSeriesSection from "./HeroSeriesSection";
import SeriesIntro from "./SeriesIntro";
import SeriesSection from "./SeriesSection";

import {
  fetchPopularSeries,
  fetchTopRatedSeries,
  fetchPremierTodaySeries,
  fetchAiringTodaySeries,
  fetchUpcomingSeries,
} from "../../services/seriesApi";

function SeriesPage() {
  const {
    allSeries,
    topRatedSeries,
    premierTodaySeries,
    airingTodaySeries,
    upcomingSeries,
  } = useLoaderData();

  console.log(upcomingSeries);

  return (
    <>
      <HeroSeriesSection />
      <SeriesIntro />
      {/* Top Rated section */}
      <SeriesSection
        title="Our Top Rated Series"
        text="Critically acclaimed and fan-adored—these standout series set the gold standard for storytelling."
        seriesArray={topRatedSeries.results}
        fetchMore={fetchTopRatedSeries}
      />
      {/* Popular section */}
      <SeriesSection
        title="Our Popular Series"
        text="Trending now and loved by millions—these binge-worthy hits are dominating screens everywhere."
        seriesArray={allSeries.results}
        fetchMore={fetchPopularSeries}
      />
      {/* Premier series section */}
      <SeriesSection
        title="Series Premiering Today"
        text="Brand new stories debuting now, be among the first to dive into today's freshest premieres."
        seriesArray={premierTodaySeries.results}
        fetchMore={fetchPremierTodaySeries}
      />
      {/* Series that will have episodes airing today section */}
      <SeriesSection
        title="New Episodes Today"
        text="Fresh drops from your favorite shows—catch the latest episodes airing today and stay up to date."
        seriesArray={airingTodaySeries.results}
        fetchMore={fetchAiringTodaySeries}
        isAiringToday={true}
      />
      {/* Upcoming series for the next 7 days */}
      <SeriesSection
        title="Upcoming Series This Week"
        text="Get ahead of the buzz these fresh titles are set to premiere or return in the next few days."
        seriesArray={upcomingSeries.results}
        fetchMore={fetchUpcomingSeries}
      />
    </>
  );
}

export async function loader() {
  const [
    allSeries,
    topRatedSeries,
    premierTodaySeries,
    airingTodaySeries,
    upcomingSeries,
  ] = await Promise.all([
    fetchPopularSeries(),
    fetchTopRatedSeries(),
    fetchPremierTodaySeries(),
    fetchAiringTodaySeries(),
    fetchUpcomingSeries(),
  ]);

  return {
    allSeries,
    topRatedSeries,
    premierTodaySeries,
    airingTodaySeries,
    upcomingSeries,
  };
}

export default SeriesPage;

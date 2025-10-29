/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { fetchPopularSeries } from "../../services/seriesApi";
import HeroSeriesSection from "./HeroSeriesSection";
import PopularSeries from "./PopularSeries";
import SeriesIntro from "./SeriesIntro";

function SeriesPage() {
  const { results } = useLoaderData();

  console.log(results);

  return (
    <>
      <HeroSeriesSection />
      <SeriesIntro />
      <PopularSeries allSeries={results} fetchMore={fetchPopularSeries} />
    </>
  );
}

export async function loader() {
  const data = await fetchPopularSeries();

  return data;
}

export default SeriesPage;

import { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { fetchMediaBySearch } from "../../services/searchApi";

import Main from "../common/Main";
import PopularMediaCard from "../common/PopularMediaCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

/* eslint-disable react-refresh/only-export-components */
function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const data = useLoaderData();

  const { results } = data;

  const [searchResults, setSearchResults] = useState(results);
  const [page, setPage] = useState(2);

  useEffect(() => {
    setSearchResults(results);
    setPage(2);
  }, [results]);

  useEffect(() => {
    if (!fetchMediaBySearch) return;

    async function loadMore() {
      const newData = await fetchMediaBySearch(query, page);
      const nextSeries = newData?.results ?? newData ?? [];

      if (!Array.isArray(nextSeries)) return;

      setSearchResults((prev) => [...prev, ...nextSeries]);
    }

    loadMore();
  }, [page, query]);

  function handleReachEnd() {
    if (!fetchMediaBySearch) return;
    setPage((prev) => prev + 1);
  }

  if (!searchResults)
    return <p>Unfortunately, we couldn't fetch any thing you idiot</p>;

  return (
    <>
      <Main>
        <h2 className="text-text-secondary text-lg font-semibold lg:text-4xl">
          Results for your search:{" "}
          <span className="text-text-primary uppercase">{query}</span>
        </h2>
      </Main>
      <Main>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          onReachEnd={handleReachEnd}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {searchResults.map((media, index) => (
            <SwiperSlide key={`${media.id}-${page}-${index}`}>
              <PopularMediaCard media={media} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Main>
    </>
  );
}

export async function loader({ request }) {
  const url = new URL(request.url);

  const query = url.searchParams.get("query");

  const data = fetchMediaBySearch(query);

  return data;
}

export default SearchPage;

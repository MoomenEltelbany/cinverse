import { useEffect, useState } from "react";
import Main from "../../components/common/Main";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PopularSeriesCard from "./PopularSeriesCard";

function PopularSeries({ allSeries, fetchMore }) {
  const [series, setSeries] = useState(allSeries);
  const [page, setPage] = useState(2);

  useEffect(() => {
    setSeries(series);
    setPage(2);
  }, [series]);

  useEffect(() => {
    if (!fetchMore) return;

    async function loadMore() {
      const newData = await fetchMore(page);
      const nextSeries = newData?.results ?? newData ?? [];

      if (!Array.isArray(nextSeries)) return;

      setSeries((prev) => [...prev, ...nextSeries]);
    }

    loadMore();
  }, [page, fetchMore]);

  function handleReachEnd() {
    if (!fetchMore) return;
    setPage((prev) => prev + 1);
  }

  return (
    <Main>
      <h2 className="text-text-primary text-2xl font-semibold">
        Our Top Rated Series
      </h2>
      <p className="text-text-secondary mb-4 text-sm">
        Fan favorites and critic darlings—these top series redefine storytelling
        and demand to be binged.
      </p>
      <div>
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
          {series.map((series, index) => (
            <SwiperSlide key={`${series.id}-${page}-${index}`}>
              <PopularSeriesCard series={series} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Main>
  );
}

export default PopularSeries;

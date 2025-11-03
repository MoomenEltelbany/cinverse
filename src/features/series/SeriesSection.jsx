import { useEffect, useState } from "react";
import Main from "../../components/common/Main";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PopularMediaCard from "../../components/common/PopularMediaCard";

function SeriesSection({
  title,
  text,
  seriesArray,
  fetchMore,
  isAiringToday = false,
}) {
  const [series, setSeries] = useState(seriesArray);
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
      <h2 className="text-text-primary text-2xl font-semibold">{title}</h2>
      <p className="text-text-secondary mb-4 text-sm">{text}</p>
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
              <PopularMediaCard media={series} isAiringToday={isAiringToday} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Main>
  );
}

export default SeriesSection;

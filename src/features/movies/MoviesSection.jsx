import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import Main from "../../components/common/Main";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function MoviesSection({ title, text, moviesArray, fetchMore }) {
  const [movies, setMovies] = useState(moviesArray);
  const [page, setPage] = useState(2);

  useEffect(() => {
    setMovies(moviesArray);
    setPage(2);
  }, [moviesArray]);

  useEffect(() => {
    if (!fetchMore) return;

    async function loadMore() {
      const newData = await fetchMore(page);
      const nextMovies = newData?.results ?? newData ?? [];

      if (!Array.isArray(nextMovies)) return;

      setMovies((prev) => [...prev, ...nextMovies]);
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
        {movies.map((movie, index) => (
          <SwiperSlide key={`${movie.id}-${page}-${index}`}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Main>
  );
}

export default MoviesSection;

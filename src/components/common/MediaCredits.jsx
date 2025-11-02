import { Swiper, SwiperSlide } from "swiper/react";

import Main from "./Main";
import MediaCastCard from "./MediaCastCard";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MediaCredits({ credits }) {
  const { cast } = credits;
  const topCastMembers = cast.slice(0, 20);

  if (topCastMembers.length === 0) return null;

  return (
    <Main>
      <h3 className="text-text-secondary mb-4 text-xl font-semibold">
        Main Characters
      </h3>

      <div className="bg-surface-card rounded px-4 py-6">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={24}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full"
        >
          {topCastMembers.map((cast) => (
            <SwiperSlide key={cast.id}>
              <div className="flex justify-center">
                <MediaCastCard cast={cast} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Main>
  );
}

export default MediaCredits;

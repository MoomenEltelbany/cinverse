import moviesSection from "../../assets/movies_section.jpg";
import Button from "../../components/common/Button";

function MoviesHero() {
  return (
    <div className="relative h-dvh overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(42,42,42,0.5), #000 80%)",
        }}
      ></div>
      <div className="max-h-dvh">
        <img
          src={moviesSection}
          alt="The hero section background"
          className="h-dvh w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 top-[30%] z-20 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-text-primary text-lg font-semibold uppercase lg:text-4xl">
          Explore the World of Movies
        </h2>
        <p className="text-text-secondary my-5 max-w-3xl text-sm leading-relaxed lg:text-lg">
          Dive into our curated collection of films—from timeless classics to
          the latest blockbusters. Whether you're in the mood for heart-pounding
          action, emotional drama, or laugh-out-loud comedy, our movie library
          has something for every kind of movies. Discover, watch, and build
          your personal watchlist with ease.
        </p>
        <Button>Start Watching Now</Button>
      </div>
    </div>
  );
}

export default MoviesHero;

import heroImage from "../../assets/hero-bg.jpg";
import Button from "../../components/common/Button";

function HeroSection() {
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
          src={heroImage}
          alt="The hero section background"
          className="h-dvh w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 top-[30%] z-20 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-text-primary text-lg font-semibold uppercase lg:text-4xl">
          The best streaming experience
        </h2>
        <p className="text-text-secondary my-5 max-w-3xl text-sm leading-relaxed lg:text-lg">
          Cineverse is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With Cineverse, you can
          enjoy a wide variety of content including the latest blockbusters,
          class movies, popular TV shows and more. You can also crete your own
          watch lists, so you can easily find the content you want to watch
        </p>
        <Button>Start Watching Now</Button>
      </div>
    </div>
  );
}

export default HeroSection;

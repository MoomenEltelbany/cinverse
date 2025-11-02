import Button from "./Button";

function CategoryHero({ title, text, image }) {
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
          src={image}
          alt="The hero section background"
          className="h-dvh w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 top-[30%] z-20 flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-text-primary text-lg font-semibold uppercase lg:text-4xl">
          {title}
        </h2>
        <p className="text-text-secondary my-5 max-w-3xl text-sm leading-relaxed lg:text-lg">
          {text}
        </p>
        <Button>Start Watching Now</Button>
      </div>
    </div>
  );
}

export default CategoryHero;

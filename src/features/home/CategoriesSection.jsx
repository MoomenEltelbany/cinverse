import Main from "../../ui/Main";
import GenreCard from "./GenreCard";

function CategoriesSection() {
  return (
    <Main>
      <div>
        <h2 className="text-text-primary text-2xl">
          Explore our wide variety of categories
        </h2>
        <p className="text-text-tertiary mt-3 mb-6 text-base">
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new
        </p>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {["Action", "Adventure", "Comedy", "Drama", "Horror"].map((genre) => (
          <GenreCard key={genre} title={genre} />
        ))}
      </div>
    </Main>
  );
}

export default CategoriesSection;

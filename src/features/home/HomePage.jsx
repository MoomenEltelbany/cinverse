/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import HeroSection from "./HeroSection";
import DevicesSection from "./DevicesSection";
import FAQSection from "./FAQSection";
import PlansSection from "./PlansSection";
import CategoriesSection from "./CategoriesSection";
import { fetchMovieGenres } from "../../services/moviesAPI";
import { fetchMoviesByGenre } from "../../services/genresApi";

function HomePage() {
  const { genresWithPosters } = useLoaderData();

  return (
    <>
      <HeroSection />
      <CategoriesSection genresWithPosters={genresWithPosters} />
      <DevicesSection />
      <FAQSection />
      <PlansSection />
    </>
  );
}

export async function loader() {
  // Fetch all genres first
  const allGenres = await fetchMovieGenres();

  // Filter to main 5 genres
  const mainGenres = allGenres.filter((genre) =>
    ["Action", "Adventure", "Comedy", "Drama", "Horror"].includes(genre.name),
  );

  // Fetch movies for each genre in parallel
  const genresWithMovies = await Promise.all(
    mainGenres.map(async (genre) => {
      const movies = await fetchMoviesByGenre(genre.id);
      // Get first 4 movies with posters
      const posters = movies
        .filter((movie) => movie.poster_path)
        .slice(0, 4)
        .map((movie) => ({
          id: movie.id,
          path: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
          title: movie.title,
        }));

      return {
        id: genre.id,
        name: genre.name,
        posters,
      };
    }),
  );

  return { genresWithPosters: genresWithMovies };
}

export default HomePage;

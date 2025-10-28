import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";

import AppLayout from "./ui/AppLayout";
import SeriesPage from "./ui/SeriesPage";
import WatchListPage from "./ui/WatchListPage";
import FavoritesPage from "./ui/FavoritesPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import MoviesPage, { loader as moviesPagerLoader } from "./pages/MoviesPage";
import MovieDetails, {
  loader as movieDetailsLoader,
} from "./features/movies/MovieDetails";
import ActorDetails, {
  loader as actorDetailsLoader,
} from "./features/actors/ActorDetails";
import GenrePage from "./features/genres/GenrePage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "movies",
        element: <MoviesPage />,
        loader: moviesPagerLoader,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetails />,
        loader: movieDetailsLoader,
      },
      {
        path: "actor/:castId",
        element: <ActorDetails />,
        loader: actorDetailsLoader,
      },
      {
        path: "genres/:genreId",
        element: <GenrePage />,
      },
      {
        path: "series",
        element: <SeriesPage />,
      },
      {
        path: "watchlist",
        element: <WatchListPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              backgroundColor: "#19890f",
              color: "white",
              borderRadius: "0.375rem",
            },
          },
          error: {
            duration: 5000,
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              backgroundColor: "#a50d05",
              color: "white",
              borderRadius: "0.375rem",
            },
          },
        }}
      />

      <RouterProvider router={router} />
    </>
  );
}

//  <div className="bg-surface text-text min-h-screen p-8">
//       <header className="border-border mb-6 flex items-center justify-between border-b pb-4 font-extrabold">
//         <h1 className="text-3xl font-bold text-white">🎬 Cineverse</h1>
//         <button className="bg-primary rounded-(--radius-md) px-4 py-2 font-medium text-white">
//           Sign In
//         </button>
//       </header>

//       <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={i}
//             className="bg-card border-border rounded-(--radius-md) border p-4"
//           >
//             <div className="bg-surface mb-3 aspect-2/3 rounded-md"></div>
//             <h2 className="text-lg font-semibold">Movie Title {i + 1}</h2>
//             <p className="text-muted text-sm">2025 • Action</p>
//             <p className="text-accent mt-1 text-sm font-medium">⭐ 8.7</p>
//           </div>
//         ))}
//       </section>
//     </div>

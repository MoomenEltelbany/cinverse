import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";

import AppLayout from "./components/layout/AppLayout";
import WatchListPage from "./features/watchlist/WatchListPage";
import FavoritesPage from "./features/favorites/FavoritesPage";
import HomePage from "./features/home/HomePage";
import ErrorPage from "./pages/ErrorPage";

import SeriesPage, {
  loader as seriesPageLoader,
} from "./features/series/SeriesPage";
import MoviesPage, {
  loader as moviesPagerLoader,
} from "./features/movies/MoviesPage";
import MovieDetails, {
  loader as movieDetailsLoader,
} from "./features/movies/MovieDetails";
import ActorDetails, {
  loader as actorDetailsLoader,
} from "./features/actors/ActorDetails";
import GenrePage, {
  loader as genrePageLoader,
} from "./features/genres/GenrePage";
import SeriesDetails, {
  loader as seriesDetailsLoader,
} from "./features/series/SeriesDetails";

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
        loader: genrePageLoader,
      },
      {
        path: "series",
        element: <SeriesPage />,
        loader: seriesPageLoader,
      },
      {
        path: "series/:seriesId",
        element: <SeriesDetails />,
        loader: seriesDetailsLoader,
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

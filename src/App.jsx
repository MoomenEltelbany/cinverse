import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppLayout from "./ui/AppLayout";
import HomePage from "./ui/HomePage";
import MoviesPage from "./ui/MoviesPage";
import SeriesPage from "./ui/SeriesPage";
import WatchListPage from "./ui/WatchListPage";
import FavoritesPage from "./ui/FavoritesPage";

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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
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

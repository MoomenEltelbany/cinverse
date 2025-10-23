const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY;

export async function tmdb(endpoint, params = "") {
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}${params}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`TMDB error ${res.status}`);
  return res.json();
}

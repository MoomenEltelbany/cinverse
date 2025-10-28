import { tmdb } from "./api.js";

// Gets the general details about the actor
export async function fetchActorDetails(id) {
  const data = await tmdb(`/person/${id}`);

  return data;
}

// Gets the movies where the actor took place (Will just fetch the first 5 movies in the list)
export async function fetchActorCredits(id) {
  const data = await tmdb(`/person/${id}/combined_credits`);

  const topCredits = data.cast.slice(0, 5);

  return topCredits;
}

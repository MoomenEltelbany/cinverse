import { useLoaderData } from "react-router-dom";
import { fetchActorDetails, fetchActorCredits } from "../../services/actorsApi";
import Main from "../../ui/Main";
import MediaImage from "../../ui/MediaImage";
import RandomPicks from "./RandomPicks";
import ActorProfile from "./ActorProfile";
import ActorImage from "./ActorImage";

/* eslint-disable react-refresh/only-export-components */
function ActorDetails() {
  const { actor, credits } = useLoaderData();

  return (
    <Main>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
        <ActorImage actor={actor} />
        <ActorProfile actor={actor} />
      </div>
      <RandomPicks credits={credits} />
    </Main>
  );
}

export async function loader({ params }) {
  if (!params.castId) throw new Error("Missing castId");

  const [actor, credits] = await Promise.all([
    fetchActorDetails(params.castId),
    fetchActorCredits(params.castId),
  ]);

  return { actor, credits };
}

export default ActorDetails;

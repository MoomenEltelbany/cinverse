import { formatDate } from "../../utils/dateUtils";

function ActorProfile({ actor }) {
  return (
    <div className="text-text-primary flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-semibold">Name:</h3>
        <p className="text-text-secondary">{actor.name}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Birthday:</h3>
        <p className="text-text-secondary">{formatDate(actor.birthday)}</p>
      </div>
      {actor.deathday && (
        <div>
          <h3 className="text-lg font-semibold">Died on:</h3>
          <p className="text-text-secondary">{formatDate(actor.deathday)}</p>
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold">Place of birth:</h3>
        <p className="text-text-secondary">{actor.place_of_birth}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Biography:</h3>
        <p className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
          {actor.biography}
        </p>
      </div>
    </div>
  );
}

export default ActorProfile;

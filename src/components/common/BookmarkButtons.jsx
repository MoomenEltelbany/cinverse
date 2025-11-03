import toast from "react-hot-toast";
import { useBookmarks } from "../../contexts/BookmarkContext";

import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

function BookmarkButtons({ media }) {
  const { state, dispatch } = useBookmarks();

  const isBookmarked = state.some((item) => item.id === media.id);

  function handleToggleBookmark() {
    const name = media.title || media.name || "The movie";

    if (isBookmarked) {
      dispatch({ type: "media/remove", payload: media.id });
      toast.success(`${name} was removed successfully from your Favorites`);
    } else {
      dispatch({ type: "media/add", payload: media });
      toast.success(`${name} was added successfully from your Favorites`);
    }
  }
  return isBookmarked ? (
    <FaBookmark
      className="absolute top-0 left-0 cursor-pointer text-3xl text-red-500"
      onClick={handleToggleBookmark}
    />
  ) : (
    <CiBookmark
      className="absolute top-0 left-0 cursor-pointer text-3xl text-red-500"
      onClick={handleToggleBookmark}
    />
  );
}

export default BookmarkButtons;

/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = [];

const BookmarkContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "media/add": {
      const exists = state.some((item) => item.id === action.payload.id);

      if (exists) return state;

      console.log("media added successfully");

      return [...state, action.payload];
    }

    case "media/remove": {
      return state.filter((item) => item.id !== action.payload);
    }

    case "media/clear": {
      return [];
    }

    case "media/init": {
      return action.payload;
    }

    default:
      return state;
  }
}

function BookmarksProvider({ children }) {
  const initializer = function () {
    const stored = localStorage.getItem("bookmarks");

    return stored ? JSON.parse(stored) : [];
  };

  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(
    function () {
      localStorage.setItem("bookmarks", JSON.stringify(state));
    },
    [state],
  );

  return (
    <BookmarkContext.Provider value={{ state, dispatch }}>
      {children}
    </BookmarkContext.Provider>
  );
}

function useBookmarks() {
  const bookmarks = useContext(BookmarkContext);

  if (bookmarks === undefined)
    throw new Error(
      "Bookmarks context was used outside the Bookmarks provider",
    );

  return bookmarks;
}

export { BookmarksProvider, useBookmarks };

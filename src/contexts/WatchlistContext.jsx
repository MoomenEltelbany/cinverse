/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = [];

const WatchlistContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "watchlist/add": {
      const exists = state.some((item) => item.id === action.payload.id);

      if (exists) return state;

      return [...state, action.payload];
    }

    case "watchlist/remove": {
      return state.filter((item) => item.id !== action.payload);
    }

    case "watchlist/clear": {
      return [];
    }

    case "watchlist/init":
      return action.payload;

    default:
      return state;
  }
}

function WatchlistProvider({ children }) {
  const initializer = function () {
    const storedValue = localStorage.getItem("watchlist");

    return storedValue ? JSON.parse(storedValue) : [];
  };

  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(
    function () {
      localStorage.setItem("watchlist", JSON.stringify(state));
    },
    [state],
  );

  return (
    <WatchlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WatchlistContext.Provider>
  );
}

function useWatchlist() {
  const watchlist = useContext(WatchlistContext);

  if (watchlist === undefined)
    throw new Error("The watch list context was used outside the provider");

  return watchlist;
}

export { WatchlistProvider, useWatchlist };

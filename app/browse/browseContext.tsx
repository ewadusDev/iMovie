import { createContext } from "react";
import { BrowseContextType } from "@/types/context";

export const BrowseContext = createContext<BrowseContextType>({
  showMiniMovie: false,
  setShowMiniMovie: () => {},
  playMovie: false,
  setPlayMovie: () => {},
  selectedMovie: null,
  setSelectedMovie: () => {},
  movies: [],
});

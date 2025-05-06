import { MovieMetadata } from "@/types/meta";

export type BrowseContextType = {
  showMiniMovie: boolean;
  setShowMiniMovie: React.Dispatch<React.SetStateAction<boolean>>;
  playMovie: boolean;
  setPlayMovie: React.Dispatch<React.SetStateAction<boolean>>;
  selectedMovie: MovieMetadata | null;
  setSelectedMovie: React.Dispatch<React.SetStateAction<MovieMetadata | null>>;
  movies: MovieMetadata[];
};

"use client";

import { Info, Play } from "@/app/components/icons/Icons";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { fetchMovie, fetchRandomMovie } from "@/lib/actions";
import { MovieState } from "@/types/meta";
import { BrowseContext } from "@/app/browse/browseContext";

const Header = () => {
  const { setSelectedMovie, setShowMiniMovie } = useContext(BrowseContext);
  const [movie, setMovie] = useState<MovieState | null>(null);

  useEffect(() => {
    const getMovie = async () => {
      const movie = await fetchRandomMovie();
      return movie.id;
    };

    const getUrl = async () => {
      const response = await fetchMovie(await getMovie());
      setMovie(response);
    };
    getUrl();
  }, []);

  if (movie === null) return null;

  return (
    <header className="mt-20 w-5/12">
      <div className="relative flex w-full flex-col gap-[22px] text-white">
        <p className="text-4xl font-bold">{movie.getVideoPath.title}</p>
        <p className="text-lg">{movie.getVideoPath.description}</p>
        <div className="flex gap-3">
          <Link
            href={`/watch/${movie.getVideoPath.id}`}
            className="flex items-center gap-2 rounded-sm bg-white px-[26px] py-2 font-semibold text-black"
          >
            <span>
              <Play fill={"#000"} width={24} height={24} />
            </span>
            Play
          </Link>
          <button
            className="flex items-center gap-2 rounded-sm bg-gray-300/30 px-[22px] py-2 font-semibold"
            onClick={() => {
              setSelectedMovie(movie.getVideoPath);
              setShowMiniMovie(true);
            }}
          >
            <span>
              <Info width={24} height={24} />
            </span>
            More Info
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;

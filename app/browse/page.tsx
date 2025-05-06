"use client";

import { FOOTERLINKS, LANGUAGES } from "@/data/static";
import Header from "../components/browse/Header";
import PickProfile from "../components/browse/PickProfile";
import TopNavbar from "../components/browse/TopNavbar";
import ListCard from "../components/playlist/ListCard";
import RankListCard from "../components/playlist/RankListCard";
import DropdownLanguages from "../components/landing/Dropdown";
import Link from "next/link";
import { useEffect, useState } from "react";
import MiniMovieMenu from "../components/playlist/MiniMovieMenu";
import { useSession } from "next-auth/react";
import { fetchMovies, fetchRandomMovie } from "@/lib/actions";
import Image from "next/image";
import { MovieMetadata } from "@/types/meta";
import { BrowseContext } from "@/app/browse/browseContext";

const BrowsePage = () => {
  const { data: session } = useSession();
  const [showMiniMovie, setShowMiniMovie] = useState(false);
  const [playMovie, setPlayMovie] = useState(false);
  const [movies, setMovies] = useState<MovieMetadata[]>([]);
  const [randomMovie, setRandomMovie] = useState<MovieMetadata | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<MovieMetadata | null>(
    null,
  );

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetchRandomMovie();
        setRandomMovie(response);
      } catch (error) {
        console.log(error);
      }
    };

    const randomMovie = async () => {
      try {
        const response = await fetchMovies();
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };

    randomMovie();
    getMovies();
  }, [session]);

  if (!session)
    return (
      <main>
        <PickProfile />
      </main>
    );
  if (randomMovie === null) return null;

  return (
    <BrowseContext
      value={{
        showMiniMovie,
        setShowMiniMovie,
        playMovie,
        setPlayMovie,
        selectedMovie,
        setSelectedMovie,
        movies,
      }}
    >
      <main className="relative h-screen">
        {/* set vdo cover here */}
        <div className="relative h-10/12 bg-cover">
          <Image
            src={randomMovie.thumbnailUrl || ""}
            alt="random"
            fill
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10 container mx-auto">
            <TopNavbar />
            <Header />
          </div>
        </div>
        <div className="relative top-[-80px] z-12 container mx-auto">
          <div className="flex flex-col">
            <ListCard title="Matched to You" movies={movies} />
            <RankListCard
              title="Top 10 movies in Thailand Today"
              movies={movies}
            />
          </div>
          {/* footer */}
          <footer className="pb-10">
            <div className="container mx-auto">
              <p className="py-5 text-white">Questions? Call 888-888-8888</p>
              <div className="grid grid-cols-4 gap-1 py-5">
                {FOOTERLINKS.map((link) => {
                  return (
                    <Link href={link.href} key={link.label} className="w-fit">
                      <p className="text-white underline hover:cursor-pointer">
                        {link.label}
                      </p>
                    </Link>
                  );
                })}
              </div>
              <DropdownLanguages items={LANGUAGES} />
            </div>
          </footer>
        </div>
        {showMiniMovie && (
          <div className="absolute top-0 z-30">
            <MiniMovieMenu />
          </div>
        )}
      </main>
    </BrowseContext>
  );
};
export default BrowsePage;

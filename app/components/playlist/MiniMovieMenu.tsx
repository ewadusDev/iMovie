"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import {
  IoPlayCircle,
  IoAdd,
  IoThumbsUpOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { MovieMetadata } from "@/types/meta";
import { BrowseContext } from "@/app/browse/browseContext";

const MiniMovieMenu = () => {
  const { setShowMiniMovie, selectedMovie, movies } = useContext(BrowseContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (selectedMovie === null) return null;

  return (
    <section className="bg-black/70 py-7">
      <div className="mx-auto w-2/4 bg-black text-white">
        {/* Header */}
        <header className="relative flex h-[400px] w-full items-end bg-[url(/contents/herobanner/hero-Image.png)] bg-cover p-6">
          <Image
            src={selectedMovie.thumbnailUrl || ""}
            layout="fill"
            objectFit="cover"
            alt="movie-preview"
          />
          <div className="z-30 flex gap-3">
            <Link
              href={`/watch/${selectedMovie?.id}`}
              className="flex items-center gap-2 rounded-sm bg-white px-[26px] py-2 font-semibold text-black"
            >
              <span>
                <IoPlayCircle size={24} />
              </span>
              Play
            </Link>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200">
              <IoAdd size={24} />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200">
              <IoThumbsUpOutline size={20} />
            </button>
          </div>
          <button
            className="absolute top-2 right-2"
            onClick={() => setShowMiniMovie(false)}
          >
            <IoCloseOutline size={40} />
          </button>
        </header>
        {/* Movie Detail */}
        <section className="flex justify-between gap-6 p-4">
          <div className="flex w-3/4 flex-col gap-5">
            <div>
              <p className="text-xl font-semibold">{selectedMovie?.title}</p>
              <p>{selectedMovie?.duration}</p>
              <p>Rating 18+</p>
            </div>
            <div>
              <p>{selectedMovie?.description}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p>Cast: โจ๊ก iScream, ต้า Dogred, ยัดห่า fedfe</p>
            <p>Genre: {selectedMovie?.genre}</p>
            <p>This show is: Dark, Suspenseful, Exiting</p>
          </div>
        </section>

        {/* Episodes */}
        <section>
          <div className="flex justify-between p-4">
            <p>Episodes</p>
            <p>iScream</p>
          </div>
          {/* List movies */}

          {movies.map((movie: MovieMetadata, index: number) => {
            return (
              <div
                className="my-10 flex h-16 items-center justify-center gap-4 p-10"
                key={movie.id}
              >
                <div>{index + 1}</div>
                <div className="flex gap-4">
                  <div className="relative flex w-64 items-center justify-center bg-gray-400">
                    <Image
                      src={movie.thumbnailUrl || ""}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                    <button>
                      <IoPlayCircle size={48} />
                    </button>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <h6 className="text-xl font-semibold">{movie.title}</h6>
                      <h6>{movie.duration}</h6>
                    </div>
                    <p>{movie.description?.slice(0, 200)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};
export default MiniMovieMenu;

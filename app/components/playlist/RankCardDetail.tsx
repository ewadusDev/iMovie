"use client";

import Image from "next/image";
import MoviePreview from "./MoviePreview";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MovieMetadata } from "@/types/meta";
import { BrowseContext } from "@/app/browse/browseContext";

const RankCardDetail = ({
  length,
  movie,
}: {
  length: number;
  movie: MovieMetadata;
}) => {
  const [hovered, setHovered] = useState(false);
  const { setShowMiniMovie } = useContext(BrowseContext);

  return (
    <div
      className="relative flex h-52 w-64 shrink-0 rounded-lg hover:cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setShowMiniMovie(true)}
    >
      <div
        className={`${length === 9 ? "w-[110px]" : `w-[50px]`} flex justify-end text-white`}
      >
        <p className="text-[200px] font-bold tracking-[-25px]">{length + 1}</p>
      </div>
      <div
        className={`relative flex w-2/3 flex-col justify-between bg-gray-700`}
      >
        <Image
          src={movie.thumbnailUrl || ""}
          fill
          objectFit="cover"
          alt="Image"
          className=""
        />
        {/* Netflix888 logo */}
        <div className="z-40 p-1.5">
          <Image src={"/imovie-icon.png"} alt="Logo" width={11} height={20} />
        </div>

        <div className="flex justify-center">
          <p className="w-fit rounded-t-sm bg-[#f50723] px-1.5 py-0.5 text-[10px] text-white">
            Recently Added
          </p>
        </div>
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[-10%] left-[-5%] z-50 h-[120%] w-72 overflow-hidden rounded-sm shadow-2xl"
          >
            <MoviePreview movie={movie} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default RankCardDetail;

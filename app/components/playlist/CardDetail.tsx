"use client";

import Image from "next/image";
import MoviePreview from "./MoviePreview";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MovieMetadata } from "@/types/meta";

const CardDetail = ({ movie }: { movie: MovieMetadata }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative h-32 w-64 shrink-0 rounded-lg bg-gray-800 hover:cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`flex h-full w-full flex-col justify-between rounded-[2px]`}
      >
        <Image
          src={movie.thumbnailUrl || ""}
          fill
          objectFit="cover"
          alt="Image"
          sizes="100vw"
          className="rounded-[2px]"
        />
        {/* Netflix888 logo */}
        <Image
          src={"/logo/medium-letter.png"}
          alt={"Image"}
          width={24}
          height={24}
          className="relative z-10 p-1.5"
        />
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
            className="absolute top-[-16%] left-[-15%] z-50 h-44 w-80 overflow-hidden rounded-sm shadow-2xl"
          >
            <MoviePreview movie={movie} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default CardDetail;

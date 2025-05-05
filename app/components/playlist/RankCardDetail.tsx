"use client"

import Image from "next/image";
import MoviePreview from "./MoviePreview";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { BrowseContext } from "@/app/browse/page";
import { MovieMetadata } from "@/types/meta"



const RankCardDetail = ({ length, movie }: { length: number, movie: MovieMetadata }) => {
    const [hovered, setHovered] = useState(false);
    const { setShowMiniMovie } = useContext(BrowseContext);

    return (
        <div className="relative w-64 h-52 rounded-lg shrink-0 hover:cursor-pointer flex"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setShowMiniMovie(true)}
        >
            <div className={`${length === 9 ? 'w-[110px]' : `w-[50px]`} flex justify-end text-white `} >
                <p className="text-[200px] font-bold tracking-[-25px]">{length + 1}</p>
            </div>
            <div className={`w-2/3 flex flex-col justify-between  bg-gray-700 relative `}>
                <Image src={movie.thumbnailUrl || ""} fill objectFit="cover" alt="Image" className="" />
                {/* Netflix888 logo */}
                <div className="p-1.5 z-40">
                    <Image src={"/logo/medium-letter.png"} alt="Logo" width={11} height={20} />
                </div>

                <div className="flex justify-center">
                    <p className="text-white text-[10px] bg-[#f50723] w-fit py-0.5 px-1.5 rounded-t-sm">Recently Added</p>
                </div>
            </div>
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-[-10%] left-[-5%] z-50 w-72 h-[120%] shadow-2xl rounded-sm overflow-hidden "
                    >
                        <MoviePreview movie={movie} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
};
export default RankCardDetail;

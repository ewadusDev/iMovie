"use client"

import Image from "next/image";
import MoviePreview from "./MoviePreview";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';


const CardDetail = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="relative w-64 h-32 bg-gray-800 rounded-lg shrink-0 hover:cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="w-full h-full flex flex-col justify-between rounded-[2px] bg-[url(/contents/listcontent/HorizontalHomePage.png)] bg-cover">
                {/* Netflix logo */}
                <Image
                    src={'/logo/medium-letter.png'}
                    alt={"Image"}
                    width={24}
                    height={24}
                    className="p-1.5"
                />
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
                        className="absolute top-[-16%] left-[-15%] z-50 w-80 h-44 shadow-2xl rounded-sm overflow-hidden"
                    >
                        <MoviePreview />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

    )

};
export default CardDetail;
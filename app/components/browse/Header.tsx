"use client"

import { Info, Play } from "@/app/components/icons/Icons";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { fetchMovie, fetchRandomMovie } from "@/lib/actions";
import { BrowseContext } from "@/app/browse/page";
import { MovieState } from "@/types/meta"



const Header = () => {
    const { setSelectedMovie, setShowMiniMovie } = useContext(BrowseContext);
    const [movie, setMovie] = useState<MovieState | null>(null);

    useEffect(() => {
        const getMovie = async () => {
            const movie = await fetchRandomMovie()
            return movie.id
        }

        const getUrl = async () => {
            const response = await fetchMovie(await getMovie())
            setMovie(response)
        }
        getUrl()

    }, [])

    if (movie === null) return null

    return (
        <header className="w-5/12 mt-20">
            <div className="relative w-full text-white flex flex-col gap-[22px]">
                <p className="text-4xl font-bold">{movie.getVideoPath.title}</p>
                <p className="text-lg">{movie.getVideoPath.description}</p>
                <div className="flex gap-3">
                    <Link href={`/watch/${movie.getVideoPath.id}`} className="flex items-center gap-2 bg-white text-black font-semibold px-[26px] py-2 rounded-sm" >
                        <span><Play fill={"#000"} width={24} height={24} /></span>Play</Link>
                    <button className="flex items-center gap-2 bg-gray-300/30 font-semibold px-[22px] py-2 rounded-sm"
                        onClick={() => {
                            setSelectedMovie(movie.getVideoPath)
                            setShowMiniMovie(true)

                        }}>
                        <span><Info width={24} height={24} /></span>More Info</button>
                </div>
            </div>
        </header >
    )
};
export default Header;

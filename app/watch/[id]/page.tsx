"use client"
import { useParams } from "next/navigation";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import VDOPlayer from "@/app/components/player/VDOPlayer";
import { useEffect, useState } from "react";
import { fetchMovie } from "@/lib/actions";
import { MovieState } from "@/types/meta"


const WatchPage = () => {
    const param: { id: string } = useParams();
    const [movie, setMovie] = useState<MovieState | null>(null)
    useEffect(() => {
        const getMovie = async (id: string) => {
            const response = await fetchMovie(id)
            setMovie(response)
        }
        getMovie(param.id)
    }, [param.id])


    if (movie === null) return null


    return <main className="relative text-white h-screen w-screen">
        <div className="flex items-center absolute z-30 p-6 bg-black/40 w-full">
            <Link href={"/browse"}>
                <IoIosArrowBack size={30} />
            </Link>
            <p className="text-xl font-semibold">{movie.getVideoPath.title}</p>
        </div>
        <VDOPlayer url={movie.url} />

    </main>;
};
export default WatchPage;

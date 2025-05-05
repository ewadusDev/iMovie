import Image from "next/image";
import Link from "next/link";
import { IoPlayCircle, IoAddCircle, IoThumbsUpOutline, IoArrowDownCircle } from "react-icons/io5";
import { useContext } from "react";
import { BrowseContext } from "@/app/browse/page";
import { MovieMetadata } from "@/types/meta";

const MoviePreview = ({ movie }: { movie: MovieMetadata }) => {
    const { setShowMiniMovie, setSelectedMovie } = useContext(BrowseContext);


    return (
        <div className="w-full h-full bg-black text-white flex flex-col">
            <div className="w-full h-[60%] relative"
                onClick={() => {
                    setShowMiniMovie(true)
                    setSelectedMovie(movie)
                }}
            >
                <Image
                    src={movie?.thumbnailUrl || "/contents/herobanner/hero-Image.png"}
                    alt={"movie-preview"}
                    className="w-full h-full object-cover"
                    layout="fill"

                />
            </div>
            <div className="flex justify-between px-5 py-2">
                <div className="flex gap-2">
                    <Link href={`/watch/${movie.id}`}>
                        <IoPlayCircle size={24} color="#fff" />
                    </Link>
                    <IoAddCircle size={24} color="#fff" />
                    <IoThumbsUpOutline size={24} color="#fff" />
                </div>
                <IoArrowDownCircle size={24} color="#fff" />
            </div>
            <div className="flex gap-2 px-3 text-white text-sm">
                <p className="font-semibold">New</p>
                <p>TV-MA</p>
                <p>3 Seasons</p>
                <p>HD</p>
            </div>
            <div className="flex gap-2 px-3 text-white text-sm">
                <p>Violent</p>
                <p>Dark</p>
                <p>Action</p>
            </div>
        </div>
    );
};
export default MoviePreview;

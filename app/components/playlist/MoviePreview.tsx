import Image from "next/image";
import { IoPlayCircle, IoAddCircle, IoThumbsUpOutline, IoArrowDownCircle } from "react-icons/io5";

const MoviePreview = () => {
    return (
        <div className="w-full h-full bg-black text-white flex flex-col">
            <div className="w-full h-[60%] relative">
                <Image
                    src={"/browse/movie-preview.png"}
                    alt={"movie-preview"}
                    className="w-full h-full object-cover"
                    layout="fill"
                    priority
                />
            </div>
            <div className="flex justify-between px-5 py-2">
                <div className="flex gap-2">
                    <IoPlayCircle size={24} color="#fff" />
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

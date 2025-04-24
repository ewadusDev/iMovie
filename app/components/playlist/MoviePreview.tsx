import Image from "next/image";
import { Play, Add, ThumUp, ArrowDown } from "../icons/MoviePreview";


const MoviePreview = () => {
    return (
        <div className="w-[323px] flex flex-col gap-4 rounded-sm">
            <div className="w-full relative">
                <Image src={"/browse/movie-preview.png"} alt="movie-preview" width={323} height={181} />

            </div>
            <div className="flex justify-between px-5">
                <div className="flex gap-2">
                    <Play />
                    <Add />
                    <ThumUp />
                </div>
                <ArrowDown />
            </div>
            <div className="flex gap-2 px-3 text-white">
                <p className="font-semibold">New</p>
                <p>TV-MA</p>
                <p>3 Seasons</p>
                <p>HD</p>
            </div>
            <div className="flex gap-2 px-3 text-white">
                <p>Violent</p>
                <p>Dark</p>
                <p>Action</p>
            </div>


        </div>
    )
};
export default MoviePreview;

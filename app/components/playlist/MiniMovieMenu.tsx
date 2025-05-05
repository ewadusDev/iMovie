"use client"


import { BrowseContext } from "@/app/browse/page";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { IoPlayCircle, IoAdd, IoThumbsUpOutline, IoCloseOutline } from "react-icons/io5";
import { MovieMetadata } from "@/types/meta"


const MiniMovieMenu = () => {
    const { setShowMiniMovie, selectedMovie, movies } = useContext(BrowseContext);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])

    if (selectedMovie === null) return null


    return <section className=" bg-black/70 py-7">
        <div className="w-2/4 mx-auto text-white  bg-black ">
            {/* Header */}
            <header className="relative w-full h-[400px] p-6 bg-[url(/contents/herobanner/hero-Image.png)] bg-cover flex items-end">
                <Image src={selectedMovie.thumbnailUrl || ""} layout="fill" objectFit="cover" alt="movie-preview" />
                <div className="flex gap-3 z-30">
                    <Link
                        href={`/watch/${selectedMovie?.id}`}
                        className="flex items-center gap-2 bg-white text-black font-semibold px-[26px] py-2 rounded-sm"
                    ><span><IoPlayCircle size={24} /></span>Play</Link>
                    <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-full"><IoAdd size={24} /></button>
                    <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-full"><IoThumbsUpOutline size={20} /></button>
                </div>
                <button className="absolute top-2 right-2" onClick={() => setShowMiniMovie(false)}><IoCloseOutline size={40} /></button>

            </header>
            {/* Movie Detail */}
            <section className="flex justify-between p-4 gap-6">
                <div className="w-3/4 flex flex-col gap-5  ">
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
                    <p>
                        Cast: โจ๊ก iScream, ต้า Dogred, ยัดห่า fedfe
                    </p>
                    <p>
                        Genre: {selectedMovie?.genre}
                    </p>
                    <p>
                        This show is: Dark, Suspenseful, Exiting
                    </p>

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
                        <div className="h-16 flex p-10 justify-center items-center gap-4 my-10" key={movie.id}>
                            <div>{index + 1}</div>
                            <div className="flex gap-4">
                                <div className="w-64 bg-gray-400 flex items-center justify-center relative">
                                    <Image src={movie.thumbnailUrl || ""} alt="" layout="fill" objectFit="cover" />
                                    <button><IoPlayCircle size={48} /></button>
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
                    )

                })}
            </section>
        </div>
    </section>
};
export default MiniMovieMenu;

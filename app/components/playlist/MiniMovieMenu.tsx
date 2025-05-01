"use client"


import { BrowseContext } from "@/app/browse/page";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { IoPlayCircle, IoAdd, IoThumbsUpOutline, IoCloseOutline } from "react-icons/io5";



const MiniMovieMenu = () => {
    const { setShowMiniMovie } = useContext(BrowseContext);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])

    return <section className=" bg-black/70 py-7">
        <div className="w-2/4 mx-auto text-white  bg-black ">
            {/* Header */}
            <header className="relative w-full h-[400px] p-6 bg-[url(/contents/herobanner/hero-Image.png)] bg-cover flex items-end">
                <div className="flex gap-3">
                    <Link
                        href={"/watch/12351"}
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
                        <p>2022 1h 34m</p>
                        <p>16+</p>
                    </div>

                    <div>
                        <p>Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a string of looming threats.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p>
                        Cast: Kento Kaku, Yosuke Eguchi, Tae Kimura, more
                    </p>
                    <p>
                        Genres: TV Dramas, Japanese, TV Thrillers
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
                    <p>House of Ninjas</p>
                </div>
                {/* List movies */}

                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="h-16 flex p-10 justify-center items-center gap-4 my-10" key={index}>
                        <div>1</div>
                        <div className="flex gap-4">
                            <div className="w-64 bg-gray-400 flex items-center justify-center">
                                <button><IoPlayCircle size={48} /></button>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <h6>The Offer</h6>
                                    <h6>55m</h6>
                                </div>
                                <p>While Haru Tawara develops a crush on a mysterious young woman at work, an unusual opportunity arises at his father&rsquo;s financially struggling brewery.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    </section>
};
export default MiniMovieMenu;

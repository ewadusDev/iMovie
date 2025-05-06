"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import VDOPlayer from "@/app/components/player/VDOPlayer";
import { useEffect, useState } from "react";
import { fetchMovie } from "@/lib/actions";
import { MovieState } from "@/types/meta";

const WatchPage = () => {
  const param: { id: string } = useParams();
  const [movie, setMovie] = useState<MovieState | null>(null);
  useEffect(() => {
    const getMovie = async (id: string) => {
      const response = await fetchMovie(id);
      setMovie(response);
    };
    getMovie(param.id);
  }, [param.id]);

  if (movie === null) return null;

  return (
    <main className="relative h-screen w-screen text-white">
      <div className="absolute z-30 flex w-full items-center bg-black/40 p-6">
        <Link href={"/browse"}>
          <IoIosArrowBack size={32} />
        </Link>
        <p className="text-xl font-semibold">{movie.getVideoPath.title}</p>
      </div>
      <VDOPlayer url={movie.url} />
    </main>
  );
};
export default WatchPage;

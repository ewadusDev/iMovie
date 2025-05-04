"use client"
import { useParams } from "next/navigation";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import VDOPlayer from "@/app/components/player/VDOPlayer";


const movieLink = "http://localhost:9000/thaimovie/iscream/iScream_ep1_%E0%B8%9A%E0%B8%B8%E0%B8%81%E0%B8%AA%E0%B8%B8%E0%B8%AA%E0%B8%B2%E0%B8%99%E0%B8%A3%E0%B8%96/iScream_ep1_%E0%B8%9A%E0%B8%B8%E0%B8%81%E0%B8%AA%E0%B8%B8%E0%B8%AA%E0%B8%B2%E0%B8%99%E0%B8%A3%E0%B8%96.m3u8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YSx5e6Exx3fHmUAHpTYu%2F20250503%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250503T034026Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=1c7e1678921005eb098d359cd52081c0e37d0ba23893f7947e989652f47d7a68"

const WatchPage = () => {
    return <main className="relative text-white h-screen w-screen">
        <div className="flex items-center absolute z-30 p-6 bg-black/40 w-full">
            <Link href={"/browse"}>
                <IoIosArrowBack size={30} />
            </Link>
            <p className="text-xl font-semibold">iScream_ep1_บุกสุสานรถ</p>
        </div>
        <VDOPlayer url={movieLink} />

    </main>;
};
export default WatchPage;

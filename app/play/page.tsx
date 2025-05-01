"use client"
import { minioClient } from "@/lib/db";
import { useEffect, useState } from "react";

import { Player } from "react-tuby";
import "react-tuby/css/main.css";



const PlayerPage = () => {
    const objectName = 'น้ำ_ผีนองสยองขวัญ.mp4';
    const [videoUrl, setVideoUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchUrlVideo = async () => {
            try {
                const url = await minioClient(objectName);
                if (url) setVideoUrl(url);

            } catch (error) {
                console.error(error)
            }
        }
        fetchUrlVideo()
    }, [objectName])

    if (!videoUrl) return <p>Loading...</p>;

    return (
        <main className="text-white ">
            <div className="h-screen "
                onContextMenu={(e) => e.preventDefault()}>
                <Player
                    src={[
                        {
                            quality: "Full HD",
                            url: videoUrl,
                        },
                        {
                            quality: "720p",
                            url: videoUrl,
                        },
                        {
                            quality: "480p",
                            url: videoUrl,
                        }

                    ]}
                    dimensions={{ width: "100%", height: "100%" }}

                />
            </div>


        </main>
    )


};
export default PlayerPage;

"use client"

import RankCardDetail from "./RankCardDetail";


const RanListCard = ({ className, title }: { className?: string, title: string }) => {

    return (
        <section className={`${className} flex flex-col gap-3.5 `}>
            <h5 className="text-white text-2xl font-semibold">{title}</h5>
            <div className="relative overflow-x-hidden ">
                <div className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar px-4 py-6 scroll-smooth">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <RankCardDetail length={index} key={index} />
                    ))}
                </div>
            </div>

        </section>
    )
};

export default RanListCard;

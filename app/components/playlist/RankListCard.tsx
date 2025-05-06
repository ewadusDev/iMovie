"use client";

import RankCardDetail from "./RankCardDetail";
import { MovieMetadata } from "@/types/meta";

const RanListCard = ({
  className,
  title,
  movies,
}: {
  className?: string;
  title: string;
  movies: MovieMetadata[];
}) => {
  const movieList = movies.slice(0, 10).reverse();

  return (
    <section className={`${className} flex flex-col gap-3.5`}>
      <h5 className="text-2xl font-semibold text-white">{title}</h5>
      <div className="relative overflow-x-hidden">
        <div className="no-scrollbar flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-4 py-6">
          {movieList.map((movie, index: number) => {
            return (
              <RankCardDetail length={index} key={movie.id} movie={movie} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RanListCard;

import CardDetail from "./CardDetail";
import { MovieMetadata } from "@/types/meta";

const ListCard = ({
  className,
  title,
  movies,
}: {
  className?: string;
  title: string;
  movies: MovieMetadata[];
}) => {
  return (
    <section className={`items-center justify-center ${className}`}>
      <h5 className="text-2xl font-semibold text-white">{title}</h5>
      <div className="relative overflow-x-hidden">
        <div className="no-scrollbar flex gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-4 py-6">
          {movies.map((movie) => (
            <CardDetail key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ListCard;

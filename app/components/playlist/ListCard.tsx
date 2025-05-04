import CardDetail from "./CardDetail";


const ListCard = ({ className, title, movies }: { className?: string, title: string, movies: [] }) => {

    return (
        <section className={`justify-center items-center ${className}`}>
            <h5 className="text-white text-2xl font-semibold">{title}</h5>
            <div className="relative overflow-x-hidden">
                <div className="flex gap-4 overflow-x-auto overflow-y-hidden no-scrollbar px-4 py-6 scroll-smooth">
                    {
                        movies.map((movie) => (
                            <CardDetail key={movie.id} movie={movie} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default ListCard;

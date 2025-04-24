import CardDetail from "./CardDetail";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"



const ListCard = ({ className, title }: { className?: string, title: string }) => {


    return (
        <section className={`${className} flex flex-col gap-3.5`}>
            <h5 className="text-white text-2xl font-semibold">{title}</h5>
            <Carousel>
                <CarouselContent className="" >
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem className="basis-1/5 mr-5 " key={index}>
                            <CardDetail />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
};
export default ListCard;

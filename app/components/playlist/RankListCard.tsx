
import RankCardDetail from "./RankCardDetail";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"


const RanListCard = ({ className, title }: { className?: string, title: string }) => {

    return (
        <section className={`${className} flex flex-col gap-3.5`}>
            <h5 className="text-white text-2xl font-semibold">{title}</h5>
            <Carousel>
                <CarouselContent >
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem className="basis-1/5 relative left-[-50px] " key={index}>
                            <RankCardDetail length={index} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
};
export default RanListCard;

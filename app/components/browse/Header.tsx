import Image from "next/image";
import Play from "../icons/Play";
import Info from "../icons/Info";




const Header = () => {
    return (
        <header className="w-5/12 mt-20">
            <div className="relative w-full text-white flex flex-col gap-[22px]">
                <Image src={'/contents/herobanner/header-movie-highlight-title-HouseOfNinjas.png'} alt={'header-movie-highlight-title-HouseOfNinjas'} width={518} height={207} />
                <p className="text-lg">Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a string of looming threats.</p>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 bg-white text-black font-semibold px-[26px] py-2 rounded-sm"><span><Play fill={"#000"} width={24} height={24} /></span>Play</button>
                    <button className="flex items-center gap-2 bg-gray-300/30 font-semibold px-[22px] py-2 rounded-sm"><span><Info width={24} height={24} /></span>More Info</button>
                </div>
            </div>
        </header>
    )
};
export default Header;

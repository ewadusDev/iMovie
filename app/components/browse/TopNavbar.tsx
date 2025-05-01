import Image from "next/image";
import { Search, Notification, ArrowDown } from "@/app/components/icons/Icons";




const TopNavbar = () => {
    return (
        <nav className="flex justify-between items-center py-6">

            <div className="flex items-center gap-11">
                <h4 className="text-4xl font-bold text-[#C600D1]">NETFLIX888</h4>
                <ul className="text-white flex gap-5">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>
            </div>

            <div className="flex gap-4">
                {/* <Image src={"/icons/Search.png"} alt="Search" width={32} height={32} /> */}
                <Search width={32} height={32} />
                <Notification width={32} height={32} />
                <div className="flex justify-center items-center">
                    <Image src={"/avartars/angryman.png"} alt="Avartars" width={32} height={32} />
                    <ArrowDown width={32} height={32} />
                </div>
            </div>

        </nav>
    )
};
export default TopNavbar;

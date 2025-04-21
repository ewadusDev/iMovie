
import Image from "next/image";
import DropdownLanguages from "./Dropdown";
import { LANGUAGES } from "@/data/static";




const TopNavbar = () => {
    return (
        <nav className="h-fit flex justify-between items-center py-6 ">
            <Image src={"/logo/medium-logo.png"} alt="logo-netflix" width={148} height={40} className="" />
            <div className="flex items-cente gap-5">
                <DropdownLanguages items={LANGUAGES} />
                <button className="px-3 py-1 bg-[#e50914] rounded-sm text-sm text-white">Sign In</button>
            </div>

        </nav>
    )
}
export default TopNavbar
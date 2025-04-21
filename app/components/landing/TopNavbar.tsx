import Image from "next/image";
import DropdownLanguages from "./Dropdown";
import { LANGUAGES } from "@/data/static";

const TopNavbar = () => {
  return (
    <nav className="flex h-fit items-center justify-between py-6">
      <Image
        src={"/logo/medium-logo.png"}
        alt="logo-netflix"
        width={148}
        height={40}
        className=""
      />
      <div className="items-cente flex gap-5">
        <DropdownLanguages items={LANGUAGES} />
        <button className="rounded-sm bg-[#e50914] px-3 py-1 text-sm text-white">
          Sign In
        </button>
      </div>
    </nav>
  );
};
export default TopNavbar;

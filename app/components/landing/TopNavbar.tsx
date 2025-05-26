"use client";
import Link from "next/link";
import DropdownLanguages from "./Dropdown";
import { LANGUAGES } from "@/data/static";
import Image from "next/image";

const TopNavbar = () => {
  return (
    <nav className="flex h-fit items-center justify-between py-6">
      <Image src={"/imovie-icon.png"} alt="logo" width={70} height={70} />
      <div className="items-cente flex gap-5">
        <DropdownLanguages items={LANGUAGES} />
        <button className="rounded-sm bg-[#F4006F] px-3 py-1 text-sm text-white">
          <Link href={"/signin"}>Sign In</Link>
        </button>
      </div>
    </nav>
  );
};
export default TopNavbar;

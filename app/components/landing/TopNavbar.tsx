"use client"
import Link from "next/link";
import DropdownLanguages from "./Dropdown";
import { LANGUAGES } from "@/data/static";

const TopNavbar = () => {
  return (
    <nav className="flex h-fit items-center justify-between py-6">
      <h4 className="text-4xl font-bold text-[#C600D1]">NETFLIX888</h4>
      <div className="items-cente flex gap-5">
        <DropdownLanguages items={LANGUAGES} />
        <button className="rounded-sm bg-[#C600D1] px-3 py-1 text-sm text-white">
          <Link href={"/signin"}>
            Sign In
          </Link>
        </button>
      </div>
    </nav>
  );
};
export default TopNavbar;

import Image from "next/image";
import { Search, Notification, ArrowDown } from "@/app/components/icons/Icons";
import { signOut } from "next-auth/react";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center gap-11">
        <h4 className="text-4xl font-bold text-[#C600D1]">NETFLIX888</h4>
        <ul className="flex gap-5 text-white">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/tvshows"}>
            <li>TV Shows</li>
          </Link>
          <Link href={"/movies"}>
            <li>Movies</li>
          </Link>
          <Link href={"/popular"}>
            <li>New & Popular</li>
          </Link>
          <Link href={"/mylist"}>
            <li>My List</li>
          </Link>
        </ul>
      </div>

      <div className="flex gap-4">
        {/* <Image src={"/icons/Search.png"} alt="Search" width={32} height={32} /> */}
        <Search
          width={32}
          height={32}
          onClick={() => alert("Implement in future very soon")}
        />
        <Notification
          width={32}
          height={32}
          onClick={() => alert("Implement in future very soon")}
        />
        <div
          className="flex items-center justify-center hover:cursor-pointer"
          onClick={() => signOut()}
        >
          <Image
            src={"/avartars/angryman.png"}
            alt="Avartars"
            width={32}
            height={32}
          />
          <ArrowDown width={32} height={32} />
        </div>
      </div>
    </nav>
  );
};
export default TopNavbar;

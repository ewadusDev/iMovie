"use client"

import { FOOTERLINKS, LANGUAGES } from "@/data/static";
import Header from "../components/browse/Header";
import PickProfile from "../components/browse/PickProfile";
import TopNavbar from "../components/browse/TopNavbar";
import ListCard from "../components/playlist/ListCard";
import RankListCard from "../components/playlist/RankListCard";
import DropdownLanguages from "../components/landing/Dropdown";
import Link from "next/link";
import { createContext, useState } from "react";
import MiniMovieMenu from "../components/playlist/MiniMovieMenu";


type BrowseContextType = {
  showMiniMovie: boolean;
  setShowMiniMovie: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BrowseContext = createContext<BrowseContextType>({
  showMiniMovie: false,
  setShowMiniMovie: () => { }
});


const BrowsePage = () => {
  const [showMiniMovie, setShowMiniMovie] = useState(false)


  // return (
  //   <main>
  //     <PickProfile />
  //   </main>
  // );


  return (
    <BrowseContext.Provider value={{ showMiniMovie, setShowMiniMovie }}>
      <main className="h-screen relative" >
        {/* set vdo cover here */}
        <div className="relative h-11/12 bg-[url(/contents/herobanner/header-movie-highlight-HouseOfNinjas.png)] bg-cover">
          <div className="absolute inset-0 bg-black/10 " />
          <div className="relative z-10 container mx-auto">
            <TopNavbar />
            <Header />
          </div>
        </div>
        <div className="relative top-[-80px] z-12 container mx-auto ">
          <div className="flex flex-col">
            <ListCard title="Matched to You" />
            <ListCard title="New on Netflix" />
            <RankListCard title="Top 10 movies in Thailand Today" />
            <ListCard title="We Think You&apos;ll Love These" />
          </div>
          {/* footer */}
          <footer className="pb-10">
            <div className="container mx-auto">
              <p className="py-5 text-white">Questions? Call 1-844-505-2993</p>
              <div className="grid grid-cols-4 gap-1 py-5">
                {FOOTERLINKS.map((link) => {
                  return (
                    <Link href={link.href} key={link.label} className="w-fit">
                      <p className="text-white underline hover:cursor-pointer">
                        {link.label}
                      </p>
                    </Link>
                  );
                })}
              </div>
              <DropdownLanguages items={LANGUAGES} />
            </div>
          </footer>
        </div>


        {showMiniMovie &&
          (
            <div className="absolute top-0 z-50">
              <MiniMovieMenu />
            </div>
          )}

      </main>
    </BrowseContext.Provider>


  )


};
export default BrowsePage;

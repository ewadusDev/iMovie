// "use client"

import Header from "../components/browse/Header";
import PickProfile from "../components/browse/PickProfile";
import TopNavbar from "../components/browse/TopNavbar";



const BrowsePage = async () => {


  // return (
  //   <main>
  //     <PickProfile />
  //   </main>
  // );


  return (
    <main className="h-screen" >
      {/* set vdo cover here */}
      <div className="relative h-11/12 bg-[url(/contents/herobanner/header-movie-highlight-HouseOfNinjas.png)] bg-cover  ">
        <div className="absolute inset-0 bg-black/20 " />
        <div className="relative z-10 container mx-auto">
          <TopNavbar />
          <Header />
        </div>
      </div>
    </main>

  )


};
export default BrowsePage;

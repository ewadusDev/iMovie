import Image from "next/image";

const BrowsePage = () => {
  return (
    <main>
      <div className="flex h-dvh w-full flex-col items-center justify-center gap-10">
        <h1 className="text-5xl text-white">Who&apos;s watching?</h1>
        <div className="flex gap-5">
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/browse/ProfileA.png"}
              alt="profilea"
              width={144}
              height={144}
            />
            <p className="text-white">Ruknakub</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Image
              src={"/browse/add-profile.png"}
              alt="profilea"
              width={144}
              height={144}
            />
            <p className="text-white">Add Profile</p>
          </div>
        </div>
        <button className="rounded-sm border border-gray-300 px-6 py-3 text-white">
          Manage Profile
        </button>
      </div>
    </main>
  );
};
export default BrowsePage;

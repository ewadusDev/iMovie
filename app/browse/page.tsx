import Image from "next/image"



const BrowsePage = () => {
    return (
        <main>
            <div className="flex flex-col h-dvh w-full justify-center items-center gap-10">
                <h1 className="text-white  text-5xl ">Who&apos;s watching?</h1>
                <div className="flex gap-5">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <Image src={"/browse/ProfileA.png"} alt="profilea" width={144} height={144} />
                        <p className="text-white">Ruknakub</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        <Image src={"/browse/add-profile.png"} alt="profilea" width={144} height={144} />
                        <p className="text-white">Add Profile</p>
                    </div>
                </div>
                <button className="text-white border py-3 px-6 rounded-sm border-gray-300">Manage Profile</button>
            </div>

        </main>
    )
}
export default BrowsePage
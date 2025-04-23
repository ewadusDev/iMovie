import Image from "next/image";



const TopNavbar = () => {
    return (
        <nav className="flex justify-between py-6">

            <div className="flex items-center gap-11">
                <Image src={"/logo/medium-logo.png"} alt="Logo" width={93} height={25} />
                <ul className="text-white flex gap-5">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>

            </div>

            <div className="flex gap-4">
                <Image src={"/icons/Search.png"} alt="Search" width={32} height={32} />
                <Image src={"/icons/Notification.png"} alt="Notification" width={32} height={32} />
                <div className="flex justify-center items-center">
                    <Image src={"/avartars/angryman.png"} alt="Avartars" width={32} height={32} />
                    <Image src={"/icons/ArrowDown.png"} alt="ArrowDown" width={32} height={32} />
                </div>
            </div>

        </nav>
    )
};
export default TopNavbar;

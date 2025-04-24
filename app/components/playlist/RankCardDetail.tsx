import Image from "next/image";



const RankCardDetail = ({ length }: { length: number }) => {
    return (
        <div className="w-80 h-52 flex rounded-[2px]">
            <div className='relative w-1/2 h-full flex justify-end right-[-5px] text-white' >
                <p className="text-[200px] font-bold tracking-[-25px]">{length + 1}</p>
            </div>
            <div className={`relative w-1/2 flex flex-col justify-between bg-[url(${'/contents/listcontent/HorizontalHomePage.png'})] bg-cover`}>
                <div className="p-1.5">
                    <Image src={"/logo/medium-letter.png"} alt="Logo" width={11} height={20} />
                </div>

                <div className="flex justify-center">
                    <p className="text-white text-[10px] bg-[#f50723] w-fit py-0.5 px-1.5 rounded-t-sm">Recently Added</p>
                </div>
            </div>
        </div>
    )
};
export default RankCardDetail;

import Image from "next/image";




const CardDetail = () => {
    return (
        <div className="w-80 h-44 flex flex-col justify-between rounded-[2px] bg-[url(/contents/listcontent/HorizontalHomePage.png)] bg-cover">
            <div className="p-1.5">
                <Image src={"/logo/medium-letter.png"} alt="Logo" width={11} height={20} />
            </div>

            <div className="flex justify-center">
                <p className="text-white text-[10px] bg-[#f50723] w-fit py-0.5 px-1.5 rounded-t-sm">Recently Added</p>
            </div>


        </div>
    )
};
export default CardDetail;

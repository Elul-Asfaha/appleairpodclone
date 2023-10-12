type bannerType = {
    video?: boolean;
};
import { AiOutlineRight } from "react-icons/ai";

const Banner = ({ video = false }: bannerType) => {
    return (
        <div
            className={`flex flex-col justify-center items-center px-5 w-full pt-8 ${
                video
                    ? "bg-gradient-to-b from-white from-5% to-bg-[#F5F5F7]"
                    : "bg-[#F5F5F7]"
            }`}
        >
            <div
                className={`flex flex-col justify-between items-center text-center w-full max-w-[1520px] ${
                    !video
                        ? "h-[73vh] bg-white"
                        : "h-[90vh] bg-black text-white"
                } rounded-2xl py-10`}
            >
                <div></div>
                <div className={` ${video ? "text-[#F5F5F7]" : "text-black"}`}>
                    <p className='text-5xl md:text-8xl font-bold'>
                        AirPods Pro
                    </p>
                    <p className='text-2xl `font-bold'>2nd generation</p>
                    <p className='text-3xl'>$243</p>
                </div>
                <div className='flex items-center gap-3 text-xl'>
                    <button
                        className={`flex gap-2 py-2 px-5 rounded-full items-center ${
                            video
                                ? "bg-[#F5F5F7] text-black"
                                : "bg-blue-700 text-[#F5F5F7]"
                        }`}
                    >
                        Buy
                    </button>
                    <div
                        className={`flex gap-2 py-1 items-center ${
                            video ? "text-[#F5F5F7]" : "text-blue-700"
                        }`}
                    >
                        <p>learn more</p>
                        <AiOutlineRight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

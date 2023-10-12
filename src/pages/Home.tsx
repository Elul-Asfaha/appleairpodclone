const generationsData = [
    {
        img: "",
        name: "Airpods",
        generation: "2nd Generation",
    },
    {
        img: "",
        name: "Airpods",
        generation: "3rd Generation",
    },
    {
        img: "",
        name: "Airpods Pro",
        generation: "2nd Generation",
    },
    {
        img: "",
        name: "Airpods Max",
    },
];
import { AiOutlineRight } from "react-icons/ai";
import Banner from "../components/Banner";
import Features from "../components/Features";
const Home = () => {
    const generationData = generationsData;
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='w-full flex justify-center bg-white py-1'>
                <div className='max-w-[1520px] flex justify-center text-center'>
                    {generationData.map((items, index) => (
                        <div
                            key={index}
                            className='flex flex-col px-5 hover:text-blue-700 cursor-pointer'
                        >
                            <div className='flex pb-1'>
                                <img src='' alt='' />
                            </div>
                            <p>{items.name}</p>
                            {items.generation && (
                                <p className=''>{items?.generation}</p>
                            )}
                        </div>
                    ))}
                    <div className='flex flex-col px-5 hover:text-blue-700 cursor-pointer'>
                        <div className='flex pb-1'>
                            <img src='' alt='' />
                        </div>
                        <p>Compare</p>
                    </div>
                    <div className='flex flex-col px-5 hover:text-blue-700 cursor-pointer'>
                        <div className='flex pb-1'>
                            <img src='' alt='' />
                        </div>
                        <p>Apple Music</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#F5F5F7] w-full py-3 flex justify-center'>
                <p className='w-fit text-sm'>
                    Get 6 months of Apple Music free with your AirPods.*
                </p>
                <div className='text-blue-700 flex items-center text-[12px]'>
                    <p>Learn more</p>
                    <AiOutlineRight />
                </div>
            </div>
            <Banner video={true} />
            <Banner />
            <Banner />
            <Features />
        </div>
    );
};

export default Home;

import { AiOutlineRight, AiOutlineLeft, AiOutlinePlus } from "react-icons/ai";
const Features = () => {
    return (
        <div className='max-w-[1520px] flex flex-col w-full overflow-x-hidden md:pt-32 items-center text-center px-5'>
            <p className='text-5xl font-bold w-[500px] text-center  md:mb-16'>
                A magical connection to your devices.
            </p>
            <div className='w-full'>
                <div className='flex gap-5'>
                    <div className='relative min-w-[350px] bg-white min-h-[450px] rounded-xl'>
                        <div className='absolute inset-x-0 flex w-full items-center justify-between px-5 font-bold text-2xl bottom-5'>
                            <p>Automatic Switching</p>
                            <button className='bg-black text-white p-1 rounded-full'>
                                <AiOutlinePlus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-5 py-5'>
                <button className='border-2 border-black rounded-full p-2 text-lg font-bold'>
                    <AiOutlineLeft />
                </button>
                <button className='border-2 border-black rounded-full p-2 text-lg font-bold'>
                    <AiOutlineRight />
                </button>
            </div>
        </div>
    );
};

export default Features;

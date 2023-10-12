import { AiOutlineRight, AiOutlineLeft, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
const Features = () => {
    const [move, setMove] = useState(0);

    const handleMove = (moveTo: string) => {
        moveTo === "right" && move < 4 && setMove((prev) => prev + 1);
        moveTo === "left" && move > 0 && setMove((prev) => prev - 1);
        console.log(moveTo);
    };
    return (
        <div className='max-w-[1520px] flex flex-col w-full overflow-x-hidden pt-20 md:pt-32 items-center text-center px-5'>
            <p className='text-3xl md:text-5xl font-bold md:w-[500px] text-center mb-10 md:mb-16'>
                A magical connection to your devices.
            </p>
            <div className='w-full scrollbar-hide'>
                <div
                    className='flex gap-5'
                    style={{ transform: `translateX(-${move * 370}px)` }}
                >
                    <div className='relative min-w-[300px] md:min-w-[350px] bg-white min-h-[450px] rounded-xl'>
                        1
                        <div className='absolute inset-x-0 flex w-full items-center justify-between px-5 font-bold text-2xl bottom-5'>
                            <p>Automatic Switching</p>
                            <button className='bg-black text-white p-1 rounded-full'>
                                <AiOutlinePlus />
                            </button>
                        </div>
                    </div>
                    <div className='relative min-w-[300px] md:min-w-[350px] bg-white min-h-[450px] rounded-xl'>
                        2
                        <div className='absolute inset-x-0 flex w-full items-center justify-between px-5 font-bold text-2xl bottom-5'>
                            <p>Automatic Switching</p>
                            <button className='bg-black text-white p-1 rounded-full'>
                                <AiOutlinePlus />
                            </button>
                        </div>
                    </div>
                    <div className='relative min-w-[300px] md:min-w-[350px] bg-white min-h-[450px] rounded-xl'>
                        3
                        <div className='absolute inset-x-0 flex w-full items-center justify-between px-5 font-bold text-2xl bottom-5'>
                            <p>Automatic Switching</p>
                            <button className='bg-black text-white p-1 rounded-full'>
                                <AiOutlinePlus />
                            </button>
                        </div>
                    </div>
                    <div className='relative min-w-[300px] md:min-w-[350px] bg-white min-h-[450px] rounded-xl'>
                        4
                        <div className='absolute inset-x-0 flex w-full items-center justify-between px-5 font-bold text-2xl bottom-5'>
                            <p>Automatic Switching</p>
                            <button className='bg-black text-white p-1 rounded-full'>
                                <AiOutlinePlus />
                            </button>
                        </div>
                    </div>
                    <div className='relative min-w-[300px] md:min-w-[350px] bg-white min-h-[450px] rounded-xl'>
                        5
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
                <button
                    className='border-2 border-black rounded-full p-2 text-lg font-bold'
                    onClick={() => handleMove("left")}
                >
                    <AiOutlineLeft />
                </button>
                <button
                    className='border-2 border-black rounded-full p-2 text-lg font-bold'
                    onClick={() => handleMove("right")}
                >
                    <AiOutlineRight />
                </button>
            </div>
        </div>
    );
};

export default Features;

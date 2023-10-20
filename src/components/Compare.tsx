import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BiMessageRoundedDetail } from "react-icons/bi";

const data = [
    {
        name: "AirPods",
        generation: "2nd generation",
        price: "129",
        features: {
            adaptiveFetures: "",
            noiseCanclation: "",
            conversationAwarness: "",
            spitalAudio: "",
            dustResistance: "",
            chargingCase: "Lighting Charging Case",
            duration: [
                "5 hrs ",
                "Up to 5 hours of listening time with a single charge",
            ],
        },
    },
    {
        name: "AirPods",
        generation: "3rd generation",
        price: "169",
        features: {
            adaptiveFetures: "",
            noiseCanclation: "",
            conversationAwarness: "",
            spitalAudio: "Personalized Spital Audio with dynamic head tracking",
            dustResistance: "Sweat and water resistant",
            chargingCase: "Lightning Charging Case or MagSafe Charging Case",
            duration: [
                "6 hrs ",
                "Up to 6 hours of listening time with a single charge",
            ],
        },
    },
    {
        name: "AirPods Pro",
        generation: "2nd generation",
        price: "249",
        features: {
            adaptiveFetures: "Adaptive Audio",
            noiseCanclation: "Active Noise Cancellation and Transparency mode",
            conversationAwarness: "Conversation Awareness",
            spitalAudio: "Personalized Spital Audio with dynamic head tracking",
            dustResistance: "Dust, sweat, and water resistant",
            chargingCase:
                "MagSafe Charging Case (USB‑C) with speaker and lanyard loop ",
            duration: [
                "6 hrs ",
                "Up to 6 hours of listening time with a single charge",
            ],
        },
    },
    {
        name: "AirPods Max",
        generation: "",
        price: "549",
        features: {
            adaptiveFetures: "",
            noiseCanclation: "Active Noise Cancellation andTransparency mode",
            conversationAwarness: "",
            spitalAudio:
                "Personalized Spatial Audio with dynamic head tracking",
            dustResistance: "",
            chargingCase: "Smart Case",
            duration: [
                "6 hrs ",
                "Up to 20 hours of listening time with a single charge",
            ],
        },
    },
];

const Compare = () => {
    return (
        <div className='max-w-[1080px] flex flex-col w-full overflow-x-hidden pt-20 md:pt-32 items-center text-center px-5'>
            <p className='text-3xl md:text-5xl font-bold md:w-[400px] text-center mb-10 md:mb-16'>
                Which AirPods are right for you?
            </p>
            <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-10'>
                {data.map((items, index) => (
                    <div key={index} className='w-full'>
                        <div className='border-b-2 pb-7'>
                            <img src='' alt='' />
                            <p className='text-xl font-bold'>{items.name}</p>
                            <p className='min-h-[24px]'>{items.generation}</p>
                            <p className='pt-5 pb-4'>${items.price}</p>
                            <button className='bg-[#0077ED] text-sm text-white py-[2px] px-3 rounded-full mb-2'>
                                Buy
                            </button>
                            <p className='text-[#0077ED]'>Learn more {">"}</p>
                        </div>
                        <div className='flex flex-col gap-5 justify-center items-center'>
                            {items.features.adaptiveFetures ? (
                                <div className='h-[60px] md:h-[200px] flex items-center'>
                                    <p>{items.features.adaptiveFetures}</p>
                                </div>
                            ) : (
                                <div className='h-[60px] md:h-[200px] w-full flex justify-center items-center'>
                                    <p>-</p>
                                </div>
                            )}
                            {items.features.noiseCanclation ? (
                                <div className='h-[60px] md:h-[200px] flex items-center'>
                                    <p>{items.features.noiseCanclation}</p>
                                </div>
                            ) : (
                                <div className='h-[60px] md:h-[200px] w-full flex justify-center items-center'>
                                    <p>-</p>
                                </div>
                            )}
                            {items.features.conversationAwarness ? (
                                <div className='h-[60px] md:h-[200px] flex items-center'>
                                    <p>{items.features.conversationAwarness}</p>
                                </div>
                            ) : (
                                <div className='h-[60px] md:h-[200px] w-full flex justify-center items-center'>
                                    <p>-</p>
                                </div>
                            )}
                            {items.features.spitalAudio ? (
                                <div className='h-[60px] md:h-[200px] flex items-center'>
                                    <p>{items.features.spitalAudio}</p>
                                </div>
                            ) : (
                                <div className='h-[60px] md:h-[200px] w-full flex justify-center items-center'>
                                    <p>-</p>
                                </div>
                            )}
                            {items.features.dustResistance ? (
                                <div className='h-[60px] md:h-[200px] flex items-center'>
                                    <p>{items.features.dustResistance}</p>
                                </div>
                            ) : (
                                <div className='h-[60px] md:h-[200px] w-full flex justify-center items-center'>
                                    <p>-</p>
                                </div>
                            )}
                            {items.features.chargingCase ? (
                                <div className='h-[60px] md:h-[200px] flex items-center'>
                                    <p>{items.features.chargingCase}</p>
                                </div>
                            ) : (
                                <div className='h-[60px] md:h-[200px] w-full flex justify-center items-center'>
                                    <p>-</p>
                                </div>
                            )}
                            <div>
                                <p className='text-5xl font-semibold'>
                                    {items.features.duration[0]}
                                </p>
                                <p className='px-5 pt-2 text-sm'>
                                    {items.features.duration[1]}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p className='text-[#0066CC] hover:underline text-2xl py-10'>
                Compare all AirPods models {">"}
            </p>
            <div className='py-10 border-y-2 grid grid-cols-2 gap-5'>
                <div className='flex flex-col items-center px-5 md:p-16 gap-3'>
                    <div className='text-3xl'>
                        <BsBoxSeam />
                    </div>
                    <p>Fast, free delivery</p>
                    <p>Or pick up available items at an Apple Store.</p>
                    <button className='text-[#0077ED]'>Learn more {">"}</button>
                </div>
                <div className='flex flex-col items-center px-5 md:p-16 gap-3'>
                    <div className='text-3xl'>
                        <HiOutlineCurrencyDollar />
                    </div>
                    <p>Pay monthly at 0% APR</p>
                    <p>
                        You can pay over time when you choose to check out with
                        Apple Card Monthly Installments.
                    </p>
                    <button className='text-[#0077ED]'>Learn more {">"}</button>
                </div>
                <div className='flex flex-col items-center px-5 md:p-16 gap-3'>
                    <div className='text-3xl'>
                        <IoChatbubblesOutline />
                    </div>
                    <p>Get help buying</p>
                    <p>
                        Have a question? Call a Specialist or chat online. Call
                        1-800-MY-APPLE.
                    </p>
                    <button className='text-[#0077ED]'>Contact us {">"}</button>
                </div>
                <div className='flex flex-col items-center px-5 md:p-16 gap-3'>
                    <div className='text-3xl'>
                        <BiMessageRoundedDetail />
                    </div>
                    <p>Make them yours</p>
                    <p>
                        Engrave your AirPods with your initials or favorite
                        emoji — free. Only at Apple.
                    </p>
                    <button className='text-[#0077ED]'>Learn more {">"}</button>
                </div>
            </div>
        </div>
    );
};

export default Compare;

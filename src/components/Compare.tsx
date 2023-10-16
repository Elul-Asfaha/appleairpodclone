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
];
const Compare = () => {
    return (
        <div className='max-w-[1080px] flex flex-col w-full overflow-x-hidden pt-20 md:pt-32 items-center text-center px-5'>
            <p className='text-3xl md:text-5xl font-bold md:w-[400px] text-center mb-10 md:mb-16'>
                Which AirPods are right for you?
            </p>
            <div className='w-full grid grid-cols-4 gap-10'>
                {data.map((items, index) => (
                    <div key={index} className='w-full'>
                        <div className='border-b-2 pb-7'>
                            <img src='' alt='' />
                            <p className='text-xl font-bold'>{items.name}</p>
                            <p>{items.generation}</p>
                            <p className='pt-5 pb-4'>${items.price}</p>
                            <button className='bg-[#0077ED] text-sm text-white py-[2px] px-3 rounded-full mb-2'>
                                Buy
                            </button>
                            <p className='text-[#0077ED]'>Learn more {">"}</p>
                        </div>
                        <div className='flex flex-col gap-5 justify-center items-center'>
                            {items.features.adaptiveFetures ? (
                                <p className='h-[200px]'>
                                    {items.features.adaptiveFetures}
                                </p>
                            ) : (
                                <div className='h-[200px] w-full flex justify-center items-center'>
                                    <p>-</p>
                                </div>
                            )}
                            {items.features.noiseCanclation ? (
                                <p className='h-[200px]'>
                                    {items.features.noiseCanclation}
                                </p>
                            ) : (
                                <div className='h-[200px] w-full flex justify-center items-center'>
                                    <p>-</p>
                                </div>
                            )}
                            {items.features.conversationAwarness ? (
                                <p className='h-[200px]'>
                                    {items.features.conversationAwarness}
                                </p>
                            ) : (
                                <div className='h-[200px] w-full flex justify-center items-center'>
                                    <p>-</p>
                                </div>
                            )}
                            {items.features.spitalAudio ? (
                                <p className='h-[200px]'>
                                    {items.features.spitalAudio}
                                </p>
                            ) : (
                                <div className='h-[200px] w-full flex justify-center items-center'>
                                    <p>-</p>
                                </div>
                            )}
                            {items.features.dustResistance ? (
                                <p className='h-[200px]'>
                                    {items.features.dustResistance}
                                </p>
                            ) : (
                                <div className='h-[200px] w-full flex justify-center items-center'>
                                    <p>-</p>
                                </div>
                            )}
                            {items.features.chargingCase ? (
                                <p className='h-[200px]'>
                                    {items.features.chargingCase}
                                </p>
                            ) : (
                                <div className='h-[200px] w-full flex justify-center items-center'>
                                    <p>-</p>
                                </div>
                            )}
                            <div>
                                <p className='text-3xl font-bold'>
                                    {items.features.duration[0]}
                                </p>
                                <p>{items.features.duration[1]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Compare;

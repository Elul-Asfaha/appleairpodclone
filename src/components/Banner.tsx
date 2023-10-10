type bannerType = {
    video?: boolean;
};
const Banner = ({ video = false }: bannerType) => {
    return (
        <div
            className={`flex flex-col justify-center items-center w-full pt-10 ${
                video
                    ? "bg-gradient-to-b from-white from-5% to-bg-[#E7E7E8]"
                    : "bg-[#E7E7E8]"
            }`}
        >
            <div className='flex flex-col justify-between items-center text-center w-full max-w-[1520px] h-[80vh] bg-white rounded-xl py-10'>
                <div></div>
                <div>
                    <p className=''>Title</p>
                    <p className=''>generation</p>
                    <p className=''>From $price</p>
                </div>
                <div className='flex'>
                    <p className=''>buy</p>
                    <p className=''>learn more</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;

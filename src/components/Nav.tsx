import { IoBagOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";

const Nav = () => {
    return (
        <div className='flex justify-center px-5 text-sm py-2'>
            <div className='flex justify-between py-1 w-full max-w-[1024px]'>
                <div>logo</div>
                <div>Store</div>
                <div>Mac</div>
                <div>iPad</div>
                <div>iPhone</div>
                <div>Watch</div>
                <div>Vision</div>
                <div>AirPods</div>
                <div>TV & Home</div>
                <div>Entertainment</div>
                <div>Accessirues</div>
                <div>Support</div>
                <div>
                    <GoSearch />
                </div>
                <div>
                    <IoBagOutline />
                </div>
            </div>
        </div>
    );
};

export default Nav;

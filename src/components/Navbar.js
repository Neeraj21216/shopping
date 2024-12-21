
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { BsCart } from "react-icons/bs";

function Navbar(){

    return (
        <div className='flex justify-around'>
            <div>
                <img src={logo} className='h-[100px] w-32'></img>
            </div>
            <div className='flex my-3 '>
                <NavLink to="/">
                <button>
                    Home
                </button>
                </NavLink>
                <NavLink to="/cart">
                   <BsCart className='h-6 w-32' />
                   <div></div>
                </NavLink>
            </div>
        </div>
    );
}
export default Navbar;
//other operation will be done later 
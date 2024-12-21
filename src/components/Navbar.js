
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { BsCart } from "react-icons/bs";
import { useSelector } from 'react-redux';

function Navbar(){
    const data=useSelector((state)=>state.cart.value);

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
                   <div className='circle bg-green-700 w-5 h-5 text-center rounded-full'>{data.length}</div>
                </NavLink>
            </div>
        </div>
    );
}
export default Navbar;
//other operation will be done later 
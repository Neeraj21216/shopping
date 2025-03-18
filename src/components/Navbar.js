
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from 'react-redux';

function Navbar(){
    const data=useSelector((state)=>state.cart.value);

    return (
        <NavLink to='/'>
            <div className='flex rounded justify-between  bg-slate-900 text-white  font-bold'>
            <div className='my-2  mx-20 '>
                <img src={logo} className='h-[100px] w-32'></img>
            </div>
            <div className='flex my-6 mr-20'>
                <NavLink to="/">
                <button>
                    Home
                </button>
                </NavLink>
                <NavLink to="/cart">
                <div className="relative inline-block">
            {/* Cart Icon */}
            <FaCartPlus className="h-6 w-32 hover:text-green-800" />

            {/* Badge */}
           {
            data.length>0  && (
                <div className="absolute top-0 translate-x-14 -translate-y-3  bg-green-700 w-5 h-5 text-xs text-white flex items-center justify-center rounded-full animate-pulse">
                {data.length}
            </div>
            )
           }
          </div>

                </NavLink>
            </div>
            </div>

        </NavLink>
    );
}
export default Navbar;
//other operation will be done later 
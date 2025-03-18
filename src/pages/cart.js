import { useSelector } from "react-redux";
import Cartitem from "../components/Cartitem";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";



function Cart(){
    const data=useSelector((state)=>state.cart.value);
    //total amount
    const [totalamount,setTotalamount]=useState(0);
    useEffect(()=>{
        setTotalamount(data.reduce(((acc,curr)=>acc+curr.price),0));
    },[data])
    return (
        <div className="my-16   ">
            {
                data.length>0?(<div className="flex  ">
                    <div className=" w-[700px] translate-x-32 my-3   ">
                    {data.map((item) => (
                  <Cartitem key={item.id} items={item} />
))}


                    </div>
                    <div className="translate-x-80 translate-y-36">
                    <div >

                        <p className="text-green-600 font-semibold text-2xl ">Your Cart</p>
                        <h2 className="text-green-800 font-extrabold text-4xl gap-2 my-3 ">Summary</h2>
                        {/* total price  */}
                        <p className="font-bold text-xl text-gray-700"> Total item : {data.length}</p>
                    </div>
                    <div className="translate-y-28 flex flex-col text-2xl font-bold ">
                        <div className="flex ">
                            <p className="text-gray-700">Total Amount:</p>
                            <p>$ {totalamount}</p>
                        </div>
                        <Link to={`https://www.amazon.in/`}>
                        <button className="my-3 text-white w-full bg-green-700 px-3 py-3  rounded ">Checkout Now</button>
                        </Link>

                    </div>
                    
                    
                    </div>                    
                    </div>
                    ):(

                    <div className="flex  flex-col justify-center items-center">
                       <div>
                       <p className="font-bold  translate-x-8 ">no cart item!</p>
                        <NavLink to="/">
                            <button className="w-[200px] h-[40px]       rounded bg-green-700 flex text-white ">
                                <p className="translate-x-10 my-2  font-bold ">Shop Now</p>
                            </button>
                        </NavLink>
                        <div></div>
                        
                        </div>
                    </div>
                )
            }
        </div>
    );

}

export default Cart;
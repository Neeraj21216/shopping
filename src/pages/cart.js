import { useSelector } from "react-redux";
import Cartitem from "../components/Cartitem";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";



function Cart(){
    const data=useSelector((state)=>state.cart.value);
    //total amount
    const [totalamount,setTotalamount]=useState(0);
    useEffect(()=>{
        setTotalamount(data.reduce(((acc,curr)=>acc+curr.price),0));
    },[data])
    return (
        <div>
            {
                data.length>0?(<div>
                    <div>
                    {data.map((item) => (
    <Cartitem key={item.id} items={item} />
))}


                    </div>
                    <div>
                    <div>

                        <p>Your Cart</p>
                        <h2>Summary</h2>
                        {/* total price  */}
                        <p>Total item : {data.length}</p>
                    </div>
                    <div>
                        Total Amount :{totalamount}
                        <button>Checkout Now</button>
                    </div>
                    
                    
                    </div>                    
                    </div>
                    ):(

                    <div>
                        <p>no cart item</p>
                        <NavLink to="/">
                            <button>
                                Shop Now
                            </button>
                        </NavLink>
                        
                    </div>
                )
            }
        </div>
    );

}

export default Cart;
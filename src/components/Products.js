import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, remove } from "../redux/slice/slice";
import { ToastBar, ToastIcon } from "react-hot-toast";
import { toast } from "react-hot-toast";

function Products(props) {
    //destruct kro 
    // const desc = description ? description.substring(0, 20) : "No description available";
    //how would i 
    // const dispatch=useDispatch();
    const [addtocart,setaddtocart]=useState(true);
    const cart=useSelector((state)=>state.cart.value);
    const dispatch=useDispatch()
    // console.log(props);
    const id=props.data.id;
    const  title=props.data.title.substring(0,15);
    const image=props.data.image;
    const price=props.data.price;
    const description=props.data.description.substring(0,70);
    console.log(props);
    const Navigate=useNavigate();
    //onclick pe kaise bdhoge aage and then all set 
    function addhandler(){
        toast.success("added");
        // setaddtocart(false);
        dispatch(add(props.data));
    }
    function removehandler(){
            toast.error("removed from cart");
            // setaddtocart(true);
            dispatch(remove(id));
    }
    return (
        <div className="w-[300px] h-[500px] rounded shadow-gray-600 shadow-md mx-4 my-16 transition-transform duration-300 hover:scale-110 hover:rounded-xl ">
            
            <div className="mx-3  my-4 gap-y-4 ">
                {/* Title */}
                    <h3 className="font-bold  text-center my-1 ">{title}...</h3>
                
                {/* Description */}
                    <p className="text-gray-500 text-center text-[11px] my-3 ">{description}...</p>
            
                {/* Image */}
                <img src={image} className="h-[300px] w-full object-cover rounded-t-xl my-5  " />
            
                {/* Price & Cart Button */}
                <div className="flex justify-between items-center mx-2 mt-5 ">
                    <span className="text-green-600 font-bold">${price}</span>
            
                    {/* Conditional Rendering for Cart Button */}
                    {cart.some((p) => p.id === id) ? (
                    <span
                        onClick={removehandler}
                        className="rounded-full border-2 text-sm  border-gray-950 px-2 py-2  hover:bg-black hover:text-pink-500 transition-all hover:duration-500 hover:scale-x-105 "
                    >
                        Remove Item
                    </span>
                    ) : (
                    <span
                        onClick={addhandler}
                        className="rounded-full border-2 text-sm  border-gray-950 px-2 py-2  hover:bg-black hover:text-pink-500 transition-all hover:duration-500 hover:scale-x-105-95 "
                    >
                        Add to Cart
                    </span>
                    )}
                </div>
            </div>
        </div>
      );
      
}
export default Products;
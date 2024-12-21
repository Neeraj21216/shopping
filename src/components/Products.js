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
    const description=props.data.description.substring(0,50);
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
    return (<div className="w-[300px] h-[400px] rounded shadow mx-4 my-4 hover:scale-110">
        <h3>{title}...</h3>
        <p className="text-gray-400 text-[13px]">{description}...</p>
        <img src={image} className="h-[300px]"></img>
        <div className="flex justify-between mx-2 ">
            <span className="text-green-600 font-bold">${price}</span>
            {   cart.some((p)=>p.id===id)
                ?(
                    <span onClick={removehandler} >
                        remove from cart
                    </span>
                    
                ):(
                    <span onClick={addhandler}>
                        Add to cart
                    </span>
                )
            }
        </div>
    </div>);
}
export default Products;
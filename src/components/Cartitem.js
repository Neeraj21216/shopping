import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slice/slice";


function Cartitem(props){
    //wo kais bnaya \\\
    // console.log("hiii");
    // console.log(props);
        const dispatch=useDispatch();
        const id=props.items.id;
        const  title=props.items.title;
        const image=props.items.image;
        const price=props.items.price;
        const description=props.items.description.substring(0,100);
        function removehandler(){
            //setting add item is important here how would you handle this becomes 
            dispatch(remove(id));
            toast.error("removed  item");

        }
    return (
        <div className="flex gap-5 gap-y-2 border-b-2 border-black my-6  ">

            <img src={image} className="h-[300px] w-[300px] mb-5  "></img>
            <div className="w-300">
                <p className="font-bold text-2xl my-4 ">{title}</p>
                <p className="my-4 text-gray-600 ">{description}</p>
                <div className="flex  justify-between my-8 ">
                    <p className="text-green-700 font-bold text-2xl gap-x-4 ">
                    $    {price}
                    </p>
                    <button onClick={removehandler} className="rounded-full  bg-red-400 px-2  py-2 text-2xl  text-red-950">
                    <MdDelete />

                    </button>
                </div>
                <div className="h-[100px ] my-10 ">

                </div>
            </div>


        
        </div>
    );

}
export default Cartitem;
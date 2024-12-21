import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/slice/slice";


function Cartitem(props){
    //wo kais bnaya \\\
    console.log("hiii");
    console.log(props);
        const dispatch=useDispatch();
        const id=props.items.id;
        const  title=props.items.title;
        const image=props.items.image;
        const price=props.items.price;
        const description=props.items.description.substring(0,50);
        function removehandler(){
            //setting add item is important here how would you handle this becomes 
            dispatch(remove(id));
            toast.error("removed  item");

        }
    return (
        <div>
            <img src={image}></img>
            <div>
                <p>{title}</p>
                <p>{description}</p>
                <div>
                    <p>
                    {price}
                    </p>
                    <button onClick={removehandler}>
                    <MdDelete />

                    </button>
                </div>
            </div>
        </div>
    );

}
export default Cartitem;
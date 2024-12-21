import { useEffect, useState } from "react";
import Products from '../components/Products';
import spinners from "../components/spinners";
const URL='https://fakestoreapi.com/products';

function Home(){
    //
    const[loading,setLoadin]=useState(false);
    const [data,setData]=useState([]);
    
    async function fetchData() {
        const URL='https://fakestoreapi.com/products';
        setLoadin(true);
        try{const output=await fetch(URL);
        const data=await output.json();
        setData(data);}
        catch(e){
            console.log("nhi chal");
        }
        setLoadin(false);

    }
    useEffect(()=>{
        fetchData();
        // console.log("hii");
        // //just need to be higher 
        // console.log(data);
    },[])
    return(
        <div className="flex  flex-wrap  justify-center">
    {
        loading?(<spinners></spinners>):(
            data.map((Product) => (
                <Products key={Product.id} data={Product}></Products>
            ))
        )
    }
</div>


    );
}
export default Home;
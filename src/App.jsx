import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
// import { products } from "./data";
import Cart from './pages/cart'

const App = () => {
  return (<div>
    {/* navbar  */}
    <Navbar></Navbar>


    <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
      <Route path="/cart" element={<Cart></Cart>} ></Route>
      {/* <Route path="/" el
      ezent={<Home></Home>} ></Route> */}

    </Routes>
      
  </div>)
};

export default App;

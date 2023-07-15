import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => state);
  return (
    <div className="">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto ">
        <NavLink to="/">
          <div className="ml-5">
          <img src="https://developer.apple.com/wwdc23/hero/endframes/p3-startframe-large_2x.jpg" alt="logo" 
           className="h-14"></img>
          </div>

        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className=" relative">
              {
                cart.length > 0 && 
                <div className="flex absolute bg-green-600 rounded-full top-[-7px] 
                right-[-7px] w-4 h-4 text-sm items-center justify-center animate-bounce" >{cart.length}</div>
              }
              
              <FaShoppingCart className=" w-7 h-7"/>
            </div>

          </NavLink>

        </div>
      </nav>
    </div>
  )
};

export default Navbar;
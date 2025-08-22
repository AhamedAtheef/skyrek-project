import { Link, useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { FiList } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";


export default function Header() {
  const location = useLocation();
  const navigate = useNavigate()
  const [isloggedIn, setIsLoggedIn] = useState(false)
  const [sideNav, setSideNav] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isloggedIn])


  return (
    <header className="bg-[#120c61] w-full h-[78px] shadow-[0_4px_20px_rgba(0,0,0,0.5)] fixed top-0 z-50">
      <div className="w-full h-full flex justify-between items-center px-4 sm:px-6 md:px-8">
        {/* popup */}
        {sideNav && (<div className="w-[80%] h-full fixed top-0 left-0 bg-[#f5f2e3]">
          <div className="w-full h-[78px] flex justify-between px-[5px] pt-[5px] cursor-pointer" >
            <span className="text-[#120c61] text-2xl font-semibold"> Profile</span>
            <FaXmark className="text-[#120c61] text-2xl cursor-pointer" onClick={()=>setSideNav(false)}/>

          </div>
          <nav className="flex flex-col justify-center gap-[20px]  text-[#fffdfd] font-medium mt-[5%] ml-[10px]">
            <Link to={"/"} onClick={()=>setSideNav(false)} className="text-[18px] text-[#120c61] flex flex-row items-center gap-[5px]"> <IoIosHome /> Home</Link>
            <Link to={"/user/products"} onClick={()=>setSideNav(false)} className="text-[18px] text-[#120c61] flex flex-row items-center gap-[5px] "> <FaBoxOpen />Products</Link>
            <Link to={"/user/about"} onClick={()=>setSideNav(false)} className="text-[18px] text-[#120c61] flex flex-row items-center gap-[5px]"> <IoChatboxEllipses /> About Us</Link>
            <Link to={"/user/reviews"} onClick={()=>setSideNav(false)} className="text-[18px] text-[#120c61] flex flex-row items-center gap-[5px]"> <MdReviews /> Reviews</Link>
            <Link to={"/user/contact"} onClick={()=>setSideNav(false)} className="text-[18px] text-[#120c61] flex flex-row items-center gap-[5px]"> <IoMdContacts />Contact Us</Link>
            <Link to={"/user/cart"} onClick={()=>setSideNav(false)} className="text-[18px] text-[#120c61] flex flex-row items-center gap-[5px]"> <FaShoppingCart />Cart</Link>
          </nav>
        </div>)
        }
        {/* Logo */}
        <div className=" w-full text-2xl sm:text-3xl font-bold flex items-center justify-between text-white tracking-wider">
          <FiList className="lg:hidden text-2xl cursor-pointer transform transition duration-300 ease-in-out hover:scale-225 hover:text-blue-500"
            onClick={() => setSideNav(true)} />
          <img src="/CBC.png" alt="" className="w-[100px] hover:cursor-pointer" onClick={() => navigate("/user/home")} />
        </div>

       

        {/* Nav Links (hidden on mobile, show from md) */}
        <nav className="hidden lg:flex gap-[20px] text-[#fffdfd] font-medium mr-[5rem] xl:mr-[16rem] 2xl:mr-[30rem] 2xl:gap-[30px]">
          <Link to={"/"} className="text-[18px] lg:text-[22px] pb-1 border-b-2 border-transparent hover:border-[#60d2d6] hover:text-[#97ebeb] transition-colors duration-300">Home</Link>
          <Link to={"/user/products"} className="text-[18px] lg:text-[22px] pb-1 border-b-2 border-transparent hover:border-[#60d2d6] hover:text-[#97ebeb] transition-colors duration-300">Products</Link>
          <Link to={"/user/about"} className="text-[18px] lg:text-[22px] pb-1 border-b-2 border-transparent hover:border-[#60d2d6] hover:text-[#97ebeb] transition-colors duration-300">AboutUs</Link>
          <Link to={"/user/reviews"} className="text-[18px] lg:text-[22px] pb-1 border-b-2 border-transparent hover:border-[#60d2d6] hover:text-[#97ebeb] transition-colors duration-300">Reviews</Link>
          <Link to={"/user/contact"} className="text-[18px] lg:text-[22px] pb-1 border-b-2 border-transparent hover:border-[#60d2d6] hover:text-[#97ebeb] transition-colors duration-300">ContactUs</Link>
        </nav>

        {/* Buttons + Cart (hidden on mobile, visible from sm up) */}
        <div className="hidden lg:flex items-center gap-2 sm:gap-3">
          {!isloggedIn ? (
            <>
              <Link to={"/login"} className="bg-[#eeeeee] hover:bg-[#ffffffe1] text-white px-4 sm:px-6 lg:px-8 py-1 rounded-[15px] text-[16px] sm:text-[18px] shadow-lg transition duration-300 cursor-pointer font-nano tracking-wider">
                Login
              </Link>
              <button
                onClick={() => { navigate("/login", { state: { showRegister: true } }); }}
                className="bg-[#37f0f7] hover:bg-[#ffffffe1] text-white hover:text-[#97ebeb] px-4 sm:px-6 lg:px-8 py-1 rounded-[15px] text-[16px] sm:text-[18px] shadow-lg transition duration-300 cursor-pointer font-nano tracking-wider"
              >
                Register
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
              }}
              className="bg-[#10214B] hover:bg-[#10214Bb1] text-white px-4 sm:px-6 lg:px-8 py-1 rounded-[15px] text-[16px] sm:text-[18px] shadow-lg cursor-pointer"
            >
              Logout
            </button>
          )}
          <Link to="/user/cart">
            <LiaShoppingCartSolid className="text-2xl sm:text-3xl text-[#f6f8f8] bg-transparent hover:text-[#97ebeb]" />
          </Link>
        </div>
      </div>
    </header>

  );
}

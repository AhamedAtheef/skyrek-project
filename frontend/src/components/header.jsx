import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const location = useLocation();
  const showSearch = location.pathname === "/user/products";
  return (
    <header className="bg-[#ffffff] w-full h-[70px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] ">
      <div className="w-full h-full flex justify-between items-center px-8">
        {/* Logo */}
        <div className="text-3xl font-bold text-black tracking-wider">
          <span className="text-[#165a30]">Glow</span>Beauty
        </div>

        {showSearch && (<div className="w-[400px]  py-[5px] px-[10px] rounded-[15px] focus-within:border-2 focus-within:bg-transparent bg-gray-100 flex justify-around items-center ">
          <input type="text" placeholder="Search" className="w-full focus:outline-none text-[17px]"/>
          <CiSearch className="text-xl cursor-pointer" />
        </div>)}

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-[#10214B] font-medium ">
          <Link to={"/user/home"} className="text-[22px] pb-1 border-b-2 border-transparent hover:border-[#000000] hover:text-[#000000] transition-colors transition-border duration-300">Home</Link>
          <Link to={"/user/products"} className="text-[22px] pb-1 border-b-2 border-transparent hover:border-[#000000] hover:text-[#000000] transition-colors transition-border duration-300">Products</Link>
          <Link to={"/user/about"} className="text-[22px] pb-1 border-b-2 border-transparent hover:border-[#000000] hover:text-[#000000] transition-colors transition-border duration-300">About</Link>
          <Link to={"/user/contact"} className="text-[22px] pb-1 border-b-2 border-transparent hover:border-[#000000] hover:text-[#000000] transition-colors transition-border duration-300">Contact</Link>
        </nav>

        {/* Button */}
        <Link to={"/login"} className="bg-[#10214B] hover:bg-[#10214Bb1] text-white px-10 py-2 rounded-[10px] text-[18px] shadow-lg transition duration-300 cursor-pointer font-bold tracking-wider">
          Login
        </Link>
      </div>
    </header>
  );
}

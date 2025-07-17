import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#ffffff] w-full h-[70px] shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
      <div className="w-full h-full flex justify-between items-center px-8">
        {/* Logo */}
        <div className="text-3xl font-bold text-black tracking-wider">
          <span className="text-[#165a30]">Glow</span>Beauty
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-[#4a5758] font-medium ">
          <Link to={"/"} className="text-[22px] pb-1 border-b-2 border-transparent hover:border-[#000000] hover:text-[#000000] transition-colors transition-border duration-300">Home</Link>
          <Link to={"/products"} className="text-[22px] pb-1 border-b-2 border-transparent hover:border-[#000000] hover:text-[#000000] transition-colors transition-border duration-300">Products</Link>
          <Link to={"/about"} className="text-[22px] pb-1 border-b-2 border-transparent hover:border-[#000000] hover:text-[#000000] transition-colors transition-border duration-300">About</Link>
          <Link to={"/contact"} className="text-[22px] pb-1 border-b-2 border-transparent hover:border-[#000000] hover:text-[#000000] transition-colors transition-border duration-300">Contact</Link>
        </nav>

        {/* Button */}
        <button className="bg-[#000000] hover:bg-[#000000b1] text-white px-5 py-2 rounded-full text-[18px] shadow-lg transition duration-300 cursor-pointer">
          Shop Now
        </button>
      </div>
    </header>
  );
}

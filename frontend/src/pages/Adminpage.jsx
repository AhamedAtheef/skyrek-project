import { Link, Route, Routes } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import ProductsAdminPage from "./admin/productAdminPage";
import AddProductPage from "./admin/addProductsAdminPage";

export default function Adminpage(){
    return (
            <div className="w-full h-screen bg-white flex">
                <div className="w-[300px] h-full bg-white" >
                    <h1 className="text-[25px] m-[20px] mb-[30px] font-bold text-center ">Admin Panel</h1>
                    <div className="flex flex-col ml-[30px] text-[20px]  text-blue-800 ">
                       <Link className="flex flex-row items-center gap-[10px] pb-[45px]" to="/admin/products"> <FaBoxArchive className="text-black" />Products</Link>
                       <Link className="flex flex-row items-center gap-[10px] pb-[45px]"  to="/admin/orders"> <TbTruckDelivery className="text-black "  />Orders</Link>
                       <Link className="flex flex-row items-center gap-[10px] pb-[45px]"  to="/admin/users"> <FaUserFriends className="text-black" />Users</Link>
                       <Link className="flex flex-row items-center gap-[10px] pb-[45px]"  to="/admin/setting"> <IoSettings className="text-black" /> Setting</Link>
                       
                    </div>
                </div>
                <div className="w-[calc(100%-300px)] bg-blue-300 text-xl">
                    <Routes>
                        <Route path="/" element={<h1>DashBoard</h1>}/>
                        <Route path="/products" element={<ProductsAdminPage/>}/>
                        <Route path="/newproduct" element={<AddProductPage/>}/>
                        <Route path="/orders" element={<h1>Orders</h1>}/>
                    </Routes>
                </div>
            </div>

    )
}
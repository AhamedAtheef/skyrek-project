import { Link, Route, Routes } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import ProductsAdminPage from "./admin/productAdminPage";
import AddProductPage from "./admin/addProductsAdminPage";
import UpdateProductPage from "./admin/updateProducts";
export default function Adminpage(){
    
    return (
            <div className="w-full h-screen bg-white flex">
                <div className="w-[300px] h-full bg-[#152f22] text-white" >
                    <h1 className="text-[25px] m-[20px] mb-[30px] font-bold text-center ">Admin Panel</h1>
                    <div className="flex flex-col ml-[30px] text-[20px] gap-[45px] text-white ">
                       <Link className="flex flex-row items-center gap-[10px]  hover:bg-white hover:text-[#152f22] hover:p-[5px] hover:rounded-lg" to="/admin/products"> <FaBoxArchive />Products</Link>
                       <Link className="flex flex-row items-center gap-[10px]  hover:bg-white hover:text-[#152f22] hover:p-[5px] hover:rounded-lg"  to="/admin/orders"> <TbTruckDelivery  />Orders</Link>
                       <Link className="flex flex-row items-center gap-[10px]  hover:bg-white hover:text-[#152f22] hover:p-[5px] hover:rounded-lg"  to="/admin/users"> <FaUserFriends />Users</Link>
                       <Link className="flex flex-row items-center gap-[10px]  hover:bg-white hover:text-[#152f22] hover:p-[5px] hover:rounded-lg"  to="/admin/setting"> <IoSettings /> Setting</Link>
                       
                    </div>
                </div>
                <div className="w-[calc(100%-300px)] bg-blue-300 text-xl">
                    <Routes>
                        <Route path="/" element={<h1>DashBoard</h1>}/>
                        <Route path="/products" element={<ProductsAdminPage/>}/>
                        <Route path="/newproduct" element={<AddProductPage/>}/>
                        <Route path="/orders" element={<h1>Orders</h1>}/>
                        <Route path="/update" element={<UpdateProductPage/>}/>
                    </Routes>
                </div>
            </div>

    )
}
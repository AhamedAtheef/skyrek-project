import { Route, Routes } from "react-router-dom";

export default function Adminpage(){
    return (
            <div className="w-full h-screen bg-white flex">
                <div className="w-[300px] h-full bg-white" >
                    <h1 className="text-xl m-[20px] ">Welcome to Admin page</h1>
                </div>
                <div className="w-[calc(100%-300px)] bg-blue-300 text-center text-xl">
                    <Routes>
                        <Route path="/" element={<h1>DashBoard</h1>}/>
                        <Route path="/products" element={<h1>Products</h1>}/>
                        <Route path="/orders" element={<h1>Orders</h1>}/>
                    </Routes>
                </div>
            </div>

    )
}
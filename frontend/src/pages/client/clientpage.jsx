import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import ProductPage from "./product";
import ProductOverview from "./productoverview";
import HomePage from "./homepage";
import CartPage from "./cart";
import CheckOutPage from "./checkout";


export function Clientpage() {
    return (
        <div className="w-full h-screen bg-[#fdfbf7] ">
            <Header/>
            <div className="w-full h-full">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<ProductPage/>}/>
                <Route path="/about" element={<h1>about</h1>}/>
                <Route path="/contact" element={<h1>contact</h1>}/>
                <Route path="/overview/:productId" element={<ProductOverview/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/checkout" element={<CheckOutPage/>}/>
            </Routes>
            </div>

        </div>
    )
}
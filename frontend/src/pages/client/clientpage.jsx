import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";

export function Clientpage() {
    return (
        <div className="w-full h-screen bg-[#fdfbf7]">
            <Header/>
            <div className="w-full h-[calc(100%-70px)] ">
            <Routes>
                <Route path="/" element={<h1>Home</h1>}/>
                <Route path="/products" element={<h1>Products</h1>}/>
                <Route path="/about" element={<h1>about</h1>}/>
                <Route path="/contact" element={<h1>contact</h1>}/>
            </Routes>
            </div>

        </div>
    )
}
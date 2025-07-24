import { useState } from "react"
import UploadFile from "../utils/meadiaupload"
import toast from "react-hot-toast"
import Loading from "../components/loading"
import BarLoader from "../components/homeloading"
import ProductCard from "../components/productcard"

export default function Testpage(){

    return(
        <div className="w-full h-screen flex justify-center items-center">
            <ProductCard/>
        </div>
    )
}
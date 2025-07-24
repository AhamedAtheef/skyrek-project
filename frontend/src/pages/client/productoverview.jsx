import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import BarLoader from "../../components/homeloading"
import ImageSlider from "../../components/imageslider"

export default function ProductOverview(){
    const prams = useParams()
    const [product,setProduct] = useState(null)
    const [status,setStatus] = useState("loading") // loading,sucess,failure
    useEffect(()=>{
        if(status === "loading"){
            axios.get(import.meta.env.VITE_BACKEND_URL + `/api/products/${prams.productId}`).then((res)=>{
                setProduct(res.data)
                console.log(res.data)
                setStatus("success")
            }).catch(error=>{
                toast.error("Invalid Product Id")
                setStatus("error")
            })
        }
    },[status])
    return(
        <div className="w-full h-full flex justify-center items-center ">
            {
                status == "loading" && <BarLoader/>
            }
            {
                status == "success" && (<div className="w-[80rem] h-[700px] flex gap-[15px] justify-center  pt-[4%] px-[8px]  bg-[#eee9e2] rounded-2xl">
                    <ImageSlider images={product.images}/>
                    <div className="w-[30%] h-[450px] bg-gray-100 "></div>
                    <div className="w-[21%] h-[450px] bg-gray-100 "></div>
                </div>)
            }
            {
                status == "error" && <h1>Error</h1>
            }
        </div>
    )
}
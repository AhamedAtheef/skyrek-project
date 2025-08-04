import axios from "axios"
import { useEffect, useState, } from "react"
import toast from "react-hot-toast"
import { Link, useParams } from "react-router-dom"
import BarLoader from "../../components/homeloading"
import ImageSlider from "../../components/imageslider"

export default function ProductOverview() {
    const params = useParams()
    const [product, setProduct] = useState(null)
    const [status, setStatus] = useState("loading") // loading,sucess,failure
    useEffect(() => {
        if (status === "loading") {
            axios.get(import.meta.env.VITE_BACKEND_URL + `/api/products/${params.productId}`).then((res) => {
                setProduct(res.data)
                console.log(res.data)
                setStatus("success")
            }).catch(error => {
                toast.error("Invalid Product Id")
                setStatus("error")
            })
        }
    }, [status])

    return (
        <div className="w-full flex justify-center mt-[5%]">
            {
                status == "loading" && <BarLoader />
            }
            {
                status == "success" && <div className="w-[70rem] min-h-[600px] flex gap-[15px] justify-center py-[3%] bg-gradient-to-br from-black via-gray-800  to-gray-600 rounded-2xl border-2 shadow-custom">
                    <ImageSlider images={product.images} />

                    <div className="w-[35%] h-[455px] bg-white rounded-[10px] shadow-xl overflow-hidden">
                        <div className="w-full h-full flex flex-col justify-between">
                            <div className="flex flex-col gap-[5px] px-[6%] py-[6%] ">
                                <h1 className="font-extrabold text-3xl mb-[5px] tracking-wide text-[#1a1a1a]">{product.productname}</h1>
                                <h2 className="font-sans text-[18px] text-blue-900 italic">"{product.altnames}"</h2>
                                <p className="border border-gray-300 bg-gray-50 rounded-[10px] p-[10px] mt-[10px] text-[15px] leading-relaxed text-gray-700 shadow-sm">{product.discription}</p>

                                <p className={`mt-3 text-[17px] font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                                    {product.stock > 0 ? `${product.stock} in stock ` : 'Almost sold out 🔥'}
                                </p>

                                <div className="flex items-center gap-[15px] mt-2">
                                    {/* price */}
                                    <p className="text-[24px] font-extrabold text-black">
                                        LKR {product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>
                                    {/* labelled Price */}
                                    <p className="text-[17px] text-gray-500 line-through">
                                        LKR {product.labelledPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>
                                    {/* discount badge */}
                                    <span className="text-[13px] bg-yellow-200 text-yellow-900 px-2 py-0.5 rounded-full font-semibold">Save {Math.round(((product.labelledPrice - product.price) / product.labelledPrice) * 100)}%</span>
                                </div>
                            </div>

                            <div className="flex mb-[25px] justify-between items-center px-[25px]  ">
                                <button className="border-2 border-[#020b22] hover:bg-[#1f2638] hover:text-white text-center px-[2rem] py-[6px] rounded-[10px] text-xl font-medium transition-all duration-200 shadow-md">
                                    Buy Now
                                </button>
                                <Link to={"user/cartpage/"+product.product} className="border-2 border-[#020b22] bg-[#061642] hover:bg-transparent hover:text-black font-mono text-white text-center px-[1.5rem] py-[6px] rounded-[10px] text-xl transition-all duration-200 shadow-md">
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            }
            {
                status == "error" && <h1>Error</h1>
            }
        </div>
    )
}
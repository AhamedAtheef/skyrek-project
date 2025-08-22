import axios from "axios"
import { useEffect, useState, } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import BarLoader from "../../components/homeloading"
import ImageSlider from "../../components/imageslider"
import { addCart, getCart } from "../../utils/cart";


export default function ProductOverview() {
    const params = useParams()
    const [product, setProduct] = useState(null)
    const navigate = useNavigate()
    const [status, setStatus] = useState("loading") // loading,sucess,failure
    useEffect(() => {
        if (status === "loading") {
            axios.get(import.meta.env.VITE_BACKEND_URL + `/api/products/${params.productId}`).then((res) => {
                setProduct(res.data)
                setStatus("success")
            }).catch(error => {
                toast.error("Invalid Product Id")
                setStatus("error")
            })
        }
    }, [status])

    return (
        <div className="w-full h-auto bg-[#f7eeee] flex justify-center ">
            {
                status == "loading" && <BarLoader />
            }
            {
                status == "success" && <div className="w-[20rem] min-h-full h-auto flex flex-col mt-[30%]
                md:w-[50rem] md:mt-[15%] lg:flex-row lg:gap-[16px] lg:w-[68rem] lg:mt-[10%] xl:mt-[8%] xl:gap-[50px]">
                    <ImageSlider images={product.images} />

                    <div className="w-full h-auto pb-[3%]  bg-[#f5ecec] overflow-hidden 
                    md:md:mt-[2%] lg:mt-0 ">
                        <div className="w-full h-full flex flex-col gap-[5px]">
                            <div className="flex flex-col gap-[5px] px-[1%] py-[4%] 
                            md:py-[1%] lg:px-[5%] lg:gap-[5px] lg:mt-[2px] xl:px-[0%] ">
                                <h1 className="font-extrabold text-2xl mb-[5px] tracking-wide text-[#575452]
                                md:text-3xl lg:text-4xl">{product.productname}</h1>
                                <h2 className="font-sans text-[16px] text-black italic
                                md:text-2xl lg:text-3xl">"{product.altnames}"</h2>
                                <p className="border border-gray-300 bg-gray-50 rounded-[10px] p-[10px] mt-[10px] text-[15px] leading-relaxed text-gray-700 shadow-sm overflow-scroll h-[165px] hidden lg:block">{product.discription}</p>
                                <div className="flex items-center justify-between mt-[2px]">
                                    <p className={`text-[17px] md:text-1xl font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                                        {product.stock > 0 ? `${product.stock} in stock ` : 'Almost sold out 🔥'}
                                    </p>
                                    {/* discount badge */}
                                    <span className="text-[13px] md:text-[15px] lg:mt-[5px] bg-yellow-200 text-yellow-900 px-2 py-0.5 mr-[5px] rounded-full font-semibold">
                                        Save {Math.round(((product.labelledPrice - product.price) / product.labelledPrice) * 100)}%</span>
                                </div>

                                <div className="flex items-center justify-between mt-2 mr-[5px] ">
                                    {/* price */}
                                    <p className="text-[20px] md:text-3xl font-extrabold text-black">
                                        LKR {product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>
                                    {/* labelled Price */}
                                    <p className="text-[16px] md:text-2xl text-gray-500 line-through">
                                        LKR {product.labelledPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </p>


                                </div>
                            </div>

                            <div className="flex px-[10px] justify-between  lg:mt-[10px] lg:px-[10%] xl:px-[5%]">
                                <button className="cursor-pointer px-[20px] md:px-[25px] py-[5px] md:py[10px]  bg-pink-500 hover:bg-pink-600 text-white hover:text-black text-center  rounded-[10px] text-xl font-medium transition-all duration-200 shadow-md"
                                    onClick={() => { 
                                        navigate("/user/checkout", {
                                            state: {
                                                items: [
                                                    {
                                                        productId: product.productId,
                                                        quantity: 1,
                                                        product: { ...product }
                                                    }
                                                ]
                                            }
                                        });
                                    }}

                                >
                                    Buy Now
                                </button>
                                <button className="cursor-pointer px-[10px] md:px[25px] py-[4px] md:py[8px] border-2 border-[#020b22] bg-black  hover:bg-transparent hover:text-black font-mono text-white text-center  rounded-[10px] text-xl transition-all duration-200 shadow-md"
                                    onClick={() => {
                                        addCart(product, 1);
                                        toast.success("Added to cart");
                                        console.log(getCart())
                                    }}>
                                    Add to cart
                                </button>
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
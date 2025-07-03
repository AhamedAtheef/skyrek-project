import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


export default function AddProductPage() {
    /* 
    productId
    productname
    altnames
    labelledPrice
    price
    images
    discription
    stock
    isAvailable
    category
    
     */
    const [productId, setProductId] = useState("");
    const [productname, setProductname] = useState("");
    const [altnames, setAltnames] = useState("");
    const [labelledPrice, setLaballedprice] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState(""); // or [] if you're uploading images later
    const [discription, setDiscription] = useState("");
    const [stock, setStock] = useState("");
    const [isAvailable, setIsAvailable] = useState(true);
    const [category, setCateqory] = useState("");
    const navigate = useNavigate();

    function handleSubmit() {
        const alternativInArray = altnames.split(",");

        const productData = {
            productId,
            productname,
            altnames: alternativInArray,
            labelledPrice,
            price,
            images: [], // Update later if using file uploads
            discription,
            stock,
            isAvailable: isAvailable,
            category
        };

        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
            return;
        }

        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/products", productData, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
            .then((res) => {
                console.log("Product Added Successfully");
                console.log(res.data);
                toast.success("product successfully added")
                navigate("/admin/products")
            })
            .catch((error) => {
                console.error("Error adding products");
                console.log(error);
            });

        console.log(productData);
    }


    return (
        <div className="w-full h-full bg-white grid place-content-center">
            <div className="w-[600px] h-[700px] border-[2px] rounded-2xl flex flex-row flex-wrap justify-between p-[40px]">

                <div className="w-[200px] flex flex-col gap-[10px]">
                    <label>Product Id</label>
                    <input
                        type="text"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        className="w-full border rounded-[5px]"
                    />
                </div>

                <div className="w-[300px] flex flex-col gap-[10px]">
                    <label>Product Name</label>
                    <input
                        type="text"
                        value={productname}
                        onChange={(e) => setProductname(e.target.value)}
                        className="w-full border rounded-[5px]"
                    />
                </div>

                <div className="w-[500px] flex flex-col gap-[10px]">
                    <label>Alternative Name</label>
                    <input
                        type="text"
                        value={altnames}
                        onChange={(e) => setAltnames(e.target.value)}
                        className="w-full border rounded-[5px]"
                    />
                </div>

                <div className="w-[200px] flex flex-col gap-[10px]">
                    <label>Labelled Price</label>
                    <input
                        type="number"
                        value={labelledPrice}
                        onChange={(e) => setLaballedprice(e.target.value)}
                        className="w-full border rounded-[5px]"
                    />
                </div>

                <div className="w-[200px] flex flex-col gap-[10px]">
                    <label>Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full border rounded-[5px]"
                    />
                </div>

                <div className="w-[500px] flex flex-col gap-[10px]">
                    <label>Image</label>
                    <input
                        type="text"
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
                        className="w-full border rounded-[5px]"
                    />
                </div>

                <div className="w-[500px] flex flex-col gap-[10px]">
                    <label>Discription</label>
                    <textarea
                        value={discription}
                        onChange={(e) => setDiscription(e.target.value)}
                        className="w-full h-[100px] border rounded-[5px]"
                    ></textarea>
                </div>

                <div className="w-[200px] flex flex-col gap-[10px]">
                    <label>Stock</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="w-full border rounded-[5px]"
                    />
                </div>

                <div className="w-[200px] flex flex-col gap-[10px]">
                    <label>Is Available</label>
                    <select
                        value={isAvailable}
                        onChange={(e) => setIsAvailable(e.target.value)}
                        className="border rounded-[5px]"
                    >
                        <option value={true}>Available</option>
                        <option value={false}>Not Available</option>
                    </select>
                </div>

                <div className="w-[200px] flex flex-col gap-[10px]">
                    <label>Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCateqory(e.target.value)}
                        className="border rounded-[5px]"
                    >
                        <option value="Cream">Cream</option>
                        <option value="Soap">Soap</option>
                        <option value="Face Wash">Face Wash</option>
                        <option value="Fragrance">Fragrance</option>
                    </select>
                </div>

                <div className="w-full flex justify-center items-center mt-[30px] gap-[30px]">
                    <Link to="/admin/products" className="border-[2px]  w-[200px] px-[20px] py-[5px] rounded-[5px] text-center">Cancel</Link>
                    <button className="w-[200px]  px-[20px] py-[6px] rounded-[5px] cursor-pointer text-center  bg-black text-white " onClick={handleSubmit}>Add Products</button>
                </div>

            </div>
        </div>
    )

}
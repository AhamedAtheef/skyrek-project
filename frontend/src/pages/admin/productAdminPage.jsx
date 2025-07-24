import axios from "axios";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";
import Loading from "../../components/loading";


export default function ProductsAdminPage() {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products").then((res) => {
        setProducts(res.data)
        setLoading(false)
      })
    }
  }, [loading]);

  return (
    <div className="w-full h-full bg-white ">
      <div className="overflow-x-auto w-full p-[50px] ">
        <h1 className="text-[30px] font-bold ">Products List</h1>
        <Link
          to="/admin/newproduct" className="fixed top-4 right-[50px] flex flex-row items-center gap-[2px] bg-[#152f22] text-white px-[10px] py-[5px] rounded-lg ">
          <GoPlus className="text-2xl" /><span className="text-center mb-[3px] mr-[2px]">Create New</span></Link>

        {loading ? <Loading /> : <table className="w-full  my-4 ">
          <thead className="border-2 border-gray-300 ">
            <tr>
              <th className="text-[21px] p-[7px] text-center font-medium">Image</th>
              <th className="text-[21px] p-[7px] text-center font-medium">Product Id</th>
              <th className="text-[21px] p-[7px] text-center font-medium">Product Name</th>
              <th className="text-[21px] p-[7px] text-center font-medium">Price</th>
              <th className="text-[21px] p-[7px] text-center font-medium">Labelled Price</th>
              <th className="text-[21px] p-[7px] text-center font-medium">Category</th>
              <th className="text-[21px] p-[7px] text-center font-medium">Stock</th>
              <th className="text-[21px] p-[7px] text-center font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="border-2 border-gray-300 ">
            {products.map((product, index) => {
              return (
                <tr key={index}>
                  <td className="p-[7px] ">
                    <img src={product.images[0]} alt={product.productimage} className="w-[50px] h-[50px]" />
                  </td>
                  <td className="p-[7px] text-center">{product.productId}</td>
                  <td className="p-[7px] text-center">{product.productname}</td>
                  <td className="p-[7px] text-center">{product.price}</td>
                  <td className="p-[7px] text-center">{product.labelledPrice}</td>
                  <td className="p-[7px] text-center">{product.category}</td>
                  <td className="p-[7px] text-center">{product.stock}</td>
                  <td className="p-[7px] flex justify-center items-center">
                    <BiTrash className="text-3xl text-red-700 cursor-pointer ml-[10px]" onClick={
                      () => {
                        const token = localStorage.getItem("token");
                        if (!token) {
                          navigate("/login");
                          return;
                        }
                        axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/products/" + product.productId,
                          { headers: { Authorization: `Bearer ${token}` } })

                          .then((res) => {
                            console.log(res.data)
                            toast.success("Product Deleted Successfully");
                            setLoading(!loading);
                          }).catch((error) => {
                            console.error(error);
                            toast.error("Failed To Delete Product");
                          })
                      }
                    } />
                    <BiEdit className="text-3xl text-[#152f22] cursor-pointer ml-[10px]" onClick={() => { navigate("/admin/update", { state: product}) }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>}
      </div>
    </div>

  )
}
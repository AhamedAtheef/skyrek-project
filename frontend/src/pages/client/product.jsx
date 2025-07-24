import axios from "axios";
import { useEffect, useState } from "react";
import BarLoader from "../../components/homeloading";
import ProductCard from "../../components/productcard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products").then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      });
    }
  }, [loading]);

  return (
    <div className="w-full pt-[50px]">
      {
        loading ? (<BarLoader />) : (
          <div className="w-full h-full flex justify-center flex-wrap gap-10 px-[80px]">
            {
              products.map((product) => {
                return (
                 <ProductCard key={product.productId} product={product}/> 
                );
              })
            }
          </div>
        )
      }
    </div>
  );
}

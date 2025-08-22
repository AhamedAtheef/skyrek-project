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
        setProducts(res.data.products);
        setLoading(false);
      });
    }
  }, [loading]);

  return (
    <div className="w-full  bg-[#f8f8f8]  mt-[80px] ">
      {
        loading ? (<BarLoader />) : (
          <div
            className="w-full h-full flex flex-wrap justify-start items-start 
      gap-10 px-[80px] pt-[50px] pb-[40px]
      
      min-[1440px]:gap-8 min-[1440px]:px-[60px] min-[1440px]:pl-[7rem]      
      min-[1500px]:gap-8 min-[1500px]:px-[60px] min-[1500px]:pl-[10rem]      
      max-[1440px]:gap-8 max-[1440px]:px-[40px]
      md:gap-4 
      xl:gap-[2rem]
      max-[435px]:gap-[12px] max-[435px]:px-0 max-[435px]:pt-0 max-[435px]:pb-0
      max-[435px]:justify-start max-[435px]:items-start"
          >
            {products.map((product) => {
              return <ProductCard key={product.productId} product={product} />;
            })}
          </div>
        )
      }
    </div>
  );
}

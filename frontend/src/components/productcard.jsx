import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const product = props.product;
  return (
    <Link to={"/user/overview/" + product.productId} className="w-65 h-[360px] rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white">
      {/* image */}
      <div className="bg-gray-100 w-full  overflow-hidden relative">
        {product.labelledPrice > product.price && (
          <div className="inline-block bg-green-600 text-white text-sm font-semibold px-3 py-1 absolute rounded-r-[0.25rem]">
            Discounted
          </div>
        )}

        <img
          src={product.images[0]} alt={product.productimage}
          className="h-[230px] w-full content-center object-cover "
        />
      </div>

      {/* content */}
      <div className="pb-4 px-4 pt-2">
        {/* product name */}
        <h2 className="text-[22px] font-semibold text-gray-800">
          {product.productname}
        </h2>

        <div className="flex gap-[25px] mt-[10px]">
          {/* price */}
          <p className="text-[22px] font-bold text-gray-900"><span>LKR{product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>
          {/* labelled Price */}
          <p className="text-[19px] text-gray-500 line-through"><span>LKR{product.labelledPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>
        </div>

        {/* stock */}
        <p className={`mt-2 text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
          {product.stock > 0 ? `${product.stock} in stock` : 'All most sold out'}
        </p>


      </div>
    </Link>
  );
}

import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

export default function ProductsAdminPage(){
    return(
        <div className="w-full h-full bg-white">
            <Link to="/admin/newproduct" className="fixed right-[60px] bottom-[60px] rounded-full bg-black text-white p-[20px] ">
                <GoPlus className="text-3xl"/>
            </Link>
        </div>
    )
}
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";//send http req for backend
import toast from "react-hot-toast";
import { FaFacebookF,  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";



export default function Loginpage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Load page smoothly

    function login() {
        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
            email: email,
            password: password
        }).then((res) => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);

            if (res.data.message === "Incorrect password") {
                return toast.error("In correct password");
            }

            toast.success("Login Success");
            if (res.data.role === "admin") {
                navigate("/admin");
            } else {
                navigate("/");
            }
        }).catch((error) => {
            console.log(error);
            toast.error("Login failed");
        });
    }

    return (
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-cover bg-center bg-no-repeat grid place-content-center">
            <div className="w-[450px] h-[610px] backdrop-blur-sm flex flex-col pt-[10px] items-center rounded-[30px] custom-shadow-blue">
                <div className="mt-[30px] mb-[20px]">
                    <h1 className="text-[#2c7bb0] font-bold text-[35px]">Welcome Back</h1>
                    <h2 className="text-[20px] text-[#343a46]">Login to your beauty account</h2>
                </div>
                
                <form onSubmit={(e) => { e.preventDefault(); login(); }} className="flex flex-col gap-[35px] pt-[30px] relative">
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-[350px] h-[40px] text-[18px] px-3 border border-[#416793] rounded-[10px] text-black bg-transparent outline-none placeholder-black"
                    />
                    <input
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-[350px] h-[40px] text-[18px] border border-[#416793] px-3 rounded-[10px] text-black bg-transparent outline-none placeholder-black"
                    />

                   <div className="flex items-center gap-2 ml-1 absolute top-[9.5rem]">
                   <input
                        type="checkbox"
                        id="showPassword"
                        onChange={() => setShowPassword(!showPassword)}
                        className="w-4 h-4 accent-blue-600"
                    />
                    <label htmlFor="showPassword" className="text-[15px] text-[#232933] cursor-pointer">
                       Show Password {showPassword }
                    </label>
                    </div>

                    <button
                        type="submit"
                        className="w-[350px] h-[45px] rounded-[10px] text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-80 transition duration-300 cursor-pointer text-[22px] mt-[15px]"
                    >
                        Login
                    </button>
                </form>
                {/* ✅ Form ends here */}

                <span className="mt-[20px] text-[17px] text-[#232933]">
                    Don't have an account? <Link className="text-blue-900" to="/registerpage">SignUp</Link> from here
                </span>
                <span className="mt-[5px] text-[17px] text-[#161b24] text-center">OR</span>
                <div className="flex flex-col gap-[20px] mt-[10px]">
                    <div className="w-[350px] h-[40px] text-[18px] border border-[#416793] px-3 rounded-[10px] text-black bg-transparent outline-none flex items-center justify-center gap-[10px] cursor-pointer">
                            <FaFacebookF className="text-white bg-blue-600 py-[5px] px-[2px] rounded-[5px] cursor-pointer text-3xl" />
                            <span>Sign With Facebook</span>
                    </div>
                    <div className="w-[350px] h-[40px] text-[18px] border border-[#416793]  rounded-[10px] text-black bg-transparent outline-none flex items-center px-[75px] gap-[10px] cursor-pointer">
                        <FcGoogle className="bg-white py-[2px] rounded-[5px] cursor-pointer text-3xl" />
                        <span>Sign With Google</span>
                    </div>
                    </div>
            </div>
        </div>
    );
}
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";//send http req for backend
import toast from "react-hot-toast";
import { FaFacebookF,  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Loginpage() {

    /* Login page */
    const [showLogin, setShowLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Load page smoothly

    /* Register page */

    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    const [femail,setFemail] = useState("")
    const [fpassword,setFPassword] = useState("")
    const [number,setNumber] = useState("")

    function Register(){
        axios.post(import.meta.env.VITE_BACKEND_URL+ "/api/users",{
        firstName:fname, 
        lastName:lname, 
        email:femail,
        password:fpassword, 
        phone:number
        })
        .then((res)=>{
            console.log(res.data)
            if(res.data.message === "Not Saved"){
                return toast.error("Failed To Create An Account")
            }
            toast.success("Successfully Created An Account")
            navigate("/cleint/home")

        }).catch((error)=>{
            console.log(error)
            toast.error("Can't To Create An Account and Try Again ")

        }) 
    }
    // Login page
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
                navigate("/user/home");
            }
        }).catch((error) => {
            console.log(error);
            toast.error("Login failed");
        });
    }

    return ( 
        /* Login page  */
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-cover bg-center bg-no-repeat  grid place-content-center relative">
            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[620px] backdrop-blur-sm flex gap-[110px] rounded-[30px] custom-shadow transition-all duration-500 ease-in-out ${showLogin ? 'block' : 'hidden'}`}>
                <div className="w-[calc(100%-50%)] rounded-l-[30px] text-white flex flex-col items-center relative">
                    <div className="absolute z-10 text-center px-[20px] pt-[8rem] flex flex-col items-center gap-[3rem]">
                        <h1 className=" text-4xl font-bold ">Welcome Back</h1>
                    <span className="text-gray-400 text-[18px]">Experience luxury with our skin-friendly cosmetics, carefully crafted to enhance your natural beauty, nourish your skin, and give you the radiant confidence to shine every single day. Discover elegance in every shade and glow like never before.</span>
                    <Link className=" w-[10rem] text-2xl text-center pb-[5px] rounded-2xl  bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_4px_10px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.7)] transition-shadow mt-[11rem]" to="/">Get Started</Link>

                    </div>
                    <img src="/cream.jpg" alt="" className="w-full h-full absolute rounded-l-[30px]"/>
                </div>
                <div className="flex flex-col items-center ">
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
                    Don't have an account? <button className="text-blue-900 cursor-pointer" onClick={() => setShowLogin(false)}>SignUp</button> from here
                </span>
                <span className="mt-[5px] text-[17px] text-[#161b24] text-center">OR Continue With</span>
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
            
            {/* Register Page */}

            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70rem] h-[620px] backdrop-blur-sm flex gap-[110px] rounded-[30px] custom-shadow z-10 transition-all duration-500 ease-in-out ${showLogin ? 'hidden' : 'block'}`}>
                <div className="w-[calc(100%-50%)] rounded-l-[30px] text-white flex flex-col items-center relative">
                    <div className="absolute z-10 text-center px-[20px] pt-[8rem] flex flex-col items-center gap-[3rem]">
                        <h1 className=" text-4xl font-bold">Create an Acoount</h1>
                    <span className="text-gray-400 text-[18px]">Experience luxury with our skin-friendly cosmetics, carefully crafted to enhance your natural beauty, nourish your skin, and give you the radiant confidence to shine every single day. Discover elegance in every shade and glow like never before.</span>
                    <Link className=" w-[10rem] text-2xl text-center pb-[5px] rounded-2xl  bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_4px_10px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.7)] transition-shadow mt-[11rem]" to="/">Get Started</Link>

                    </div>
                    <img src="/cream.jpg" alt="" className="w-full h-full absolute rounded-l-[30px]"/>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div className="mt-[30px] mb-[20px]">
                    <h1 className="text-[#2c7bb0] font-bold text-[35px] ">Create a new account</h1>
                    <h2 className="text-[20px] text-[#343a46]">Create your beauty account</h2>
                    </div>
                
                <form onSubmit={(e) => { e.preventDefault(); Register() ; }} className="flex flex-col gap-[28px] pt-[20px] relative">
                    <input
                        type="text"
                        placeholder="First name"
                        onChange={(e)=> setFname(e.target.value)}
                        className="w-[350px] h-[40px] text-[18px] px-3 border border-[#416793] rounded-[10px] text-black bg-transparent outline-none placeholder-black"
                    />

                    <input
                        type="text"
                        placeholder="Last name"
                        onChange={(e)=> setLname(e.target.value)}
                        className="w-[350px] h-[40px] text-[18px] px-3 border border-[#416793] rounded-[10px] text-black bg-transparent outline-none placeholder-black"
                    />

                    <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength={10}
                        onChange={(e)=> setNumber(e.target.value)}
                        placeholder="Phone number"
                        onKeyPress={(e) => {
                        if (!/[0-9]/.test(e.key)){
                        e.preventDefault();}}}
                        className="w-[350px] h-[40px] text-[18px] px-3 border border-[#416793] rounded-[10px] text-black bg-transparent outline-none placeholder-black"
                    />
                    
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={(e)=> setFemail(e.target.value)}
                        className="w-[350px] h-[40px] text-[18px] px-3 border border-[#416793] rounded-[10px] text-black bg-transparent outline-none placeholder-black"
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        onChange={(e)=> setFPassword(e.target.value)}
                        className="w-[350px] h-[40px] text-[18px] border border-[#416793] px-3 rounded-[10px] text-black bg-transparent outline-none placeholder-black"
                    />

                    <button
                        type="submit"
                        className="w-[350px] h-[45px] rounded-[10px] text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-80 transition duration-300 cursor-pointer text-[22px] mt-[15px]"
                    >
                        Submit
                    </button>
                </form>
                {/* ✅ Form ends here */}

                <span className="mt-[20px] text-[17px] text-[#232933]">
                    All ready have an account? <button className="text-blue-900 cursor-pointer" onClick={() => setShowLogin(true)}>SignIn</button> from here
                </span>
                </div>
            </div>

        </div>
    );
}
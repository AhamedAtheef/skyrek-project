import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";//send http req for backend
import toast from "react-hot-toast";


export default function Loginpage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate() //Load page smoothly

       function login() {
        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
            email: email,
            password: password
        }).then((res) => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)

            if (res.data.message == "Incorrect password") {
                return toast.error("In correct password")

            }

            toast.success("Login Success")
            if (res.data.role == "admin") {
                navigate("/admin")
            }
            else {
                navigate("/")
            }
        }).catch((error) => {
            console.log(error)
            toast.error("Login failed")
        })


    }
    return (
        <div className="w-full h-screen bg-[url('/loginbg.jpeg')] bg-cover bg-center bg-no-repeat grid place-content-center">
            <div className="w-[450px] h-[500px] backdrop-blur-sm flex flex-col pt-[10px] justify-center items-center " >
                <h1 className="absolute top-[45px] text-center mb-[35px] font-bold text-[30px] text-white">Login</h1>
                <div className="flex flex-col gap-[35px]  pt-[30px]">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email " className="w-[350px] h-[40px] text-[18px]  px-3 border-2 border-blue-950 rounded-[15px] text-white bg-transparent outline-none placeholder-white" />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" className="w-[350px] h-[40px] text-[18px]  px-3 border-2 border-blue-950 rounded-[15px] text-white bg-transparent outline-none placeholder-white" />
                    <button onClick={login} className="w-[350px] h-[40px] text-[18px]  px-3 border-2 border-none rounded-[15px] text-white bg-blue-700 outline-none cursor-pointer hover:bg-blue-800">Login</button>
                </div>
                <span className="mt-[20px] text-[17px] text-white">Don't have an account? <Link className="text-blue-500" to="/registerpage">SignUp</Link> from here</span>
            </div>
        </div>

    )

}
import { useState } from "react"
import UploadFile from "../utils/meadiaupload"
import toast from "react-hot-toast"
import Loading from "../components/loading"

export default function Testpage(){

    return(
        <div className="w-full h-screen flex justify-center items-center">
            <Loading/>
        </div>
    )
}
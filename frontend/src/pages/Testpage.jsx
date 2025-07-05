import { useState } from "react"
import UploadFile from "../utils/meadiaupload"
import toast from "react-hot-toast"

export default function Testpage(){
    const [file,setFiles]= useState(null)
    function handleupload(){
        UploadFile(file).then((url)=>{
            console.log(url)
            toast.success("File uploaded")
        }).catch((error)=>{
           console.error(error)
        })
    }
    return(
       <div>
        <input type="file" name="" id="" onChange={(e)=>{setFiles(e.target.files[0])}}/>
        <button onClick={handleupload}>Upload</button>
       </div>
       
    )
}
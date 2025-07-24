import { useState } from "react"

export default function ImageSlider(props){

    const images = props.images
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    return(
        <div className="w-[500px] h-[600px] flex flex-col gap-[15px] ">

         <div className="w-[450px] h-[450px] bg-pink-300 rounded-2xl object-cover">
            <img src={images[activeImageIndex]} className="w-full h-full border-2 border-gray-300 rounded-2xl"/>
         </div>
                     <div className=" w-[450px]  flex flex-row gap-[5px] ">
            {
                images.map((image,index)=>{
                    return(
                        <img src={image} key={index} className={"w-[100px] h-[100px]  cursor-pointer rounded-md object-cover " +(activeImageIndex===index ? "border-2 border-black" : "border-none")}  onClick={()=>{
                            setActiveImageIndex(index)
                        }}/>
                    )
                })
            }
            </div>
        </div>
    )

}
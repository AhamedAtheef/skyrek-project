import { useState } from "react"

export default function ImageSlider(props) {

    const images = props.images
    const [activeImageIndex, setActiveImageIndex] = useState(0)
    return (
        <div className="w-[500px] min-h-[600px] h-auto flex flex-col gap-[15px] ">

            <div className="w-[450px] h-[450px] bg-black rounded-2xl object-cover">
                <img src={images[activeImageIndex]} className="w-full h-full border-2 border-blue-300 rounded-2xl" />
            </div>
            <div className=" w-[450px]  flex flex-row flex-wrap gap-[5px] ">
                {
                    images.map((image, index) => {
                        return (
                            <img src={image} key={index} className={`w-[100px] h-[100px]  cursor-pointer rounded-md object-cover ${image.length >10 ? "w-[80px] h-[80px] ": "w-[100px] h-[100px]"} ` + (activeImageIndex === index ? "border-2 border-blue-400" : "border-none")} onClick={() => {
                                setActiveImageIndex(index)
                            }} />
                        )
                    })
                }
            </div>
        </div>
    )

}
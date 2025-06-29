import { useState } from "react"

export default function Testpage(){
    const [count,setCount] = useState(0)

    function increment(){
        setCount(count+1)
    }
    
    function decrement(){
        setCount(count-1)
    }


    return(
        <div className="w-full h-screen bg-amber-200 flex justify-center items-center">
            <div className="w-[400px] h-[400px] bg-white flex flex-col justify-center items-center">
                <h1 className="text-5xl font-bold">{count}</h1>
                <div className="w-full flex justify-center items-center mt-5">
                    <button onClick={decrement} className="bg-purple-600 text-white w-[80px] p-[2px] mr-[8px] text-2xl text-center rounded-[20px] cursor-pointer">-</button>
                    <button onClick={increment} className="bg-purple-600 text-white w-[80px] p-[2px] mr-[5px] text-2xl rounded-[20px] cursor-pointer">+</button>
                    </div>
            </div>
        </div>
    )
}
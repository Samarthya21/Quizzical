import React from "react"
import { dancingScript ,oswald, inter} from "./fonts.js"
import Link from "next/link.js"
import Image from "next/image.js"
export default function Start(){
    function handleClick(){

    }
    return(
    <div className={` text-center  ${oswald.className} text-[#293264]`} >
    <h1 className="p-4 text-6xl ">Quizzical</h1>
    <p className={`p-4  ${inter.className}`}>See some description if needed </p> 
    <Link
    href="/question"
    >
    <button onClick={handleClick}
    class="bg-[#293264] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Start
  
</button>

    </Link>
    

    </div>
    )
}
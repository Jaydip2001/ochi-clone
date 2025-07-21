import React from 'react'
// import { motion } from 'motion/react'

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
     <div className="text flex border-t-2 border-b-2 border-zinc-300 gap-10 overflow-hidden whitespace-nowrap">
        <h1 className='text-[25vw] uppercase leading-none font-["Founders_Grotesk"] font-semibold -mb-[7vw] pb-10 pt-10'>we are ochi</h1>
        <h1 className='text-[25vw] uppercase leading-none font-["Founders_Grotesk"] font-semibold -mb-[7vw] pb-10 pt-10'>we are ochi</h1>
        
     </div>
    </div>
  )
}

export default Marquee

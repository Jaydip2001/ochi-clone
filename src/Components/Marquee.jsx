import { motion } from 'motion/react'
import React from 'react'
// import { motion } from 'motion/react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
     <div className="text flex border-t-2 border-b-2 border-zinc-300  overflow-hidden whitespace-nowrap">
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat:Infinity, ease: "linear", duration:10}}  className='text-[25vw] uppercase leading-none font-["Founders_Grotesk"] font-semibold -mb-[7vw] pr-20 pb-10 pt-10'>we are ochi</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat:Infinity, ease: "linear", duration:10}} className='text-[25vw] uppercase leading-none font-["Founders_Grotesk"] font-semibold -mb-[7vw] pr-20 pb-10 pt-10'>we are ochi</motion.h1>
        
     </div>
    </div>
  )
}

export default Marquee

import { motion } from "motion/react";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white pt-1">
      <div className="textstructure mt-52 px-20">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className="masker " key={index}>
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "7vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1}}
                    className="w-[7vw] h-[5vw] rounded-md bg-red-500"
                  ></motion.div>
                )}
                <h1 className="font-['Founders_Grotesk'] text-[7vw] uppercase leading-[6vw] tracking-tighter font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-10 px-20 capitalize">
        {[
          "for public and private companies ",
          "From the first pitch to IPO",
        ].map((item) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
            {" "}
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500  rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

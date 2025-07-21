import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
      <h1 className="font-['Founders_Grotesk'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and
        hire great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-15 border-[#7d9e07] mt-20">
        <div className="w-1/2 ">
            <h1 className="text-7xl">Our Approach :</h1>
            <button className=" flex  gap-10 items-center px-10 py-6 bg-zinc-900  mt-15 rounded-full text-white uppercase font-semibold">Read More
                <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
        <div className="w-1/2 h-[70vh]  bg-[#728a1e]  rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;

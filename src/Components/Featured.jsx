import React from "react";

function Featured() {
  return (
    <div className="w-full py-20 ">
      <div className=" w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className='text-8xl font-["Founders_Grotesk"] tracking-tight'>
          Featured project
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer relative w-1/2 h-[70vh]  ">
            <h1 className=" absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] leading-none tracking-tight text-6xl font-['Founders_Grotesk'] ">
              {"FYDE".split("").map((item) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[70vh]  ">
            <h1 className=" absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-[#CDEA68] leading-none tracking-tight text-6xl font-['Founders_Grotesk'] ">
              {"VISE".split("").map((item) => (
                <span>{item}</span>
              ))}
            </h1>

            <div className="card w-full h-full  rounded-xl overflow-hidden ">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

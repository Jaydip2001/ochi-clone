import React from "react";

function Cards() {
  return (
    <div className="w-full  h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card relative rounded-2xl w-full h-full bg-[#004D43] flex items-center justify-center ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className=" absolute px-5 py-1 border-1 text-2xl text-[#cdea68] rounded-full left-10 bottom-10">
            {" "}
            ©2019–2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5  h-[50vh] w-1/2">
        <div className="card relative rounded-2xl w-full h-full bg-[#032e28] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className=" absolute px-5 py-1 border-1 text-2xl text-[#cdea68] rounded-full left-10 bottom-10">
            {" "}
            ©2019–2022
          </button>
        </div>
        <div className="card relative rounded-2xl w-full h-full bg-[#082e29] flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className=" absolute px-5 py-1 border-1 text-2xl text-[#cdea68] rounded-full left-10 bottom-10">
            {" "}
            ©2019–2022
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;

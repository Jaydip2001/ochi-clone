import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const controls = [useAnimation(), useAnimation()];

  const handleHoverStart = (index) => {
    controls[index].start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    });
  };

  const handleHoverEnd = (index) => {
    controls[index].start({
      y: 100,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeIn" },
    });
  };

  const projects = [
    {
      title: "FYDE",
      image: "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png",
      textClass: "left-full -translate-x-1/2",
    },
    {
      title: "VISE",
      image: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
      textClass: "right-full translate-x-1/2",
    },
  ];
motion //only for not getting error in code 
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className='text-8xl font-["Founders_Grotesk"] tracking-tight'>
          Featured project
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          {projects.map((project, index) => (
            <div key={index} className="relative w-1/2 h-[70vh]">
              {/* Animated Text Outside Card */}
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={controls[index]}
                className={`absolute ${project.textClass} top-1/2 -translate-y-1/2 z-10 text-[#CDEA68] text-6xl font-['Founders_Grotesk'] tracking-tight whitespace-nowrap pointer-events-none`}
              >
                {project.title.split("").map((char, i) => (
                  <motion.span key={i} className="inline-block mx-1">
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Card Container */}
              <motion.div
                className="w-full h-full rounded-xl"
                onHoverStart={() => handleHoverStart(index)}
                onHoverEnd={() => handleHoverEnd(index)}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={project.image}
                  alt={project.title}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;

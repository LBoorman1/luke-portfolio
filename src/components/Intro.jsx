import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Intro() {
  const fullName = "Luke Boorman.".split("");

  return (
    <div className="flex items-center justify-center text-center flex-col py-20 gap-20 md:flex-row bg-slate-blue w-full drop-shadow-2xl">
      <h1 className="font-extrabold text-6xl text-white">
        {fullName.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: i / 7,
            }}
            key={i}
          >
            {el}
            {""}
          </motion.span>
        ))}
      </h1>
      <img
        src="src\assets\profile_photo.JPG"
        className="w-48 h-48 rounded-full object-cover drop-shadow-xl"
      ></img>
      <a
        href="https://github.com/LBoorman1"
        target="_blank"
        rel="noopener noreferrer"
        className="self-center"
      >
        <FaGithub className="text-white self-center text-6xl transition-all ease-in-out hover:text-black" />
      </a>
    </div>
  );
}

export default Intro;

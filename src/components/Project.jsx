import React from "react";
import { FaGithub } from "react-icons/fa";
function Project({ title, description, githubLink, skills }) {
  return (
    <div className="flex flex-col w-full bg-white border-2 border-solid border-black rounded-lg">
      <div className="flex p-2">
        <h1 className="font-bold text-3xl self-center">{title}</h1>
        <div className="flex flex-col">
          <h2 className="px-5 font-bold text-xl">Tech Stack</h2>
          <ul className="list-disc px-10 font-semibold text-lg text-gray-700">
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>

        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="self-center">
          <FaGithub className="self-center w-36 text-6xl" />
        </a>
      </div>
      <div>
        <p className="font-semibold text-xl text-gray-700 p-2">{description}</p>
      </div>
    </div>
  );
}

export default Project;

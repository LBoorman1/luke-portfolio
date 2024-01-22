import React from "react";

function Education() {
  return (
    <div className="bg-periwinkle h-fit py-10 w-full">
      <h1 className="text-center font-bold text-4xl pb-5">Education</h1>
      <div className="flex flex-col md:grid md:grid-cols-2 h-full justify-center">
        <div className="bg-white rounded-lg border-2 border-solid mx-5 border-black h-full px-5 pb-10">
          <h1 className="text-center font-bold text-2xl py-5">
            University Of Warwick
          </h1>
          <h2 className="text-center font-bold text-xl">
            BSc Computer Systems Engineering (Hons)
          </h2>
          <h2 className="text-center font-bold text-lg">2:1</h2>
          <h2 className="px-5 font-bold text-xl">Key Modules</h2>
          <ul className="list-disc px-10">
            <li>Programming for Computer Scientists</li>
            <li>Design of Information Structures</li>
            <li>Comptuer Organisation and Architecture - Advanced COA</li>
            <li>Web Development Technologies</li>
            <li>Systems Modelling, Simulation and Computation</li>
            <li>Operating Systems and Computer Networks</li>
            <li>Database Systems & Advanced Database Systems with Big Data</li>
            <li>Software Engineering</li>
            <li>Neural Networks and Computing</li>
            <li>Signal Processing</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg border-2 border-solid mx-5 border-black h-fit px-5 pb-10 drop-shadow-2xl">
          <h1 className="text-center font-bold text-2xl py-5">
            Hertswood Academy
          </h1>
          <div className="grid grid-cols-2">
            <div className="justify-center">
              <h2 className="px-5 font-bold text-xl">A-levels</h2>
              <ul className="list-disc px-10">
                <li>Physics - A</li>
                <li>Mathematics - A</li>
                <li>Chemistry - A</li>
              </ul>
            </div>
            <div>
              <h2 className="px-5 font-bold text-xl">GCSEs</h2>
              <ul className="list-disc px-10">
                <li>12 GCSEs - (7-9)</li>
                <li>English - 7</li>
                <li>Mathematics - 9</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

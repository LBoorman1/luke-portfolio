import React from "react";
import { Carousel } from "flowbite-react";
import Project from "./Project";

function Projects() {
  const projectList = [
    {
      projectTitle: "Gym Social Network (Dissertation)",
      projectDescription:
        "I created a full stack social network from scratch using the MERN stack. This project was a part of my dissertation at university with the main goal being to create a social network with a less toxic atmosphere. The software was built with a React frontend using various libraries, an express backend and a Mongo Atlas database. Mongoose was used to connect the express backend to the database and allow for simple creation of documents and collections. This project was a steep learning curve for me as I needed to pitch the idea to my supervisor and take the full weight of the responsibility for the successful completion and polish of the software. During this project, I also honed my git and other project management skills to maintain thorough documentation whilst remaining in an agile workflow. Please see the github page for the source code and more information on the project.",
      githubLink: "https://github.com/LBoorman1/gym-social-network-react",
      skills: ["JavaScript", "React", "Express", "NodeJs", "MongoDB"],
    },
    {
      projectTitle: "Deutsche Bank Mentorship Software",
      projectDescription:
        "During my second year of university, I took part in a sponsored group project from Deutsche Bank. This project involved creating a full stack piece of software that would be used internally for employees to provide mentoring opportunities to other employees. As this was a group project, there were many challenges that I had not encountered before such as code reviews and sprint meetings, however, regular meetings with the clients allowed for this process to run smoothly and the group reviews were worth while. My focus on this project was mainly on the backend, creating a RESTful API and implementing customer requirements.",
      githubLink: "https://github.com/LBoorman1/PythonReactGroupProject",
      skills: ["Python", "Django", "React", "PostgreSQL", "Scrum Framework"],
    },
    {
      projectTitle: "Movie Database API",
      projectDescription:
        "In this group project, we had to create an API to interact with a sample movie database. Many requirements were given to us at the start of the project and we had to implement API methods to imlement them. My focus during this project was to take on difficult sections of the API specification during our sprint meetings to improve my Java and Spring proficiency. I was also heavily involved in writing unit tests and promoting a test driven environment.",
      githubLink: "https://github.com/LBoorman1/Spring-Mongo-API-Project",
      skills: ["Java", "Spring", "MongoDB", "RESTful API", "TDD"],
    },
    {
      projectTitle: "Python Reddit Sentiment Analysis",
      projectDescription:
        "This was a passion project based on my desire to learn more about AI and machine learning. I decided to create a sentiment analysis program that takes a search term and works out the general feeling around that search term in the r/politics sub-reddit. I believe this sort of program will be genuinely useful by providing statistics based on human readable data.",
      githubLink:
        "https://github.com/LBoorman1/Python-Reddit-Sentiment-Analysis",
      skills: ["Python", "External APIs", "AI", "Natural learning toolkit"],
    },
    {
      projectTitle: "Optimising algorithms in C",
      projectDescription:
        "This was a university project where I was given some source code and had to optimise the algorithms that performed matrix operations. This project allowed me to gain a deeper understanding of low-level programming languages and also compete with other students to gain the fastest compute time. I used techniques such as vector packing and loop unrolling to achieve a speedup on the initial runtime.",
      githubLink:
        "https://github.com/LBoorman1/Optimising_Algorithms_C/tree/main",
      skills: ["C", "Algorithms"],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-slate-blue w-full py-10">
      <h1 className="font-bold text-4xl text-white">Projects</h1>
      <div className="flex justify-center items-center h-[600px] w-[700px] mt-5">
        <Carousel
          pauseOnHover
          theme={{
            root: {
              base: "relative h-full w-full",
              leftControl:
                "absolute top-[300px] left-0 flex h-full items-center justify-center px-4 focus:outline-none",
              rightControl:
                "absolute top-[300px] right-0 flex h-full items-center justify-center px-4 focus:outline-none",
            },
            indicators: {
              active: {
                off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                on: "bg-white dark:bg-gray-800",
              },
              base: "h-3 w-3 rounded-full",
              wrapper:
                "absolute bottom-1 left-1/2 flex -translate-x-1/2 space-x-3",
            },
            item: {
              base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
              wrapper: {
                off: "w-full flex-shrink-0 transform cursor-default snap-center",
                on: "w-full flex-shrink-0 transform cursor-grab snap-center",
              },
            },
            control: {
              base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
              icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
            },
            scrollContainer: {
              base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg drop-shadow-xl",
              snap: "snap-x",
            },
          }}
        >
          {projectList.map((data) => (
            <Project
              title={data.projectTitle}
              description={data.projectDescription}
              githubLink={data.githubLink}
              skills={data.skills}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;

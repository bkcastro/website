import { FaGithub } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { SiGoogledocs } from "react-icons/si";
import { IoIosDocument } from "react-icons/io";
import React, { useState } from 'react';

function About() {
  return (
    <div className="p-2 rounded-md flex flex-col gap-2 bg-orange-500 w-full">
      <h2 className="text-2xl font-semibold">Brandon Castro</h2>
      <p>Interest in Software and XR development.</p>
      <p>Research assistant at UCSC Social Emotional Technology Lab, leading the development for
        a shared
        AR/VR tool for spatial scientific sense-making about wildfire evacuation.</p>
      <p>I love making 3D experinces on the web whenever I can.</p>
      <div>
        <p>Contact: c1brandon626@gmail.com</p>
      </div>
    </div>
  )
}

// Need to add scrollable feature
function Social() {
  return (
    <div className="flex justify-center gap-2 w-full">
      <a href="https://www.instagram.com/bkcastro_/" target="_blank"><CiInstagram size={"3em"} className="" /></a>
      <a href="https://www.tiktok.com/@liljgrem" target="_blank"><PiTiktokLogoLight size={"3em"} className="" /></a>
      <a href="https://github.com/bkcastro" target="_blank"><FaGithub size={"3em"} className="" /></a>
      <a href="https://www.linkedin.com/in/brandon-castro22/" target="_blank"><CiLinkedin size={"3em"} className="" /></a>
      <a href="https://drive.google.com/file/d/1ZocjuxDmLj-zX5D-iKOEHmXiIfEGVof0/view" target="_blank"><IoIosDocument size={"3em"} className="" /></a>
    </div>
  )
}

function Projects() {
  const [showAll, setShowAll] = useState(false); // State to control the display of projects

  const projects = [
    {
      title: "Generative Rasengan!",
      subtitle: "Three.js & WebXR Project",
      about: "Need I say more? Built a custom ransengan (an ability from the anime Naruto) generator that maps to the user’s palm, there is a user interface for desktop.",
      link: "https://chakra-me.vercel.app/",
      demo: "",
      tools: ["Three.js", "WebXR", "Vite", "Tailwind"],
    },
    {
      title: "Whatitis.Media",
      subtitle: "Media Agency Collaboration",
      about: "I was contracted to recreate their figma design and incorporate 3D animations.",
      link: "https://whatitis-media.vercel.app/",
      tools: ["ReactThreeFiber", "Blender", "React", "Vite", "Tailwind", "Vercel"]
    },
    {
      title: "Santa Cruz AI Club",
      subtitle: "Web Development",
      about: "Over the summer, I assisted in the revision of the club's website by adding new features such as a mailing list, schedule, and a 3D logo.",
      link: "https://www.santacruzai.com/",
      tools: ["ReactThreeFiber", "Blender", "React", "Next.js", "Tailwind", "Vercel"]
    },
    {
      title: "LeetMail",
      subtitle: "LeetCode Grind Optimization",
      about: "The LeetCode grind is real... Use this web application to set reminders via email to complete those questions! You can set a custom schedule and focus on topics you wish to learn.",
      link: "https://leetmail.onrender.com/",
      tools: ["Three.js", "Blender", "Node.js", "Express", "MongoDB", "Boostrap"]
    },
    {
      title: "Collection of Vision",
      subtitle: "Three.js Project",
      about: "First project with three.js showcasing interactive design only possible with the power of 3D graphics on the web.",
      link: "https://bkcastro.github.io/NFT-Collection-THREE-JS/",
      tools: ["Three.js", "Vite"],
    },
    {
      title: "Multi-threaded HTTP Server",
      subtitle: "System Design final Project",
      about: "This project was developed for my Systems Design class. It provided me with deep insights into abstraction principles, particularly in the context of establishing robust client/server architectures.",
      tools: ["C", "Linux", "Oracle VM"],
    },
    {
      title: "Spider Solitare",
      subtitle: "SFML card game",
      about: "During this project I learn how to handle user actions and properly sequence them. Also had fun with SFML ,developed a card making library that handles animations and interactions.",
      tools: ["C++", "SFML"],
    },

  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="p-2 rounded-md flex flex-col bg-red-500 w-full">
      <h2 className="text-2xl font-semibold text-stone-800">Projects</h2>
      <div className="flex flex-col gap-2">
        {displayedProjects.map((project, i) => (
          <div key={i} className="p-2 rounded-md shadow-md ">
            <div className="flex flex-row justify-between">
              <h3 className="text-xl font-semibold text-stone-800 w-fit">{project.title}</h3>
              {project.link && <a href={project.link} className="text-black underline hover:bg-black rounded-md italic w-fit" target="_blank">View project</a>}
            </div>
            <h2 className="text-md font-semibold text-stone-800">{project.subtitle}</h2>
            <p>{project.about}</p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span className="shadow-md rounded-md w-fit h-fit text-sm p-1">{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-4 px-4 py-2 w-fit mx-auto border border-black text-black rounded hover:bg-black"
      >
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}


function Skills() {
  return (
    <div className=""></div>
  )
}

function Home() {
  return (
    <div className="w-screen sm:w-[500px] sm:mx-auto flex flex-col items-center text-lg p-2 gap-2">
      <About />
      <Social />
      <Projects />
    </div>
  )
}

export default Home;
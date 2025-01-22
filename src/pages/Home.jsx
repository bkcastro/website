import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { IoIosDocument } from "react-icons/io";
import { IoLogoYoutube } from 'react-icons/io';
import { Link } from 'react-router-dom';
import me from '../assets/me.png';
import WebProjects from '../components/WebProjects';
import XRProjects from '../components/XRProjects';
import Art from '../components/Art';

// buy me a coffe: https://www.buymeacoffee.com/bkcastro

function Icons() {
  let icons = [
    { source: IoIosDocument, link: "https://drive.google.com/file/d/1ZocjuxDmLj-zX5D-iKOEHmXiIfEGVof0/view" },
    { source: FaGithub, link: "https://github.com/bkcastro" },
    { source: FaXTwitter, link: "https://x.com/lunch_number" }, // Corrected from FaXTwitter
    { source: CiLinkedin, link: "https://www.linkedin.com/in/brandon-castro22/" },
    { source: CiInstagram, link: "https://www.instagram.com/bkcastro_/" },
    // { source: IoLogoYoutube, link: "https://www.youtube.com/@Bkcastro"}
  ];

  return (
    <div className="flex flex-row justify-between gap-2 h-fit p-4">
      {icons.map((icon, i) => (
        <a key={i} href={icon.link} target="_blank" rel="noopener noreferrer">
          <icon.source size={30} className="hover:text-red-700 text-white" />
        </a>
      ))}
    </div>
  );
}


function Home() {
  return (
    <div className="bg-[#121212] text-white w-screen outer flex items-center justify-center">
      <div className="p-2 mt-3 rounded-sm inner w-[350px] sm:w-[500px] md:w-[600px] lg:w-[800px] max-w-[800px] transition-all duration-500 ease-in-out">
        <header className="flex flex-row gap-3 p-2">
          <img src={me} alt="logo" className="logo w-[100px] rounded-lg" />
          <div className='text-left flex flex-col justify-evenly h-[100px] '>
            <h1 className='text-xl'>Brandon Castro</h1>
            <p className='text-gray-300'>xr/web/game dev</p>
            <p>Vampire with computer</p>
          </div>
        </header>
        <Icons />
        <WebProjects/>
        <XRProjects/>
        <Art/>
      </div>
    </div>
  )
}

export default Home;
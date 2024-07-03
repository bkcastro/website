import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { IoIosDocument } from "react-icons/io";
import { Link } from 'react-router-dom';
import me from '../assets/me.jpg';

// buy me a coffe: https://www.buymeacoffee.com/bkcastro

function Icons() {
  let icons = [
    { source: FaGithub, link: "https://x.com/lunch_number" },
    { source: FaXTwitter, link: "https://x.com/lunch_number" }, // Corrected from FaXTwitter
    { source: CiLinkedin, link: "https://www.linkedin.com/in/brandon-castro22/" },
    { source: CiInstagram, link: "https://www.instagram.com/bkcastro_/" },
    { source: IoIosDocument, link: "https://drive.google.com/file/d/1ZocjuxDmLj-zX5D-iKOEHmXiIfEGVof0/view" }
  ];

  return (
    <div className="flex flex-row gap-2 h-fit p-4">
      {icons.map((icon, i) => (
        <a key={i} href={icon.link} target="_blank" rel="noopener noreferrer">
          <icon.source size={30} className="hover:text-black text-white" />
        </a>
      ))}
    </div>
  );
}

// art, projects, photography 
function Pages() {
  let pages = ['Photography', 'Projects', 'Art', 'XR'];

  return (
    <div className="flex flex-col justify-evenly items-center gap-2 w-full border-1">{
      pages.map((page, i) => (
        <Link to={page} className="text-white py-2 px-4 rounded-lg w-full text-center bg-opacity-80 bg-orange-500 hover:bg-red-500 transition duration-300"
        >{page}</Link>
      ))
    }</div>
  )
}

function Home() {
  return (
    <div className="bg-black text-white w-screen h-screen outer flex items-center justify-center">
      <div className="bg-opacity-20 p-2 rounded-sm inner w-fit">
        <header className="flex flex-col justify-center items-center">
          <img src={me} alt="logo" className="logo scale-60 rounded-lg" />
          <h1>brandon castro | xr dev</h1>
          <p>I love making stuff on the web using three.js and webxr</p>
          <a src="https://www.buymeacoffee.com/bkcastro" className="text-yellow-500 underline hover:text-red-500">buy me caffeine so I can keep coding!</a>
          <Icons />
        </header>
        <Pages />
      </div>
    </div>
  )
}

export default Home;
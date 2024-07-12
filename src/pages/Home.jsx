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
    { source: FaGithub, link: "https://github.com/bkcastro" },
    { source: FaXTwitter, link: "https://x.com/lunch_number" }, // Corrected from FaXTwitter
    { source: CiLinkedin, link: "https://www.linkedin.com/in/brandon-castro22/" },
    { source: CiInstagram, link: "https://www.instagram.com/bkcastro_/" },
    { source: IoIosDocument, link: "https://drive.google.com/file/d/1ZocjuxDmLj-zX5D-iKOEHmXiIfEGVof0/view" }
  ];

  return (
    <div className="flex flex-row justify-center items-center gap-2 h-fit p-4">
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
  let pages = ['Photography', 'Web Projects', 'XR Projects',];

  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full border-1">{
      pages.map((page, i) => (
        <Link key={i} to={page} className="text-white w-[200px] sm:w-[225px] md:w-[250px] py-2 px-4 rounded-lg text-center bg-opacity-80 bg-orange-500 hover:bg-red-500 transition duration-300"
        >{page}</Link>
      ))
    }</div>
  )
}

function Home() {
  return (
    <div className="bg-black text-white w-screen h-screen outer flex items-center justify-center text-center">
      <div className="bg-opacity-20 p-2 rounded-sm inner w-fit">
        <header className="flex flex-col justify-center items-centerp-2">
          <img src={me} alt="logo" className="logo w-[200px] sm:w-[225px] md:w-[250px] rounded-lg" />
          <h1 className='m-2 text-lg'>Brandon Castro | xr dev</h1>
          <p>I love making stuff on the web</p>

          <Icons />
        </header>
        <Pages />
      </div>
    </div>
  )
}

export default Home;
import { FaInstagram, FaGithub, FaTiktok } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

function About() {
  return (
    <div class="p-2 rounded-md flex flex-col gap-2 bg-orange-500 w-full">
      <h2 class="text-2xl font-semibold mb-3">Brandon Castro</h2>
      <p>Interest in Software and XR development.</p>
      <p class="">Research assistant at UCSC Social Emotional Technology Lab, leading the development for
        a shared
        AR/VR tool for spatial scientific sense-making about wildfire evacuation.</p>
      <p>I love making 3D experinces. </p>
      <p class="">Contact: c1brandon626@gmail.com</p>
    </div>
  )
}

// Need to add scrollable feature
function Social() {
  return (
    <div class="flex justify-start gap-2 w-full">
      <a href="https://www.instagram.com/bkcastro_/" target="_blank"><FaInstagram size={"4em"} className="bg-yellow-200 p-1 rounded-lg" /></a>
      <a href="https://github.com/bkcastro" target="_blank"><FaGithub size={"4em"} className="bg-white p-1 rounded-lg" /></a>
      <a href="https://www.linkedin.com/in/brandon-castro22/" target="_blank"><CiLinkedin size={"4em"} className="bg-blue-500 p-1 rounded-lg" /></a>
      <a href="https://www.tiktok.com/@liljgrem" target="_blank"><FaTiktok size={"4em"} className="bg-white p-1 rounded-lg" /></a>
    </div>
  )
}

function Projects() {

  const projects = [
    {
      title: "Santa Cruz AI Club",
      about: "Over the summer I was asked by a friend to help him revise the club's website by adding new features like a mailing list, schedule, and a new 3D logo."
    },
    {
      title: "Whatitis.Media",
      about: "I was contracted by this media agency to bring their website to life."
    },
    {
      title: "Collection of Vision",
      about: "First project with three.js showcasing interactive design."
    },
    {
      title: "ChakraMe",
      about: "Generative Rasengan!! Do I say any more? Build for the oculus quest 3 with webxr. I made a UI to desktop user too.",
    },

  ]
  return (
    <div class="p-2 rounded-md flex flex-col gap-2 bg-red-500 w-full">
      <h2 class="text-2xl font-semibold mb-3">Projects</h2>
      <div>
        {
          projects.map((project) => (Project(project)))
        }
      </div>
    </div>
  )
}

function Project(project) {
  return (
    <div class="p-2 rounded-md flex flex-col gap-2 bg-red-500 w-full">
      <h2 class="text-2xl font-semibold mb-3">{project.title}</h2>
      <hr class="w-full h-1 mx-auto bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <p>{project.about}</p>
    </div>
  )
}

function Home() {
  return (
    <div class="h-screen w-screen bg-black flex flex-col items-center text-lg p-2 gap-2">
      <About />
      <Social />
      <Projects />
    </div>
  )
}

export default Home;
import React from 'react';
import ProjectCard from './ProjectCard';

const data = [
    {
        title: 'LeetMail',
        link: 'https://leetmail.onrender.com/',
        demo: 'https://www.youtube.com/embed/UbPjxwSgKc4?si=wSYNiL4Rj9ocRYuq',
        about: 'Tool to help with leetcode grid.',
        tools: ['Node.js', 'MongoDB', 'Firebase', 'Bootstrap', 'Blender'],
    },
    {
        title: "EasyRoute",
        link: '',
        demo: 'https://www.youtube.com/embed/ese-omLCWaA?si=7ktnRAE706tNvcNy',
        about: 'Interactive 3D map of UCSC.',
        tools: ['Three.js', 'three-geo', 'OpenStreetService', 'OpenStreetMap', 'Mapbox'],
    },
    {
        title: 'UCSC AI Club Website',
        link: 'https://www.santacruzai.com/',
        demo: 'https://www.youtube.com/embed/Vgcje4-CeL4?si=Wbac2NZ7pssqEgE6',
        about: '',
        tools: ['React', 'React-Three-Fiber', 'Tailwind', 'Figma', 'Mailchimp', 'Blender'],
    },
    {
        title: 'Collection of Vision',
        link: 'https://bkcastro.github.io/NFT-Collection-THREE-JS/',
        demo: 'https://www.youtube.com/embed/KlETcUtCpQ8?si=iToW5Kk5WegxS6tV',
        about: '',
        tools: ['Three.js'],
    }
]

function WebProjects() {

    return (
        <div>
            <h1 className='text-xl text-center mt-2 mb-4'>Web Projects</h1>
            <div className="text-neutral-300 grid grid-cols-1 lg:grid-cols-2 mt-2 gap-4 justify-center w-fit mx-auto">
                {data.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default WebProjects;
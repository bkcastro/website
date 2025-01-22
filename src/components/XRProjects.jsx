import React from 'react';

import ProjectCard from './ProjectCard';

const data = [
    {
        link: 'https://xr-spells.vercel.app/',
        demo: 'https://www.youtube.com/embed/uosRV-sc_4I?si=j94xaVkgkMFd81Ct',
        features: [
            "Exteneded reality art made with three.js and webxr.", 
            "Programmed vr controller input which allows you to change art pieces.",
            "Works on desktop with mouse input."
        ],
        tools: ['Three.js', 'Webxr']
    },
    {
        link: 'https://chakra-me.vercel.app/',
        demo: 'https://youtube.com/embed/LmACPAzs7bE?si=98JJdoPkOBbQvhEC',
        features: [
            "Generative Rasengan allowing us to be like Naruto.",
        ],
        tools: ['Three.js', 'WebXR'],
    }
]


function XRProjects() {

    return (
        <div>
            <h1 className='text-center text-xl mt-2 mb-4'>XR Projects</h1>
            <div className="text-neutral-300 grid grid-cols-1 lg:grid-cols-4 gap-2 justify-center w-fit mx-auto">
            {data.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
        </div>
    )
}

export default XRProjects;
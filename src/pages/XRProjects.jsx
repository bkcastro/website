import React from 'react';

const data = [
    {
        title: 'xrSpells',
        link: 'https://xr-spells.vercel.app/',
        demo: 'https://www.youtube.com/embed/uosRV-sc_4I?si=j94xaVkgkMFd81Ct',
        about: 'Here are some of the stuff I have made.',
        features: [],
        tools: ['Three.js', 'Webxr']
    },
    {
        title: 'ChakraMe',
        link: 'https://chakra-me.vercel.app/',
        demo: 'https://youtube.com/embed/LmACPAzs7bE?si=98JJdoPkOBbQvhEC',
        about: 'Augmented Reality Generative Ransengan.',
        features: [
            'Ransengan is mapped to the users palm allowing them to play around like Naruto.',
        ],
        tools: ['Three.js', 'WebXR'],
    }
]

const ProjectCard = ({ project }) => {

    const renderDemoVideo = () => {
        if (!project.demo) return null;

        const videoId = project.demo.split('v=')[1];
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className="aspect-w-16 aspect-h-9 mt-3">
                <iframe
                    width="345"
                    height="200"
                    src={project.demo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Project Demo Video"
                    className=' rounded-md'
                ></iframe>
            </div>
        );
    };

    const renderTools = () => {
        return (
            <div className='flex flex-wrap gap-2 justify-start'>
                {project.tools.map((tool, index) => (
                    <div key={index} className="w-fit">{tool}</div>
                ))}
            </div>
        );
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 m-5 h-fit bg-neutral-800">
            <div className="text-neutral-300 font-bold text-xl mb-2">{project.title}</div>
            {project.link && <a href={project.link} className="text-red-500 hover:text-blue-800">Website</a>}
            <p className="text-white text-base">{project.about}</p>
            <ul className="list-disc ml-5 mt-3">
                {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <div className="font-semibold mt-4">Tools Used:</div>
            {renderTools()}
            {renderDemoVideo()}
        </div>
    );
};

function XRProjects() {

    return (<div className="text-neutral-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center w-fit mx-auto">
        {data.map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
    </div>)
}

export default XRProjects;
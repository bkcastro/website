import React from 'react';
import ProjectCard from './ProjectCard';

const data = [
    {
        title: 'LeetMail',
        link: 'https://leetmail.onrender.com/',
        demo: 'https://www.youtube.com/embed/UbPjxwSgKc4?si=wSYNiL4Rj9ocRYuq',
        about: 'Personalized LeetCode question scheduler.',
        features: [
            'Tailor questions by difficulty and topic.',
            'Receive questions via email on the days you schedule. ',
        ],
        tools: ['Node.js', 'MongoDB', 'Firebase', 'Bootstrap', 'Blender'],
    },
    {
        title: "EasyRoute",
        link: '',
        demo: 'https://www.youtube.com/embed/ese-omLCWaA?si=7ktnRAE706tNvcNy',
        about: 'Helps navigate the complex terrain at UCSC.',
        features: [
            'Routing between buildings is powered by OpenStreetService.',
            'Provides informative details of the route, such as directions, estimated time of arrival, and elevation data.',
            'Terrain is rendering using three-geo library.',
            'Interactive map is emplemented with vanilla javascript and three.js.'
        ],
        tools: ['Three.js', 'three-geo', 'OpenStreetService', 'OpenStreetMap', 'Mapbox'],
    },
    {
        title: 'Whatitis.Media Website',
        link: 'https://whatitis-media.vercel.app/',
        demo: 'https://www.youtube.com/embed/yAPijW3-VdA?si=S_NNLH_qimsh_ccg',
        about: 'Contracted to implement and create interactive art.',
        features: [
            'Multi-page website displaying information about the company.',
            'Interactive art pieces were modeled with blender and implemented with RTF.'
        ],
        tools: ['React', 'React-Three-Fiber', 'Tailwind', 'Figma', 'Blender'],
    },
    {
        title: 'UCSC AI Club Website',
        link: 'https://www.santacruzai.com/',
        demo: 'https://www.youtube.com/embed/Vgcje4-CeL4?si=Wbac2NZ7pssqEgE6',
        about: 'Worked on the development and deployment.',
        features: [
            'Stay up to date with our Newsletter.',
            'Informative timeline with resource links.',
        ],
        tools: ['React', 'React-Three-Fiber', 'Tailwind', 'Figma', 'Mailchimp', 'Blender'],
    },
    {
        title: 'Collection of Vision',
        link: 'https://bkcastro.github.io/NFT-Collection-THREE-JS/',
        demo: 'https://www.youtube.com/embed/KlETcUtCpQ8?si=iToW5Kk5WegxS6tV',
        about: 'First three.js project.',
        features: [
            'Each eyeball tracks the users mouse.',
        ],
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
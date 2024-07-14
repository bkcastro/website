import React from 'react';

const data = [
    {
        title: 'Bird Watching App',
        link: '',
        demo: 'https://www.youtube.com/embed/-0sv-UKEoFk?si=IG17CorFh_5em6b1',
        about: 'Web application group project on which I worked on the front page.',
        features: [
            'Efficiently displays over 10,000 bird sightings using heatmaps.',
            'Map with tools for querying information or filing a report.',
        ],
        tools: ['py4web', 'Leaflet', 'SQL', 'Bulma', 'Vue.js']
    },
    {
        title: "EasyRoute",
        link: '',
        demo: 'https://www.youtube.com/embed/ese-omLCWaA?si=7ktnRAE706tNvcNy',
        about: 'Helps navigate the complex terrain of UCSC campus.',
        features: [
            'Routing between buildings is powered by OpenStreetService.',
            'Provides informative details of the route, such as directions, estimated time of arrival, and elevation data.',
        ],
        tools: ['Three.js', 'OpenStreetService', 'OpenStreetMap', 'Mapbox'],
    },
    {
        title: 'Whatitis.Media Website',
        link: 'https://whatitis-media.vercel.app/',
        demo: 'https://www.youtube.com/embed/yAPijW3-VdA?si=S_NNLH_qimsh_ccg',
        about: 'Contracted to implement a website and create interactive art.',
        features: [
            'Multi-page website displaying information about the company.'
        ],
        tools: ['Vercel', 'React', 'RTF', 'Tailwind', 'Figma'],
    },
    {
        title: 'UCSC AI Club Website',
        link: 'https://www.santacruzai.com/',
        demo: 'https://www.youtube.com/embed/Vgcje4-CeL4?si=Wbac2NZ7pssqEgE6',
        about: 'Worked on the development and delpoyment.',
        features: [
            'Stay up to date with our Newsletter.',
            'Informative timeline of the quater with resource links.',
        ],
        tools: ['Vercel', 'React', 'RTF', 'Tailwind', 'Figma', 'Mailchimp'],
    },
    {
        title: 'LeetMail',
        link: 'https://leetmail.onrender.com/',
        demo: 'https://www.youtube.com/embed/UbPjxwSgKc4?si=wSYNiL4Rj9ocRYuq',
        about: 'Personalized LeetCode question scheduler.',
        features: [
            'Tailor questions by difficulty and topic.',
            'Receive questions via email on the days you schedule. ',
        ],
        tools: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'Bootstrap'],
    },
    {
        title: 'Collection of Vision',
        link: 'https://bkcastro.github.io/NFT-Collection-THREE-JS/',
        demo: 'https://www.youtube.com/embed/KlETcUtCpQ8?si=iToW5Kk5WegxS6tV',
        about: 'Fist three.js project.',
        features: [
            'Each eyeball tracks the users mouse.',
        ],
        tools: ['Three.js'],
    }
]


const ProjectCard = ({ project }) => {
    const renderImages = () => {
        if (project.images.length === 0) {
            return <div className="text-sm text-gray-500">No images available</div>;
        }

        return project.images.map((image, index) => (
            <img key={index} src={image} alt={`Preview ${index}`} className="w-full h-auto mt-2" />
        ));
    };

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

function WebProjects() {

    return (<div className="text-neutral-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-center w-fit mx-auto">
        {data.map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
    </div>)
}

export default WebProjects;
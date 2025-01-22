
export default function ProjectCard ({ project }) {

    const renderDemoVideo = () => {
        if (!project.demo) return null;

        const videoId = project.demo.split('v=')[1];
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;

        return (
            <iframe
            width="100"
            src={`${project.demo}?modestbranding=1&controls=2&showinfo=0&rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Project Demo Video"
            className='rounded-md mx-auto mb-2 w-full'
        ></iframe>
        );
    };

    const renderTools = () => {
        return (
            <div className='flex flex-wrap gap-2 justify-start mt-2'>
                {project.tools.map((tool, index) => (
                    index < (project.tools.length - 1) ? (
                        <div key={index} className="w-fit border-[1px] rounded-md p-1 border-white border-opacity-50">{tool},</div>
                    ) : <div key={index} className="w-fit border-[1px] rounded-md p-1 border-white border-opacity-50">{tool}</div>
                ))}
            </div>
        );
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-fit">
            {renderDemoVideo()}
            {project.link && <a href={project.link} className="text-red-700 hover:text-blue-800 underline">Link</a>}
            <ul className="list-disc ml-5 mt-3">
                {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <div className="font-semibold mt-4">Tools:</div>
            {renderTools()} 
        </div>
    );
};
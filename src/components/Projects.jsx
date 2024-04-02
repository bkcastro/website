const projects = [
    {title: 'whatitis-media', URL: '', link: 'https://whatitis-media.vercel.app/'}, 
    {title: 'XR Rasengan', info: 'customizable Rasengan that maps to your hand', link: 'https://chakra-me.vercel.app/'},
    {title: 'SCAI', info: 'UCSC AI Club website', link: "https://www.santacruzai.com/"}, 
    {title: 'LeetMail', info: 'personalized leetCode question scheduler via email', link: 'https://leetmail.onrender.com/', stack: [ 'Node.js', 'Expree.js', 'MongoDb'] },
]

function Projects() {

    return (
        <div className="h-fit w-screen bg-black text-white flex flex-col justify-start p-4 gap-2">
            <p className="text-4xl text-red-500 font-thin mt-[30px] ">Projects</p>
        {
            projects.map((project, index) => (
                <div key={index} className="flex gap-2">
                    <div className="w-[80px] h-[80px] bg-rose-700 "></div>
                    <div className=""> 
                        <p className="text-md font-thin">{project.title}</p>
                        <a className="text-sm text-red-500 underline" href={project.link}>Link</a>
                    </div>
                </div>
            ))
        }
        </div>
    );
}

export default Projects;

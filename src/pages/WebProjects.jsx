import React from 'react';

const projects = [
    {
        title: 'Whatitis.Media Website',
        link: 'https://whatitis-media.vercel.app/',
        about: 'Contracted to implemented website and create interactive art.',
        features: [
            'Multi-page website displaying information about the company.'
        ],
        tools: ['Vercel', 'React', 'React Three Fiber', 'Tailwind', 'Figma'],
        iamges: []
    },
    {
        title: 'UCSC AI Club Website',
        link: '',
        about: 'Worked on the development and delpoyment.',
        features: [
            'Stay up to date with our Newsletter.',
            'Informative timeline of the quater with resource links.',
        ],
        tools: ['Vercel', 'React', 'React Three Fiber', 'Tailwind', 'Figma', 'Mailchimp'],
        iamges: []
    },
    {
        title: 'ChakraMe',
        link: 'https://www.santacruzai.com/',
        about: 'Augmented Reality Generative Ransengan',
        features: [
            'Desktop version is available to play with differetn parameters',
            'User can enter AR mode which maps a Ransengan to the users palm allowing them to play around like Naruto.',
        ],
        tools: ['Three.js', 'WebXR', 'GLSL'],
        images: [

        ]
    },
    {
        title: 'WebGL Comptuer Graphics',
        link: '',
        about: 'Here are some projects made with webgl and javascript.',
        features: [
            'Editor which adds deletes and transforms objects..',
            'Cross examples uses functional programming to create objects.',
            'Polygon line editor to create volumes and some cool patterns.',
        ],
        tools: ['Javascript', 'WebGL', 'CSS'],
        images: [

        ]
    },
    {
        title: 'Server',
        link: '',
        about: 'Multi-threaded HTTP server for data transfer.',
        features: [
            'Built a bounded buffer with a reader and writer lock system to insure thread safty.',
        ],
        tools: ['C'],
        iamges: [],
    },
    {
        title: 'LeetMail',
        link: '',
        about: 'Personalized LeetCode question scheduler.',
        features: [
            'Tailor questions by difficulty and topic.',
            'Receive questions via email on the days you schedule. ',
        ],
        tools: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'Bootstrap'],
        images: [

        ]
    },
]

function WebProjects() {

    return (<div>

    </div>)
}

export default WebProjects;
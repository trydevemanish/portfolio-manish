import xmate from '@/public/xmate.png'
import buildHackathon from '@/public/buildyourhackathonteam.png'
import mindmap from '@/public/mindmap.png'
import project3 from "@/public/project3.png"
import { StaticImageData } from 'next/image'

// export type ProjectFieldType = {
//     id : number;
//     project : StaticImageData;
//     githubLink : string;    
//     altText : string;
//     title : string;
//     description : string;
// }

export type ProjectFieldType = {
  id: number;
  project: StaticImageData;
  githubLink: string;
  link: string;        // live / video link
  altText: string;
  title: string;
  description: string;
  linkLabel?: string;  // 'Live' | 'Video' — optional, defaults to 'Live'
}

const ProjectData = [
    {
        id : 1,
        project : xmate,
        githubLink : 'https://github.com/trydevemanish/xmate-frontend',
        altText : 'Github project',
        link : 'https://xmate-frontend.vercel.app/',
        title : 'Xmate',
        description : 'Built and Deployed a Real-time multiplayer chess platform where users can create a game and invite others via a shareable link.'
    },
    {
        id : 2,
        project : buildHackathon,
        githubLink : 'https://github.com/trydevemanish/buildhackathonteam',
        altText : 'Github project',
        link: 'https://buildhackathonteam.vercel.app/',
        title : 'BuildYourHackathonTeam',
        description : 'Platform where students can create hackathon teams and invite others to join, with lazy-loaded components for improved performance.'
    },
    {
        id : 3,
        project : project3,
        githubLink : 'https://github.com/trydevemanish/trackbite',
        altText : 'Personal Project',
        linkLabel: 'Video',
        link : 'https://drive.google.com/file/d/1zirwpdMHg1sHnqhyP1YyXwvHtXzCDHkr/view',
        title : 'trackbite',
        description : 'Built a mobile app that allows users to capture food image and automatically identify the food item using Clarafai Ai food detection model with 85% identification accuracy.'
    },
    {
        id : 4,
        project : mindmap,
        githubLink : 'https://github.com/trydevemanish/mindMap',
        altText : 'generateMindMap',
        link : 'https://genaratemindmap.vercel.app/',
        title : 'Generate Mindmap',
        description : 'Generate your mindmap with ease, try different variations of the mindmap.'
    },
]

export { 
    ProjectData
}
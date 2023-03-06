import { type IResume } from '~/components/Resume/Types';

import GithubIcon from '~/components/Icons/Github';
import YoutubeIcon from '~/components/Icons/Youtube';
import TelegramIcon from '~/components/Icons/Telegram';
import WhatsappIcon from '~/components/Icons/Whatsapp';
import InstagramIcon from '~/components/Icons/Instagram';

const Resume: IResume = {
    basics: {
        title: 'Sadra Shameli',
        role: 'Full-Stack Web & Embedded Engineer',
        email: 'sadra.shameli1@gmail.com',
        phone: '+31685156033',
        summary:
            'Hi, my name is Sadra Shameli.\n\nI am a Full-Stack & Embedded Engineer with two years of working experience, based in Rotterdam, the Netherlands. I use TypeScript, React and Next.js in my tech stack together with TailwindCSS, NextAuth.js, tRPC and Prisma to develop web applications. I am also experienced in Back-End Development with C# using ASP.NET, SQL Server. ',
        location: {
            title: 'Rotterdam - South Holland, The Netherlands',
            url: 'https://goo.gl/maps/v9asMxGqgKwcvwQw5',
        },
        profiles: [
            {
                title: 'Github',
                url: 'https://github.com/SadraShameli',
                icon: <GithubIcon />,
            },
            {
                title: 'Youtube',
                url: 'https://youtube.com/@sadrashameli',
                icon: <YoutubeIcon />,
            },
            {
                title: 'Telegram',
                url: 'https://t.me/sadrashameli',
                icon: <TelegramIcon />,
            },
            {
                title: 'Whatsapp',
                url: 'https://api.whatsapp.com/send/?phone=31685156033',
                icon: <WhatsappIcon />,
            },
            {
                title: 'Instagram',
                url: 'https://www.instagram.com/sadra_shml',
                icon: <InstagramIcon />,
            },
        ],
    },
    skills: [
        {
            title: 'Development Skills',
            keywords: [
                ['HTML5', 'CSS3'],
                ['TypeScript', 'JavaScript (ES6)'],
                ['React', 'Prisma'],
                ['Next.js', 'NextAuth'],
                ['TailwindCSS', 'DaisyUI', 'MaterialUI'],
                ['SQL Server', 'PostgreSQL'],
                ['tRPC', 'REST'],
            ],
        },
        {
            title: 'Personal Skills',
            keywords: [['Patience'], ['Empathy'], ['Flexibility'], ['Teamwork'], ['Self-Awareness'], ['Open-Mindedness'], ['Fast-Paced'], ['Problem Solving']],
        },
        {
            title: 'Interests',
            keywords: [['Robotics'], ['Programming'], ['Photography'], ['Guitar'], ['Hyper Cars']],
        },
    ],
    works: [
        {
            role: 'Software Engineer',
            date: 'Jan 2022 - Present',
            title: 'Blue Star Planning',
            url: 'https://bluestarplanning.com',
            location: {
                title: 'Rotterdam, The Netherlands',
                url: 'https://goo.gl/maps/v9asMxGqgKwcvwQw5',
            },
            summary: 'Blue Star Planning is specialized in the development and realization of Advanced Planning and Scheduling systems.',
            highlights: [
                'Developed various IoT devices and 3D printing the casing. Intended to gather various data, such as sound recordings, loudness, temperature and humidity, air quality and RPM values. The sound recording go through IIR second-order section filtering and A-Weighting before saving. The devices are placed at different locations in Rotterdam.',
                'Developed the back-end to process the data gathered by the devices and developed the front-end at https://geluidsvervuiling.eu, where the sound recordings and loudness values are available depending on the device and the location.',
            ],
            skills: ['TypeScript', 'React', 'ASP.NET'],
        },
    ],
    projects: [
        {
            title: 'Project A.I.',
            date: 'Sep 2022 - Dec 2022',
            url: 'https://github.com/SadraShameli/ProjectAI',
            summary: 'Autonomous self-driving robot based on camera vision and lidar.',
            highlights: [
                'Fully autonomous driving without any input from the user',
                'Ability to manually control using a PS4 or PS5 controller',
                'Making use of the well-proven machine learning library TensorFlow',
                'Using threads and thread pooling for every core functionality',
            ],
            skills: ['Python', 'C++', '3D Printing'],
        },
        {
            title: 'Partify',
            date: 'Jan 2023 - Present',
            url: 'https://github.com/SadraShameli/Partify',
            summary: 'Online e-commerce store',
            skills: ['TypeScript', 'React', 'Next.js', 'NextAuth.js', 'Prisma', 'tRPC'],
        },
    ],
    educations: [{ title: 'Grotius College', date: 'Sep 2020, Present', url: 'https://www.grotiuscollege.nl', role: 'VWO - N&T', summary: '' }],
    languages: [
        {
            language: 'English',
            fluency: 'Full Professional Proficiency',
        },
        {
            language: 'Dutch',
            fluency: 'Full Professional Proficiency',
        },
        {
            language: 'Persian',
            fluency: 'Native speaker',
        },
    ],
};

export default Resume;

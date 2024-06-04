import GithubIcon from '~/components/ui/Icons/Github';
import InstagramIcon from '~/components/ui/Icons/Instagram';
import WhatsAppIcon from '~/components/ui/Icons/WhatsApp';
import YoutubeIcon from '~/components/ui/Icons/Youtube';

import { CalculateAge, type IResume } from './types';

const ResumeSadra: IResume = {
  title: 'Sadra',
  description: 'Futures & crypto trader, developer',
  basics: {
    title: 'Sadra Shameli',
    firstName: 'Sadra',
    lastName: 'Shameli',
    email: 'sadra.shameli1@gmail.com',
    phone: '+31 06 85156033',
    birth: 'Dec 2003',
    age: CalculateAge(new Date('2003-12-11')),
    summary: `Full-stack developer with 3 years of experience. Skilled in TypeScript, React and Next.js together with tRPC, Prisma, Drizzle and NextAuth for building type-safe apps. Skilled in TailwindCSS, Material UI and Framer Motion for making great looking UI. I am also experienced in building IoT devices.`,
    location: {
      title: 'Rijswijk - The Netherlands',
      url: '',
    },
  },
  profiles: [
    {
      title: 'Youtube',
      url: 'https://youtube.com/@sadrashameli',
      icon: <YoutubeIcon />,
    },
    {
      title: 'Github',
      url: 'https://github.com/SadraShameli',
      icon: <GithubIcon />,
    },
    {
      title: 'WhatsApp',
      url: 'https://wa.me/+31685156033',
      icon: <WhatsAppIcon />,
    },
    {
      title: 'Instagram',
      url: 'https://instagram.com/sadra_shml',
      icon: <InstagramIcon />,
    },
  ],
  links: [
    { title: 'sadra.nl', url: 'https://sadra.nl' },
    { title: 'Github', url: 'https://github.com/sadrashameli' },
    { title: 'Youtube', url: 'https://youtube.com/@sadrashameli' },
    { title: 'Linkedin', url: 'https://linkedin.com/in/sadrashameli' },
  ],
  skills: [
    'TypeScript ••• React ••• Next.js',
    'Tailwind CSS ••• Framer Motion',
    'tRPC ••• Drizzle & Prisma ••• NextAuth',
    'PostgreSQL ••• SQL Server',
    '3D Modeling & Printing',
    'ASP.NET ••• Entity Framework',
  ],
  education: [
    {
      title: 'VWO - N&T, Grotius College',
      date: 'Sep 2020 - Aug 2023',
      location: { title: 'Delft', url: '' },
      url: 'https://www.grotiuscollege.nl',
    },
  ],
  research: [],
  experience: [
    {
      title: 'Full-stack & IoT - Blue Star Planning',
      date: 'Dec 2021 - Jan 2023 · 1 yr 1 mo',
      location: {
        title: 'Rotterdam',
        url: 'https://goo.gl/maps/v9asMxGqgKwcvwQw5',
      },
      url: 'https://bluestarplanning.com',
      summary:
        'Blue Star Planning is specialized in the development and realization of Advanced Planning and Scheduling systems.',
      highlights: [
        'Developed various IoT devices including 3D printing. Intended to gather various data, such as sound recordings, loudness, temperature and humidity, air quality and RPM values. The devices are placed at different locations in The Netherlands.',
        'Developed the back-end to process the data gathered by the devices as well as the front-end, where the sound recordings and loudness values are available.',
      ],
      skills: [
        'React ••• TypeScript ••• Material UI ••• ASP.NET ••• SQL Server',
      ],
    },
    {
      title: 'Salesman - Gamma',
      date: 'May 2021 - Dec 2022 · 1 yr 8 mos',
      location: {
        title: 'Den Haag',
        url: 'https://maps.app.goo.gl/xWFe1zER9cE8RKBg9',
      },
      url: 'https://gamma.nl/',
    },
    {
      title: 'Salesman - Hoogvliet',
      date: 'Sep 2021 - Mar 2022 · 7 mos',
      location: {
        title: 'Rijswijk',
        url: 'https://maps.app.goo.gl/AUQwbGpcZDWswzLHA',
      },
      url: 'https://hoogvliet.com',
    },
    {
      title: "Delivery Driver - Domino's",
      date: 'Jul 2020 - Dec 2020 · 6 mos',
      location: {
        title: 'Rijswijk',
        url: 'https://maps.app.goo.gl/EDxYvZddBXw17z7V8',
      },
      url: 'https://dominos.nl/',
    },
  ],
  projects: [
    {
      title: 'Project A.I.',
      date: 'Sep 2022 - Dec 2022',
      url: 'https://github.com/SadraShameli/ProjectAI',
      summary:
        'Autonomous self-driving robot based on camera vision and lidar.',
      role: 'Self Driving Robot',
      highlights: [
        'Fully autonomous driving without any input from the user',
        'Ability to manually control using a PS5 or PS4 controller',
        'Utilizing the TensorFlow machine learning library',
        'Using multithreading for every core functionality',
      ],
      skills: ['3D Printing ••• Machine Learning ••• Cpp ••• Python'],
    },
  ],
  languages: [
    {
      title: 'English',
      fluency: 'Full Professional Proficiency',
    },
    {
      title: 'Dutch',
      fluency: 'Full Professional Proficiency',
    },
    {
      title: 'Persian',
      fluency: 'Native speaker',
    },
  ],
  hobbies: ['Programming', 'Robotics', 'Photography', 'Guitar', 'Cars'],
  cover: `Dear Sir / Madam,

I am writing this to apply for the position Backend Developer at Skoon.

Upon reading the job description, I noticed that you are looking for a candidate that is able to build and maintain a backend written in React.js and .NET Core.

As a candidate with experience in backend development in both React.js and .NET Core at a business level, I am positive that I would be great fit for the role.

During my working period at Blue Star Planning BV, I was in charge of a full-stack project where I designed IoT devices, followed by a backend using ASP.NET and Entity Framework to process and store the data, to eventually creating a frontend for displaying the data.

As a personal project, I then migrated the backend to fully use React.js and Drizzle since it was more cost-effective. This is available at my website: https://sadra.nl

Thank you for your time and consideration. I am looking forward to hearing from you regarding the next steps in the application process.

Best regards,
Sadra Shameli`,
};

export default ResumeSadra;

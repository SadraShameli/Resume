import { type IResume } from '~/types/ResumeTypes';

const Resume: IResume = {
    basics: {
        title: 'Sadra Shameli',
        function: 'Full-Stack Web & Embedded Developer',
        summary:
            'Hi, my name is Sadra Shameli.\n\nI am a Full-Stack & Embedded Developer with two years of working experience, based in Rotterdam, the Netherlands. I use TypeScript, React and Next.js in my tech stack together with TailwindCSS, tRPC and Prisma to develop web applications. I am also experienced in Back-End Development with C# using ASP.NET, SQL Server.',
        url: 'https://leonard.sh',
        image: 'https://leonard.sh/images/me.png',
        email: 'sadra.shameli1@gmail.com',
        location: {
            address: 'Rotterdam',
            postalCode: '3076',
            city: 'Rotterdam',
            region: 'South Holland',
            countryCode: 'NL',
            country: 'The Netherlands',
        },
        profiles: [
            {
                network: 'GitHub',
                username: 'leonardssh',
                url: 'https://github.com/leonardssh',
            },
            {
                network: 'LinkedIn',
                url: 'https://www.linkedin.com/in/leonardssh/',
                username: 'leonardssh',
            },
            {
                network: 'Twitter',
                url: 'https://twitter.com/leonardssh22',
                username: 'leonardssh22',
            },
            {
                network: 'Instagram',
                username: 'leonardssh22',
                url: 'https://www.instagram.com/leonardssh22/',
            },
        ],
    },
    skills: [
        {
            keywords: [
                {
                    name: 'HTML5',
                    wakatime: 'HTML',
                    group: 0,
                },
                {
                    name: 'CSS3',
                    wakatime: 'CSS',
                    group: 0,
                },
                {
                    name: 'JavaScript (ES6)',
                    wakatime: 'JavaScript',
                    group: 1,
                },
                {
                    name: 'TypeScript',
                    wakatime: 'TypeScript',
                    group: 1,
                },
                {
                    name: 'Vue',
                    wakatime: 'Vue.js',
                    group: 2,
                },
                {
                    name: 'React',
                    group: 2,
                },
                {
                    name: 'Angular',
                    group: 2,
                },
                {
                    name: 'TailwindCSS',
                    group: 3,
                },
                {
                    name: 'SASS',
                    wakatime: 'SCSS',
                    group: 3,
                },
            ],
            level: 'Intermediate',
            name: 'Front-End',
        },
        {
            keywords: [
                {
                    name: 'Node.js',
                    group: 4,
                },
                {
                    name: 'Express',
                    group: 4,
                },
                {
                    name: 'MongoDB',
                    group: 5,
                },
                {
                    name: 'MySQL',
                    wakatime: 'SQL',
                    group: 5,
                },
                {
                    name: 'GraphQL',
                    group: 6,
                },
                {
                    name: 'REST',
                    group: 6,
                },
            ],
            level: 'Intermediate',
            name: 'Back-End',
        },
        {
            keywords: [
                {
                    name: 'Patience',
                },
                {
                    name: 'Empathy',
                },
                {
                    name: 'Flexibility',
                },
                {
                    name: 'Teamwork',
                },
                {
                    name: 'Self-Awareness',
                },
                {
                    name: 'Open-Mindedness',
                },
                {
                    name: 'Fast-Paced',
                },
                {
                    name: 'Problem Solving',
                },
            ],
            name: 'Personal Skills',
        },
        {
            keywords: [
                {
                    name: 'Video games',
                },
                {
                    name: 'Cars',
                },
                {
                    name: 'Tech Industry',
                },
                {
                    name: 'New Technologies',
                },
            ],
            name: 'Interests',
        },
    ],
    work: [
        {
            name: 'Blue Star Planning',
            position: 'Software Engineer',
            url: 'https://bluestarplanning.com/',
            location: 'Rotterdam Area, Netherlands',
            startDate: {
                year: 2022,
                month: 9,
            },
            summary: 'A company that specializes in the development and realization of Advanced Planning and Scheduling systems.',
            highlights: [
                'Improved the efficiency and effectiveness of the development process by introducing Vite and Vitest, resulting in a more streamlined and enjoyable experience for developers.',
                'Contributed to a team effort to maintain and rewrite 70% of the entire codebase using a custom MVC architecture, resulting in improved performance and scalability of the application.',
                'Designed and implemented multiple visual elements for the web application based on UI/UX design, improving the overall user experience and aesthetic appeal of the application.',
                'Participated in agile development processes, including daily stand-ups, sprint planning, and retrospectives, to ensure that the team was meeting project goals and deadlines.',
            ],
            skills: ['TypeScript', 'React', 'Microsoft Azure'],
        },
    ],
    projects: [
        {
            name: 'VSCord',
            description: 'Visual Studio Code Extension',
            startDate: {
                year: 2020,
                month: 1,
            },
            url: 'https://github.com/leonardssh/vscord',
            summary: 'A fully-featured customizable Visual Studio Code extension to get Discord Rich Presence integration.',
            highlights: [
                'Improved upon existing solutions on the market, resulting in over 700K downloads of the extension on Visual Studio Marketplace in a short period of time.',
                'Collaborated with other open-source contributors to add new features and fix issues, resulting in a better user experience for users of the extension.',
                'Developed and maintained documentation for the extension, including installation instructions, usage guides, and troubleshooting tips, to help users get the most out of the extension.',
                "Monitored and responded to user feedback and reviews, implementing suggestions and fixes to improve the extension's functionality and user experience.",
            ],
            skills: ['TypeScript', 'VSCode API', 'Discord API'],
        },
        {
            name: 'Liberty Multiplayer',
            description: 'Videogame Modification',
            url: 'https://liberty.mp/',
            startDate: {
                year: 2022,
                month: 5,
            },
            summary: 'A small project related to a videogame modification server for Grand Theft Auto V.',
            highlights: [
                'Worked with a team of three developers to strong-type the entire codebase using TypeScript, resulting in improved code quality and maintainability.',
                "Improved the web application's response time by 40% by implementing a more efficient approach to rendering components using Angular.",
                'Designed and implemented multiple visual elements for the web application based on UI/UX design, enhancing the overall user experience and aesthetic appeal of the application.',
                'Worked closely with the team to ensure that project goals and deadlines were met, using effective project management and communication strategies.',
            ],
            skills: ['TypeScript', 'Angular', 'Node.js', 'TailwindCSS'],
        },
    ],
    volunteer: [
        {
            organization: 'InversifyJS',
            position: 'Open Source - Maintainer',
            url: 'https://inversify.io/',
            startDate: {
                year: 2021,
                month: 3,
            },
            summary: 'A powerful and lightweight inversion of control container for JavaScript & Node.js apps powered by TypeScript.',
            highlights: [
                'Improved the quality of the product by 10% through comprehensive documentation, code reviews, and unit testing.',
                'Collaborated with the maintainer team to implement new features and resolve issues, resulting in improved user satisfaction.',
                'Attracted over 600K weekly downloads on NPM, demonstrating the popularity and success of the product.',
            ],
            skills: ['TypeScript', 'Dependency Injection (DI)', 'Inversion of Control (IoC)'],
        },
    ],
    education: [
        {
            institution: 'Technical College "Alexe Marin"',
            area: 'Automotive Mechanics',
            url: 'https://ctamslatina.ro/',
            startDate: {
                year: 2016,
                month: 9,
            },
            endDate: {
                year: 2019,
                month: 7,
            },
            description:
                'Completed a degree in automotive mechanics from a mechanical college with 100/100 points, gaining expertise in vehicle maintenance, repair, and troubleshooting.',
        },
    ],
    certificates: [
        {
            name: 'Web Administrator',
            startDate: {
                year: 2020,
                month: 8,
            },
            issuer: 'Formacion Universitaria',
            url: 'https://formacionuniversitaria.com/',
            summary: 'Obtained a certificate in web design (HTML, CSS), JavaScript, and page administration through the successful completion of a course.',
        },
    ],
    languages: [
        {
            language: 'Romanian',
            fluency: 'Native speaker',
        },
        {
            language: 'English',
            fluency: 'Intermediate',
        },
        {
            language: 'Spanish',
            fluency: 'Intermediate',
        },
    ],
};

export default Resume;

import GmailIcon from '~/components/ui/Icons/Gmail';
import WhatsAppIcon from '~/components/ui/Icons/WhatsApp';

import { type IResume } from './types';

const ResumeAliakbar: IResume = {
  title: '',
  description: '',
  basics: {
    title: 'Aliakbar Shameli',
    firstName: 'َAliakbar',
    lastName: 'Shameli',
    email: 'aliakbar.shameli@gmail.com',
    phone: '+31 06 41906161',
    birth: '27/01/1972',
    summary: '',
    location: {
      title: 'Rijswijk, The Netherlands',
      url: '',
    },
  },
  profiles: [
    {
      title: 'WhatsApp',
      url: 'https://wa.me/+31641906161',
      icon: <WhatsAppIcon />,
    },
    {
      title: 'Gmail',
      url: 'mailto:aliakbar.shameli@gmail.com',
      icon: <GmailIcon />,
    },
  ],
  links: [],
  skills: [],
  education: [
    {
      title: 'Bachelor in pure chemistry, Shahid Beheshti university of Iran',
      date: 'June 1992 - May 1996',
      url: 'https://en.sbu.ac.ir/',
    },
    {
      title: 'Master in physical chemistry, Ferdowsi university of Iran',
      date: 'June 1996 - Aug 1999',
      url: 'https://en.um.ac.ir/',
    },
  ],
  research: [
    {
      title: 'Phase Transfer Catalyst',
      date: '1997 - 1999',
      summary: `Research on the effect of ultrasonic waves on the kinetics of chemical reactions in two-phase systems. Reactions between two different phases are usually slow and ineffective. The Phase Transfer Catalyst (PTC) technique provides a powerful alternative to the usual methods for conducting this kind of reactions. The purpose of our research was to study the effect of ultrasonic waves on three different heterogeneous systems: 
      
      1. Cannizzaro Reaction catalyzed by phase transfer catalyst
      2. The saponification of some vegetable oils
      3. The lsomerization of Maleic to Fumaric acid

      The results showed that the ultrasonic waves has dramatically accelerates on the mentioned reactions and can be used instead of PTC under same specific conditions.`,
    },
    {
      title: 'Sonochemistry',
      date: 'late 1999',
      summary: 'Presenting an ISI article related to sonochemistry',
    },
    {
      title: 'Research activities',
      date: '2000 - 2003',
      summary: 'Conducting research activities in the science faculty',
    },
    {
      title: 'Chemical laboratories',
      date: '2004 - 2019',
      summary:
        'Head of chemical laboratories in food industry and drug production company in Iran.',
    },
  ],
  experience: [],
  projects: [],
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
  hobbies: [],
};

export default ResumeAliakbar;

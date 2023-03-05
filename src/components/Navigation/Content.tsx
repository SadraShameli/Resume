import { type INavItem } from './Types';

import GithubIcon from '../Icons/Github';
import YoutubeIcon from '../Icons/Youtube';
import WhatsappIcon from '../Icons/Whatsapp';
import TelegramIcon from '../Icons/Telegram';
import InstagramIcon from '../Icons/Instagram';

export const SocialIcons: INavItem[] = [
    {
        title: 'Github',
        url: 'https://youtube.com/@sadrashameli',
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
];

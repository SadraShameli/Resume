import Head from 'next/head';

import { SocialIcons } from '~/components/Navigation/Content';
import MainPage, { type IMainPageProps } from '~/components/Home/MainPage';

export default function Home() {
    return (
        <>
            <Head>
                <title>Sadra S. | Resume</title>
                <meta name='description' content='Resume of Sadra Shameli, Full-stack & embedded developer' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <MainPage {...mainPageProps} />
        </>
    );
}

const mainPageProps: IMainPageProps = {
    title: 'Sadra Shameli',
    description: 'Full-Stack Web & Embedded Developer',
    socialIcons: SocialIcons,
};

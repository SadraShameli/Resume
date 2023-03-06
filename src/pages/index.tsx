import Head from 'next/head';

import Resume from '~/components/Resume/Resume';
import MainPage from '~/components/Home/MainPage';

export default function Home() {
    return (
        <>
            <Head>
                <title>{Resume.title}</title>
                <meta name='description' content={Resume.description} />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <MainPage {...Resume} />
        </>
    );
}

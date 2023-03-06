import Head from 'next/head';

import Resume from '~/components/Resume/Resume';
import MainPage from '~/components/Home/MainPage';

export default function Home() {
    return (
        <>
            <Head>
                <title>Sadra S. | Resume</title>
                <meta name='description' content='Resume of Sadra Shameli, Full-stack & embedded developer' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <MainPage {...Resume} />
        </>
    );
}

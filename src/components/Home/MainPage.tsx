import Link from 'next/link';
import Image from 'next/image';
import { type INavItem } from '../Navigation/Types';

export interface IMainPageProps {
    title: string;
    description: string;
    socialIcons: INavItem[];
}

export default function MainPage(props: IMainPageProps) {
    return (
        <main className='m-16 grid'>
            <div className='flex flex-col items-center justify-between lg:flex-row'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='relative mx-auto h-28 w-28 lg:h-20 lg:w-20'>
                        <Image className='rounded' src='/static/img/me.jpg' alt='Profile picture' quality={100} priority fill />
                    </div>

                    <div className='mt-5 text-center lg:my-auto lg:ml-5 lg:pt-0 lg:text-left'>
                        <h1 className='text-3xl font-bold'>{props.title}</h1>
                        <span>{props.description}</span>
                    </div>
                </div>

                <div className='mt-6 flex items-center justify-center gap-x-3'>
                    {props.socialIcons.map((value, index) => {
                        return (
                            <Link className='h-6 w-6' href={value.url} title={value.title} key={index}>
                                {value.icon}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}

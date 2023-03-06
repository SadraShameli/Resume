import Link from 'next/link';
import Image from 'next/image';

import { type IResumeSection, type IResume } from '../Resume/Types';
import MapIcon from '../Icons/Map';
import StackIcon from '../Icons/Stack';
import WorkBagIcon from '../Icons/WorkBag';
import CalendarIcon from '../Icons/Calendar';
import EducationIcon from '../Icons/Education';

export default function MainPage(resume: IResume) {
    return (
        <main className='m-5 max-w-3xl lg:m-16'>
            <div className='flex flex-col items-center justify-between lg:flex-row'>
                <div className='flex flex-col lg:flex-row'>
                    <div className='relative mx-auto h-28 w-28 lg:h-20 lg:w-20'>
                        <Image className='rounded' src='/static/img/me.jpg' alt='Profile picture' quality={100} priority fill />
                    </div>

                    <div className='mt-5 text-center lg:my-auto lg:ml-5 lg:pt-0 lg:text-left'>
                        <h1 className='text-3xl font-semibold'>{resume.basics.title}</h1>
                        <span>{resume.basics.role}</span>
                    </div>
                </div>

                <div className='mt-6 flex items-center justify-center gap-x-3'>
                    {resume.basics.profiles.map((profile, index) => {
                        return (
                            <Link className='h-6 w-6 hover:text-hover' href={profile.url} title={profile.title} key={index}>
                                {profile.icon}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className='mt-16 space-y-6 divide-y'>
                <GenerateResumeSection title='Work' icon={<WorkBagIcon className='h-10 w-10' />} section={resume.works} />

                <GenerateResumeSection title='Projects' icon={<StackIcon className='h-10 w-10' />} section={resume.projects} />

                <GenerateResumeSection title='Education' icon={<EducationIcon className='h-10 w-10' />} section={resume.educations} />
            </div>
        </main>
    );
}

function GenerateResumeSection({ title, icon, section }: { title: string; icon: JSX.Element; section: IResumeSection[] }) {
    return (
        <div>
            <div className='mb-6 flex items-center pt-6'>
                {icon}
                <h2 className='ml-3 text-xl font-bold'>{title}</h2>
            </div>

            <div className='space-y-5'>
                {section.map((work, index) => {
                    return (
                        <div className='text-sm' key={index}>
                            <div className='text-base'>
                                <Link className='border-b border-dashed font-semibold hover:border-hover hover:text-hover dark:border-white' href={work.url}>
                                    {work.title}
                                </Link>
                                {work.role && <span>, {work.role}</span>}
                            </div>

                            <div className='mt-2 flex flex-wrap gap-y-2 gap-x-5'>
                                {work.location && (
                                    <Link className='flex items-center hover:text-hover' href={work.location.url}>
                                        <MapIcon className='h-5 w-5' />
                                        <span className='ml-1'>{work.location.title}</span>
                                    </Link>
                                )}

                                <div className='flex items-center'>
                                    <CalendarIcon className='h-5 w-5' />
                                    <span className='ml-1'>{work.date}</span>
                                </div>
                            </div>

                            <p className='mt-3'>{work.summary}</p>

                            {work.highlights && (
                                <ul className='mt-2 space-y-3 text-justify'>
                                    {work.highlights.map((highlight, index) => {
                                        return (
                                            <li className='flex' key={index}>
                                                <svg className='h-5 w-5 flex-shrink-0' viewBox='0 0 48 48' fill='currentColor'>
                                                    <circle cx='24' cy='12' r='3' />
                                                    <circle cx='24' cy='24' r='3' />
                                                    <circle cx='24' cy='35' r='3' />
                                                </svg>
                                                {highlight}
                                            </li>
                                        );
                                    })}
                                </ul>
                            )}

                            {work.skills && (
                                <div className='mt-3 flex'>
                                    <span>Skills:</span>
                                    <ul className='ml-1 flex'>
                                        {work.skills?.map((skill, index) => {
                                            return (
                                                <li key={index}>
                                                    {skill}
                                                    {work.skills?.length && index < work.skills.length - 1 && '·'}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

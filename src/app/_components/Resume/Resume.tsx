import { ChevronRight } from 'lucide-react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import {
  type IResume,
  type IResumeLanguage,
  type IResumeSection,
} from '~/data/Resume/types';

export default function GenerateResume({
  resume,
  profilePicture,
}: {
  resume: IResume;
  profilePicture: StaticImageData;
}) {
  return (
    <div className="mx-auto my-10 grid w-[210mm] gap-y-10 rounded-2xl border p-10 print:my-0 print:border-none">
      <div className="absolute -z-50 mx-auto h-[500px] w-[210mm] bg-gradient-to-r from-orange-200 via-blue-200 to-fuchsia-200 opacity-50 blur-3xl saturate-50" />
      <div className="grid grid-cols-6">
        <div className="col-span-2 flex justify-end pr-14">
          <Image
            className=" size-32 rounded-full object-cover"
            src={profilePicture}
            alt="Profile picture"
          />
        </div>

        <div className="col-span-4 space-y-10">
          <div className="grid gap-y-1 text-xs text-muted">
            <span>{resume.basics.location.title}</span>
            <span>
              {resume.basics.phone} - {resume.basics.email}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-black">
              {resume.basics.title}
            </h1>
            <h2 className="text-justify font-semibold">
              {resume.basics.summary}
            </h2>
          </div>
        </div>
      </div>

      <GenerateSection
        title="Details"
        items={[
          { title: `Driver's license`, item: 'Yes' },
          { title: 'Date of birth', item: resume.basics.birth },
        ]}
      />

      {resume.links.length ? (
        <GenerateSection
          title="Links"
          links={resume.links.map((link) => link.url)}
        />
      ) : null}

      {resume.skills.length ? (
        <GenerateSection title="Skills" skills={resume.skills} />
      ) : null}

      {resume.education.length ? (
        <GenerateSection title="Education" education={resume.education} />
      ) : null}

      {resume.research.length ? (
        <GenerateSection title="Research" research={resume.research} />
      ) : null}

      {resume.experience.length ? (
        <GenerateSection title="Experience" experience={resume.experience} />
      ) : null}

      {resume.projects.length ? (
        <GenerateSection title="Projects" projects={resume.projects} />
      ) : null}

      {resume.languages.length ? (
        <GenerateSection title="Languages" languages={resume.languages} />
      ) : null}

      {resume.hobbies.length ? (
        <GenerateSection title="Hobbies" hobbies={resume.hobbies} />
      ) : null}
    </div>
  );
}

function GenerateSection({
  title,
  items,
  links,
  skills,
  education,
  research,
  experience,
  projects,
  languages,
  hobbies,
}: {
  title: string;
  items?: { title: string; item: string }[];
  links?: string[];
  skills?: string[];
  education?: IResumeSection[];
  research?: IResumeSection[];
  experience?: IResumeSection[];
  projects?: IResumeSection[];
  languages?: IResumeLanguage[];
  hobbies?: string[];
}) {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2 mr-14">
        <h3 className="text-right text-sm text-muted">{title}</h3>
      </div>
      <div className="col-span-4 grid items-center">
        <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-xs">
          {items?.map((item, key) => (
            <div className="flex gap-x-3" key={key}>
              <h4 className="whitespace-nowrap">{item.title}</h4>
              <hr className="my-auto h-1 w-full rounded border-0 bg-neutral-400" />
              <h4 className="font-semibold">{item.item}</h4>
            </div>
          ))}
          {links?.map((link, key) => (
            <div className="flex gap-x-3" key={key}>
              <Link
                className="border-b border-dashed border-neutral-400 font-semibold"
                href={link}
              >
                {link}
              </Link>
            </div>
          ))}
          {skills?.map((skill, key) => (
            <div className="flex gap-x-3" key={key}>
              <h3 className="font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
        <div className="grid gap-10">
          {education?.map((education, key) => (
            <div key={key}>
              <h3 className="text-lg font-semibold">{education.title}</h3>
              <span className="text-xs font-semibold text-muted">
                {education.date}
                {education.location ? `, ${education.location.title}` : null}
              </span>
            </div>
          ))}
        </div>
        <div className="grid gap-10">
          {research?.map((research, key) => (
            <div key={key}>
              <h3 className="text-lg font-semibold">{research.title}</h3>
              <span className="text-xs font-semibold text-muted">
                {research.date}
                {research.location ? `, ${research.location.title}` : null}
              </span>
              <p className="whitespace-pre-line pt-2 text-justify">
                {research.summary}
              </p>
            </div>
          ))}
        </div>
        <div className="grid gap-10">
          {experience?.map((experience, key) => (
            <div key={key}>
              <h3 className="text-lg font-semibold">{experience.title}</h3>
              <span className="text-xs font-semibold text-muted">
                {experience.date}
                {experience.location ? `, ${experience.location.title}` : null}
              </span>
              <p className="whitespace-pre-line pt-2 text-justify">
                {experience.summary}
              </p>
              <ul className="mt-2 grid gap-y-3">
                {experience?.highlights?.map((highlight, index) => {
                  return (
                    <li className="flex text-justify" key={index}>
                      <div className="mr-1 mt-[2px]">
                        <ChevronRight className="size-5" />
                      </div>
                      {highlight}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid gap-10">
          {projects?.map((project, key) => (
            <div key={key}>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="text-xs font-semibold text-muted">
                {project.date}
                {project.location ? `, ${project.location.title}` : null}
              </span>
              <p className="whitespace-pre-line pt-2 text-justify ">
                {project.summary}
              </p>
              <ul className="mt-2 grid gap-y-3">
                {project?.highlights?.map((highlight, index) => {
                  return (
                    <li className="flex text-justify" key={index}>
                      <div className="mr-1 mt-[2px]">
                        <ChevronRight className="size-5" />
                      </div>
                      {highlight}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-10">
          {languages?.map((language, key) => (
            <div key={key}>
              <h3 className="font-semibold">{language.title}</h3>
              <span className="text-xs">{language.fluency}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-y-2">
          {hobbies?.map((hobby, key) => (
            <div key={key}>
              <h3 className="font-semibold">{hobby}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

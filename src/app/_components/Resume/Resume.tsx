import { Link as LucideLink } from 'lucide-react';
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
  showCover,
}: {
  resume: IResume;
  profilePicture: StaticImageData;
  showCover?: boolean;
}) {
  if (showCover === true && !resume.cover?.length) showCover = false;

  return (
    <div className="mx-auto w-[210mm]">
      <div className="absolute -z-50 h-[500px] w-[210mm] bg-gradient-to-r from-orange-200 via-blue-200 to-fuchsia-200 opacity-50 blur-3xl saturate-50" />
      <div className="my-10 grid gap-y-5 rounded-2xl border p-10 text-sm print:my-0 print:border-none">
        <div className="grid grid-cols-7">
          <div className="col-span-2 flex justify-end pr-14">
            <Image
              className="size-32 rounded-full object-cover"
              src={profilePicture}
              alt="Profile picture"
              quality={100}
            />
          </div>

          <div className="col-span-5 space-y-10">
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
              {!showCover ? (
                <h2 className="text-justify font-semibold">
                  {resume.basics.summary}
                </h2>
              ) : null}
            </div>
          </div>
        </div>

        {showCover ? (
          <GenerateSection title="Cover Letter" cover={resume.cover} />
        ) : (
          <>
            <GenerateSection
              title="Details"
              items={[
                { title: `Driver license`, item: 'Yes' },
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
              <GenerateSection
                title="Experience"
                experience={resume.experience}
              />
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
          </>
        )}
      </div>
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
  cover,
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
  cover?: string;
}) {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-2 mr-14">
        <h3 className="text-right text-xs font-semibold text-muted">{title}</h3>
      </div>

      <div className="col-span-5 flex flex-col justify-center">
        <section className="grid grid-cols-2 items-center gap-x-5 gap-y-2 text-xs">
          {items?.map((item, key) => (
            <div className="flex items-center gap-x-3" key={key}>
              <h4 className="whitespace-nowrap">{item.title}</h4>
              <hr className="h-1 w-full rounded border-0 bg-neutral-400" />
              <h4 className="whitespace-nowrap font-semibold">{item.item}</h4>
            </div>
          ))}

          {links?.map((link, key) => (
            <div className="flex items-center gap-x-3" key={key}>
              <Link
                className="border-b border-dashed border-neutral-400 font-semibold"
                href={link}
              >
                {link}
              </Link>
            </div>
          ))}

          {skills?.map((skill, key) => (
            <div className="flex items-center gap-x-3" key={key}>
              <h3 className="font-semibold">{skill}</h3>
            </div>
          ))}
        </section>

        {education ? (
          <section className="grid items-center gap-5">
            {education.map((education, key) => (
              <div key={key}>
                <h3 className="text-lg font-semibold leading-none">
                  {education.title}
                </h3>

                <div className="mt-1 text-xs font-semibold">
                  <div className="flex justify-between">
                    <span>{education.role}</span>
                    <span className="flex justify-end">{education.date}</span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    {education.url ? (
                      <div className="mt-1 flex items-center gap-x-1">
                        <LucideLink className="size-3" />
                        <Link
                          className="border-b border-dashed border-neutral-400 font-semibold"
                          href={education.url}
                        >
                          {education.url}
                        </Link>
                      </div>
                    ) : null}
                    {education.location ? (
                      <span>{education.location.title}</span>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </section>
        ) : null}

        {research ? (
          <div className="grid gap-5 tracking-tight">
            {research.map((research, key) => (
              <section key={key}>
                <h3 className="text-lg font-semibold leading-none">
                  {research.title}
                </h3>

                <span className="mt-1 text-xs font-semibold text-muted">
                  {research.date}
                  {research.location ? `, ${research.location.title}` : null}
                </span>

                <p className="whitespace-pre-line pt-2 text-justify">
                  {research.summary}
                </p>
              </section>
            ))}
          </div>
        ) : null}

        {experience ? (
          <div className="grid gap-y-5 tracking-tight">
            {experience.map((experience, key) => (
              <section key={key}>
                <h3 className="text-lg font-semibold leading-none">
                  {experience.title}
                </h3>

                <div className="mt-1 text-xs font-semibold">
                  <div className="flex justify-between">
                    <span>{experience.role}</span>
                    <span className="flex justify-end">{experience.date}</span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    {experience.url ? (
                      <div className="mt-1 flex items-center gap-x-1">
                        <LucideLink className="size-3" />
                        <Link
                          className="border-b border-dashed border-neutral-400 font-semibold"
                          href={experience.url}
                        >
                          {experience.url}
                        </Link>
                      </div>
                    ) : null}
                    {experience.location ? (
                      <span>{experience.location.title}</span>
                    ) : null}
                  </div>
                </div>

                <p className="whitespace-pre-line pt-2 text-justify">
                  {experience.summary}
                </p>

                <div className="pl-4">
                  {experience.highlights?.length ? (
                    <ul className="mt-2 list-disc space-y-1">
                      {experience.highlights.map((highlight, index) => {
                        return (
                          <li className="text-justify" key={index}>
                            {highlight}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </div>

                {experience.skills?.length ? (
                  <div className="mt-3 flex items-center text-xs font-semibold">
                    <span>Skills:</span>
                    <ul className="ml-2">
                      {experience.skills.map((skill, index) => {
                        return <li key={index}>{skill}</li>;
                      })}
                    </ul>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        ) : null}

        {projects ? (
          <div className="grid gap-5 tracking-tight">
            {projects.map((project, key) => (
              <section key={key}>
                <h3 className="text-lg font-semibold leading-none">
                  {project.title}
                </h3>

                <div className="mt-1 text-xs font-semibold">
                  <div className="flex justify-between">
                    <span>{project.role}</span>
                    <span className="flex justify-end">{project.date}</span>
                  </div>

                  <div className="flex items-baseline justify-between">
                    {project.url ? (
                      <div className="mt-1 flex items-center gap-x-1">
                        <LucideLink className="size-3" />
                        <Link
                          className="border-b border-dashed border-neutral-400 font-semibold"
                          href={project.url}
                        >
                          {project.url}
                        </Link>
                      </div>
                    ) : null}
                    {project.location ? (
                      <span>{project.location.title}</span>
                    ) : null}
                  </div>
                </div>

                <p className="whitespace-pre-line pt-2 text-justify">
                  {project.summary}
                </p>

                <div className="pl-4">
                  {project.highlights?.length ? (
                    <ul className="mt-2 list-disc space-y-1">
                      {project.highlights.map((highlight, index) => {
                        return (
                          <li className="text-justify" key={index}>
                            {highlight}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </div>

                {project.skills?.length ? (
                  <div className="mt-3 flex items-center text-xs font-semibold">
                    <span>Skills:</span>
                    <ul className="ml-2">
                      {project.skills.map((skill, index) => {
                        return <li key={index}>{skill}</li>;
                      })}
                    </ul>
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        ) : null}

        {languages?.length ? (
          <div className="flex justify-between">
            {languages.map((language, key) => (
              <section key={key}>
                <h3 className="font-semibold">{language.title}</h3>

                <span className="text-xs">{language.fluency}</span>
              </section>
            ))}
          </div>
        ) : null}

        {hobbies?.length ? (
          <section className="grid grid-cols-2 gap-y-2">
            {hobbies.map((hobby, key) => (
              <section key={key}>
                <h3 className="font-semibold leading-none">{hobby}</h3>
              </section>
            ))}
          </section>
        ) : null}

        <p className="whitespace-pre-wrap text-justify">{cover}</p>
      </div>
    </div>
  );
}

'use client';

import ProfilePictureSadra from '~/assets/sadra.jpg';
import ResumeSadra from '~/data/Resume/Sadra';

import ProfilePictureAliakbar from '~/assets/aliakbar.jpg';
import ResumeAliakbar from '~/data/Resume/Aliakbar';

import GenerateResume from '../../_components/Resume/Resume';
import { useSearchParams } from 'next/navigation';

export default function Page({ params }: { params: { name: string } }) {
  const searchParams = useSearchParams();
  const showCover = searchParams.get('cover');

  return (
    <main>
      {params.name === 'sadra' ? (
        <GenerateResume
          resume={ResumeSadra}
          profilePicture={ProfilePictureSadra}
          showCover={showCover ? true : false}
        />
      ) : null}

      {params.name === 'aliakbar' ? (
        <GenerateResume
          resume={ResumeAliakbar}
          profilePicture={ProfilePictureAliakbar}
          showCover={showCover ? true : false}
        />
      ) : null}
    </main>
  );
}

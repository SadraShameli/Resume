import ProfilePicture from '~/assets/sadra.jpg';
import ResumeSadra from '~/data/Resume/Sadra';

import GenerateResume from '../_components/Resume/Resume';

export default function Page() {
  return (
    <main>
      <GenerateResume resume={ResumeSadra} profilePicture={ProfilePicture} />
    </main>
  );
}

import ProfilePicture from '~/assets/aliakbar.jpg';
import ResumeAliakbar from '~/data/Resume/Aliakbar';

import GenerateResume from '../_components/Resume/Resume';

export default function Page() {
  return (
    <main>
      <GenerateResume resume={ResumeAliakbar} profilePicture={ProfilePicture} />
    </main>
  );
}

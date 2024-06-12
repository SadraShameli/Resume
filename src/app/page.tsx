'use client';

import Link from 'next/link';
import { useId, useState } from 'react';
import { Checkbox } from '~/components/ui/checkbox';

export default function HomePage() {
  const [useCover, setUseCover] = useState(false);
  const checkboxId = useId();

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <Link
        className="border-b border-dashed border-black"
        href={'/resume/sadra' + (useCover ? '?cover=true' : '')}
      >
        Sadra
      </Link>
      <Link
        className="border-b border-dashed border-black"
        href={'/resume/aliakbar' + (useCover ? '?cover=true' : '')}
      >
        Aliakbar
      </Link>

      <div className="flex items-center space-x-2">
        <Checkbox
          id={checkboxId}
          onCheckedChange={(checked: boolean) => setUseCover(checked)}
        />
        <label
          htmlFor={checkboxId}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Cover Letter
        </label>
      </div>
    </main>
  );
}

import Link from 'next/link';

export default async function HomePage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <Link className="border-b border-dashed border-black" href={'/sadra'}>
        Sadra
      </Link>
      <Link className="border-b border-dashed border-black" href={'/aliakbar'}>
        Aliakbar
      </Link>
    </main>
  );
}

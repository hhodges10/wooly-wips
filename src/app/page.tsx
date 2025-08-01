import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Link
      href="/projects"
      className="flex flex-col items-center justify-center min-h-screen p-8 gap-8"
    >
      <Image
        src="/vercel.svg"
        alt="Logo"
        width={128}
        height={128}
        className="animate-spin-slow"
      />
      <h1 className="text-5xl font-bold text-center">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-center max-w-xl">
        Explore my projects and learn more about what I do. Click the logo to
        see my projects.
      </p>
    </Link>
  );
}

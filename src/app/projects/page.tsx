import Button from '@/_components/ui/button';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Projects Page</h1>
        <p className="text-lg text-center sm:text-left">
          This is the projects page. You can list your projects here.
        </p>
        <Link href="/projects/1">
          <Button>View Project 1</Button>
        </Link>
      </main>
    </div>
  );
}

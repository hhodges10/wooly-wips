import Button, { ButtonSize } from '@/_components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <Link
      href="/projects"
      className="flex flex-col items-center justify-center min-h-screen p-8 gap-8"
    >
      <h1 className="text-5xl font-bold text-center">Wooly WIPs</h1>
      <p className="text-xl text-center max-w-xl">
        Explore my projects and learn more about what I do. Click the button to
        see my projects.
      </p>
      <Button size={ButtonSize.large}>View Projects</Button>
    </Link>
  );
}

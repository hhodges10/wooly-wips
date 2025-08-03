'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button, { ButtonVariant } from './button';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    {
      href: '/projects',
      name: 'Projects',
    },
    {
      href: '/yarn',
      name: 'Yarn',
    },
  ];
  return (
    <nav className="w-full bg-bone border-b-2 border-mint/40 px-8 py-4 fixed z-50 grid grid-cols-2 items-center">
      <div className="flex items-center justify-start gap-8">
        <Link href="/">
          <h1 className="text-2xl">Wooly WIPs</h1>
        </Link>
        <div className="space-x-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:bg-mint-light px-3 py-2 rounded-md font-medium ${
                pathname === link.href ? 'bg-mint-light' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-x-2 flex items-center justify-end">
        <Button variant={ButtonVariant.primaryGhost}>Login</Button>
        <Button variant={ButtonVariant.primarySolid}>Sign Up</Button>
      </div>
    </nav>
  );
}

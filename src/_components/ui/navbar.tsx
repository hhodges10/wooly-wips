'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button, { ButtonVariant } from './button';

const hoverUnderline =
  'pb-1 bg-left-bottom bg-gradient-to-r from-text/60 to-text/60 bg-[length:0%_1.5px] bg-no-repeat group-hover:bg-[length:100%_1.5px] transition-all duration-500 ease-out';

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
      <div className="flex items-center justify-start gap-12">
        <Link href="/">
          <h1 className="text-3xl">Wooly WIPs</h1>
        </Link>
        <div className="space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group transition-all duration-300 ease-in-out text-lg font-medium"
            >
              <span
                className={`${
                  pathname === link.href
                    ? 'pb-1 bg-bottom bg-gradient-to-r from-text/60 to-text/60 bg-[length:100%_1.5px] bg-no-repeat'
                    : hoverUnderline
                }`}
              >
                {link.name}
              </span>
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

import * as React from 'react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full flex flex-wrap justify-between items-center">
      <h3 className="text-xl font-medium">Beta Students</h3>

      <nav>
        <ul className="flex gap-2">
          <li>
            <Link href={'/courses'} className="underline underline-offset-2">
              courses
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';

const HairAndWigs: React.FC = () => {
  return (
    <header className="bg-amber-400 border-b-2 border-black text-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lananz Beauty</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-500">
                Services
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HairAndWigs;

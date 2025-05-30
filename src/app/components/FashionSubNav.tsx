'use client';

import Link from 'next/link';
import { categories } from '@/data/categories';

const FashionSubNav = () => {
  return (
    <nav className="section_nav flex justify-center w-full h-10">
      <ul className="flex w-full md:w-2/3 justify-between text-black h-full mx-4">
        {categories.fashion.map((subcategory) => (
          <li
            key={subcategory}
            className="flex items-center text-xs md:text-base h-full hover:text-amber-400 uppercase"
          >
            <Link href={`/fashion/${subcategory.toLowerCase()}`}>{subcategory}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FashionSubNav;


			
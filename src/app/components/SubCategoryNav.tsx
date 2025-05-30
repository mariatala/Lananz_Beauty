'use client';

import Link from 'next/link';
import { categories } from '@/data/categories';

interface Props {
  section: keyof typeof categories; // 'fashion' | 'makeup' | 'hair_and_wigs'
}

const SubcategoryNav: React.FC<Props> = ({ section }) => {
  const items = categories[section];

  if (!items) {
    console.error(`Invalid section '${section}' passed to SubcategoryNav`);
    return null;
  }

  return (
    <nav className="section_nav flex  justify-center w-full h-10 shadow-md bg-white hover:text-amber-500 transition-colors duration-200">
      <ul className="flex w-full md:w-2/3 justify-between text-black h-full mx-4">
        {items.map((subcategory) => (
          <li
            key={subcategory}
            className="flex items-center text-xs md:text-base h-full hover:text-amber-400 transition-colors duration-200"
          >
            <Link href={`/${section}/${subcategory.toLowerCase().replace(/\s+/g, '_')}`}>
              {subcategory}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default SubcategoryNav;

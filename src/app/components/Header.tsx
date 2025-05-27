import React from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { Tangerine } from 'next/font/google';

const tangerine = Tangerine({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--geist-font',
});

const Header: React.FC = () => {
	return (
		<header className="bg-white shadow-md">
			<nav className="logo_nav py-1 px-4 md:px-16 bg-black text-white border-b-2 border-amber-400">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center space-x-4">
      {/* Logo and Title */}
      <a href="/">
        <Image
          src="/Logo.jpg"
          alt="Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </a>

      <h1
        className={`${tangerine.className} hidden md:block text-4xl font-bold`}
      >
        <a href="/" target="_blank" rel="noopener noreferrer">
          Lananz Beauty
        </a>
      </h1>
    </div>

    {/* Nav Items */}
    <nav className="main_nav h-full flex items-center">
      <ul className="flex w-fit flex-row space-x-6 items-center">
        <li className="hover:text-amber-500">
          <a href="/about">About</a>
        </li>
        <li className="hover:text-amber-500">
          <a href="/contacts">Contact Us</a>
        </li>
        <li className="flex items-center space-x-2 group">
          <a href="/services" className="group-hover:text-amber-500">
            <ShoppingCart />
          </a>
          <a href="/services" className="hover:text-gray-500">
            Cart
          </a>
        </li>
      </ul>
    </nav>
  </div>
</nav>

			<nav className="sections_nav w-full h-10">
				{' '}
				{/* Set a fixed height */}
				<ul className="flex justify-center bg-gray-100 w-full h-full">
					<li className="flex-1 flex items-center justify-center h-full bg-[#F8EFE4] hover:bg-amber-400 border-r-2 border-black uppercase">
						<a href="/make_up">Make Up</a>
					</li>
					<li className="flex-1 flex items-center justify-center h-full bg-[#F8EFE4] hover:bg-amber-400 border-r-2 border-black uppercase">
						<a href="/hair_and_wigs">Hair and Wigs</a>
					</li>
					<li className="flex-1 flex items-center justify-center h-full bg-[#F8EFE4] hover:bg-amber-400 uppercase">
						<a href="/products">Fashion</a>
					</li>
				</ul>
			</nav>
			<nav className="section_nav flex justify-center  w-full h-10">
				<ul className="flex w-2/3 justify-between  text-black h-full">
					<li className="flex items-center h-full hover:text-amber-400">
						<a href="/make_up">Latest</a>
					</li>
					<li className="flex items-center h-full hover:text-amber-400">
						<a href="/hair_and_wigs">Dresses</a>
					</li>
					<li className="flex items-center h-full hover:text-amber-400">
						<a href="/products">Tops</a>
					</li>
					<li className="flex items-center h-full hover:text-amber-400">
						<a href="/make_up">Bottoms</a>
					</li>
					<li className="flex items-center h-full hover:text-amber-400">
						<a href="/hair_and_wigs">Outwear</a>
					</li>
					<li className="flex items-center h-full hover:text-amber-400">
						<a href="/products">Reviews</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default Header;

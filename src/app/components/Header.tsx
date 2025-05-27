'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
						<Link href="/">
							<Image
								src="/Logo.jpg"
								alt="Logo"
								width={80}
								height={80}
								className="object-contain"
							/>
						</Link>

						<h1
							className={`${tangerine.className} hidden md:block text-4xl font-bold`}
						>
							<Link href="/">Lananz Beauty</Link>
						</h1>
					</div>

					{/* Nav Items */}
					<nav className="main_nav h-full flex items-center">
						<ul className="flex w-fit flex-row space-x-6 items-center">
							<li className="hover:text-amber-500">
								<Link href="/about">About</Link>
							</li>
							<li className="hover:text-amber-500">
								<Link href="/contacts">Contact Us</Link>
							</li>
							<li className="flex items-center space-x-2 group">
								<Link href="/services" className="group-hover:text-amber-500">
									<ShoppingCart />
								</Link>
								<Link href="/services" className=" hidden md:block hover:text-gray-500">
									Cart
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</nav>

			<nav className="sections_nav w-full h-8 md:h-10">
				<ul className="flex justify-center bg-gray-100 w-full h-full">
					<li className="flex-1 flex items-center justify-center h-full  text-balance bg-[#F8EFE4] hover:bg-amber-400 border-r-1 md:border-r-2 border-black uppercase text-xs md:text-base">
						<Link href="/make_up">Make Up</Link>
					</li>
					<li className="flex-1 flex items-center justify-center h-full text-balance bg-[#F8EFE4] hover:bg-amber-400 border-r-1 md:border-r-2 border-black uppercase text-xs md:text-base">
						<Link href="/hair_and_wigs">Hair and Wigs</Link>
					</li>
					<li className="flex-1 flex items-center justify-center h-full  bg-[#F8EFE4] hover:bg-amber-400 uppercase text-xs md:text-base">
						<Link href="/products">Fashion</Link>
					</li>
				</ul>
			</nav>

			<nav className="section_nav flex justify-center w-full h-10">
				<ul className="flex w-full md:w-2/3 justify-between text-black h-full mx-4">
					<li className="flex items-center text-xs md:text-base h-full hover:text-amber-400">
						<Link href="/make_up">Latest</Link>
					</li>
					<li className="flex items-center  text-xs md:text-base h-full hover:text-amber-400">
						<Link href="/hair_and_wigs">Dresses</Link>
					</li>
					<li className="flex items-center  text-xs md:text-base h-full hover:text-amber-400">
						<Link href="/products">Tops</Link>
					</li>
					<li className="flex items-center  text-xs md:text-base h-full hover:text-amber-400">
						<Link href="/make_up">Bottoms</Link>
					</li>
					<li className="flex items-center  text-xs md:text-base h-full hover:text-amber-400">
						<Link href="/hair_and_wigs">Outwear</Link>
					</li>
					<li className="flex items-center  text-xs md:text-base h-full hover:text-amber-400">
						<Link href="/products">Reviews</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

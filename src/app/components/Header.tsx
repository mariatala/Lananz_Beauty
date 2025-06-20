'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import {  MonteCarlo } from 'next/font/google';

const monteCarlo = MonteCarlo({
	subsets: ['latin'],
	weight: ['400'],
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
							className={`${monteCarlo.className} hidden md:block text-2xl font-bold`}
						>
							<Link href="/">La Nanz</Link>
						</h1>
					</div>

					{/* Nav Items */}
					<nav className="main_nav h-full flex items-center">
						<ul className="flex w-fit flex-row space-x-6 items-center">
							<li className="hover:text-amber-400">
								<Link href="/about">About</Link>
							</li>
							<li className="hover:text-amber-400">
								<Link href="/contacts">Contact Us</Link>
							</li>
							<li className="flex items-center space-x-2 group">
								<Link href="/services" className="group-hover:text-amber-400">
									<ShoppingCart />
								</Link>
								<Link
									href="/services"
									className=" hidden md:block hover:text-gray-500"
								>
									Cart
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</nav>

			<nav className="sections_nav w-full h-8 md:h-10">
				<ul className="flex justify-center bg-gray-100 w-full h-full">
					<li className="flex-1 flex items-center justify-center h-full  text-balance bg-[#F8EFE4] hover:bg-amber-400 border-r-1 md:border-r-2 border-black uppercase text-xs md:text-base  font-medium">
						<Link
							href="/make_up"
							className="h-full w-full  flex items-center justify-center"
						>
							Make Up
						</Link>
					</li>
					<li className="flex-1 flex items-center justify-center h-full text-balance bg-[#F8EFE4] hover:bg-amber-400 border-r-1 md:border-r-2 border-black uppercase text-xs md:text-base font-medium">
						<Link
							href="/hair_and_wigs"
							className="h-full w-full  flex items-center justify-center"
						>
							Hair and Wigs
						</Link>
					</li>
					<li className="flex-1 flex items-center justify-center h-full  bg-[#F8EFE4] hover:bg-amber-400 uppercase text-xs md:text-base  font-medium">
						<Link
							href="/fashion"
							className="h-full w-full  flex items-center justify-center"
						>
							Fashion
						</Link>
					</li>
				</ul>
			</nav>

			{/* <nav className="section_nav flex justify-center w-full h-10">
				<ul className="flex w-full md:w-2/3 justify-between text-black h-full mx-4">
					<li className="flex items-center text-xs md:text-base h-full hover:text-amber-400">
						<Link href="/fashion/Latest">Latest</Link>
					</li>
					<li className="flex items-center  text-xs md:text-base h-full hover:text-amber-400">
						<Link href="/fashion/Dresses">Dresses</Link>
					</li>
					<li className="flex items-center  text-xs md:text-base h-full hover:text-amber-400">
						<Link href="/fashion/Tops">Tops</Link>
					</li>
					<li className="flex items-center  text-xs md:text-base h-full hover:text-amber-400">
						<Link href="/fashion/Bottoms">Bottoms</Link>
					</li>
					<li className="flex items-center  text-xs md:text-base h-full hover:text-amber-400">
						<Link href="/fashion/Outwear">Outwear</Link>
					</li>
					<li className="flex items-center  text-xs md:text-base h-full hover:text-amber-400">
						<Link href="/fashion/Accessories">Accessories</Link>
					</li>
				</ul>
			</nav> */}
		</header>
	);
};

export default Header;

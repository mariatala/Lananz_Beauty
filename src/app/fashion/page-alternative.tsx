'use client';

import React from 'react';
import Link from 'next/link';
import { categories } from '@/data/categories';
import SubcategoryNav from '@/app/components/SubCategoryNav';
import { Cormorant_Garamond, Poppins, Tangerine } from 'next/font/google';
const cormorant = Cormorant_Garamond({ weight: '400', subsets: ['latin'] });
const tangerine = Tangerine({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

const FashionPage: React.FC = () => {
	return (
		<div className="pb-10 max-w-screen mx-auto">
			{/* Top navigation for fashion subcategories */}
			<SubcategoryNav section="fashion" />
			<div className="px-16">
				<div className="mb-24">
					<h1
						className={`mx-auto w-full border-b-4 border-amber-400 md:w-fit text-4xl md:text-5xl my-16 text-center  text-black up ${cormorant.className}`}
					>
						The Fashion Edit at La Nanz Beautie World
					</h1>
					<div className="fashion_title w-full md:w-2/3 text-start mb-8">
						{/* Using Tangerine font for the welcome message */}
						<p className={`${tangerine.className} text-6xl text-amber-400`}>
							Welcome to Lananz
						</p>
						<p
							className={`${poppins.className} uppercase text-black font-light tracking-widest`}
						>
							where <span className="text-amber-400 font-bold">beautie </span>{' '}
							meets bold style.
						</p>
						<p className="text-black tracking-wider text-justify leading-7 mt-6">
							Discover handpicked fashion pieces designed to celebrate your
							individuality, confidence, and creativity. Whether you&#39;re
							redefining your look or refreshing your wardrobe, we&rsquo;ve got
							something for every mood and moment.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{categories.fashion.map((subcategory) => {
						const path = `/fashion/${subcategory
							.toLowerCase()
							.replace(/\s+/g, '_')}`;
						return (
							<Link href={path} key={subcategory}>
								<div
									className="relative bg-cover bg-center h-96 shadow-md rounded-sm cursor-pointer flex flex-col justify-between p-6 group text-white overflow-hidden"
									style={{
										backgroundImage: `url(/${subcategory
											.toLowerCase()
											.replace(/\s/g, '-')}.png)`,
									}}
								>
									{/* Hover Overlay */}
									<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-in-out z-0" />

									{/* Animated h2 */}
									<h2
										className={`relative z-10 text-4xl font-semibold capitalize ${cormorant.className} text-white 
        transform transition-all duration-500 ease-in-out 
        group-hover:translate-y-2 group-hover:text-white opacity-0 group-hover:opacity-100`}
									>
										{subcategory}
									</h2>

									{/* Animated paragraph */}
									<p
										className={`px-4 py-2 relative z-10 text-sm mt-2 ${poppins.className} text-white 
        transform transition-all duration-500 ease-in-out 
        group-hover:-translate-y-2 group-hover:text-amber-400  group-hover: bg-black opacity-0 group-hover:opacity-100`}
									>
										Explore our {subcategory} collection and find your perfect
										style.
									</p>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FashionPage;

'use client'; // optional, only if using hooks

import { Cormorant_Garamond, Poppins, Tangerine } from 'next/font/google';
import React from 'react';
import Image from 'next/image';

const cormorant = Cormorant_Garamond({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '500'], subsets: ['latin'] });
const tangerine = Tangerine({ weight: '400', subsets: ['latin'] });

const Display: React.FC = () => {
	return (
		<section className="w-full bg-gray-200 min-h-96 max-h-fit flex items-center justify-center px-4 py-10">
			<div className="container w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-evenly gap-10">
				{/* Left Side */}
				<div className="intro flex flex-col  space-y-3 space-x-6 max-w-md text-center md:text-left">
					<h2
						className={`${tangerine.className} text-5xl text-amber-500 font-bold tracking-wider`}
					>
						Discover the Essence of Beauty
					</h2>
					<h2
						className={`${cormorant.className} leading-relaxed text-2xl text-neutral-900`}
					>
						Treat yourself to timeless style and radiant beauty — explore our
						curated collection today
					</h2>
					<button className="px-6 py-2 bg-amber-500 text-white rounded-xs shadow hover:bg-neutral-950 transition uppercase tracking-wider">
						New Arrivals
					</button>
				</div>

				{/* Right Side */}
				<div className="w-full md:w-[400px] max-w-xs md:max-w-md">
					<Image
						src="/display.png"
						alt="Display"
						width={400}
						height={400}
						className="w-full h-auto object-cover rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default Display;

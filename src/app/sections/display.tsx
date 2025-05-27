'use client'; // optional, only if using hooks

import { Cormorant_Garamond, Tangerine } from 'next/font/google';
import React from 'react';
import Image from 'next/image';

const cormorant = Cormorant_Garamond({ weight: '400', subsets: ['latin'] });
const tangerine = Tangerine({ weight: '400', subsets: ['latin'] });

const Display: React.FC = () => {
	return (
		<section className="w-full min-h-[80vh] flex items-center justify-center px-4 py-16 md:py-24">
			<div className="container w-full mx-auto  md:mx-16 flex flex-col md:flex-row items-center justify-evenly gap-10">
				{/* Left Side */}
				<div className="intro flex flex-col space-y-6 w-full md:w-1/2 lg:w-1/3 text-justify md:text-left ">
					<h2
						className={`${tangerine.className} text-5xl text-amber-500 font-bold tracking-wider`}
					>
						Discover the Essence of Beauty
					</h2>
					<h2
						className={`${cormorant.className}  leading-10 xl:leading-16 tracking-tight text-2xl xl:text-4xl text-neutral-900`}
					>
						Treat yourself to timeless style and radiant beauty — explore our
						curated collection today
					</h2>
					<button className="px-6 py-2 md:mt-10 w-full  md:w-fit bg-amber-500 text-white rounded-xs shadow hover:bg-neutral-950 transition uppercase tracking-wider">
						New Arrivals
					</button>
				</div>

				{/* Right Side */}
				<div className="image-container w-full md:w-1/2 lg:w-2/3">
					<Image
						src="/display.png"
						alt="Display"
						width={720}
						height={720}
						className="w-full h-auto object-cover rounded-lg shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default Display;

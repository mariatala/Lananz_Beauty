'use client';

import { Cormorant_Garamond, Poppins, MonteCarlo } from 'next/font/google';
import React from 'react';
import Image from 'next/image';

const cormorant = Cormorant_Garamond({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});
const monteCarlo = MonteCarlo({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

type DisplayProps = {
	title: string;
	description: string;
	buttonText: string;
	imageSrc: string;
};

const Display: React.FC<DisplayProps> = ({
	title,
	description,
	buttonText,
	imageSrc,
}) => {
	return (
		<section className="w-full min-h-[70vh] flex items-center justify-center px-4 py-16 bg-gradient-to-b from-neutral-100 to-neutral-50">
			<div className="container w-full mx-auto  lg:mx-16 flex flex-col-reverse md:flex-row md:items-start lg:items-center justify-evenly gap-10">
				{/* Left Side */}
				<div className="intro flex flex-col space-y-6 w-full md:w-1/2 lg:w-1/3 text-left">
					<h2
						className={`${cormorant.className} [word-spacing:0.1rem] mb-8 text-3xl text-black  md:text-4xl lg:text-4xl font-bold tracking-tight`}
					>
						The{' '}
						<span
							className={`${monteCarlo.className} text-amber-400 mx-2 text-4xl md:text-5xl lg:text-6xl`}
						>
							{' '}
							{title}{' '}
						</span>
						Edition at La Nanz Beautie World
					</h2>
					<h2
						className={`${poppins.className} leading-8 tracking-wider text-neutral-700`}
					>
						{description}
					</h2>
					<button className="px-6 py-2 md:mt-10 w-full md:w-fit bg-amber-400 text-white rounded-xs shadow hover:bg-neutral-950 transition uppercase tracking-wider">
						{buttonText}
					</button>
				</div>

				{/* Right Side */}
				<div className="image-container w-full md:w-1/2 lg:w-2/3">
					<Image
						src={imageSrc}
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

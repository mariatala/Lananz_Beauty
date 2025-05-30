'use client';

import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['300', '400', '500'], subsets: ['latin'] });

type SectionDividerProps = {
	heading: string;
	subheading: string;
	backgroundColor?: string; // Allow custom background
};

const SectionDividerOne: React.FC<SectionDividerProps> = ({
	heading,
	subheading,
	backgroundColor = 'bg-[#F8EFE4]', // default if not provided
}) => {
	return (
		<div
			className={`w-full flex flex-col items-center justify-center h-fit mx-auto py-16 my-16 ${backgroundColor}`}
		>
			<h2
				className={`w-5/6 text-lg md:text-3xl text-center mb-4 rounded-full ${poppins.className} text-neutral-700 font-light tracking-wide`}
			>
				{heading}
			</h2>
			<p className="w-5/6 text-center md:text-lg rounded-full text-neutral-600 font-light tracking-wide">
				{subheading}
			</p>
		</div>
	);
};

export default SectionDividerOne;

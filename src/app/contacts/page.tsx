'use client';

import React from 'react';
import Image from 'next/image';
import { Cormorant_Garamond, Pontano_Sans, MonteCarlo } from 'next/font/google';

const cormorant = Cormorant_Garamond({
	weight: ['300', '400', '500'],
	subsets: ['latin'],
});
const pontano = Pontano_Sans({
	weight: ['300', '400', '500'],
	subsets: ['latin'],
});
const monteCarlo = MonteCarlo({ weight: '400', subsets: ['latin'] });

const ContactPage: React.FC = () => {
	return (
		<div className="w-full min-h-screen bg-gradient-to-b from-white to-neutral-100 px-4 py-20 md:px-20 space-y-24">
			{/* Title & Intro */}
			<div className="text-center max-w-3xl mx-auto space-y-6">
				<h1
					className={`text-3xl md:text-5xl font-medium ${cormorant.className}`}
				>
					Whispered Touchpoints
				</h1>
				<p
					className={`md:text-lg text-neutral-700 leading-8 ${pontano.className}`}
				>
					We believe true beauty begins with connection. At Lananz Beautie, we
					don't just respond. we{' '}
					<span
						className={`text-amber-400 font-medium text-2xl ${cormorant.className}`}
					>
						{' '}
						listen.
					</span>{' '}
					Whether it's a soft question, a bold idea, or a radiant review, your
					words are always welcome in our world.
				</p>
			</div>

			{/* Imagery and Quote */}
			<div className="flex flex-col md:flex-row group gap-16 items-center justify-center max-w-6xl mx-auto">
				<div className="w-full md:w-2/5  overflow-hidden">
					<Image
						src="/makeup-10.jpg"
						alt="Lananz signature style"
						width={700}
						height={500}
						className="rounded-xl shadow-xl object-cover w-full h-auto transition duration-700 ease-in-out grayscale group-hover:grayscale-0"
					/>
				</div>

				<div className="w-full md:w-1/2 space-y-6 text-left">
					<h2
						className={`text-3xl md:text-4xl text-amber-400 ${monteCarlo.className}`}
					>
						Your Voice is Our Favorite Accessory
					</h2>
					<p className={`text-neutral-700 md:text-lg ${pontano.className}`}>
						Whether you're inquiring about a custom shade, a style session, or
						simply want to say "hello", we welcome every message like a gift.
					</p>
					<blockquote
						className={`italic text-neutral-600 text-base pl-4 border-l-4 border-amber-400`}
					>
						“Connection is the finest beauty ritual of all.”
					</blockquote>
				</div>
			</div>

			{/* Contact Channels */}
			<div className="text-center max-w-2xl mx-auto">
				<h2
					className={`text-3xl md:text-4xl mb-2 md:mb-6 ${cormorant.className}`}
				>
					Let’s Stay in Touch
				</h2>
				<p
					className={`text-lg text-neutral-700 mb-2 md:mb-4 ${pontano.className}`}
				>
					Email:{' '}
					<span className="text-amber-400 font-medium">
						lananz_beauty@example.com
					</span>
				</p>
				<p
					className={`text-lg text-neutral-700 mb-2 md:mb-4 ${pontano.className}`}
				>
					Phone:{' '}
					<span className="text-amber-400 font-medium">+123 456 7890</span>
				</p>
				<p
					className={`text-base font-semibold text-neutral-600 italic ${pontano.className}`}
				>
					We answer personally — no bots, no scripts, just real people with a
					love for beauty.
				</p>
			</div>

			{/* Signature */}
			<div className="text-center pt-16 border-t border-neutral-300">
				<p className={`${monteCarlo.className} text-3xl text-amber-400`}>
					With love and light,
				</p>
				<p className={`text-xl text-neutral-800 mt-1 ${cormorant.className}`}>
					The Lananz Beautie Team
				</p>
			</div>
		</div>
	);
};

export default ContactPage;

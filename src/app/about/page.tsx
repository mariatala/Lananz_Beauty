import React from 'react';
import Image from 'next/image';
import { Cormorant_Garamond, Pontano_Sans, MonteCarlo } from 'next/font/google';
import { div } from 'framer-motion/client';

const cormorant = Cormorant_Garamond({
	weight: ['300', '400', '500'],
	subsets: ['latin'],
});
const pontano = Pontano_Sans({
	weight: ['300', '400', '500'],
	subsets: ['latin'],
});
const monteCarlo = MonteCarlo({ weight: '400', subsets: ['latin'] });

const AboutPage: React.FC = () => {
	return (
		<div className="container w-full mx-auto  md:px-16 py-8 md:py-16 space-y-10">
			<div className="w-[80%] mx-auto flex flex-col md:flex-row justify-evenly gap-16 items-center">
				<div className="w-full md:w-1/3">
					<Image
						src="/profile.jpg" // ✅ Make sure to add this image to public folder
						alt="Founder of Lananz Beautie"
						width={600}
						height={400}
						className=" rounded-full shadow-sm shadow-amber-400 object-cover w-full h-auto"
					/>
				</div>

				<div className="w-full flex flex-col md:w-1/2 text-center md:text-left ">
					<h1
						className={`text-4xl md:text-5xl font-medium mb-4 ${cormorant.className}`}
					>
						Our Story
					</h1>
					<p
						className={`${pontano.className} text-justify text-neutral-800 leading-8 tracking-wider`}
					>
						Welcome to{' '}
						<span className={`${monteCarlo.className} text-2xl text-amber-400`}>
							Lananz Beautie
						</span>
						, your luxurious escape into the world of beauty, elegance, and
						expression. We offer handpicked selections of premium{' '}
						<span
							className={` ${monteCarlo.className} text-amber-400 font-medium text-2xl`}
						>
							Makeup
						</span>
						,
						<span
							className={` ${monteCarlo.className} text-amber-400 font-medium text-2xl`}
						>
							{' '}
							Haircare
						</span>
						, and
						<span
							className={` ${monteCarlo.className} text-amber-400 font-medium text-2xl`}
						>
							{' '}
							Fashion
						</span>{' '}
						— all designed to help you shine your light boldly and beautifully.
					</p>
					<p
						className={`${pontano.className} text-justify text-neutral-800 leading-8 tracking-wider`}
					>
						Our mission is simple: to celebrate every individual’s unique
						beauty. Whether you’re redefining your everyday look or preparing
						for life’s biggest moments, Lananz is your trusted companion on the
						journey to self-expression.
					</p>
					<div className="mt-8">
						<h2 className={`text-3xl md:text-4xl mb-2 ${cormorant.className}`}>
							Meet the Founder
						</h2>
						<p
							className={`${pontano.className} text-justify  text-neutral-800 leading-8 tracking-wider`}
						>
							Lananz Beautie was founded by{' '}
							<span className="text-amber-400 font-semibold">Nancy</span>, a
							visionary Nigerian creative with a passion for elegance,
							self-expression, and digital craftsmanship.
						</p>
						<p
							className={`${pontano.className} text-justify text-neutral-800 leading-8 tracking-wider 800 mt-2`}
						>
							Driven by her desire to make luxury and beauty accessible, Nancy
							built Lananz Beautie as a space where modern beauty meets cultural
							identity. Her leadership continues to inspire a new generation of
							women to own their glow, unapologetically.
						</p>
					</div>
				</div>
			</div>

			<div className="pt-8 border-t border-neutral-300 text-center">
				<p className={`${pontano.className} text-lg text-neutral-600`}>
					Thank you for choosing{' '}
					<span className={`${monteCarlo.className} text-3xl text-amber-400`}>
						Lananz Beautie World
					</span>
					. We’re honored to be part of your beauty journey.
				</p>
			</div>
		</div>
	);
};

export default AboutPage;

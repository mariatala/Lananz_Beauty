'use client';

import React from 'react';
import Link from 'next/link';
import {
	Cormorant_Garamond,
	Tangerine,
	Poppins,
	MonteCarlo,
} from 'next/font/google';
const cormorant = Cormorant_Garamond({
	weight: ['300', '400', '500'],
	subsets: ['latin'],
});
const poppins = Poppins({ weight: '500', subsets: ['latin'] });
const monteCarlo = MonteCarlo({ weight: '400', subsets: ['latin'] });

import { categoriesList } from '@/data/categoriesList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Home: React.FC = () => {
	return (
		<main className={`w-full bg-white relative overflow-hidden ${poppins}`}>
			{/* Hero */}
			<section className="relative w-full h-[90vh] overflow-hidden text-white flex items-center justify-center">
				{/* Background Video */}
				<video
					autoPlay
					muted
					loop
					playsInline
					className="absolute inset-0 w-full h-full object-cover z-0"
				>
					<source src="hero.mp4" type="video/mp4" />
				</video>

				{/* Overlay */}
				<div className="absolute inset-0 bg-black opacity-80 z-10" />

				{/* Content */}
				<div className="relative z-20 text-center px-6">
					<h1
						className={`text-5xl md:text-7xl font-bold tracking-wide ${monteCarlo.className}`}
					>
						<Link href="/">La Nanz, Beautie World</Link>
					</h1>
					<p
						className={`text-xl md:text-2xl max-w-2xl mt-16 mb-8 mx-auto font-light ${cormorant.className}`}
					>
						Discover beauty, elegance, and confidence curated in every
						collection.
					</p>
					<Link href="#categories" scroll={true}>
						<button className="mt-8 border-2 border-amber-400 text-amber-400 font-medium px-8 py-3 tracking-widest rounded-sm shadow hover:bg-amber-400 hover:text-white transition-all duration-300">
							Explore Collections
						</button>
					</Link>
				</div>
			</section>
			{/* What Makes Us Unique */}
			<section className="bg-white py-20 px-6 text-center relative z-10">
				<h2
					className={`text-4xl  text-gray-900 font-bold mb-10 ${cormorant.className}`}
				>
					Why You'll Love the La Nanz Experience
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto my-10">
					{[
						{
							title: 'Curated Excellence',
							desc: 'Only the finest, hand-picked items make the cut.',
						},
						{
							title: 'Timeless Beauty',
							desc: 'A celebration of classic elegance and modern flair.',
						},
						{
							title: 'Customer Devotion',
							desc: 'White-glove service and unmatched attention to you.',
						},
					].map(({ title, desc }) => (
						<div
							key={title}
							className={`p-6 border-2 mt-8 border-amber-400 rounded-sm shadow-sm hover:shadow-md transition duration-300 ${poppins.className}`}
						>
							<div className="flex flex-col items-center justify-center mb-4">
								<h3 className="text-xl mb-1 font-medium uppercase text-black">
									{title}
								</h3>
								<div className="w-24 h-1 bg-amber-500 mb-4 rounded-lg"></div>
							</div>

							<p className="text-neutral-700 font-light text-sm">{desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Category Showcase */}
			<section
				id="categories"
				className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 relative z-10"
			>
				{categoriesList.map(({ title, description, image, link }) => (
					<Link key={title} href={link} className="group">
						<div
							className="relative h-[500px] w-full bg-cover bg-center rounded-sm shadow-lg overflow-hidden transform hover:scale-[1.02] hover:shadow-xl transition-transform duration-300"
							style={{ backgroundImage: `url(${image})` }}
						>
							<div className="absolute inset-0 bg-black opacity-40 group-hover:bg-opacity-60 transition-all duration-300" />
							<div className="absolute bottom-0 p-8 z-10 text-white">
								<h2 className="text-2xl font-semibold  mb-5 tracking-widest uppercase ${cormorant.className}">
									{title}
								</h2>
								<p className="text-base max-w-xs leading-relaxed font-light">
									{description}
								</p>
							</div>
						</div>
					</Link>
				))}
			</section>

			{/* Testimonials */}
			<section className="pt-16 pb-24 px-6 bg-[#F8EFE4] relative z-10 my-24">
				<h2
					className={`text-4xl md:text-5xl text-black font-medium mb-8 text-center ${cormorant.className}`}
				>
					Trusted by Beauties Like You
				</h2>
				<Swiper
					modules={[Pagination, Autoplay]}
					pagination={{ clickable: true }}
					autoplay={{ delay: 5000 }}
					loop={true}
					spaceBetween={30}
					className="max-w-3xl mx-auto"
				>
					{[
						{
							name: 'Grace M.',
							quote:
								'Lananz has changed the way I see beauty. Their products radiate elegance.',
						},
						{
							name: 'Linda A.',
							quote:
								'I’ve never felt so confident. The quality and service is unmatched.',
						},
						{
							name: 'Diana K.',
							quote:
								'Every time I wear Lananz, I feel like a queen. Absolutely luxurious.',
						},
					].map(({ name, quote }, idx) => (
						<SwiperSlide key={idx}>
							<div className="bg-white p-8 rounded-sm shadow-lg text-center">
								<p
									className={`text-xl italic text-gray-800 mb-4 ${cormorant.className}`}
								>
									{quote}
								</p>
								<h4
									className={`text-2xl text-amber-400 font-semibold text-400-90 ${monteCarlo.className}`}
								>
									{name}
								</h4>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
		</main>
	);
};

export default Home;

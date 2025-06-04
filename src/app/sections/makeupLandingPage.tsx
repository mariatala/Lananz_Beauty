'use client';

import React from 'react';
import Image from 'next/image';
import VideoGallery from '../components/VideoGallery';
import { MonteCarlo, Cormorant_Garamond, Poppins } from 'next/font/google';
const monteCarlo = MonteCarlo({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});
const cormorantGaramond = Cormorant_Garamond({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});
const poppins = Poppins({
	weight: ['400', '500', '600'],
	subsets: ['latin'],
	display: 'swap',
});
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Section: React.FC = () => {
	return (
		<section className="w-full flex flex-col gap-24 py-10 md:py-20 px-4 md:px-16 bg-gradient-to-br from-white to-neutral-200">
			{/* Video Gallery */}
			<div className="w-full  mx-auto">
				<div className="flex flex-col items-center justify-center mb-8 md:mb-16">
					<h3
						className={`[word-spacing:0.5rem] text-3xl md:text-6xl  text-center mb-4 ${monteCarlo.className}`}
					>
						Beauty In Motion
					</h3>
					<div className="w-24 h-1 bg-amber-400 mb-4 rounded-lg"></div>
				</div>
				<VideoGallery />
			</div>
			{/* Book Appointment with Form */}
			<div className="w-full bg-[#F8EFE4] py-16 px-2 md:px-6 flex flex-col justify-center items-center md:flex-row md:items-start md:justify-evenly gap-10">
				<div className="text-center md:text-left max-w-xl mt-4">
					<h2
						className={`text-2xl md:text-5xl font-semibold mb-2 ${cormorantGaramond.className}`}
					>
						Ready for a Glow Up?
					</h2>
					<h3 className="uppercase font-bold text-amber-400 tracking-wider">
						Book an appointment with us:
					</h3>
					<p
						className={`text-neutral-700 mt-12 leading-8 ${poppins.className}`}
					>
						Indulge in a personalized makeup session with our professional
						artists. Whether it’s for a special event, a confidence boost, or
						mastering your signature look — we’ll help you achieve a style
						that’s undeniably you. Select your date, time, and desired glam, and
						let the transformation begin.
					</p>
				</div>
				<form className=" flex flex-col gap-6 bg-white rounded p-6 shadow-md w-full max-w-lg">
					<div className="mb-4">
						<label className="block text-sm font-medium text-neutral-700 mb-2 uppercase">
							Full Name
						</label>
						<input
							type="text"
							className="w-full px-4 py-2 border border-amber-400 rounded text-neutral-500"
							placeholder="your name"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium text-neutral-700 mb-2 uppercase">
							Email
						</label>
						<input
							type="email"
							className="w-full px-4 py-2 border border-amber-400 rounded text-neutral-500 "
							placeholder="you@example.com"
							required
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium text-neutral-700 mb-2 uppercase">
							Date & Time
						</label>
						<input
							type="datetime-local"
							className="w-full px-4 py-2 border border-amber-400 rounded text-neutral-500"
							required
						/>
					</div>
					<div className="mb-6">
						<label className="block text-sm font-medium text-neutral-700 mb-1 uppercase">
							Service Type
						</label>
						<select className="w-full px-4 py-2 border border-amber-400 text-neutral-500 rounded">
							<option value="">Select a Service</option>
							<option value="natural-glow">Natural Glow</option>
							<option value="full-glam">Full Glam Look</option>
							<option value="bridal">Bridal Makeup</option>
						</select>
					</div>
					<button
						type="submit"
						className="w-full bg-black text-white py-2 rounded hover:bg-amber-400 transition"
					>
						Book Appointment
					</button>
				</form>
			</div>
			{/* Testimonials Carousel */}
			<div className="w-full max-w-5xl mx-auto">
				<h2
					className={`[word-spacing:0.5rem] text-3xl md:text-6xl  text-center mb-12 ${monteCarlo.className}`}
				>
					Radiant Reviews
				</h2>
				<Swiper
					slidesPerView={1}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					className=" w-full testimonial-swiper fl"
				>
					{[
						{
							text: 'The lipsticks last all day and smell divine!',
							image: '/testimonials/hair-1.jpg',
						},
						{
							text: 'Finally, foundation shades that match my undertone!',
							image: '/testimonials/hair-2.jpg',
						},
						{
							text: 'The packaging feels so luxurious — I feel like royalty.',
							image: '/testimonials/hair-3.jpg',
						},
					].map((item, idx) => (
						<SwiperSlide
							key={idx}
							className=" h-14 flex  bg-800   rounded-sm bg-[#F0C02C]  py-8 justify-between items-center text-center"
						>
							<div className="flex justify-center gap-16 items-center">
								{' '}
								<Image
									src={item.image}
									alt="Client"
									width={100}
									height={100}
									className="rounded-full object-cover"
								/>
								<p className="text-lg italic text-neutral-700 max-w-xl">
									&ldquo;{item.text}&rdquo;
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Section;

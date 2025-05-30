'use client';

import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
	return (
		<footer className="w-full bg-neutral-900 text-white px-6 md:px-16 py-16 border-t border-neutral-700">
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
				{/* Information */}
				<div>
					<h3 className="text-lg font-semibold mb-4 uppercase tracking-wider text-amber-400">
						Information
					</h3>
					<ul className="space-y-2 text-sm text-gray-300">
						<li>
							<a href="/size-guide" className="hover:text-white transition">
								Size Guide
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:text-white transition">
								Contact Us
							</a>
						</li>
						<li>
							<a href="/shipping" className="hover:text-white transition">
								Shipping & Delivery
							</a>
						</li>
					</ul>
				</div>

				{/* About La Nanz */}
				<div>
					<h3 className="text-lg font-semibold mb-4 uppercase tracking-wider text-amber-400">
						About La Nanz
					</h3>
					<ul className="space-y-2 text-sm text-gray-300">
						<li>
							<a href="/about" className="hover:text-white transition">
								About Us
							</a>
						</li>
						<li>
							<a href="/policies" className="hover:text-white transition">
								Policies
							</a>
						</li>
						<li>
							<a href="/stylists" className="hover:text-white transition">
								Stylists
							</a>
						</li>
					</ul>
				</div>

				{/* Sign Up Form */}
				<div className="lg:col-span-2">
					<h3 className="text-lg font-semibold mb-4 uppercase tracking-wider text-amber-400">
						Stay Updated
					</h3>
					<p className="text-sm text-gray-300 mb-4">
						Subscribe to receive updates on new arrivals, exclusive offers, and
						style inspiration.
					</p>
					<form
						className="flex flex-col sm:flex-row gap-4"
						onSubmit={(e) => {
							e.preventDefault();
							// TODO: Hook up Mailchimp or backend submission
							alert('Subscribed!');
						}}
					>
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-4 py-2 rounded-sm text-black placeholder-gray-500"
							required
						/>
						<button
							type="submit"
							className="bg-amber-400 text-black font-medium px-4 py-2 rounded-sm hover:bg-amber-500 transition"
						>
							Subscribe
						</button>
					</form>

					{/* Social Media Icons */}
					<div className="flex gap-6 mt-6">
						<a href="#" className="text-gray-400 hover:text-white transition">
							<FaInstagram size={20} />
						</a>
						<a href="#" className="text-gray-400 hover:text-white transition">
							<FaFacebookF size={20} />
						</a>
						<a href="#" className="text-gray-400 hover:text-white transition">
							<FaTwitter size={20} />
						</a>
						<a href="#" className="text-gray-400 hover:text-white transition">
							<FaTiktok size={20} />
						</a>
					</div>
				</div>
			</div>

			{/* Bottom */}
			<div className="mt-12 border-t border-neutral-800 pt-6 text-center text-sm text-gray-500">
				© {new Date().getFullYear()} La Nanz. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;

'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export interface Product {
	id: string | number;
	name: string;
	description: string;
	price: number;
	image: string;
	category: string;
	section: string;
	isNew?: boolean;
	discount?: string;
}

interface ProductCardProps {
	product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	if (!product) {
		console.warn('⚠️ ProductCard received undefined product');
		return null; // or a fallback UI
	}

	const {
		id,
		name,
		description,
		price,
		image,
		category,
		section,
		isNew = false,
		discount,
	} = product;

	const [wishlisted, setWishlisted] = useState(false);

	const toggleWishlist = () => {
		setWishlisted(!wishlisted);
		// Optionally trigger an API call or global state update
	};

	return (
		<div className="relative flex w-80 flex-col items-start bg-white rounded-xs shadow-sm hover:shadow-lg group hover:bg-gray-100 transition-shadow duration-300 cursor-pointer">
			{/* Top Badges */}
			{isNew && (
				<div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 rounded">
					New
				</div>
			)}

			{/* Wishlist Button */}
			<button
				className="absolute top-2 right-2 text-gray-400 hover:text-amber-400 z-10"
				onClick={toggleWishlist}
				aria-label="Toggle Wishlist"
			>
				{wishlisted ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
			</button>

			{/* Product Image */}
			<div className="rounded-xs shadow-sm w-full p-2 bg-[#f8f5f3]">
				<Image
					src={image}
					alt={name}
					width={320}
					height={320}
					loading="lazy"
					className="w-full h-72 object-cover rounded"
				/>
			</div>

			{/* Product Info */}
			<div className="flex flex-col align-top justify-start p-4 w-full">
				<h2 className="text-l uppercase tracking-wider font-semibold mt-2 group-hover:text-amber-500 transition-colors duration-300">
					{name}
				</h2>
				<p className="text-gray-600">{description}</p>
				<p className="text-lg font-bold mt-2">${(price ?? 0).toFixed(2)}</p>
				<p className="text-sm text-gray-500 mt-1">
					Category: <span>{category}</span>
				</p>
			</div>

			{/* Discount Label */}
			{discount && (
				<div className="absolute bottom-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
					{discount}
				</div>
			)}
		</div>
	);
};

export default ProductCard;

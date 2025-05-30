'use client';

import { fashionProducts } from '@/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import RelatedProducts from '@/app/components/RelatedProducts';
import SubcategoryNav from '@/app/components/SubCategoryNav';

export default function ProductDetailPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = fashionProducts.find(
		(p) => p.id.toString() === params.productId
	);

	// ✅ move hooks BEFORE any condition
	const [selectedSize, setSelectedSize] = useState<string>('M');
	const [quantity, setQuantity] = useState<number>(1);
	const [selectedColor, setSelectedColor] = useState<string>('Black');

	if (!product) return notFound();

	const sizes = ['S', 'M', 'L', 'XL'];
	const colors = ['Black', 'Ivory', 'Gold'];

	const handleQuantity = (type: 'inc' | 'dec') => {
		if (type === 'dec' && quantity > 1) setQuantity((q) => q - 1);
		if (type === 'inc') setQuantity((q) => q + 1);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className="w-full mx-auto overflow-x-hidden"
		>
			<SubcategoryNav section="fashion" />
			<div className="w-4/5 mx-auto grid md:grid-cols-2 gap-32 items-start pt-8 mt-16">
				{/* Image */}
				<div className="bg-[#F8EFE4] p-4 rounded-lg shadow w-full">
					<Image
						src={product.image}
						alt={product.name}
						width={600}
						height={600}
						className="w-full h-auto object-cover rounded"
					/>
				</div>

				{/* Product Info */}
				<div className="flex flex-col gap-6">
					<h1 className="text-3xl font-semibold text-black">{product.name}</h1>
					<p className="text-neutral-700">{product.description}</p>
					<p className="text-2xl font-bold text-amber-600">
						${product.price.toFixed(2)}
					</p>

					{/* Sizes */}
					<div>
						<label className="block text-sm font-medium text-gray-600 mb-1">
							Size
						</label>
						<div className="flex flex-wrap gap-3">
							{sizes.map((size) => (
								<button
									key={size}
									onClick={() => setSelectedSize(size)}
									className={`px-4 py-2 border rounded ${
										selectedSize === size
											? 'bg-amber-400 text-black border-amber-500'
											: 'border-gray-300 text-gray-600'
									} transition`}
								>
									{size}
								</button>
							))}
						</div>
					</div>

					{/* Colors */}
					<div>
						<label className="block text-sm font-medium text-gray-600 mb-1">
							Color
						</label>
						<div className="flex flex-wrap gap-3">
							{colors.map((color) => (
								<button
									key={color}
									onClick={() => setSelectedColor(color)}
									className={`px-4 py-2 border rounded ${
										selectedColor === color
											? 'bg-amber-400 text-black border-amber-500'
											: 'border-gray-300 text-gray-600'
									} transition`}
								>
									{color}
								</button>
							))}
						</div>
					</div>

					{/* Quantity */}
					<div>
						<label className="block text-sm font-medium text-gray-600 mb-1">
							Quantity
						</label>
						<div className="flex items-center gap-4">
							<button
								onClick={() => handleQuantity('dec')}
								className="w-8 h-8 text-xl bg-gray-100 hover:bg-gray-200 transition rounded"
							>
								-
							</button>
							<span className="text-lg">{quantity}</span>
							<button
								onClick={() => handleQuantity('inc')}
								className="w-8 h-8 text-xl bg-gray-100 hover:bg-gray-200 transition rounded"
							>
								+
							</button>
						</div>
					</div>

					{/* Add to Bag */}
					<button className="mt-4 bg-amber-400 text-black font-medium px-6 py-3 rounded-sm hover:bg-amber-500 transition w-fit">
						Add to Bag
					</button>

					{/* Delivery Info */}
					<div className="mt-8 border-t pt-6">
						<h3 className="text-md font-semibold text-gray-700 mb-2">
							Delivery Information
						</h3>
						<p className="text-sm text-gray-600">
							Enjoy fast and secure delivery within 3–5 business days.
						</p>
					</div>

					{/* Returns */}
					<div>
						<h3 className="text-md font-semibold text-gray-700 mt-6 mb-2">
							Returns & Exchanges
						</h3>
						<p className="text-sm text-gray-600">
							We offer free returns within 14 days. See our{' '}
							<Link
								href="/policies/returns"
								className="underline hover:text-black"
							>
								return policy
							</Link>{' '}
							for more details.
						</p>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-md font-semibold text-gray-700 mt-6 mb-2">
							Need Help?
						</h3>
						<p className="text-sm text-gray-600">
							Contact us at{' '}
							<a
								href="mailto:support@lananz.com"
								className="underline hover:text-black"
							>
								support@lananz.com
							</a>{' '}
							or call <span className="font-medium">+1 800 123 4567</span>.
						</p>
					</div>
				</div>
			</div>

			{/* Related Products */}
			<RelatedProducts
				category={product.category}
				currentProductId={product.id}
			/>
		</motion.div>
	);
}

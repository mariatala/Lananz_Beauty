'use client';
import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { fashionProducts } from '@/data/products';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface RelatedProductsProps {
	category: string;
	currentProductId: number;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
	category,
	currentProductId,
}) => {
	const related = fashionProducts.filter(
		(p) => p.category === category && p.id !== currentProductId
	);

	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: 'left' | 'right') => {
		if (scrollRef.current) {
			const { clientWidth } = scrollRef.current;
			scrollRef.current.scrollBy({
				left: direction === 'right' ? clientWidth * 0.8 : -clientWidth * 0.8,
				behavior: 'smooth',
			});
		}
	};

	// Optional autoplay
	useEffect(() => {
		const interval = setInterval(() => scroll('right'), 7000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="my-10 px-6 relative overflow-hidden pb-12">
			<h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>

			{/* Arrows */}
			<button
				onClick={() => scroll('left')}
				className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-black hover:text-white transition-colors"
				aria-label="Scroll Left"
			>
				<FaChevronLeft className="w-4 h-4" />
			</button>
			<button
				onClick={() => scroll('right')}
				className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-black hover:text-white transition-colors"
				aria-label="Scroll Right"
			>
				<FaChevronRight className="w-4 h-4" />
			</button>

			
			{/* Carousel Track */}
			<div
				ref={scrollRef}
				className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
			>
				<div className="flex space-x-32 ">
					{related.map((product) => (
						<div key={product.id} className="snap-start shrink-0 w-60">
							<ProductCard product={{ ...product, section: 'fashion' }} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default RelatedProducts;

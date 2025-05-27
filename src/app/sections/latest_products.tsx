import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/app/components/ProductCard';

import { Cormorant_Garamond, Poppins, Tangerine } from 'next/font/google';
import Image from 'next/image';

const cormorant = Cormorant_Garamond({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '500'], subsets: ['latin'] });
const tangerine = Tangerine({ weight: '400', subsets: ['latin'] });

const LatestProducts: React.FC = () => {
	return (
		<div className="p-8">
			<h1 className={`text-5xl font-bold mb-16 ${cormorant.className}`}>
				{' '}
				Latest Products
			</h1>
			<div className="grid  place-content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
				{products.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</div>
	);
};
export default LatestProducts;

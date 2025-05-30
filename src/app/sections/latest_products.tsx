import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/app/components/ProductCard';

import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

const LatestProducts: React.FC = () => {
	return (
		<div className="px-4 sm:px-6 md:px-16 py-12 w-full mx-auto">
			<h1
				className={`text-4xl lg:text-5xl font-bold mb-12 ${cormorant.className}`}
			>
				La Nanz New In: Fashion
			</h1>

			<div className="grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{products.map((product) => (
					<ProductCard product={{ ...product, section: 'fashion' }} />
				))}
			</div>
		</div>
	);
};
export default LatestProducts;

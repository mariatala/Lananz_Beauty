import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/app/components/ProductCard';

import { Cormorant_Garamond} from 'next/font/google';

const cormorant = Cormorant_Garamond({ weight: '400', subsets: ['latin'] });

const LatestProducts: React.FC = () => {
	return (
		<div className="p-8">
			<h1 className={`text-4xl lg:text-5xl  font-bold mb-8 ${cormorant.className}`}>
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

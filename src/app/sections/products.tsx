// src/app/products/page.tsx

'use client';

import React, { useState } from 'react';
import { products as productList } from '@/data/products';
import ProductCard from '@/app/components/ProductCard';
import FilterSortBar from '@/app/components/FilterSortBar';
import Link from 'next/link';

const ProductsPage: React.FC = () => {
	const [category, setCategory] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');

	const filtered = category
		? productList.filter((p) => p.category === category)
		: productList;

	const sorted = filtered.sort((a, b) =>
		sortOrder === 'asc' ? a.price - b.price : b.price - a.price
	);

	return (
		<>
			<h1 className="text-3xl font-bold mb-6 text-center text-amber-600">
				Shop All Products
			</h1>
			<FilterSortBar
				selectedCategory={category}
				sortOrder={sortOrder}
				setCategory={setCategory}
				setSortOrder={setSortOrder}
			/>
			<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				{sorted.map((product) => (
					<Link key={product.id} href={`/products/${product.id}`}>
						<ProductCard product={{ ...product, section: 'fashion' }} />
					</Link>
				))}
			</div>
		</>
	);
};

export default ProductsPage;

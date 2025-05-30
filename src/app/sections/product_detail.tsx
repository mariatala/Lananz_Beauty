// src/app/products/[id]/page.tsx

import { products } from '@/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import SubcategoryNav from '@/app/components/SubCategoryNav';

interface Params {
	params: { id: string };
}

export default function ProductDetail({ params }: Params) {
	const product = products.find((p) => p.id === Number(params.id));
	if (!product) return notFound();

	return (
		<div className="pb-10 min-w-screen mx-auto">
			<SubcategoryNav section="fashion" />
			<div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-8">
				<Image
					src={product.image}
					alt={product.name}
					width={500}
					height={500}
					className="w-full md:w-1/2 object-contain rounded shadow"
				/>
				<div className="md:w-1/2 flex flex-col gap-4">
					<h1 className="text-3xl font-bold text-amber-700">{product.name}</h1>
					<p className="text-neutral-600">{product.description}</p>
					<p className="text-xl font-semibold text-teal-600">
						${product.price.toFixed(2)}
					</p>
					<button className="mt-4 bg-amber-500 text-white py-2 px-4 rounded hover:bg-amber-600 transition">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}

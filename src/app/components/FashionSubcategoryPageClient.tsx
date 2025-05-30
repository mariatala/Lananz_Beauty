'use client';

import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard';
import SubcategoryNav from '@/app/components/SubCategoryNav';
import { fashionProducts } from '@/data/products';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({ weight: '400', subsets: ['latin'] });

interface Props {
	subcategory: string;
}

const FashionSubcategoryPageClient: React.FC<Props> = ({ subcategory }) => {
	const rawSubcategory = decodeURIComponent(subcategory);
	const subcategoryName = rawSubcategory.replace(/_/g, ' ').toLowerCase();

	const filtered = fashionProducts.filter(
		(p) => p.category.toLowerCase() === subcategoryName
	);

	return (
		<div className="pb-10 min-w-full mx-auto">
			<SubcategoryNav section="fashion" />

			<div className="px-6 md:px-10">
				<h1
					className={`text-4xl md:text-5xl mt-8 mb-12 font-bold text-black capitalize ${cormorant.className}`}
				>
					{subcategoryName.charAt(0).toUpperCase() + subcategoryName.slice(1)}:
				</h1>

				{filtered.length === 0 ? (
					<div className="text-center text-gray-600 mt-12">
						<p className="text-xl font-medium">
							No products available at the moment.
						</p>
						<p className="text-sm">
							Please check back later or explore other categories.
						</p>
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
						{filtered.map((product) => (
							<Link
								key={product.id}
								href={`/fashion/${product.category.toLowerCase()}/${
									product.id
								}`}
								className="block"
							>
								<ProductCard product={{ ...product, section: 'fashion' }} />

							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default FashionSubcategoryPageClient;

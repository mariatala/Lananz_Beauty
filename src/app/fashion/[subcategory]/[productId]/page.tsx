import { fashionProducts } from '../../../../data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import RelatedProducts from '@/app/components/RelatedProducts';
import SubcategoryNav from '@/app/components/SubCategoryNav';
import ProductActions from '@/app/components/ProductActions';

interface ProductDetailPageProps {
	params: {
		subcategory: string;
		productId: string;
	};
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
	const product = fashionProducts.find(
		(p) => p.id.toString() === params.productId
	);

	if (!product) return notFound();

	const sizes = ['S', 'M', 'L', 'XL'];
	const colors = ['Black', 'Ivory', 'Gold'];

	return (
		<div className="w-full mx-auto overflow-x-hidden">
			<SubcategoryNav section="fashion" />
			<div className="w-4/5 mx-auto grid md:grid-cols-2 gap-32 items-start pt-8 mt-16">
				<div className="bg-[#F8EFE4] p-4 rounded-lg shadow w-full">
					<Image
						src={product.image}
						alt={product.name}
						width={600}
						height={600}
						className="w-full h-auto object-cover rounded"
					/>
				</div>

				<div className="flex flex-col gap-6">
					<h1 className="text-3xl font-semibold text-black">{product.name}</h1>
					<p className="text-neutral-700">{product.description}</p>
					<p className="text-2xl font-bold text-amber-600">
						${product.price.toFixed(2)}
					</p>

					<ProductActions sizes={sizes} colors={colors} />

					{/* Delivery / Returns / Contact */}
					<div className="mt-8 border-t pt-6">
						<h3 className="text-md font-semibold text-gray-700 mb-2">
							Delivery Information
						</h3>
						<p className="text-sm text-gray-600">
							Enjoy fast and secure delivery within 3–5 business days.
						</p>
					</div>

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

			<RelatedProducts
				category={product.category}
				currentProductId={product.id}
			/>
		</div>
	);
}

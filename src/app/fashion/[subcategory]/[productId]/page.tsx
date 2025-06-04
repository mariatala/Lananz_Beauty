// app/fashion/[subcategory]/[productId]/page.tsx
import ProductDetails from '@/app/components/ProductDetails';

interface PageProps {
	params: {
		subcategory: string;
		productId: string;
	};
}

export default function Page({ params }: PageProps) {
	return <ProductDetails params={params} />;
}

// app/fashion/[subcategory]/[productId]/page.tsx
import ProductDetails from '@/app/components/ProductDetails';

interface PageProps {
	params: Promise<{
		subcategory: string;
		productId: string;
	}>;
}

export default async function Page({ params }: PageProps) {
	return <ProductDetails params={await params} />;
}

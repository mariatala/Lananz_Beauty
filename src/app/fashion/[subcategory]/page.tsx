// app/fashion/[subcategory]/page.tsx
import ClientFashionPage from '@/app/components/FashionSubcategoryPageClient';

interface Props {
	params: {
		subcategory: string;
		productId: string;
	};
}

export default function FashionSubcategoryServerPage({ params }: Props) {
	return <ClientFashionPage subcategory={params.subcategory} />;
}

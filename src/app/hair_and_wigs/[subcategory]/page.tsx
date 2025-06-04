// app/fashion/[subcategory]/page.tsx
import ClientFashionPage from '@/app/components/FashionSubcategoryPageClient';

interface Props {
	params: Promise<{
		subcategory: string;
	}>;
}

export default async function FashionSubcategoryServerPage({ params }: Props) {
	return <ClientFashionPage subcategory={(await params).subcategory} />;
}

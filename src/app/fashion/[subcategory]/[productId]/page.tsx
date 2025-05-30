// NO 'use client' — this is a server component

import { fashionProducts } from '@/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import SubcategoryNav from '@/app/components/SubCategoryNav';
import RelatedProducts from '@/app/components/RelatedProducts';
import ProductActions from '@/app/components/ProductActions';

interface Props {
  params: {
    productId: string;
    subcategory: string;
  };
}

type Params = {
  productId: string;
  subcategory: string;
};

export default function ProductDetailPage({ params }: { params: Params }) {
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
        {/* Image */}
        <div className="bg-[#F8EFE4] p-4 rounded-lg shadow w-full">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto object-cover rounded"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-black">{product.name}</h1>
          <p className="text-neutral-700">{product.description}</p>
          <p className="text-2xl font-bold text-amber-600">
            ${product.price.toFixed(2)}
          </p>

          <ProductActions sizes={sizes} colors={colors} />

          {/* ...delivery, returns, contact sections... */}
        </div>
      </div>

      <RelatedProducts
        category={product.category}
        currentProductId={product.id}
      />
    </div>
  );
}

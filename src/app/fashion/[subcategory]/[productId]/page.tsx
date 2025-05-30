'use client';

import { fashionProducts } from '@/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import RelatedProducts from '@/app/components/RelatedProducts';
import SubcategoryNav from '@/app/components/SubCategoryNav';

interface Props {
  params: {
    productId: string;
    subcategory: string;
  };
}

export default function ProductDetailPage({ params }: Props) {
  const product = fashionProducts.find(
    (p) => p.id.toString() === params.productId
  );

  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>('Black');

  if (!product) return notFound();

  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = ['Black', 'Ivory', 'Gold'];

  const handleQuantity = (type: 'inc' | 'dec') => {
    if (type === 'dec' && quantity > 1) setQuantity((q) => q - 1);
    if (type === 'inc') setQuantity((q) => q + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full mx-auto overflow-x-hidden"
    >
      <SubcategoryNav section="fashion" />
      <div className="w-4/5 mx-auto grid md:grid-cols-2 gap-32 items-start pt-8 mt-16">
        {/* Product details here... */}
        {/* Image, Info, Sizes, Colors, Quantity, Delivery, etc. */}
      </div>

      <RelatedProducts
        category={product.category}
        currentProductId={product.id}
      />
    </motion.div>
  );
}

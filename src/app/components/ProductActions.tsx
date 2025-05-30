'use client';

import React, { useState } from 'react';

interface ProductActionsProps {
  sizes: string[];
  colors: string[];
}

const ProductActions: React.FC<ProductActionsProps> = ({ sizes, colors }) => {
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>('Black');

  const handleQuantity = (type: 'inc' | 'dec') => {
    if (type === 'dec' && quantity > 1) setQuantity((q) => q - 1);
    if (type === 'inc') setQuantity((q) => q + 1);
  };

  return (
    <>
      {/* Sizes */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Size</label>
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 border rounded ${
                selectedSize === size
                  ? 'bg-amber-400 text-black border-amber-500'
                  : 'border-gray-300 text-gray-600'
              } transition`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Color</label>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-4 py-2 border rounded ${
                selectedColor === color
                  ? 'bg-amber-400 text-black border-amber-500'
                  : 'border-gray-300 text-gray-600'
              } transition`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">Quantity</label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleQuantity('dec')}
            className="w-8 h-8 text-xl bg-gray-100 hover:bg-gray-200 transition rounded"
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            onClick={() => handleQuantity('inc')}
            className="w-8 h-8 text-xl bg-gray-100 hover:bg-gray-200 transition rounded"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Bag */}
      <button className="mt-4 bg-amber-400 text-black font-medium px-6 py-3 rounded-sm hover:bg-amber-500 transition w-fit">
        Add to Bag
      </button>
    </>
  );
};

export default ProductActions;

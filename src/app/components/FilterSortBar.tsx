'use client';

import React from 'react';

interface FilterSortBarProps {
  selectedCategory: string;
  sortOrder: string;
  setCategory: (value: string) => void;
  setSortOrder: (value: string) => void;
}

const FilterSortBar: React.FC<FilterSortBarProps> = ({
  selectedCategory,
  sortOrder,
  setCategory,
  setSortOrder,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        <option value="">All Categories</option>
        <option value="Skincare">Skincare</option>
        <option value="Makeup">Makeup</option>
        {/* Add more categories as needed */}
      </select>

      {/* Sort Order */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterSortBar;

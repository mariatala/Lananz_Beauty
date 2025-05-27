import Image from "next/image";
import React from "react";

type ProductProps = {
	id: string;
	name: string;
	description: string;
	price: number;
	image: string;
	category: string;
};

const ProductCard = ({
	name,
	description,
	price,
	image,
	category,
}: ProductProps) => {
	return (
		<div className="flex w-80 flex-col items-start bg-white rounded-xs shadow-md  hover:shadow-lg group hover:bg-gray-100 transition-shadow duration-300 cursor-pointer">
			<div className="rounded-xs shadow-sm w-full p-2 bg-[#F8EFE4]">
				<Image
					src={image}
					alt={name}
                    width={320}
                    height={320}
                    loading="lazy"
					className="w-full h-72 object-cover rounded"
				/>
			</div>
			<div className="flex flex-col align-top justify-start p-4">
				<h2 className="text-l uppercase tracking-wider font-semibold mt-2 group-hover:text-amber-500 transition-colors duration-300">   
					{name}
				</h2>
				<p className="text-gray-600">{description}</p>
				<p className="text-lg font-bold mt-2">${(price ?? 0).toFixed(2)}</p>
				<p className="text-sm text-gray-500 mt-1">
					Category: <span>{category}</span>
				</p>
			</div>
		</div>
	);
};

export default ProductCard;
// Usage example:

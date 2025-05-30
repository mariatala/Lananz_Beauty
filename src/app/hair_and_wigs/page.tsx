import React from 'react';
import Display from '@/app/sections/display';
import LatestProducts from '@/app/sections/latest_products';
import SectionDividerOne from '@/app/sections/SectionDividerOne';
import SubcategoryNav from '@/app/components/SubCategoryNav';


const Home: React.FC = () => {
	return (
		<div className="pb-10 max-w-screen mx-auto">
			{/* Top navigation for fashion subcategories */}
			<SubcategoryNav section="hair_and_wigs" />
			<Display
				title="Hair & Wigs"
				description="Turn heads with premium wigs and hair essentials that define your style and confidence. Natural, sleek, or bold — your crown, your way."
				buttonText="Explore Hair"
				imageSrc="/hair-6.jpg"
			/>
			<SectionDividerOne
				heading="Your hair, your story — redefine your crown."
				subheading="From lace fronts to natural textures, find the pieces that let you express your identity, effortlessly."
				backgroundColor="bg-[#EAF4F4]" // soft mint
			/>

			<LatestProducts />
		</div>
	);
};

export default Home;

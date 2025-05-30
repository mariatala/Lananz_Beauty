import React from 'react';
import Display from '@/app/sections/display';
import LatestProducts from '@/app/sections/latest_products';
import SectionDividerOne from '@/app/sections/SectionDividerOne';
import SubcategoryNav from '@/app/components/SubCategoryNav';

const Home: React.FC = () => {
	return (
		<div className="pb-10 max-w-screen mx-auto">
			{/* Top navigation for fashion subcategories */}
			<SubcategoryNav section="fashion" />
			<Display
				title="Fashion"
				description="Discover handpicked fashion pieces designed to celebrate your individuality, confidence, and creativity. Something for every mood and moment."
				buttonText="New Arrivals"
				imageSrc="/fashion-2.jpg"
			/>
			<SectionDividerOne
				heading="New season clothing, fresh accessories & the latest beauty launches."
				subheading="Be one of the first to lay eyes on the handpicked, one-of-a-kind items that will breathe new life into your closet."
				backgroundColor="bg-[#F8EFE4]" // beige
			/>

			<LatestProducts />
		</div>
	);
};

export default Home;

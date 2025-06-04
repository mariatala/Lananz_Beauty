import React from 'react';
import Display from '@/app/sections/display';
import SectionDividerOne from '@/app/sections/SectionDividerOne';
import SubcategoryNav from '@/app/components/SubCategoryNav';
import MakeUpLandingPage from '@/app/sections/makeupLandingPage';
import Link from 'next/link';

const Home: React.FC = () => {
	return (
		<div className="pb-10 max-w-screen mx-auto">
			{/* Top navigation for fashion subcategories */}
			<SubcategoryNav section="makeup" />

			<Display
				title="Makeup"
				description="Glow up with high-quality, luxurious makeup essentials tailored for every skin tone. Your beauty, your rules."
				buttonLink="#appointment-form"
				buttonText="Book an appointment"
				imageSrc="/makeup-14.jpg"
			/>
			<SectionDividerOne
				heading="Find your shade, express your mood, beauty is personal"
				subheading="Our makeup collection is curated to suit every complexion and occasion. From radiant foundations to show-stopping lipsticks, discover what makes you feel confident, unique, and unforgettable."
				backgroundColor="bg-[#F0C02C]"
			/>
			<MakeUpLandingPage />

			{/* Additional section for makeup tips or guides */}
		</div>
	);
};

export default Home;

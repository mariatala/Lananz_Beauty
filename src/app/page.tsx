import React from 'react';
import Display from './sections/display';
import LatestProducts from './sections/latest_products';
import SectionDividerOne from './sections/SectionDividerOne';

export default function Home() {
	return (
		<>
			<Display />
			<SectionDividerOne />
			<LatestProducts />
		</>
	);
}

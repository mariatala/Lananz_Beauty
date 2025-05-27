import React from 'react';
import Display from './sections/display';
import LatestProducts from './sections/latest_products';
import SectionDividerOne from './sections/SectionDividerOne';
import { Section } from 'lucide-react';
export default function Home() {
	return (
		<>
			<Display />
			<SectionDividerOne />
	
			<LatestProducts />
		</>
	);
}

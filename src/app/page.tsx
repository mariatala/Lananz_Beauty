import React from 'react';
import Display from './sections/display';
import SectionDividerOne from './sections/SectionDividerOne';
import Homepage from '@/app/sections/homepage';
import { Cormorant_Garamond, Poppins, Tangerine } from 'next/font/google';
const cormorant = Cormorant_Garamond({ weight: '400', subsets: ['latin'] });
const tangerine = Tangerine({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: '400', subsets: ['latin'] });

const Home: React.FC = () => {
	return (
		<div className="pb-10 max-w-screen mx-auto">
	
			<Homepage />
		</div>
	);
};

export default Home;

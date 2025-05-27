import React from 'react';

import { Cormorant_Garamond, Poppins } from 'next/font/google';
import Image from 'next/image';

const cormorant = Cormorant_Garamond({ weight: '400', subsets: ['latin'] });
const poppins = Poppins({ weight: ['300', '400', '500'], subsets: ['latin'] });


const SectionDividerOne: React.FC = () => {
	return (
		<div className="w-full flex  flex-col items-center justify-center h-fit mx-auto my-8 ">
			{/* Divider line */}
			<h2 className={`w-5/6 text-3xl text-center mb-4 rounded-full ${poppins.className} text-neutral-700 font-light tracking-wide`}>
				New season clothing, fresh accessories & the latest beauty launches.
			</h2>
			<p className='w-5/6 text-center text-lg mb-4 rounded-full text-neutral-600 font-light tracking-wide'> 
				Be one of the first to lay eyes on the handpicked, one-of-a-kind items
				that will breathe new life into your closet.  
			</p>
		</div>
	);
};

export default SectionDividerOne;
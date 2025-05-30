'use client';

import React from 'react';

type VideoItem = {
	src: string;
	caption: string;
};

const videos: VideoItem[] = [
	{
		src: '/videos/makevid-1.mp4',
		caption: 'Step-by-step glam tutorial for everyday elegance.',
	},
	{
		src: '/videos/makevid-2.mp4',
		caption: 'Perfecting the bold lip with precision and flair.',
	},
	{
		src: '/videos/makevid-3.mp4',
		caption: 'Soft glam transformation from day to night.',
	},
	{
		src: '/videos/makevid-4.mp4',
		caption: 'Step-by-step glam tutorial for everyday elegance.',
	},
];

const VideoGallery: React.FC = () => {
	return (
		<div className="w-full max-w-6xl mx-auto">
		
			<div className="grid md:grid-cols-2 gap-16">
				{videos.map((video, i) => (
					<div
						key={i}
						className="relative group rounded overflow-hidden shadow-lg group"
					>
						<video
							src={video.src}
							autoPlay
							loop
							muted
							playsInline
							className="w-full h-auto object-cover"
						/>
						<div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-0 transition duration-300" />
						<div className="absolute bottom-4 left-4 right-4 text-white opacity-100 group-hover:opacity-0 transition duration-300">
							<p className="text-sm md:text-base font-light">{video.caption}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default VideoGallery;

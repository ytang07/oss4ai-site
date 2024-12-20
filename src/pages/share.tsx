import React, { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti';
import Script from 'next/script';

export default function SharePage() {
	const [confetti, setConfetti] = useState<JSConfetti | null>(null);
	const [shareSuccessful, setShareSuccessful] = useState(false);

	useEffect(() => {
		import('js-confetti').then((module) => {
			const JSConfetti = module.default;
			setConfetti(new JSConfetti());
		});
	}, []);

	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: 'OSS4AI',
					url: 'https://www.oss4.ai/',
				});
				console.log('Content shared successfully');
				confetti && confetti.addConfetti();
				setShareSuccessful(true);
				setTimeout(() => setShareSuccessful(false), 3000); // Reset after 3 seconds
			} catch (error) {
				console.error('Error in sharing:', error);
			}
		} else {
			console.log('Web Share API not supported');
		}
	};

	return (
		<>
			{shareSuccessful && <p className='text-white top-10 left-10 absolute text-xl mt-4 ibm-plex-mono py-2 px-2 bg-black'>Thank you for sharing!</p>}
			<div className='flex flex-col justify-center items-center h-screen bg-gradient-to-r bg-slate-800 via-slate-500 to-slate-700'>
				<div className='text-center py-4 px-4'>
					<button
						onClick={handleShare}
						className='bg-white text-indigo-500 underline text-xl md:text-3xl ibm-plex-mono font-semibold py-2 px-4 rounded-lg hover:bg-[#420069] hover:text-white transition duration-300'
					>
						Share OSS4AI Community
					</button>
				</div>
				<a href='/' target='_blank' className='text-white text-md md:text-lg text-center italic ibm-plex-mono font-semibold py-2 px-2'>
					click me to navigate back to oss4.ai
				</a>
			</div>
			{/* Google Analytics 4 */}
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-Y1G13WPJKZ" strategy="afterInteractive" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-Y1G13WPJKZ');
				`}
			</Script>
			{/* End Google Analytics 4 */}
		</>
	);
}

/* eslint-disable @next/next/next-script-for-ga */
import Head from 'next/head';
import PartnerCards from '../components/PartnerCards';
import companyData from '../data/companyData.json'
import React, { useMemo } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { JsonLd } from 'react-schemaorg';
import { WebSite, WithContext } from 'schema-dts';
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';
import { FaInfoCircle } from 'react-icons/fa';
import Script from 'next/script';
import Carousel from "../components/Carousel"

// Wrap components that don't need frequent updates in React.memo
const MemoizedPartnerCards = React.memo(PartnerCards);

export default function Home() {
	// const rawSpeakersData = speakersData;
	// Function to sort by ISO date
	// const sortSpeakersByDate = (a: { isoDate: string }, b: { isoDate: string }) => {
	// 	const dateA = new Date(a.isoDate);
	// 	const dateB = new Date(b.isoDate);
	// 	const now = new Date();

	// 	// Subtract 1.5 hours from the current time to get the threshold
	// 	const threshold = new Date(now.getTime() - 1.5 * 60 * 60 * 1000);

	// 	// Check if either date is in the past (more than 1.5 hours ago)
	// 	const isPastA = dateA < threshold;
	// 	const isPastB = dateB < threshold;

	// 	// If one is past and the other isn't, sort the past one to the bottom
	// 	if (isPastA && !isPastB) return 1;
	// 	if (!isPastA && isPastB) return -1;

	// 	// If both are past or both are not past, sort chronologically
	// 	return dateA.getTime() - dateB.getTime();
	// };

	const partnerData = useMemo(() => {
		return companyData.filter((companyData) => companyData.isCommunitySponsor);
	}, [companyData]);

	const devToolData = useMemo(() => {
		return companyData.filter((companyData) => !companyData.isDeveloperTool);
	}, [companyData]);

	// const splitCompanyData = useMemo(() => {
	// 	return companyData;
	// })

	// const scrollToSection = (id: string) => {
	// 	const element = document.getElementById(id);
	// 	if (element) {
	// 		element.scrollIntoView();
	// 	}
	// };

	const structuredData: WithContext<WebSite> = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'OSS4AI',
		description: 'Your one stop shop for getting a complete overview of AI Developer Tools.',
		url: 'https://www.oss4.ai',
	};

	return (
		<div className='relative'>
			<Head>
				<title>OSS4AI</title>
				<meta
					name='description'
					content='Join us to get a complete overview of the AI Developer Tool Ecosystem.'
				/>
				<meta property='og:title' content='AI Developer Tool Community' />
				<meta
					property='og:description'
					content='Join us to get a complete overview of the AI Developer Tool Ecosystem.'
				/>
				{/* <meta property='og:image' content='https://www.oss4.ai/og-banner.png' /> */}
				<meta property='og:url' content='https://www.oss4.ai' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@yujian_tang' />
				<meta name='twitter:creator' content='@yujian_tang' />
				<meta charSet="UTF-8"/> 
				<meta name="viewport" content="width=device-width, initial-scale=1"/> 

				{/* Google Tag Manager */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-WJ9G6M53');
						`,
					}}
				/>
				{/* End Google Tag Manager */}
			</Head>
			
			{/* Google Analytics 4 */}
			<Script async src='https://www.googletagmanager.com/gtag/js?id=G-Y1G13WPJKZ'></Script>
			<Script
				id='google-analytics'
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-Y1G13WPJKZ');
						`,
				}}
			/>
			{/* End Google Analytics 4 */}

			<NextSeo
				title='A Community for AI Developers'
				description='Join the best AI Developer Community, featuring talks from companies building the future of technology. Hosted by Yujian Tang.'
				canonical='https://www.oss4.ai'
				openGraph={{
					url: 'https://www.oss4.ai',
					title: 'The Best AI Developer Community',
					description: 'The only developer community dedicated to bringing you a complete view of the AI developer tool ecosystem. Hosted by Yujian Tang.',
					// images: [
					// 	{
					// 		url: 'https://www.oss4.ai/og-banner.png',
					// 		width: 1686,
					// 		height: 1121,
					// 		alt: 'The Best AI Developer Community',
					// 	},
					// ],
					site_name: 'OSS4AI',
				}}
				twitter={{
					handle: '@yujian_tang',
					site: '@yujian_tang',
					cardType: 'summary_large_image',
				}}
			/>

			{/* Google Tag Manager (noscript) */}
			<noscript>
				<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-WJ9G6M53' height='0' width='0' className='hidden'></iframe>
			</noscript>
			{/* End Google Tag Manager (noscript) */}

			{/* Sponsor banner moved to the top of the page, outside of other containers */}
			{/* <div className='fixed top-0 left-0 right-0 z-[9999] bg-slate-800 text-white px-2'>
				<p className='text-center text-sm font-sans'>
					<a
						href='https://www.ai2incubator.com/'
						className='italic underline hover:text-[#420069] font-medium tracking-wide ibm-plex-mono'
						target='_blank'
						rel='noopener noreferrer'
					>
						Sponsored by AI2 Incubator
					</a>
				</p>
			</div> */}

			<div className='relative z-10'>
				{/* Updated header with 3D elements */}
				<header className='min-h-screen flex flex-col relative'>
					<div className='top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg md:relative md:bg-transparent md:backdrop-filter-none'>
						<div className='text-center py-4 md:mb-16 md:pt-32'>
							{/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className='text-lg py-2 font-light mb-2 text-gray-600'>
								OSS4AI
							</motion.div> */}
							<motion.h1
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								className='text-4xl md:text-6xl font-bold mb-2 md:mb-4 relative'
							>
								<span className='relative z-10 text-[#420069]'>A Complete View of the AI Developer Tool Ecosystem</span>
								<motion.span
									className='absolute inset-0 text-[#069420] opacity-20 hidden md:inline-block' /* Opacity reduced */
									animate={{ x: [0, 5, 0], y: [0, 5, 0] }}
									transition={{ repeat: Infinity, duration: 5 }}
									style={{ zIndex: -1 }}
								>
									A Complete View of the AI Developer Tool Ecosystem
								</motion.span>
							</motion.h1>
						</div>
					</div>

					<section className="max-w-full overflow-hidden my-12">
						<Carousel 
							companies={devToolData}
						/>
					</section>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7, duration: 0.8 }}
						className='w-full justify-center max-w-4xl mx-auto bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-4 md:p-8 md:pl-24 mt-24 md:mt-16 md:static' /* Adjusted mt */
					>
						<h2 className='text-2xl md:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r text-[#420069] from-[#420069] to-[#d4af37]'>
							About OSS4AI</h2>

						<p className='ibm-plex-mono mb-6 md:mb-8 text-sm md:text-base'>
							OSS4AI started out as a community for open source, but we`&apos`ve since evolved into a community dedicated to 
							giving software developers a complete view of the AI developer tool ecosystem.
							OSS4AI is run completely on partnerships with companies providing ardent support for developers. See our partners below.
						</p>
						{/* Updated navigation buttons */}
						<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5'>
							<Link href='https://lu.ma/oss4ai' className='px-4 py-2 italic rounded-md border border-[#420069] text-[#420069] hover:bg-[#420069] hover:text-white transition-colors duration-300 text-center'>
								UPCOMING EVENTS
							</Link>
							<Link href='#contact' className='px-4 py-2 italic rounded-md border border-[#420069] text-[#420069] hover:bg-[#420069] hover:text-white transition-colors duration-300 text-center'>
								CONTACT US
							</Link>
							<Link href='#recordings' className='px-4 py-2 italic rounded-md border border-[#420069] text-[#420069] hover:bg-[#420069] hover:text-white transition-colors duration-300 text-center'>
								RECORDINGS
							</Link>
							<Link href='#partnerCards' className='px-4 py-2 italic rounded-md border border-[#420069] text-[#420069] hover:bg-[#420069] hover:text-white transition-colors duration-300 text-center'>
								PARTNERS
							</Link>
							<Link href='/share' className='px-4 py-2 italic rounded-md border border-[#420069] text-[#420069] hover:bg-[#420069] hover:text-white transition-colors duration-300 text-center'>SHARE</Link>
						</div>
					</motion.div>
				</header>

				{/* Partner Cards */}
				<section id='partnerCards' className='mx-auto px-8 my-16 grid grid-cols-1 md:grid-cols-2 gap-4'> {/* Adjusted my */}
					<div className='col-span-full mb-4 flex items-center justify-center text-gray-600 py-2'>
						<FaInfoCircle className='mr-2' />
						<span className='text-sm'>Click on a Partner card to view their detailed description</span>
					</div>
					{partnerData.map((partner, index) => (
						<MemoizedPartnerCards key={index} {...partner} />
					))}
				</section>
				
				<section id="recordings" className='my-16'> {/* Added my */}
					<div className='col-span-full mb-4 flex items-center justify-center text-gray-600 py-2'>
						<h2 className="text-xl">2 minute demos from companies that have pitched at our events!</h2>
					</div>
					<div className="col-span-full mb-4 flex items-center justify-center text-gray-600 py-2">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=nRw_AWzlWW-JUuM6&list=PLKiU8vyKB6tiWH-F8aHH8xKNacs8pMRA9" title="2 Minute Startup Pitches" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
					</div>
					<div className='col-span-full mb-4 flex items-center justify-center text-gray-600 py-2'>
						<h2 className="text-xl">Longer tech talks from in person and online events</h2>
					</div>
					<div className="col-span-full mb-4 flex items-center justify-center text-gray-600 py-2">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=2zAG4XAOMSTXwCLi&list=PLKiU8vyKB6tj5tYJShMrG9JrmTLYcavj8" title="Gen AI Tech Talks" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
					</div>
				</section>

				{/* Contact Information Section */}
				<section className='my-24 px-8'>
					<div className='max-w-6xl mx-auto'>
						<h2 className='text-3xl font-semibold mb-6 text-[#420069]'>CONTACT</h2>
						<div className='mt-4 ibm-plex-mono text-gray-800'>
							<p className='pb-1'>
								OSS4AI is led by Yujian Tang. Yujian Tang started software engineering at IBM at age 16, has published papers to conferences like IEEE Big Data, 
								worked on the AutoML infrastructure at Amazon, and previously founded an NLP company. 
							</p>
							<div className='py-2'>
								<p className='italic ibm-plex-mono text-white font-bold bg-slate-800 underline py-2 px-2 w-full'>Find me on LinkedIn!</p>
							</div>
							<div className='flex flex-col sm:flex-row gap-8'>
								{/* Card for Yujian Tang */}
								<div className='bg-white rounded overflow-hidden shadow-lg  w-[15rem] h-[20rem]'>
									<div className='w-full h-64 relative'>
										<Image src='/team-photos/yujian.jpeg' width="240" height="240" alt='Yujian Tang' className='rounded-t' loading='lazy' sizes='(max-width: 240px) 100vw, 240px' />
									</div>
									<div id='contact' className='text-center py-1'>
										<a href='https://www.linkedin.com/in/yujiantang/' target='_blank' className='flex text-center justify-center font-bold underline text-lg hover:text-[#420069]'>
											Yujian Tang <Image src='/linkedin.svg' className='pl-1' width={20} height={20} alt='LinkedIn' />
										</a>
										{/* <p className='text-lg mb-2 hover:text-blue-600'>
											<a href='mailto:zaxel3@gatech.edu' className='text-sm  mb-2 hover:text-blue-600'>
												zaxel3@gatech.edu
											</a>
										</p> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className='my-12 text-center text-sm px-16'>
					<p className='ibm-plex-mono'>© Memetech, LLC. All rights reserved.</p>
				</footer>
			</div>
			<ScrollToTop />
			<JsonLd<WebSite> item={structuredData} />
			<BreadcrumbJsonLd
				itemListElements={[
					{
						position: 1,
						name: 'Home',
						item: 'https://www.oss4.ai',
					},
				]}
			/>
		</div>
	);
}

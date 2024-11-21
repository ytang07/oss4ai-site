import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/legacy/image';
import Script from 'next/script';
import companyData from '../../data/companyData.json';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { NextSeo, BreadcrumbJsonLd } from 'next-seo';
import { JsonLd } from 'react-schemaorg';
import { Organization, Person, WithContext } from 'schema-dts';
// import SidebarGallery from '../../components/SidebarGallery';
import Link from 'next/link';
import { FaChevronLeft, FaShare } from 'react-icons/fa';

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = companyData.map((company) => ({
		params: { slug: company.slug},
	}));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const company = companyData.find((a) => a.slug === params?.slug);
	return { props: { company } };
};

const PartnerPage = ({ company }: { company: any }) => {
	const structuredData: WithContext<Organization> = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: company.name,
		description: company.description,
		logo: company.companyLogo,
		url: `https://www.oss4.ai/partner/${company.slug}`,
		sameAs: [company.website],
	};

	return (
		<>
			<NextSeo
				title={`${company.name} - OSS4AI Partner`}
				description={company.description}
				openGraph={{
					title: `${company.name} - OSS4AI Partner`,
					description: company.description,
					images: [{ url: company.companyLogo, alt: company.name }],
					type: 'profile',
					url: `https://www.oss4.ai/partner/${company.slug}`,
				}}
				twitter={{
					cardType: 'summary_large_image',
				}}
			/>
			<BreadcrumbJsonLd
				itemListElements={[
					{
						position: 1,
						name: 'Home',
						item: 'https://www.oss4.ai',
					},
					{
						position: 2,
						name: 'Partners',
						item: 'https://www.oss4.ai/partners',
					},
					{
						position: 3,
						name: company.name,
						item: `https://www.oss4.ai/partner/${company.slug}`,
					},
				]}
			/>
			<JsonLd<WithContext<Organization>> item={structuredData} />
			<Head>
				<link rel='canonical' href={`https://www.oss4.ai/partner/${company.slug}`} />
			</Head>
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
			<div className='container mx-auto px-4 py-8 relative z-10 flex flex-col items-center'>
				<article className='w-full max-w-4xl'>
					<div className='bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg p-4 md:p-8 shadow-lg'>
						<div className='flex justify-between items-center mb-4 md:mb-6'>
							<div className='flex items-center'>
								<Link href='/' className='text-[#013057] hover:text-[#420069] transition-colors duration-300 mr-4'>
									<FaChevronLeft size={24} />
								</Link>
								<h1 className='text-3xl md:text-4xl font-bold text-[#420069]'>{company.name}</h1>
							</div>
							<Link href='/share' className='text-[#013057] hover:text-[#420069] transition-colors duration-300 flex flex-col items-center'>
								<FaShare size={24} />
								<span className='text-[8px] uppercase mt-1 text-black font-bold tracking-widest'>SHARE</span>
							</Link>
						</div>
						<div className='mb-6 md:mb-8 relative w-32 h-32 md:w-48 md:h-48 mx-auto'>
							<Image src={company.companyLogo} layout='fill' objectFit='contain' alt={`${company.name} Logo`} className='rounded-full' />
						</div>
						<p className='mb-3 md:mb-4 text-lg md:text-xl font-semibold text-gray-700 text-center'>{company.distinction}</p>
						<p className='mb-4 md:mb-6 ibm-plex-mono text-sm md:text-base text-gray-800 text-center'>{company.description}</p>
						<div className='text-center'>
							<a
								href={company.website}
								className='text-[#013057] underline hover:text-[#420069] transition-colors duration-300 text-sm md:text-base'
								target='_blank'
								rel='noopener noreferrer'
							>
								Company Website
							</a>
						</div>

						{/* Render markdown biography */}
						{/* <section className='mt-8 md:mt-12'>
							<h2 className='text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-[#420069] text-center'>Biography</h2>
							<ReactMarkdown remarkPlugins={[remarkGfm]} className='prose prose-sm md:prose-base prose-blue max-w-none ibm-plex-mono text-gray-800'>
								{company.markdownBiography}
							</ReactMarkdown>
						</section> */}

						{/* Render markdown timeline */}
						{/* <section className='mt-8 md:mt-12'>
							<h2 className='text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-[#420069] text-center'>Career Timeline</h2>
							<ReactMarkdown remarkPlugins={[remarkGfm]} className='prose prose-sm md:prose-base prose-blue max-w-none ibm-plex-mono text-gray-800'>
								{company.markdownTimeline}
							</ReactMarkdown>
						</section> */}
					</div>
				</article>
				{/* <aside className='hidden lg:block mt-8'>
					<SidebarGallery currentSpeaker={company.name} partners={companyData} />
				</aside> */}
			</div>
		</>
	);
};

export default PartnerPage;

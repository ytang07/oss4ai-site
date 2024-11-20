import React from 'react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';

interface CompanyProps {
	name: string;
	companyLogo: string;
	description: string;
	slug: string;
	website: string;
	projects: string;
    isCommunitySponsor?: String;
}

const PartnerCards = ({ name, companyLogo, description, slug, website, projects, isCommunitySponsor }: CompanyProps) => {
	const router = useRouter();

	return (
		<div
			className='card drop-shadow-md rounded-sm bg-base-100 shadow-xl flex flex-col outline outline-[#420069] p-6'
			onClick={() => router.push(`/partner/${slug}`)}
			style={{ cursor: 'pointer' }}
		>
			<div className='flex'>
				<div className='w-24 h-24 relative'>
					<Image src={companyLogo} layout='fill' objectFit='contain' alt='Partner' className='rounded' />
				</div>
				<div className='px-6'>
					<h3 className='text-2xl font-semibold'>{name}</h3>
					{/* <p className='mt-2'>{distinction}</p> */}
					<p className='mt-2'>
						<a href={website} target='_blank' rel='noreferrer' className='text-blue-500' onClick={(e) => e.stopPropagation()}>
							Website
						</a>
					</p>
				</div>
			</div>
			<p className='mt-4 text-[0.95rem]'>{description}</p>
		</div>
	);
};

export default PartnerCards;

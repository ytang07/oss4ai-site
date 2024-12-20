import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { FaUsers, FaTimes } from 'react-icons/fa';

type GalleryItem = {
	name: string;
	slug: string;
	companyLogo: string;
};

type SidebarGalleryProps = {
	currentCompany: string;
	partners: GalleryItem[];
	participants: GalleryItem[];
};

const SidebarGallery: React.FC<SidebarGalleryProps> = ({ currentCompany, partners, participants }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const otherPartners =  [...partners.map((s) => ({ ...s, type: 'partner' }))].filter((item) => item.name != currentCompany)
	const otherParticipants =  [...participants.map((s) => ({ ...s, type: 'participant' }))].filter((item) => item.name != currentCompany)

	const toggleSidebar = () => setIsOpen(!isOpen);

	const renderGalleryContent = () => (
		<div className='space-y-4 overflow-y-auto flex-grow'>
			<div className='font-bold text-lg flex items-center space-x-3 p-2 rounded-lg'>Community Partners</div>
			{otherPartners.map((item) => (
				<Link href={`/${item.type}/${item.slug}`} key={item.slug}>
					<div className='flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300'>
						<div className='relative w-12 h-12 flex-shrink-0'>
							<Image src={item.companyLogo} layout='fill' objectFit='contain' alt={item.name} className='rounded-full' />
						</div>
						<div>
							<p className='font-semibold text-sm text-[#013057]'>{item.name}</p>
						</div>
					</div>
				</Link>
			))}
			<div className="font-bold text-lg flex items-center space-x-3 p-2 rounded-lg">Participant Companies</div>
			{otherParticipants.map((item) => (
				<Link href={`/${item.type}/${item.slug}`} key={item.slug}>
					<div className='flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300'>
						<div className='relative w-12 h-12 flex-shrink-0'>
							<Image src={item.companyLogo} layout='fill' objectFit='contain' alt={item.name} className='rounded-full' />
						</div>
						<div>
							<p className='font-semibold text-sm text-[#013057]'>{item.name}</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);

	if (!isMounted) {
		return null; // or a loading placeholder
	}

	return (
		<>
			{/* Toggle button */}
			<div className='fixed bottom-4 right-4 z-50'>
				<button onClick={toggleSidebar} className='bg-[#013057] text-white p-4 rounded-full shadow-lg flex items-center justify-center'>
					{isOpen ? <FaTimes className='w-6 h-6' /> : <FaUsers className='w-6 h-6' />}
				</button>
			</div>

			{/* Sidebar content */}
			<div
				className={`
          fixed top-0 right-0 h-full z-40
          w-64 sm:w-72 md:w-80 lg:w-96
          bg-white shadow-lg
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
			>
				{/* <div className='h-full flex flex-col'>
					<div className='p-4 flex justify-between items-center border-b'>
						<h2 className='text-xl font-bold text-[#013057]'>See more</h2>
						<button onClick={toggleSidebar} className='text-[#013057]'>
							<FaTimes className='w-6 h-6' />
						</button>
					</div>
					<div className='h-full flex flex-col flex-grow overflow-y-auto p-4'>{renderGalleryContent()}</div>
				</div> */}
				<div className='h-full flex flex-col flex-grow overflow-y-auto p-4'>{renderGalleryContent()}</div>
			</div>
		</>
	);
};

export default SidebarGallery;

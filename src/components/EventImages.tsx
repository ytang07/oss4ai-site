"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getEventImages } from '@/services/notion'; // Assuming getEventImages is exported from notion.ts

interface EventImage {
  id: string; // Add the unique ID
  title: string;
  imageUrl: string | null;
}

const EventImages: React.FC = () => {
  const [images, setImages] = useState<EventImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // State for the active image index

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const fetchedImages = await getEventImages();
        // Filter out images without URLs
        const validImages = fetchedImages.filter((img: EventImage) => img.imageUrl !== null);
        setImages(validImages);
      } catch (err) {
        console.error("Failed to fetch event images:", err);
        setError("Failed to load event images. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Effect for automatic cycling
  useEffect(() => {
    if (images.length > 0 && !loading && !error) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Cycle every 3 seconds
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [images, loading, error]);

  if (loading) {
    return <div id="events" className="mx-auto max-w-7xl px-5 py-24 text-center text-[var(--muted)] sm:px-8">Loading event images...</div>;
  }

  if (error) {
    return <div id="events" className="mx-auto max-w-7xl px-5 py-24 text-center text-red-300 sm:px-8">{error}</div>;
  }

  if (images.length === 0) {
    return <div id="events" className="mx-auto max-w-7xl px-5 py-24 text-center text-[var(--muted)] sm:px-8">No event images found.</div>;
  }

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="events" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div><p className="eyebrow mb-3">Field notes</p><h2 className="display-face text-4xl font-bold sm:text-6xl">From the archive</h2></div>
        <span className="hidden font-mono text-xs text-[var(--muted)] sm:block">SCROLL TO EXPLORE ↓</span>
      </div>
      <div className="flex flex-col items-center">
        {/* Main Image Display */}
        <div className="relative mb-8 h-[22rem] w-full max-w-5xl overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] sm:h-[32rem]">
          {images[activeIndex]?.imageUrl && (
            <Image
              src={images[activeIndex].imageUrl}
              alt={images[activeIndex].title}
              fill
              className="object-cover"
            />
          )}
          {/* Caption for the main image */}
          {images[activeIndex]?.title && ( // Display caption if available
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07111f] to-transparent px-6 pb-5 pt-12 text-left text-sm font-bold">
              {images[activeIndex].title}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        <div className="scrollbar-hide flex max-w-full space-x-3 overflow-x-auto pb-4">
          {images.map((event, index) => (
            <div
              key={event.id}
              className={`relative h-20 w-28 shrink-0 cursor-pointer overflow-hidden rounded-xl border ${
                index === activeIndex ? 'border-[var(--primary-color)]' : 'border-[var(--line)] opacity-60 hover:opacity-100'
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              {event.imageUrl && (
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventImages;

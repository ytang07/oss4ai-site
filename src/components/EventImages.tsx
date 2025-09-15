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
    return <div className="text-center py-16">Loading event images...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>;
  }

  if (images.length === 0) {
    return <div className="text-center py-16">No event images found.</div>;
  }

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="events" className="py-16 px-4 md:px-8 bg-[var(--background)]">
      <h2 className="text-4xl font-bold text-center mb-12 text-[var(--foreground)]">Event Images</h2>
      <div className="flex flex-col items-center">
        {/* Main Image Display */}
        <div className="relative w-full max-w-3xl h-96 mb-8">
          {images[activeIndex]?.imageUrl && (
            <Image
              src={images[activeIndex].imageUrl}
              alt={images[activeIndex].title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          )}
          {/* Caption for the main image */}
          {images[activeIndex]?.title && ( // Display caption if available
            <div className="absolute bottom-0 left-0 right-0 bg-[var(--background)] bg-opacity-50 text-[var(--foreground)] text-center p-2 rounded-b-lg">
              {images[activeIndex].title}
            </div>
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {images.map((event, index) => (
            <div
              key={event.id}
              className={`relative w-24 h-24 rounded-lg shadow-md cursor-pointer overflow-hidden ${
                index === activeIndex ? 'border-4 border-[var(--accent-color)]' : ''
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              {event.imageUrl && (
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
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

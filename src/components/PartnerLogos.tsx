'use client';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme CSS

interface Partner {
  id: string;
  name: string;
  logoUrl: string | null;
}

const PartnerLogos: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('/api/partner-logos');
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }
        const data: Partner[] = await response.json();
        setPartners(data);
      } catch (err: any) {
        console.error("Failed to fetch partners:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading) {
    return <div id="partners" className="mx-auto max-w-7xl px-5 py-20 text-[var(--muted)] sm:px-8">Loading partners...</div>;
  }

  if (error) {
    return <div id="partners" className="mx-auto max-w-7xl px-5 py-20 text-red-300 sm:px-8">Error loading partners: {error}</div>;
  }

  if (partners.length === 0) {
    return <div id="partners" className="mx-auto max-w-7xl px-5 py-20 text-[var(--muted)] sm:px-8">No partners found.</div>;
  }

  // Settings for the carousel
  const settings = {
    dots: false, // Hide dots
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed in ms
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1800,
    arrows: false, // Hide arrows
    responsive: [
      {
        breakpoint: 1024, // tablet breakpoint
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 600, // mobile breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 480, // smaller mobile breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      }
    ]
  };

  return (
    <div id="partners" className="partner-logos-container mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      <div className="mb-10"><p className="eyebrow mb-3">The network</p><h2 className="display-face text-4xl font-bold sm:text-6xl">Built in public.</h2></div>
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.id} className="logo-item-wrapper">
            <div className="logo-item">
              {partner.logoUrl ? (
                <img src={partner.logoUrl} alt={`${partner.name} logo`} className="partner-logo-img" />
              ) : null}
              <span className="company-name">{partner.name}</span>
            </div>
          </div>
        ))}
      </Slider>
      <style jsx>{`
        .partner-logos-container {
          text-align: center;
        }
        .logo-item-wrapper {
          display: flex !important; /* Important to override slick-carousel default */
          justify-content: center;
          align-items: center;
          padding: 0 10px; /* Add some horizontal padding for spacing */
        }
        .logo-item {
          display: flex;
          flex-direction: column; /* Stack logo and name vertically */
          align-items: center;
          justify-content: center;
          padding: 20px;
          border: 1px solid var(--line);
          border-radius: 16px;
          background-color: var(--surface);
          min-width: 150px; /* Ensure a minimum width for each item */
          height: 150px; /* Fixed height for consistency */
          margin: 0 auto; /* Center the item if it's smaller than its container */
        }
        .partner-logo-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain; /* Ensures the logo scales correctly without distortion */
        }
        .logo-item span {
          font-weight: bold;
          color: var(--muted);
          margin-top: 12px; /* Increased margin for better separation */
        }
        /* Custom styles for slick-carousel */
        .slick-slide > div {
          margin: 0 10px; /* Adjust spacing between slides */
        }
      `}</style>
    </div>
  );
};

export default PartnerLogos;

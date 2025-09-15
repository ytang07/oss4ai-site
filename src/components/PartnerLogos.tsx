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
    return <div>Loading partners...</div>;
  }

  if (error) {
    return <div>Error loading partners: {error}</div>;
  }

  if (partners.length === 0) {
    return <div>No partners found.</div>;
  }

  // Settings for the carousel
const settings = {
  dots: false, // Hide dots
  infinite: true, // Enable infinite loop
  speed: 500, // Transition speed in ms
  slidesToShow: 5, // Number of slides to show at once
  slidesToScroll: 1, // Number of slides to scroll at once
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000, // Autoplay speed in ms
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
    <div className="partner-logos-container py-16 px-4 md:px-8 bg-[var(--background)]"> {/* Changed background to dark gray */}
      <h2 className="text-4xl font-bold text-center mb-12 text-[var(--foreground)]">Trusted by Leading Organizations</h2> {/* Changed text color to white */}
      <Slider {...settings}>
        {partners.map((partner) => (
          <div key={partner.id} className="logo-item-wrapper">
            <div className="logo-item">
              {partner.logoUrl ? (
                <img src={partner.logoUrl} alt={`${partner.name} logo`} className="partner-logo-img" />
              ) : (
                <span>{partner.name}</span>
              )}
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
          align-items: center;
          justify-content: center;
          padding: 10px;
          border: 1px solid var(--foreground); /* Keep border light for contrast */
          border-radius: 8px;
          background-color: var(--foreground); /* Keep background of individual logo item white */
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
          color: var(--foreground); /* Keep text color dark */
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

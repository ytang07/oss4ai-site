import { motion } from 'framer-motion';
import Image from 'next/legacy/image';
import { useEffect, useState } from 'react';

interface Company {
  name: string;
  companyLogo: string;
}

interface Props {
  companies: Company[];
}

export default function Carousel({ companies }: Props) {
  const [isMobile, setIsMobile] = useState(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false; // Default for server-side rendering
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white py-8">
      <motion.div
        className="flex"
        animate={{
          x: ['0%', '-100%']
        }}
        transition={{
          duration: isMobile ? 5 : 20, // 5 seconds for mobile, 30 seconds for web
          ease: "linear",
          repeat: Infinity
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {/* First set of images */}
        <div className="flex md:gap-16 gap-4 md:px-8 px-2">
          {companies.map((company, idx) => (
            <div
              key={`first-${idx}`}
              className="relative w-[240px] md:w-[200px] h-[120px] md:h-[100px] flex-shrink-0"
            >
              <Image
                src={company.companyLogo}
                alt={company.name}
                layout="fill"
                objectFit="contain"
                className="grayscale hover:grayscale-0 transition-all duration-300"
                style={
                  {backgroundColor: 'transparent'}
                }
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
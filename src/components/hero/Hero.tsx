import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero: React.FC = () => {
  return (
    <section className="mt-7 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
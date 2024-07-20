import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f6f526edef80ef9d5989fa5ad3785734979f491bdfc14f259cbff8dd75931a?apiKey=bca3b693d56b420282f1dc9a3df0d304&"
        alt="Hero illustration"
        className="grow w-full aspect-[1.11] max-md:mt-10 max-md:max-w-full"
      />
    </div>
  );
};

export default HeroImage;
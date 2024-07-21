import React from 'react';

interface FeatureDescriptionProps {
  description: string;
}

const FeatureDescription: React.FC<FeatureDescriptionProps> = ({ description }) => {
  return (
    <div className="flex flex-col px-5 text-xs max-md:mt-10 max-md:max-w-full">
      <p className="text-neutral-600 max-md:max-w-full">{description}</p>
      <button className="justify-center self-start px-7 py-3 mt-5 font-medium text-sky-400 rounded-md border border-sky-400 border-solid max-md:px-5">
        Pelajari Selengkapnya
      </button>
    </div>
  );
};

export default FeatureDescription;
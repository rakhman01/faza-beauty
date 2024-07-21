import React from 'react';
import FeatureItem from './FeatureItem';

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="flex flex-col grow px-5 text-xs text-neutral-600 max-md:mt-10 max-md:max-w-full">
      <p className="max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} />
      ))}
    </div>
  );
};

export default FeatureList;
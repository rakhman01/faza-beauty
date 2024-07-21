import React from 'react';
import FeatureList from './FeatureList';
import FeatureDescription from './FeatureDescription';

interface FeatureSectionProps {
  features: string[];
  description: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features, description }) => {
  return (
    <section className="mt-10 w-full max-w-[1001px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <FeatureList features={features} />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <FeatureDescription description={description} />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
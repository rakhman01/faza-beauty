import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-start pt-7 pr-11 pb-12 pl-5 w-full bg-white rounded shadow-sm text-slate-600 max-md:pr-5 max-md:mt-4">
        <img loading="lazy" src={icon} alt="" className="w-7 aspect-square" />
        <div className="mt-3 text-sm font-medium">{title}</div>
        <div className="mt-5 text-xs leading-4">{description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
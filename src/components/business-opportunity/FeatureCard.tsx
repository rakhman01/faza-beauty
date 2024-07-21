import React from 'react';

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="grow px-4 py-6 w-full bg-white rounded shadow-sm max-md:mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src={imageSrc} alt="" className="grow shrink-0 max-w-full aspect-[1.28] w-[190px] max-md:mt-9" />
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
              <h3 className="text-sm font-semibold text-slate-600">{title}</h3>
              <div className="shrink-0 mt-2 h-px border border-solid bg-slate-600 border-slate-600" />
              <p className="mt-2.5 text-xs text-neutral-600">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
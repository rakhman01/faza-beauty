import React from 'react';

type FeatureListProps = {
  features: string[];
};

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <ul className="mt-8 w-full">
      {features.map((feature, index) => (
        <li key={index} className="flex gap-2 mt-2.5 text-xs">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cc4ed18449d1fbf7aeaa6dc71b5a45f579d0e49dfb765cb6584ab354a7af508?apiKey=bca3b693d56b420282f1dc9a3df0d304&" 
            alt=""
            className="shrink-0 w-4 aspect-square" 
          />
          <span className="flex-auto my-auto">{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
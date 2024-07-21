import React from 'react';

interface FeatureItemProps {
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <div className="flex gap-3.5 mt-2.5 max-md:flex-wrap">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fed0b950e4ff7fb927737c9368389faac819c9b74ecfdba5809a6a50feb31943?apiKey=bca3b693d56b420282f1dc9a3df0d304&" className="shrink-0 w-6 aspect-square" alt="" />
      <p className="flex-auto my-auto max-md:max-w-full">{text}</p>
    </div>
  );
};

export default FeatureItem;
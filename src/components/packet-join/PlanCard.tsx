import React from 'react';
import FeatureList from './FeatureList';

type PlanProps = {
  plan: {
    name: string;
    price: number;
    features: string[];
    isPopular?: boolean;
  };
};

const PlanCard: React.FC<PlanProps> = ({ plan }) => {
  return (
    <article className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className={`flex flex-col grow items-start py-20 pr-20 pl-9 mx-auto w-full bg-white rounded-md shadow-sm text-neutral-500 max-md:px-5 max-md:mt-6 ${plan.isPopular ? 'pb-20' : ''}`}>
        {plan.isPopular && (
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1f6ab2f7c8951212c900e15d3c6afcee51fef91b400c707f5262dbc2942882c?apiKey=bca3b693d56b420282f1dc9a3df0d304&" 
            alt=""
            className="self-center aspect-[50] fill-sky-400 w-[313px]" 
          />
        )}
        <h2 className="text-sm font-semibold text-slate-600">
          {plan.name}
          <br />
        </h2>
        <div className="flex gap-px mt-3.5 whitespace-nowrap text-slate-600">
          <span className="text-4xl font-light text-center">$</span>
          <span className="flex-auto text-4xl">{plan.price}</span>
        </div>
        <div className="mt-3.5 text-xs font-medium text-center text-sky-400">
          package set
        </div>
        <FeatureList features={plan.features} />
        <button className="justify-center px-8 py-3 mt-11 text-xs font-semibold text-white whitespace-nowrap bg-sky-400 rounded-[57px] max-md:px-5 max-md:mt-10">
          Mulai
        </button>
      </div>
    </article>
  );
};

export default PlanCard;
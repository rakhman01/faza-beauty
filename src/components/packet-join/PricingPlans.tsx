import React from 'react';
import PlanCard from './PlanCard';

type Plan = {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Free Plan',
    price: 0,
    features: [
      'Quam adipiscing vitae proin',
      'Nec feugiat nisl pretium',
      'Nulla at volutpat diam uteera',
      'Pharetra massa massa ultricies',
      'Massa ultricies mi quis hendrerit'
    ]
  },
  {
    name: 'Business Plan',
    price: 39,
    features: [
      'Quam adipiscing vitae proin',
      'Nec feugiat nisl pretium',
      'Nulla at volutpat diam uteera',
      'Pharetra massa massa ultricies',
      'Massa ultricies mi quis hendrerit'
    ],
    isPopular: true
  },
  {
    name: 'Developer Plan',
    price: 29,
    features: [
      'Quam adipiscing vitae proin',
      'Nec feugiat nisl pretium',
      'Nulla at volutpat diam uteera',
      'Pharetra massa massa ultricies',
      'Massa ultricies mi quis hendrerit'
    ]
  }
];

const PricingPlans: React.FC = () => {
  return (
    <section className="px-5 mt-6 w-full max-w-[987px] max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
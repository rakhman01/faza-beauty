import React from "react";
import FeatureSection from "./FeatureSection";

const About: React.FC = () => {
    let features = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ]
    let description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem sit neque modi. Laboriosam recusandae consequatur reiciendis sint est ab explicabo qui. Reprehenderit, aliquid accusantium quos cumque natus earum nam.'
  return (
    <section className="pt-7 max-md:max-w-full flex flex-col items-center bg-white">
    <h2 className="text-2xl font-bold uppercase text-slate-600">
        Tentang Kami
      </h2>
      <FeatureSection features={features} description={description} />
    </section>
  );
};

export default About;
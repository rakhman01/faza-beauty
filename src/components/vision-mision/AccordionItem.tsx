import React from 'react';

interface AccordionItemProps {
  number: string;
  question: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ number, question }) => {
  return (
    <div className="flex gap-5 justify-between items-start px-5 py-4 mt-3.5 w-full bg-white rounded max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-5">
        <div className="font-semibold text-sky-400">{number}</div>
        <div className="flex-auto font-medium text-black">{question}</div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bab160af71d01f3291db453ac6ce40a913543398de2fee1191910b2b48f16d97?apiKey=bca3b693d56b420282f1dc9a3df0d304&" alt="" className="shrink-0 w-3.5 aspect-square" />
    </div>
  );
};

export default AccordionItem;
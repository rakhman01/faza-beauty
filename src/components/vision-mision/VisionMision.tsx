import React from 'react';
import AccordionItem from './AccordionItem';
import FeatureCard from './FeatureCard';

interface VisionMissionProps {}

const accordionItems = [
  {
    number: '01',
    question: 'Apa sih Visi dari perusahaan kami?'
  },
  {
    number: '02',
    question: 'Bagaimana dengan misi kami?'
  },
  {
    number: '03',
    question: 'Kenapa harus memilih bisnis kami?'
  }
];

const featureCards = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/aca3f6d72915207307bfb8cfbc3133031b01d61d3ccd6280e1b869af53581253?apiKey=bca3b693d56b420282f1dc9a3df0d304&',
    title: 'Modern Bisnis',
    description: 'Memperkenalkan serta mengedukasi tentang apa itu bisnis era digital'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/acd373f6c03c8dade175c856fed5d8abba612c93882e19776a046538bcd9e336?apiKey=bca3b693d56b420282f1dc9a3df0d304&',
    title: 'Uji Lab',
    description: 'Produk yang sudah diuji kualitasnya melalui teknologi canggih labolatorium'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f117102f37c6cd3eec41b0bde0929c3bcb1fdf24f09e81d7684a83766ce0baec?apiKey=bca3b693d56b420282f1dc9a3df0d304&',
    title: 'Trend Produk',
    description: 'Dengan banyaknya permintaan pasar dan hasil riset sehingga mudah untuk dijual'
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/70ed68c9425972b66bc20a7fba6a8093ba139774362ae1cb59918d48c7d8b4c0?apiKey=bca3b693d56b420282f1dc9a3df0d304&',
    title: 'Keamanan Sistem',
    description: 'Data yang ada dalam sistem akan secara otomatis terenkripsi sehingga tidak akan ada kebocoran data'
  }
];

const VisionMission: React.FC<VisionMissionProps> = () => {
  return (
    <section className="flex flex-col items-center self-stretch px-20 pt-12 pb-20 mt-0 w-full bg-slate-100 max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[1247px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-sm max-md:mt-10 max-md:max-w-full">
              <h2 className="text-xl font-medium text-slate-600 max-md:max-w-full">
                <span>Impian Kami Dalam Membangun</span>{" "}
                <span className="font-semibold text-slate-600">
                  Sistem Bisnis Yang Dapat Di Pelajari Oleh Pemula Dengan Bimbingan Mentor Ahli
                </span>
              </h2>
              {accordionItems.map((item, index) => (
                <AccordionItem key={index} number={item.number} question={item.question} />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8d7a58e96c5dba972d34dff862d6f586f34acd8f6b890716a9ea5a044e8c535?apiKey=bca3b693d56b420282f1dc9a3df0d304&"
              alt="Vision and Mission illustration"
              className="grow w-full aspect-[1.09] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-5 w-full max-w-[992px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {featureCards.map((card, index) => (
            <FeatureCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
import React from 'react';

const SuccessSection: React.FC = () => {
  return (
    <div className="mt-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/932e8309c376d70c1d1685ac90665a3ae3656b89ae664f1c47636b7b09d6da74?apiKey=bca3b693d56b420282f1dc9a3df0d304&" alt="" className="grow w-full aspect-[1.25] max-md:mt-10 max-md:max-w-full" />
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h2 className="text-xl font-semibold text-slate-600 max-md:max-w-full">
              Sukses karena berbisnis
            </h2>
            <p className="mt-9 text-sm font-medium leading-7 text-neutral-600 max-md:max-w-full">
              PT. Fazza Beauty Skin bukan sekedar bisnis biasa pada umumnya. Dengan produk yang kami ciptakan anda dapat mencapai impian anda menjadi sukses dan meningkatkan kesadaran hidup sehat dan sejahtera. Buatlah suatu perubahan dala hidup anda mulai sekarang dan ajak orang-orang sekitar untuk membantu meningkatkan kehidupan mereka.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;
import React from 'react';
import FeatureCard from './FeatureCard';
import SuccessSection from './SuccessSection';

interface BusinessOpportunityProps {}

const BusinessOpportunity: React.FC<BusinessOpportunityProps> = () => {
  const features = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8c729f328de43393eb214ee9423ebc76153510617352337261f7dfaeee021c4?apiKey=bca3b693d56b420282f1dc9a3df0d304&",
      title: "Manage jam kerja anda",
      description: "Anda memiliki kebebasan untuk menjadi bos Anda sendiri dan bekerja di jam Anda yang telah Anda atur sendiri. Bekerja secara paruh waktu atau penuh waktu - itu adalah pilihan Anda."
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/43ecc15ceeeea560cd22313b71475ca04ffc5517ac50a2cc3981d29ad373dbdd?apiKey=bca3b693d56b420282f1dc9a3df0d304&",
      title: "Produk yang berkualitas",
      description: "Produk yang diproduksi sudah dilakukan riset permintaan pasar sehingga anda bisa menjual produk dengan mudah melalui media sosial anda"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bb36d08c454ae7543ecd3468dde83cded304421bced9484c4640c0921a48d56?apiKey=bca3b693d56b420282f1dc9a3df0d304&",
      title: "Mentoring bisnis",
      description: "Dengan perangkat pendukung dan pelatihan ahli, Anda akan menemukan segalanya di sini untuk membangun bisnis Anda. dengan pelatihan ini anda akan dibimbing melaluli materi yang disediakan sampai bisnis anda pecah telur"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6e55c116f4d37133886b861cab2f53e9f981862227f960e627eb6baf82a4d867?apiKey=bca3b693d56b420282f1dc9a3df0d304&",
      title: "Tools promosi lengkap",
      description: "Dengan adanya website support yang disediakan akan menjadikan bisnis anda menjadi lebih profesional dan meningkatkan traffic untuk penjualan anda"
    }
  ];

  return (
    <section className="flex justify-center items-center self-stretch px-16 py-12 w-full bg-slate-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[987px] max-md:max-w-full">
        <h2 className="self-center text-2xl font-bold uppercase text-slate-600">
          peluang bisnis
        </h2>
        <div className="shrink-0 self-center mt-3 h-0.5 bg-sky-400 border-2 border-sky-400 border-solid w-[136px]" />
        <p className="mt-6 text-xs font-medium text-center text-neutral-600 max-md:max-w-full">
          Kami membuka suatu peluang bisnis untuk pelanggan kami dengan fleksibel dari PT. Fazza Beauty Skin. Bergabung dan buatlah suatu jaringan bisnis yang menyenangkan dengan berbagai macam paket plan yang profitable.
        </p>
        <div className="mt-7 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {features.slice(0, 2).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
        <div className="mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {features.slice(2).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
        <SuccessSection />
      </div>
    </section>
  );
};

export default BusinessOpportunity;
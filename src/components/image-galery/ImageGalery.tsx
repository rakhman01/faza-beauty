import React from 'react';
import { ImageItem, ImageItemProps } from './ImageItem';

const images: ImageItemProps[] = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b38f81d5a2843da32b351fa9745ea7a939eb5c5f03caf20a2dc01d8629e5930b?apiKey=bca3b693d56b420282f1dc9a3df0d304&", alt: "", className: "shrink-0 self-stretch my-auto max-w-full mix-blend-luminosity aspect-[2.78] w-[108px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c93b1d6a6eae54555c55405d8e60ca7184e8fb63b0b70a0a8388d171aedb4671?apiKey=bca3b693d56b420282f1dc9a3df0d304&", alt: "", className: "shrink-0 self-stretch my-auto mix-blend-luminosity aspect-[1.04] w-[51px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4ce839c36bc3a8d52b9272038b7717b7ceaf2bb25e26067fa0d86b4eb2ae081?apiKey=bca3b693d56b420282f1dc9a3df0d304&", alt: "", className: "shrink-0 self-stretch mix-blend-luminosity aspect-[1.11] w-[63px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0fb25999e2fbbc823c76f94b07d0eb5359df990bab49d02f9c5f0fbb97535e43?apiKey=bca3b693d56b420282f1dc9a3df0d304&", alt: "", className: "shrink-0 self-stretch my-auto max-w-full mix-blend-luminosity aspect-[3.33] w-[148px]" }
];

const ImageGallery: React.FC = () => {
  return (
    <section className="flex justify-center items-center self-stretch px-16 py-6 w-full bg-slate-100 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-center max-w-full w-[835px] max-md:flex-wrap">
        {images.map((image, index) => (
          <ImageItem key={index} {...image} />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
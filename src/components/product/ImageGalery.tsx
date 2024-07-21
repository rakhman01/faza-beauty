import React from 'react';
import ImageColumn from './ImageColumnt';

interface ImageData {
  src: string;
  alt: string;
  aspectRatio: string;
}

const leftColumnImages: ImageData[] = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/015a671255d23e50d0b91807e3a92c4cf7321b59f3da118a4c7eb66c90bce052?apiKey=bca3b693d56b420282f1dc9a3df0d304&", alt: "Gallery image 1", aspectRatio: "aspect-[1.49]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc20e95ac83395edf21a860ec165c45d407c7e205a3666db70398b52ec3268ea?apiKey=bca3b693d56b420282f1dc9a3df0d304&", alt: "Gallery image 2", aspectRatio: "aspect-[1.33]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8733f95d17b3302d646fae46567667a6a011f61c649f14884fcb563693d2bb67?apiKey=bca3b693d56b420282f1dc9a3df0d304&", alt: "Gallery image 3", aspectRatio: "aspect-square" },
];

const middleColumnImages: ImageData[] = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1ed80218f2d7c61293417b2475488512f4c2a302e837a74f51b6fbaccc7e4ec?apiKey=bca3b693d56b420282f1dc9a3df0d304&", alt: "Gallery image 4", aspectRatio: "aspect-[1.33]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3481b87b42c412702067574f0295b7f510b8249c1c3fda7ddafd1ea7b42b317?apiKey=bca3b693d56b420282f1dc9a3df0d304&", alt: "Gallery image 5", aspectRatio: "aspect-[0.52]" },
];

const rightColumnImages: ImageData[] = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/522b1e864583b367d71919d55dc93800239edbf9a568faae99583a9edbf769ef?apiKey=bca3b693d56b420282f1dc9a3df0d304&", alt: "Gallery image 6", aspectRatio: "aspect-[0.81]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/57c30da4d336a63a20af46b2872569fc09c39f80ba9f3750ce8d5cee821f8838?apiKey=bca3b693d56b420282f1dc9a3df0d304&", alt: "Gallery image 7", aspectRatio: "aspect-[1.35]" },
];

const ImageGallery: React.FC = () => {
  return (
    <section className="px-5 mt-12 w-full max-w-[992px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <ImageColumn images={leftColumnImages} additionalClasses="max-md:mt-3.5" />
        <ImageColumn images={middleColumnImages} additionalClasses="ml-5 grow max-md:ml-0 max-md:mt-3.5" />
        <ImageColumn images={rightColumnImages} additionalClasses="ml-5 max-md:ml-0 max-md:mt-3.5" />
      </div>
    </section>
  );
};

export default ImageGallery;
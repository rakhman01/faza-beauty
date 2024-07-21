import React from 'react';

interface ImageData {
  src: string;
  alt: string;
  aspectRatio: string;
}

interface ImageColumnProps {
  images: ImageData[];
  additionalClasses?: string;
}

const ImageColumn: React.FC<ImageColumnProps> = ({ images, additionalClasses = '' }) => {
  return (
    <div className={`flex flex-col w-[33%] max-md:w-full ${additionalClasses}`}>
      <div className="flex flex-col">
        {images.map((image, index) => (
          <img
            key={index}
            loading="lazy"
            src={image.src}
            alt={image.alt}
            className={`w-full ${image.aspectRatio} ${index > 0 ? 'mt-4' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageColumn;
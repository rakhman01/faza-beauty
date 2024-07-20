import React from 'react';
import JoinButton from '../common/JoinButton';

const HeroContent: React.FC = () => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto font-medium text-white max-md:mt-10 max-md:max-w-full">
        <h1 className="text-3xl font-bold max-md:max-w-full">
          Solusi Terbaik Untuk Meningkatkan Income Kamu
        </h1>
        <p className="mt-3 text-base text-neutral-100 max-md:max-w-full">
          Perluas Jaringan Bisnis Dan Bangun Team Hebat Kamu Untuk Sukses Bersama
        </p>
        <div className="flex gap-5 justify-between self-start mt-16 text-xs max-md:mt-10">
          <JoinButton />
          <div className="flex gap-1.5 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fddb00bdc5bec9c3c443c65211753fb5650c171fe10fe0a3140654b50d862142?apiKey=bca3b693d56b420282f1dc9a3df0d304&"
              alt="Play icon"
              className="shrink-0 aspect-square fill-white w-[22px]"
            />
            <span className="my-auto">Tonton Video</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
import React from 'react';
import Image from 'next/image';

interface BannerProps {
  imagePath: string;
}

const Banner: React.FC<BannerProps> = ({imagePath}) => {
  return (
    <div className="absolute inset-0">
      <Image
        src={imagePath}
        alt="Banner de fundo com paisagem"
        layout="fill"
        objectFit="cover"
        className="opacity-90" 
        priority
      />
      
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default Banner;
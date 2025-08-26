"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BannerProps {
  imagePath: string;
}

const Banner: React.FC<BannerProps> = ({ imagePath }) => {
  return (
    <div className="absolute inset-0">
      {/* Container da imagem com animação de zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/facul.webp"
          alt="Banner de fundo com paisagem"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
          priority
        />
      </motion.div>
      
      {/* Sobreposição com animação de fade-in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-0 bg-black"
      ></motion.div>
    </div>
  );
};

export default Banner;
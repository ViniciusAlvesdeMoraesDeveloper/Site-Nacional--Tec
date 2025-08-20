// src/components/HeroSection.tsx

import React from 'react';
import Banner from './banner'; // Importe o Banner
import SearchBar from './SearchSection'; // Importe o SearchBar

interface HeroSectionProps {
  bannerImage: string;
  placeholderText?: string;
  // Adicione as props da barra de pesquisa diretamente aqui
  inputValue: string;
  onInputChange: (query: string) => void;
  onSearch: (query: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  bannerImage,
  placeholderText = 'Pesquisar curso',
  inputValue,
  onInputChange,
  onSearch,
}) => {
  return (
    <div className="relative w-full h-96">
      {/* Componente do Banner */}
      <Banner imagePath={bannerImage} />

      {/* Container da barra de pesquisa */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-2xl px-4">
          {/* Renderize a Barra de Pesquisa e passe as props */}
          <SearchBar
            placeholderText={placeholderText}
            inputValue={inputValue}
            onInputChange={onInputChange}
            onSearch={onSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
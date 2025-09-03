import React from 'react';

interface AboutUsSectionProps {
  onClick: () => void;
}

// O componente AboutUsSection que contém o botão de "Sobre Nós" na página principal.
export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onClick }) => {
  return (
    // Seção que funciona como uma chamada para a ação (CTA).
    <div id='sobre' className="flex flex-col items-center justify-center py-20 bg-gray-50">
      <h2 className="mb-4 text-4xl font-extrabold text-gray-900">Nossa História</h2>
      <p className="mb-8 text-lg text-center text-gray-600 max-w-3xl">
        Conheça a visão e os valores que impulsionam nosso trabalho.
      </p>
      <button
        onClick={onClick}
        className="px-8 py-3 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Ler Sobre Nós
      </button>
    </div>
  );
};
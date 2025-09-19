import React from 'react';

interface AboutUsSectionProps {
 
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onClick }) => {
  return (
    
    <section id='sobre' className="flex flex-col items-center justify-center py-20 bg-gray-50" aria-labelledby="about-us-heading">
      
      
      <h2 id="about-us-heading" className="mb-4 text-4xl font-extrabold text-center text-gray-900">
        Educação que Transforma Carreiras
      </h2>

      
      <p className="mb-8 text-lg text-center text-gray-600 max-w-3xl">
        Descubra nossa trajetória de compromisso com o ensino técnico de qualidade. Conheça a visão e os valores que nos movem a preparar profissionais para os desafios do mercado de trabalho.
      </p>

      
      <a
        
        onClick={onClick}
        className="px-8 py-3 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Conheça Nossa História
      </a>
    </section>
  );
};
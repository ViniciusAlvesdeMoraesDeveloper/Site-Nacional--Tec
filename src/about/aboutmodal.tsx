import React from 'react';


interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// O componente AboutModal que exibe o conteúdo "Sobre Nós" em um modal.
export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {

  if (!isOpen) {
    return null;
  }

  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center  p-4 sm:p-6 md:p-8">
      
    
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-12 transform scale-100 transition-transform duration-300 overflow-y-auto max-h-[90vh]">
        
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Fechar"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2">
            Conheça Nossa História
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Nossa missão, nossa equipe é o que nos move.
          </p>
        </div>

        <div className="space-y-8 text-gray-700">
          {/* Seção de Missão e Visão. */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-blue-500">Nossa Missão</h2>
            <p className="text-lg leading-relaxed">
              Transformar vidas por meio da educação técnica. Acreditamos em um ensino moderno, dinâmico e conectado ao futuro, capaz de abrir caminhos profissionais, valorizar habilidades e oferecer oportunidades reais de crescimento.
            </p>
          </section>
          {/* Seção de Valores. */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-500">Nossos Valores</h2>
            <ul className="list-none space-y-2">
              <li className="flex items-center space-x-2 text-lg">
                <span className="text-blue-500">✔</span>
                <span>Inovação: aprender de forma diferente, com métodos que fazem sentido para o aluno.</span>
              </li>
              <li className="flex items-center space-x-2 text-lg">
                <span className="text-blue-500">✔</span>
                <span>Acessibilidade: tornar a educação técnica possível para todos que sonham em crescer.</span>
              </li>
              <li className="flex items-center space-x-2 text-lg">
                <span className="text-blue-500">✔</span>
                <span>Agilidade: simplificar processos para que cada conquista seja mais rápida e prática.</span>
              </li>
              <li className="flex items-center space-x-2 text-lg">
                <span className="text-blue-500">✔</span>
                <span>Confiabilidade: garantir uma jornada educacional segura, clara e sem burocracias.</span>
              </li>
              <li className="flex items-center space-x-2 text-lg">
                <span className="text-blue-500">✔</span>
                <span>Reconhecimento: valorizar o esforço e celebrar cada conquista com certificações reais.</span>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};
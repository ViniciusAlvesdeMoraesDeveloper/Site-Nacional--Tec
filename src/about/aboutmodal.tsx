import React from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// O componente AboutModal com melhorias de acessibilidade e semântica para SEO.
export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    
    <dialog
      open={isOpen}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 m-auto " 
      aria-labelledby="about-modal-title"
      aria-describedby="about-modal-description"
    >
      <article className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-12 transform scale-100 transition-transform duration-300 overflow-y-auto max-h-[90vh]">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Fechar modal de informações"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            role="img" // Adicionando role para acessibilidade.
            aria-label="Ícone de fechar"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <header className="text-center">
          <h1 id="about-modal-title" className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2">
            Conheça Nossa História na Educação
          </h1>
          <p id="about-modal-description" className="text-sm text-gray-500 mb-8">
            Descubra nossa missão, valores e o que nos move a transformar vidas através da educação técnica e profissionalizante.
          </p>
        </header>

        <main className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-3 text-blue-500">Nossa Missão: Inovação e Acesso</h2>
            <p className="text-lg leading-relaxed">
              Transformar vidas por meio da educação técnica. Acreditamos em um ensino moderno, dinâmico e conectado ao futuro, capaz de abrir caminhos profissionais, valorizar habilidades e oferecer oportunidades reais de crescimento para nossos alunos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-blue-500">Nossos Valores Fundamentais</h2>
            <ul className="list-none space-y-2">
              <li className="flex items-center space-x-2 text-lg">
                <span className="text-blue-500" aria-hidden="true">✔</span>
                <span><strong className="font-bold">Inovação:</strong> Nossos diplomas atestam que você aprendeu de forma a se destacar, com um certificado que traduz o conhecimento em resultados reais para sua vida profissional.</span>
              </li>
              <li className="flex items-center space-x-2 text-lg">
                <span className="text-blue-500" aria-hidden="true">✔</span>
                <span><strong className="font-bold">Acessibilidade:</strong> Tornar a educação técnica possível para todos que sonham em crescer, eliminando barreiras.</span>
              </li>
              <li className="flex items-center space-x-2 text-lg">
                <span className="text-blue-500" aria-hidden="true">✔</span>
                <span><strong className="font-bold">Agilidade:</strong> Simplificar processos para que cada conquista seja mais rápida e prática, sem burocracias desnecessárias.</span>
              </li>
              <li className="flex items-center space-x-2 text-lg">
                <span className="text-blue-500" aria-hidden="true">✔</span>
                <span><strong className="font-bold">Confiabilidade:</strong> Garantir uma certificação segura, clara e sem burocracias, com reconhecimento nacional.</span>
              </li>
              <li className="flex items-center space-x-2 text-lg">
                <span className="text-blue-500" aria-hidden="true">✔</span>
                <span><strong className="font-bold">Reconhecimento:</strong> Valorizar o esforço e celebrar cada conquista com certificações reais e válidas no mercado de trabalho.</span>
              </li>
            </ul>
          </section>
        </main>
      </article>
    </dialog>
  );
};
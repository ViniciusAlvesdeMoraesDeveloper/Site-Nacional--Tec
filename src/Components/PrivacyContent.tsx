// src/components/PrivacyContent.tsx
"use client"
import React from 'react';

export const PrivacyContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg sm:rounded-xl shadow-lg">
      <header className="text-center border-b border-gray-200 pb-4 sm:pb-6 mb-6 sm:mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-full mb-3 sm:mb-4">
          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-2 sm:mb-3 px-2">
          Política de Privacidade e Cookies
        </h1>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
          Sua segurança e privacidade são nossa prioridade. Conheça como tratamos seus dados e o uso de cookies em nosso site.
        </p>
      </header>

      <main className="space-y-6 sm:space-y-8">
        <section className="bg-blue-50 rounded-lg p-4 sm:p-6 border-l-4 border-blue-500">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center mr-2 sm:mr-3">
              <span className="text-white font-bold text-xs sm:text-sm">1</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-blue-700">Política de Privacidade</h2>
          </div>
          <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              A Nacional Tec valoriza a sua privacidade e segurança dos seus dados pessoais. Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nosso site e serviços.
            </p>
            {/* ... restante do conteúdo da política ... */}
          </div>
        </section>

        <section className="bg-gray-50 rounded-lg p-4 sm:p-6 border-l-4 border-blue-400">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-400 rounded-full flex items-center justify-center mr-2 sm:mr-3">
              <span className="text-white font-bold text-xs sm:text-sm">2</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-blue-700">Política de Cookies</h2>
          </div>
          <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-semibold text-blue-600 mb-1 sm:mb-2">O que são Cookies?</h3>
            <p>
              Cookies são pequenos arquivos de texto que são armazenados no seu navegador quando você visita um site. Eles nos ajudam a entender como você interage com nosso site e a melhorar sua experiência de navegação.
            </p>
            {/* ... restante do conteúdo de cookies ... */}
          </div>
        </section>

        
      </main>
    </div>
  );
};
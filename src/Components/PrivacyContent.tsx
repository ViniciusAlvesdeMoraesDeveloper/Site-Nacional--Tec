// src/components/PrivacyContent.tsx
"use client"
import React from 'react';

export const PrivacyContent: React.FC = () => {
  return (
    <>
      <header className="text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2">
          Política de Privacidade e Cookies
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Sua segurança e privacidade são nossa prioridade. Conheça como tratamos seus dados e o uso de cookies em nosso site.
        </p>
      </header>

      <main className="space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-500">1. Política de Privacidade</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              A Nacional Tec valoriza a sua privacidade e segurança dos seus dados pessoais. Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nosso site e serviços.
            </p>
            {/* ... restante do conteúdo da política ... */}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3 text-blue-500">2. Política de Cookies</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <h3 className="text-xl font-bold">O que são Cookies?</h3>
            <p>
              Cookies são pequenos arquivos de texto que são armazenados no seu navegador quando você visita um site. Eles nos ajudam a entender como você interage com nosso site e a melhorar sua experiência de navegação.
            </p>
            {/* ... restante do conteúdo de cookies ... */}
          </div>
        </section>
      </main>
    </>
  );
};
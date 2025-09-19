import Link from 'next/link';
import { Facebook, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

// 1. Define the props interface for the Footer
interface FooterProps {
  onPrivacyClick: () => void;
  onAboutClick: () => void; // Adicione o onAboutClick para o caso do "Sobre Nós" estar no footer
}

// 2. Add the props to the function signature
export default function Footer({ onPrivacyClick, onAboutClick }: FooterProps) {
  return (
    // A tag <footer> é semanticamente correta para o rodapé da página.
    <footer className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12" role="contentinfo" aria-label="Rodapé do site Nacional Tec">
      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo and About Section */}
          <section className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <h2 className="sr-only">Sobre a Nacional Tec</h2> {/* Título invisível para SEO e acessibilidade */}
            <div className="flex flex-col items-center md:items-start">
              <Image
                className='rounded-full mb-4'
                src="/NacionaTec-logo.webp"
                alt="Logo da Nacional Tec, representando educação técnica de qualidade." // Alt text mais descritivo
                width={80}
                height={80}
              />
              <h3 className="text-2xl font-bold">Nacional Tec</h3>
              <p className="text-sm opacity-90 mt-1">Transformando o futuro através da educação técnica de qualidade.</p>
            </div>
            {/* Adicionando role="navigation" para reforçar a semântica */}
            <nav className="flex space-x-4 mt-4" aria-label="Links de redes sociais">
              <Link
                href="https://www.instagram.com/nacionaltec.ead"
                className="hover:text-yellow-200 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga-nos no Instagram" // Label para acessibilidade
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/nacionaltec.ead"
                className="hover:text-yellow-200 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga-nos no Facebook" // Label para acessibilidade
              >
                <Facebook size={24} />
              </Link>
            </nav>
          </section>

          {/* Contact and Location Section */}
          <section className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-gray-200 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start hover:text-yellow-200 transition-colors duration-200">
                <Mail size={16} className="mr-2" />
                <a href="mailto:gestaonacionaltec@gmail.com" className="hover:underline">
                  gestaonacionaltec@gmail.com
                </a>
              </div>
              <div className="flex items-start justify-center md:justify-start hover:text-yellow-200 transition-colors duration-200">
                <MapPin size={16} className="mr-2 mt-1" />
                <address className="text-wrap not-italic">Rua Luiz Rodrigues dos Santos 44, Todos os Santos</address>
              </div>
            </div>
          </section>

          {/* Service Channels Section with all phones */}
          <section id='contato' className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4">Canais de Atendimento</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-200 text-center md:text-left">
              <a href="tel:+5531973164814" className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 97316-4814</span>
              </a>
              <a href="tel:+5531973163416" className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 97316-3416</span>
              </a>
              <a href="tel:+5531981013141" className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 98101-3141</span>
              </a>
              <a href="tel:+5531973147297" className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 97314-7297</span>
              </a>
              <a href="tel:+5531973164815" className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 97316-4815</span>
              </a>
              <a href="tel:+5531973163292" className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 97316-3292</span>
              </a>
              <a href="tel:+5531973164817" className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 97316-4817</span>
              </a>
            </div>
          </section>

          {/* Areas Offered Section - Changed to links for better SEO */}
          <nav className="flex flex-col items-center md:items-start" aria-label="Áreas de cursos ofertadas">
            <h4 className="text-lg font-semibold text-white mb-4">Áreas Ofertadas</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-200 text-center md:text-left">
              {/* Substituído <span> por <Link> para linkagem interna. Ajuste o href conforme suas rotas */}
              <li><Link href="/areas/saude" className="hover:text-yellow-200 transition-colors duration-200">Área da Saúde</Link></li>
              <li><Link href="/areas/tecnologia" className="hover:text-yellow-200 transition-colors duration-200">Área de Tecnologia</Link></li>
              <li><Link href="/areas/administracao" className="hover:text-yellow-200 transition-colors duration-200">Área de Administração</Link></li>
              <li><Link href="/areas/engenharia" className="hover:text-yellow-200 transition-colors duration-200">Área de Engenharia e Manutenção</Link></li>
              <li><Link href="/areas/construcao" className="hover:text-yellow-200 transition-colors duration-200">Área de Construção e Infraestrutura</Link></li>
              <li><Link href="/areas/meio-ambiente" className="hover:text-yellow-200 transition-colors duration-200">Área de Meio Ambiente e Agropecuária</Link></li>
              <li><Link href="/areas/servicos" className="hover:text-yellow-200 transition-colors duration-200">Área de Serviços</Link></li>
            </ul>
          </nav>
        </div>

        {/* Políticas e Copyright Section */}
        <div className="border-t border-white/20 mt-12 pt-4 text-center text-sm opacity-80">
          <nav className="flex justify-center space-x-4 mb-2" aria-label="Links de políticas">
            {/* 3. Change Link to button and add the onClick event */}
            <button onClick={onPrivacyClick} className="hover:underline">Política de Privacidade</button>
            <button onClick={onPrivacyClick} className="hover:underline">Política de Cookies</button>
          </nav>
          <p>&copy; {new Date().getFullYear()} Nacional Tec. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
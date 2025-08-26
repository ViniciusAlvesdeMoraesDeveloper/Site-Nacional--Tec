import Link from 'next/link';
import { Facebook, MapPin } from 'lucide-react';
import React from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-800 text-white py-8">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo/Imagem */}
          <div className="flex items-center mb-4 md:mb-0">
            <div><Image className='rounded-full mr-8'
              src="/NacionaTec-logo.webp"
              alt="Nacional Tec Logo"
              width={100}
              height={100}
            /></div>
            <div id='contato' className="flex flex-col mt-2 space-y-4">
              <h3 className="text-xl font-bold">Nacional Tec</h3>
              <p className="text-sm opacity-90">Educação Técnica de Qualidade</p>
              <div className='flex flex-col'>
                <Link href="tel:553173163292" className="flex items-center hover:text-yellow-200 transition-colors duration-200 font-medium mb-2">
                  <Phone size={16} className="mr-2" />
                  <span className="text-sm">(31)97316-3292 </span>
                </Link>

                <Link href="tel:553173163292" className="flex items-center hover:text-yellow-200 transition-colors duration-200 font-medium mb-2">
                  <Phone size={16} className="mr-2" />
                  <span className="text-sm">(31)97316-3416 </span>
                </Link>

                <div className="flex items-center hover:text-yellow-200 transition-colors duration-200 font-medium mb-2">
                  <Mail width={16} height={16} className="text-white-400 mr-2" />
                  <h2 className="text-xs hover:underline">
                    gestaonacionaltec@gmail.com
                  </h2>
                </div>

                <div className="flex items-center hover:text-yellow-200 transition-colors duration-200 font-medium">
                  <MapPin width={16} height={16} className="mr-2" />
                  <h2 className="text-xs hover:underline">
                    Rua Luiz Rodrigues dos Santos 44, Todos os Santos
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* Áreas ofertadas*/}
          <div className="flex flex-col items-center gap-6 py-8 mr-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">Áreas ofertadas</h1>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 max-w-7xl">
              <span className="hover:text-yellow-200 transition-colors duration-200 font-medium cursor-pointer">
                Área da Saúde
              </span>
              <span className="hover:text-yellow-200 transition-colors duration-200 font-medium cursor-pointer">
                Área de Tecnologia
              </span>
              <span className="hover:text-yellow-200 transition-colors duration-200 font-medium cursor-pointer">
                Área de Administração
              </span>
              <span className="hover:text-yellow-200 transition-colors duration-200 font-medium cursor-pointer">
                Área de Engenharia e Manutenção
              </span>
              <span className="hover:text-yellow-200 transition-colors duration-200 font-medium cursor-pointer">
                Área de Construção e Infraestrutura
              </span>
              <span className="hover:text-yellow-200 transition-colors duration-200 font-medium cursor-pointer">
                Área de Meio Ambiente e Agropecuária
              </span>
              <span className="hover:text-yellow-200 transition-colors duration-200 font-medium cursor-pointer">
                Área de Serviços
              </span>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center gap-6 py-8">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-white">Sobre Nós:</h4>
              <nav className="flex flex-col gap-4">
                <Link href="/about" className="hover:text-yellow-200 transition-colors duration-200 text-sm">
                </Link>
                <div className="flex gap-2">
                  <Link
                    href="https://www.instagram.com/nacionaltec.ead?igsh=MThmYWhibjdvOTRheQ=="
                    className="hover:text-yellow-200 transition-colors duration-200"
                  >
                    <Instagram size={24} />
                  </Link>
                  <Link
                    href="https://www.facebook.com/nacionaltec.ead?mibextid=wwXIfr&mibextid=wwXIfr"
                    className="hover:text-yellow-200 transition-colors duration-200"
                  >
                    <Facebook size={24} />
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm opacity-80">
        <p>&copy; 2024 Nacional Tec. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
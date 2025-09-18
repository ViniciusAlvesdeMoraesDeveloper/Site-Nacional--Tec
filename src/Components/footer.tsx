import Link from 'next/link';
import { Facebook, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo and About Section */}
          <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <Image 
                className='rounded-full mb-4'
                src="/NacionaTec-logo.webp"
                alt="Nacional Tec Logo"
                width={80}
                height={80}
              />
              <h3 className="text-2xl font-bold">Nacional Tec</h3>
              <p className="text-sm opacity-90 mt-1">Educação Técnica de Qualidade</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.instagram.com/nacionaltec.ead"
                className="hover:text-yellow-200 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/nacionaltec.ead"
                className="hover:text-yellow-200 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </Link>
            </div>
          </div>

          {/* Contact and Location Section */}
          <div className="flex flex-col items-center md:items-start">
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
                <span className="text-wrap">Rua Luiz Rodrigues dos Santos 44, Todos os Santos</span>
              </div>
            </div>
          </div>

          {/* Service Channels Section with all phones */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4">Canais de Atendimento</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-200 text-center md:text-left">
              <div className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 97316-4814</span>
              </div>
              <div className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 97316-3416</span>
              </div>
              <div className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 98101-3141</span>
              </div>
              <div className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 97314-7297</span>
              </div>
              <div className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 97316-4815</span>
              </div>
              <div className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 97316-3292</span>
              </div>
              <div className="flex items-center hover:text-yellow-200 transition-colors duration-200">
                <Phone size={16} className="mr-2" />
                <span>(31) 97316-4817</span>
              </div>
            </div>
          </div>
          
          {/* Areas Offered Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-white mb-4">Áreas Ofertadas</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-200 text-center md:text-left">
              <span className="hover:text-yellow-200 transition-colors duration-200 cursor-pointer">
                Área da Saúde
              </span>
              <span className="hover:text-yellow-200 transition-colors duration-200 cursor-pointer">
                Área de Tecnologia
              </span>
              <span className="hover:text-yellow-200 transition-colors duration-200 cursor-pointer">
                Área de Administração
              </span>
              <span className="hover:text-yellow-200 transition-colors duration-200 cursor-pointer">
                Área de Engenharia e Manutenção
              </span>
              <span className="hover:text-yellow-200 transition-colors duration-200 cursor-pointer">
                Área de Construção e Infraestrutura
              </span>
              <span className="hover:text-yellow-200 transition-colors duration-200 cursor-pointer">
                Área de Meio Ambiente e Agropecuária
              </span>
              <span className="hover:text-yellow-200 transition-colors duration-200 cursor-pointer">
                Área de Serviços
              </span>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/20 mt-12 pt-4 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Nacional Tec. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
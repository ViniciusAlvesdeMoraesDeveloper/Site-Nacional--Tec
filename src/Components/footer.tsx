import Link from 'next/link';
import { Facebook } from 'lucide-react';
import React from 'react';
import { Instagram } from 'lucide-react';
import Image from 'next/image';
import { Phone } from 'lucide-react';

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
            <div className='flex flex-col gap-1 '>
              <h3 className="text-xl font-bold">Nacional Tec</h3>
              <p className="text-sm opacity-90">Educação Técnica de Qualidade</p>
              <div id='contato' className="flex items-center mt-2">
                <Link href="tel:11999999999" className="flex items-center hover:text-yellow-200 transition-colors duration-200 font-medium">
                  <Phone size={16} className="mr-2" />
                  <span className="text-sm">(11) 99999-9999</span>
                </Link>
              </div>
            </div>
          </div>

           {/* Navigation Links */}
           <nav className='flex columns-2 gap-3'>
            <Link href="/AreaSaude" className="hover:text-yellow-200 transition-colors duration-200 font-medium">
                Área da Saúde </Link>

            <Link href="Tecnologia" className="hover:text-yellow-200 transition-colors duration-200 font-medium">
                Área de Tecnologia</Link>

            <Link href="Administracao" className="hover:text-yellow-200 transition-colors duration-200 font-medium">
                Área de Administração</Link>

            <Link href="Engenharia" className="hover:text-yellow-200 transition-colors duration-200 font-medium">           
                Área de Engenharia e Manutenção</Link>

            <Link href="Infraestrutura" className='hover:text-yellow-200 transition-colors duration-200 font-medium'>
                Área de Construção e Infraestrutura</Link>

            <Link href="Meio-ambiente" className='hover:text-yellow-200 transition-colors duration-200 font-medium'>
                Área de Meio Ambiente e Agropecuária</Link> 

            <Link href="Servicos" className='hover:text-yellow-200 transition-colors duration-200 font-medium'>
                Área de Serviços</Link>              
           </nav>




            {/* Social Media Links */}
          <div id='sobrenos'>
            <h4 className="text-lg font-semibold mb-4">Sobre Nós:</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/about" className="hover:text-yellow-200 transition-colors duration-200 text-sm">
                
              </Link>
              <div className="flex gap-4">
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
      {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm opacity-80">
          <p>&copy; 2024 Nacional Tec. Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}
import React from 'react';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Modal from '@/app/Modal/Modal';
import { useState } from 'react';
import RegistrationForm from '@/app/Modal/RegistrationForm';


export default function TopBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  return (
    <header id='header' className="w-full bg-gradient-to-r from-green-600 to-yellow-400 border-b border-green-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white hover:text-yellow-100">
              Nacional Tec
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link
                href="#header"
                className="text-white hover:text-yellow-100 px-3 py-2 text-sm font-medium transition-colors"
              >
                Início
              </Link>
              <Link
                href="#cards"
                className="text-white hover:text-yellow-100 px-3 py-2 text-sm font-medium transition-colors"
              >
                Cursos
              </Link>


              <Link
                href="#sobre"
                className="text-white hover:text-yellow-100 px-3 py-2 text-sm font-medium transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="#contato"
                className="text-white hover:text-yellow-100 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contato
              </Link>
            </nav>
             {/* Acesso ao AVA*/}
            <div>
              <Link href="https://nacionaltecava.simpleacademy.tech/login" className='"text-white hover:text-yellow-100 p-2 rounded-full hover:bg-green-700 transition-colors'> Acesso ao AVA</Link>

            </div>

            <div className="border-l border-green-700 pl-6 ml-6 flex items-center space-x-4">
              <Link
                href="https://wa.me/553173164817?text=Olá!%20Gostaria%20de%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-100 p-2 rounded-full hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </Link>
            </div>
            <div>
              {/* Este é o botão que acionará a abertura do modal */}
              <button
                onClick={handleOpenModal}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Cadastre-se!
              </button>
              <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <RegistrationForm />
              </Modal>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
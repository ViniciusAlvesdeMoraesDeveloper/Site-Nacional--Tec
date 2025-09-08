"use client"
import React, { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import Modal from "@/app/Modal/Modal";
import RegistrationForm from "@/app/Modal/RegistrationForm";

export default function TopBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <header className="w-full bg-gradient-to-r from-green-600 to-yellow-400 border-b border-green-700 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white hover:text-yellow-100">
              Nacional Tec
            </Link>
          </div>

          {/* Botão  para mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link href="#header" className="text-white hover:text-yellow-100 px-3 py-2 text-sm font-medium">Início</Link>
              <Link href="#cards" className="text-white hover:text-yellow-100 px-3 py-2 text-sm font-medium">Cursos</Link>
              <Link href="#sobre" className="text-white hover:text-yellow-100 px-3 py-2 text-sm font-medium">Sobre</Link>
              <Link href="#contato" className="text-white hover:text-yellow-100 px-3 py-2 text-sm font-medium">Contato</Link>
            </nav>

            <div className="flex items-center space-x-4 border-l border-green-700 pl-6">
              <Link
                href="https://nacionaltecava.simpleacademy.tech/login"
                className="text-white hover:text-yellow-100 px-3 py-2 rounded-md transition-colors"
              >
                Acesso ao AVA
              </Link>
              <Link
                href="https://wa.me/553173164817?text=Olá!%20Gostaria%20de%20mais%20informações."
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-100 p-2 rounded-full hover:bg-green-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={24} />
              </Link>
              <button
                onClick={handleOpenModal}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Cadastre-se!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-600 text-white flex flex-col px-4 py-4 space-y-3">
          <Link href="#header" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-100">Início</Link>
          <Link href="#cards" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-100">Cursos</Link>
          <Link href="#sobre" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-100">Sobre</Link>
          <Link href="#contato" onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-100">Contato</Link>
          <Link
            href="https://nacionaltecava.simpleacademy.tech/login"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-yellow-100"
          >
            Acesso ao AVA
          </Link>
          <Link
            href="https://wa.me/553173164817?text=Olá!%20Gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-100"
          >
            WhatsApp
          </Link>
          <button
            onClick={() => { setIsMenuOpen(false); handleOpenModal(); }}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Cadastre-se!
          </button>
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <RegistrationForm />
      </Modal>
    </header>
  );
}

// components/HomePage.tsx
'use client';

import { useState } from 'react';
import Modal from './Modal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div id='modal' className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-8">Página Principal</h1>
      <button
        onClick={handleOpenModal}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Abrir Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Modal!</h2>
        <p className="text-gray-700">Este é um exemplo de um modal em Next.js com Tailwind e TypeScript.</p>
      </Modal>

      {/* A div com id 'modal-root' é essencial para o portal funcionar */}
      <div id="modal-root"></div>
    </div>
  );
};

export default HomePage;
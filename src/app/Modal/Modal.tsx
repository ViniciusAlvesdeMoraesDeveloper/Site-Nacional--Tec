// src/app/Modal/Modal.tsx

"use client"; // Esta linha deve ser a primeira de todas

import React from "react";
import ModalPortal from "./ModalPortal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <div
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-md flex items-center justify-center z-50 transition-opacity duration-300"
        onClick={onClose}
      >
        <div
          className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative transform transition-transform duration-300 scale-100"
          onClick={(e) => e.stopPropagation()} // Impede que o clique no modal feche-o
        >
          {/* Botão de fechar */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
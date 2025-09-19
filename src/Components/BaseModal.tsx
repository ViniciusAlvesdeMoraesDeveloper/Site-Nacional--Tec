// src/components/BaseModal.tsx

import React from 'react';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const BaseModal: React.FC<BaseModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <dialog
      open={isOpen}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 m-auto backdrop:bg-white backdrop:opacity-25"
    >
      <article className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-12 transform scale-100 transition-transform duration-300 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Fechar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </article>
    </dialog>
  );
};
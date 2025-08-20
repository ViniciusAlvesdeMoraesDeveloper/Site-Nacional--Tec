// src/components/SearchBar.tsx

import React from 'react';

interface SearchBarProps {
  placeholderText?: string;
  onSearch: (query: string) => void;
  onInputChange: (query: string) => void;
  inputValue: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholderText = 'Pesquisar...',
  onSearch,
  onInputChange,
  inputValue,
}) => {
  // Captura a tecla 'Enter' para acionar a busca
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  return (
    <div className="relative flex items-center w-full">
      <input
        type="text"
        placeholder={placeholderText}
        value={inputValue} // Conecta o input ao estado
        onChange={(e) => onInputChange(e.target.value)} // Atualiza o estado ao digitar
        onKeyDown={handleKeyDown}
        className="w-full py-4 pl-6 pr-16 text-lg rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
      />
      <button
        onClick={() => onSearch(inputValue)} // Chama a função de busca
        className="absolute right-2 px-6 py-2 bg-green-600 text-white rounded-full text-lg font-bold hover:bg-green-700 transition-colors duration-300"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
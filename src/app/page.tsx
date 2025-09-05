"use client";

// Importações...
import TopBar from "../Components/topbar";
import Footer from "../Components/footer";
import BottomUpper from "../Components/bottomupper";
import AreaCard from "../Components/course-areas";
import HeroSection from "../Components/HeroSection";

// Importações...
import Storaged from "@/utils/storeged";
import { AboutUsSection } from "@/about/aboutUsSection";
import { AboutModal } from "@/about/aboutmodal";
// Remova a importação do Modal não utilizado:
// import Modal from "./Modal/Modal";

import { useState, useEffect } from 'react';
import { CardPageProps } from './card';


// Caminho da imagem na pasta 'public'
const BANNER_IMAGE_PATH = '/.webp';

export default function Page() {
  const allAreas: CardPageProps[] = Storaged();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAreas, setFilteredAreas] = useState(allAreas);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // Remova a função handleOpenModal, pois ela não é utilizada
  // const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Função que realiza apenas a filtragem, sem rolagem
  const filterAreas = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const results = allAreas.filter((area) => {
      const matchesTitle = area.title.toLowerCase().includes(lowerCaseQuery);
      const matchesFlag = area.flag.toLowerCase().includes(lowerCaseQuery);
      return matchesTitle || matchesFlag;
    });
    setFilteredAreas(results);
  };

  // Esta função agora é chamada apenas pelo botão de busca
  const handleSearchAndScroll = () => {
    // Primeiro, realiza a filtragem
    filterAreas(searchTerm);
    
    // Depois, rola a página para a seção de cards
    const cardsSection = document.getElementById("cards");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // O useEffect agora chama apenas a função de filtragem, para manter a busca instantânea
  useEffect(() => {
    filterAreas(searchTerm);
  }, [searchTerm]);

  return (
    <div className="min-h-screen ">
      <TopBar />
      <main className="flex-1 w-full">
        {/* Seção do Hero, banner e search */}
        <HeroSection
          bannerImage={BANNER_IMAGE_PATH}
          placeholderText="Pesquisar por cursos..."
          inputValue={searchTerm}
          onInputChange={setSearchTerm}
          // O onSearch agora chama a nova função que inclui a rolagem
          onSearch={handleSearchAndScroll}
        />
        <AboutUsSection onClick={() => setIsModalOpen(true)} />

        {/* Seção de áreas filtradas */}
        <section className="py-16 w-full animated-background">
          <div id="cards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Áreas de Conhecimento
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore nossas áreas especializadas e encontre o curso perfeito
                para seus objetivos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full ">
              {filteredAreas.map((area, index) => (
                <AreaCard key={index} {...area} />
              ))}
            </div>
            {filteredAreas.length === 0 && searchTerm !== "" && (
              <p className="text-center text-gray-500 mt-8">Nenhuma área encontrada para {searchTerm}.</p>
            )}

          </div>
        </section>
      </main>

      <Footer />
      <BottomUpper />
      <AboutModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
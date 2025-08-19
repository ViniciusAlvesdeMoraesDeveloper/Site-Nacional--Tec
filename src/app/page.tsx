"use client"; // porque vamos usar useState
import React, { useState } from "react";
import TopBar from "../Components/topbar";
import Footer from "../Components/footer";
import BottomUpper from "../Components/bottomupper";
import CardPage, { CardPageProps } from "./card";
import Storaged from "@/utils/storeged";
import SearchSection from "@/Components/SearchSection";
import AreaCard from "@/Components/course-areas";

export default function Page() {
  // Obtemos todas as áreas
  const areas: CardPageProps[] = Storaged();

  // Estado para a busca por título
  const [searchTerm, setSearchTerm] = useState("");

  // Filtragem simples
  const filteredAreas = areas.filter((area) =>
    area.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full">
      <TopBar />

      <main className="flex-1 w-full">
        {/* Se você tiver um componente de busca */}
        <SearchSection  searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        

        {/* Seção de áreas */}
        <section className="py-16 w-full bg-white ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          </div>
        </section>
      </main>

      <Footer />
      <BottomUpper />
    </div>
  );
}

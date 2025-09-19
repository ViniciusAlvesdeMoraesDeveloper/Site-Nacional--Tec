// src/app/courses/[slug]/CourseDetailsClient.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Modal from "@/app/Modal/Modal";
import { Course } from "@/utils/storeged"; // Certifique-se de que o caminho está correto
import RegistrationForm from "@/app/Modal/RegistrationForm";

interface CourseDetailsProps {
 course: Course;
}

// Componente para a página de detalhes, agora um Cliente Component
export default function CourseDetailsClient({ course }: CourseDetailsProps) {
 // Estado para controlar a visibilidade do modal.
 const [isModalOpen, setIsModalOpen] = useState(false);

 return (
  <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-green-900 transition-colors duration-1000 w-full mt-12 ">
   {/* Botão para voltar, alinhado com o ícone */}
   <div className="w-full max-w-4xl mb-6">
    <Link
     href="/"
     className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold shadow transition-all duration-300 hover:scale-105"
    >
     <ArrowLeft size={20} />
     Voltar para área de cursos
    </Link>
   </div>

   {/* Card principal com os detalhes do curso */}
   <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.01]">
    <div className="relative">
     <img
      src={course.img.src}
      alt={course.img.alt}
      className="w-full h-80 object-cover"
     />
    </div>
    <div className="p-8">
     <div className="mb-4">
      <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
       {course.category}
      </span>
     </div>
     <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 leading-tight">
      {course.title}
     </h1>
     <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      {course.description}
     </p>

     {/* Seção para adicionar mais informações futuras */}
     <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
      <div className="mt-6">
       <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        O que este diploma te deixa apto para:
       </h2>
       <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        
        {course.whatYouWillLearn.map((item, index) => (
         <li key={index}>{item}</li>
        ))}
       </ul>
      </div>

     
      {/* Benefícios do Curso */}
      <div className="mt-8">
       <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Benefícios do Curso 
       </h2>
       <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        <li>Entrada rápida e Direta no Mercado de Trabalho.</li>
        <li>Crescimento profissional e reconhecimento formal.</li>
        <li>Diploma para impulsionar seu currículo.</li>
       </ul>
      </div>

      {/* Para quem é este curso? */}
      <div className="mt-8">
       <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Para quem é este curso?
       </h2>
       <p className="text-gray-700 dark:text-gray-300">
        Este curso é ideal para quem busca uma carreira na área de {course.category}, com foco em habilidades práticas e aplicação imediata no mercado de trabalho.
       </p>
      </div>
     </div>

     <div className="mt-8">
      <button
       onClick={() => setIsModalOpen(true)}
       className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg"
      >
       Inscreva-se Agora
      </button>
     </div>
    </div>
   </div>

   {/* Renderiza o modal e passa as propriedades necessárias */}
   <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-balck">
     Inscrição para o curso
    </h2>
    <p className="text-black mb-6 ">
     Você está prestes a se inscrever no curso de: <br />
     <strong className="text-blue-600">{course.title}</strong>
    </p>
    <RegistrationForm />
   </Modal>
  </div>
 );
}
// pp/courses/[slug]/page.tsx

import Storaged, { Course } from "@/utils/storeged";
import { CardPageProps } from "@/types/cousers";

/**
 * Esta função diz ao Next.js quais slugs pré-renderizar no momento da construção.
 * É crucial para rotas dinâmicas.
 */
export async function generateStaticParams() {
  const areas = Storaged();
  const allCourses = areas.flatMap((area: CardPageProps) => area.courses);

  // Filtra cursos com slugs válidos para garantir que apenas URLs corretas sejam geradas.
  // Em seguida, mapeia para o formato de objeto que o Next.js espera.
  return allCourses
    .filter((course) => course?.slug)
    .map((course) => ({
      slug: course?.slug,
    }));
}

/**
 * Este é o componente da sua página de detalhes do curso.
 * Ele recebe o 'slug' da URL e encontra o curso correspondente.
 */
export default function Page({ params }: { params: { slug: string } }) {
  const areas = Storaged();

  // Combina todos os cursos em um único array para facilitar a busca.
  const allCourses = areas.flatMap((area: CardPageProps) => area.courses);

  // Usa o slug da URL para encontrar o curso correto.
  const course = allCourses.find((c) => c?.slug === params.slug);

  // Se o curso não for encontrado, exibe uma mensagem de erro.
  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">Curso não encontrado!</h1>
      </div>
    );
  }

  // Se o curso for encontrado, renderiza o seu conteúdo.
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{course.description}</p>
      <div className="w-full max-w-lg">
        <img
          src={course.img?.src}
          alt={course.img?.alt}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <p className="mt-8 text-xl font-semibold">
        Categoria: <span className="text-blue-600">{course.category}</span>
      </p>
    </div>
  );
}

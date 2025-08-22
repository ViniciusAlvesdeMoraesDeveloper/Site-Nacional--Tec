// pp/courses/[slug]/page.tsx

import Storaged, { Course } from "@/utils/storeged";
import { CardPageProps } from "@/types/cousers";

// Esta função diz ao Next.js quais slugs pré-renderizar
export async function generateStaticParams() {
  const areas = Storaged();

  // O TypeScript irá inferir que o tipo é Course[]
  const allCourses = areas.flatMap((area: CardPageProps) => area.courses);

  return allCourses.map((course) => ({
    slug: course?.slug,
  }));
}

// Esta é a sua página de detalhes do curso
export default function Page({ params }: { params: { slug: string } }) {
  const areas = Storaged();

  // O TypeScript irá inferir o tipo de forma segura (Course[])
  const allCourses = areas.flatMap((area: CardPageProps) => area.courses);

  // O método find retorna Course | undefined.
  const course = allCourses.find((c) => c?.slug === params.slug);

  // Usa o operador de "early return" para garantir que 'course' existe.
  // A partir daqui, o TypeScript sabe que 'course' é do tipo 'Course'.
  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Curso não encontrado!</h1>
      </div>
    );
  }

  // Se o curso for encontrado, renderiza o seu conteúdo.
  // Usamos o encadeamento opcional para garantir que o acesso às
  // propriedades aninhadas não causem erro, mesmo após a verificação
  // de 'course' principal.
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-4">{course?.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{course?.description}</p>
      <div className="w-full max-w-lg">
        <img
          src={course?.img?.src}
          alt={course?.img?.alt}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <p className="mt-8 text-xl font-semibold">
        Categoria: <span className="text-blue-600">{course?.category}</span>
      </p>
    </div>
  );
}

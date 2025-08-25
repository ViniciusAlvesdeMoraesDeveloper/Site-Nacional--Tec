// pp/courses/[slug]/page.tsx
import Storaged, { Course } from "@/utils/storeged";
import { CardPageProps } from "@/types/cousers";
import CourseDetailsClient from "./CourseDetailsClient"; // Importa o novo componente cliente

/**
 * Esta função é crucial. Ela diz ao Next.js quais slugs pré-renderizar estaticamente
 * no momento da construção da aplicação.
 */
export async function generateStaticParams() {
  const areas = Storaged();
  const allCourses = areas.flatMap((area: CardPageProps) => area.courses);

  // Filtra cursos com slugs válidos para garantir que apenas URLs corretas sejam geradas.
  return allCourses
    .filter((course) => course?.slug)
    .map((course) => ({
      slug: course?.slug,
    }));
}

/**
 * Este é o componente principal da página de detalhes. Ele é um Server Component
 * e é responsável por buscar os dados do curso a partir do slug.
 */
export default function Page({ params }: { params: { slug: string } }) {
  const areas = Storaged();

  // Busca todos os cursos para encontrar o que corresponde ao slug.
  const allCourses = areas.flatMap((area: CardPageProps) => area.courses);

  // Encontra o curso correspondente ao slug na URL.
  const course = allCourses.find((c) => c?.slug === params.slug);

  // Se o curso não for encontrado, exibe uma mensagem de erro.
  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Curso não encontrado!</h1>
      </div>
    );
  }

  // Passa os dados do curso para o componente cliente, que fará a renderização
  // e o gerenciamento do estado para o modal. Usamos a assertiva de tipo "as Course"
  // para garantir ao TypeScript que o objeto não é undefined.
  return <CourseDetailsClient course={course as Course} />;
}

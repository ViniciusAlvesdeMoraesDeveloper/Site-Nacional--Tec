import Storaged from "@/utils/storeged";
import CourseDetailsClient from "./CourseDetailsClient";

// Função para gerar os parâmetros estáticos para as rotas
// A tipagem 'slug: string' garante que o valor seja sempre uma string
export async function generateStaticParams():Promise<{slug:string}[]> {
 const areas = Storaged();
 const allCourses = areas.flatMap((area) => area.courses);

 return allCourses
 .filter((course) => course && course.slug)
 .map((course) => ({
  slug: course.slug,
 }));
}

// Interface para definir a tipagem das props da página
interface PageProps {
 params: {
  slug: string;
 };
}

// Componente da página principal que recebe as props com a tipagem correta
export default function Page({ params }: { params: { slug: string } }) {
  const areas = Storaged();
  const allCourses = areas.flatMap((area) => area.courses);

  const course = allCourses.find((c) => c?.slug === params.slug);

  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Curso não encontrado!
        </h1>
      </div>
    );
  }

  return <CourseDetailsClient course={course} />;
}


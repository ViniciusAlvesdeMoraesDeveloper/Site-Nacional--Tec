/// app/courses/[slug]/page.tsx
import { notFound } from 'next/navigation';
import courses from '@/app/data/courses.json'; 

interface CoursePageProps {
  params: {
    slug: string; 
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  // 1. Busca o curso com o slug fornecido pela URL
  const foundCourse = courses.find((c) => c.slug === params.slug);

  // 2. Verifica se o curso foi encontrado. Se não, exibe a página de erro.
  if (!foundCourse) {
    return notFound();
  }

  // 3. Se o curso for encontrado, renderiza os detalhes.
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-8 md:p-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
          {foundCourse.title}
        </h1>
        <p className="mt-4 text-xl text-gray-600 text-center">
          {foundCourse.description}
        </p>
      </div>
    </div>
  );
}
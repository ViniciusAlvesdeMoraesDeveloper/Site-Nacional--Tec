// app/courses/[slug]/page.tsx
import { notFound } from 'next/navigation';
import courses from '@/app/data/courses.json'; 

interface CoursePageProps {
  params: {
    slug: string; 
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  
  console.log("Parâmetro da URL (params.slug):", params.slug);
  console.log("Dados dos cursos:", courses);
  
  const coursed = courses.find((c) => c.slug === params.slug);

  if (!coursed) {
    return notFound();
  }
  
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl p-8 md:p-12 space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">
          {coursed.title}
        </h1>
        <p className="mt-4 text-xl text-gray-600 text-center">
          {coursed.description}
        </p>
      </div>
    </div>
  );
}
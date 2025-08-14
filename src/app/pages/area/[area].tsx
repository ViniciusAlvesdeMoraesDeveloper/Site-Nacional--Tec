import { GetStaticPaths,GetStaticProps } from "next";
import { useRouter } from "next/router";
import { courses,Course } from "@/data/courses";
import CourseCard from "@/app/Components/coursecard";

type Props = {
  area: string;
  filteredCourses: Course[];
};


export default function AreaPage({ area, filteredCourses }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Cursos na área: {area}</h1>   
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    </div>
  );
}
// Gera as rotas com base nas áreas existentes
export const getStaticPaths: GetStaticPaths = async () => {
  const areasUnicas = [...new Set(courses.map((c) => c.flag))];
  const paths = areasUnicas.map(area => ({
    params: { area }
  }));
  return {
    paths,
    fallback: true
  };
};
// Filtra os cursos com base na área da URL
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const area = params?.area as string;
  const filteredCourses = courses.filter(course => course.flag === area);

  return {
    props: {
      area,
      filteredCourses
    },
    revalidate: 60 // Revalida a cada 60 segundos
  };
}
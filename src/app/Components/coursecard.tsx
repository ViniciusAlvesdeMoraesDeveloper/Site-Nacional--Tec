import { Course } from "@/data/courses";

type Props = {
  course: Course;
};
export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="w-full max-w-sm bg-white shadow-md rounded-md overflow-hidden transition hover:scale-105 duration-300">
      <img
        src={course.imageUrl}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl text-black font-semibold mb-2">{course.title}</h2>
        <p className="text-gray-600 text-sm">{course.description}</p>
      </div>
    </div>
  );
}

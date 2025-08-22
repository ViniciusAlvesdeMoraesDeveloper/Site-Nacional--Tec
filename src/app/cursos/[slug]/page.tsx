"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import Storaged from "@/utils/storeged"
import { slugify } from "@/utils/slugify"
import { ArrowLeft, BookOpen, Clock, Users, Award } from "lucide-react"
import Image from "next/image"
import CoursePage from "@/app/coursespage/[slug]/page";

export default function CursosSlugPage() {
  const { slug } = useParams<{ slug: string }>()
  const decodeSlug = decodeURIComponent(slug || "")

  const allAreas = Storaged()
  const currentArea = allAreas.find((area) => slugify(area.flag) === decodeSlug)

  if (!currentArea) {
    return (
      <div className="bg-gray-50 flex flex-col items-center justify-center min-h-screen text-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Área não encontrada!</h1>
          <p className="text-gray-600 mb-6">A área de cursos que você procura não existe ou foi movida.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} className="" />
            Voltar para Início
          </Link>
        </div>
      </div>
    )
  }

  // Card dos cursos 
  const realCourses = currentArea.courses || []
  return (
    <div className="bg-gray-50 flex flex-col w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-green-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 mb-6 text-blue-200 hover:text-white transition-colors"
          >

            <h2 className="flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 group cursor-pointer">
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform text-white" />
              Voltar para áreas
            </h2>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cursos de {currentArea.category}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{currentArea.description}</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="py-16 bg-white w-full flex flex-col ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] h-full flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={course.img?.src || "/placeholder.svg"}
                    alt={course.img?.alt || course.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-blue-800">
                      {course.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{course.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      Certificação
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      Profissional
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-green-600">Consulte valores</span>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Award size={16} />
                      <span className="text-sm text-gray-600">Certificado</span>
                    </div>
                  </div>

                 
                  <Link href={`/courses/${(course.slug)}`} passHref>
                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] shadow-lg mt-auto">
                      Matricular Agora
                    </button>
                  </Link>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ainda tem dúvidas sobre qual curso escolher?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Nossa equipe está pronta para te ajudar a encontrar o curso ideal para seus objetivos
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
            Falar com Consultor
          </button>
        </div>
      </section>
    </div>
  )
}

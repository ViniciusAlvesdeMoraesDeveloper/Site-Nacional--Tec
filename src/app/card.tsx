import Link from "next/link";
import Image from "next/image";
import { Flag, MessageCircle } from "lucide-react";
import {Course} from "../utils/storeged";




export interface CardPageProps {
  title: string;
  description: string;
  flag: string;
  category?: string;
  img?: {
    src: string;
    alt: string;
  };
}

export default function CardPage({
  title,
  description,
  flag,
  img,
}: CardPageProps) {
  return (
    <section
      id="AreaCursos"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full"
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Área de Cursos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="relative h-48">
            <Image
              src={img?.src || "/placeholder.svg"}
              alt={img?.alt || "Curso Logo"}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mt-4">{title}</h3>
          <p className="text-sm text-gray-600 mt-2">{description}</p>

          {/* usa flag corretamente */}
          <Link
            href={`/cursos/${flag.toLowerCase()}`}
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Ver Cursos
          </Link>

          <div className="relative z-10 mt-auto">
            <Link
              href={`/cursos/${flag.toLowerCase()}`}
              className="flex items-center justify-center gap-2 w-full bg-green-500 text-white py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:bg-green-600 hover:scale-[1.03]"
            >
              <MessageCircle color="white" width={20} />
              Garanta sua vaga AGORA!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


        

      


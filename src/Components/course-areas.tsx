import Link from "next/link"
import Image from "next/image"
import { MessageCircle } from "lucide-react"
import type { CardPageProps } from "@/app/card"

interface AreaCardProps extends CardPageProps {}

export default function AreaCard({ title, description, flag, img }: AreaCardProps) {
  return (
    <div  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] w-full max-w-sm min-w-[280px]">
      <div className="relative h-48 overflow-hidden w-full">
        <Image
          src={img?.src || "/placeholder.svg?height=200&width=400&query=curso"}
          alt={img?.alt || "Área de Curso"}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 break-words"></h3>
        <h2 className=" text-black hover:text-emerald-400">{title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>

        <Link
          href={`/cursos/${flag.toLowerCase()}`}
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 hover:scale-[1.03]"
        >
          <MessageCircle size={20} />
          Ver Cursos da Área
        </Link>
      </div>
    </div>
  )
}

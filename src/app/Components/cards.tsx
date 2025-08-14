import { courses } from '@/data/courses';
import AreaSaude from '@/app/Components/areasaude';

import Link from 'next/link';
import Image from 'next/image';

export default function Cards() {
  return (
    <div id='Area Cursos' className="min-h-screen bg-gray-50 flex flex-col">

    <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Área de Cursos</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/area/informatica"
            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src="/informatica.webp"
                alt="Informática"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Informática
              </h3>
              <p className="text-sm text-gray-600 mt-1">Cursos técnicos em tecnologia e programação</p>
            </div>
          </Link>

          <Link
            href="@\app\Components\areasaude"
            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src="/agente de saude.webp"
                alt="Saúde"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Saúde</h3>
              <p className="text-sm text-gray-600 mt-1">Cursos técnicos na área da saúde</p>
            </div>
          </Link>

          <Link
            href="/area/agronegocio"
            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src="/Agronegocio.webp"
                alt="Agronegócio"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Agronegócio
              </h3>
              <p className="text-sm text-gray-600 mt-1">Cursos técnicos em agricultura e pecuária</p>
            </div>
          </Link>

          <Link
            href="/area/administracao"
            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src="/Administracao.webp"
                alt="Administração"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Administração
              </h3>
              <p className="text-sm text-gray-600 mt-1">Cursos técnicos em gestão e negócios</p>
            </div>
          </Link>

          <Link
            href="/area/infraestrutura"
            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src="/Infraestrutura.webp"
                alt="Infraestrutura"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Infraestrutura
              </h3>
              <p className="text-sm text-gray-600 mt-1">Cursos técnicos em construção e obras</p>
            </div>
          </Link>

          <Link
            href="/area/engenharia"
            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src="/Engenharia.webp"
                alt="Engenharia"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Engenharia
              </h3>
              <p className="text-sm text-gray-600 mt-1">Cursos técnicos em engenharia aplicada</p>
            </div>
          </Link>

          <Link
            href="/area/meio-ambiente"
            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src="/MeioAmbiente.webp"
                alt="Meio Ambiente"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Meio Ambiente
              </h3>
              <p className="text-sm text-gray-600 mt-1">Cursos técnicos em sustentabilidade</p>
            </div>
          </Link>

          <Link
            href="/area/servicos"
            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src="/gastronomia.webp"
                alt="Serviços"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                Serviços
              </h3>
              <p className="text-sm text-gray-600 mt-1">Cursos técnicos em prestação de serviços</p>
            </div>
          </Link>
        </div>
    </div>
    </div>
  );
}
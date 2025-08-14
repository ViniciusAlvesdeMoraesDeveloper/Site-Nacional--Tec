import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { courses, Course } from '@/data/courses';
import Cards from './cards';

export default function AreaSaude() {
    return (
        <div id='Areasaude' className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold mb-6 text-gray-900">Área de Cursos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.filter(course => course.flag === 'Saude').map((course) => (
                        <Link
                            key={course.id}
                            href={`/area/${course.flag}`}
                            className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={course.imageUrl}
                                    alt={course.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{course.description}</p>  

                            </div>
                        </Link>
                    ))}
                </div>  
            </div>
        </div>
    );  



}
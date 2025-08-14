import React from 'react';
import  TopBar  from './Components/topbar';
import Footer from './Components/footer';
import BottomUpper from './Components/bottomupper';
import Cards from './Components/cards';
import { courses } from '@/data/courses';
import CourseCard from './Components/coursecard';
import Link from 'next/link';
import Image from 'next/image';


export default function Page() {
    return (
     

 <div className="min-h-screen bg-gray-50 flex flex-col">
      <TopBar />

      <main className="flex-1">
        <Cards/>
      </main>

      <Footer />
      <BottomUpper/>
    </div>
  )
}
export interface Course {
  id: number
  title: string
  description: string
  category?: string
  flag?: string
  img?:{src:string
    alt:string
  }
    
  
}

export interface CardPageProps {
  title: string
  description: string
  flag: string
  category?: string
  img?: {
    src: string
    alt: string
  }
  courses?: Course[] // Adicionando array de cursos
}

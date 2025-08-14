export type Course = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  flag: "Informatica" | "Saude" | "Agronegocio" | "Administracao" | "Infraestrutura" | "Engenharia" | "Meio-Ambiente" | "Servicos" ;
};

export const courses: Course[] = [
  {
    id: 1,
    title: "Técnico em Agente Comunitário de Saúde",
    description: "Formação para atuar na promoção da saúde e prevenção de doenças.",
    imageUrl: "/agente-de-saude.webp",
    flag: "Saude"
  },
  {
    id: 2,
    title: "Administração",
    description: "Curso voltado para a gestão de negócios e organizações.",
    imageUrl: "/administracao.webp ",
    flag:"Administracao"
  },
];
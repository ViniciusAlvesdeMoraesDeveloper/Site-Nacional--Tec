import type { CardPageProps } from "../types/cousers";

export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  flag: string;
  img: {
    src: string;
    alt: string;
  };
  slug: string; // Adicionada a propriedade slug aqui
}

export interface Area {
  title: string;
  description: string;
  category: string;
  flag: string;
  img: {
    src: string;
    alt: string;
  };
  courses: Course[];
}

export default function Storaged(): CardPageProps[] {
  return [
    {
      // ===============================
      // Área da Saúde
      // ===============================
      title: "Área da Saude",
      description:
        "Aprenda com especialistas e garanta certificação reconhecida. Trabalhe salvando vidas e tenha estabilidade no setor que mais cresce no Brasil!",
      category: "Saúde",
      flag: "Saude",
      img: {
        src: "/agente de saude.webp",
        alt: "Saúde Logo",
      },
      courses: [
        {
          id: 1,
          title: "Técnico em Agente Comunitário de Saúde",
          description:
            "Capacite-se para atuar na promoção da saúde, prevenção de doenças e acompanhamento da comunidade.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/4167543/pexels-photo-4167543.jpeg",
            alt: "Agente de Saúde",
          },
          slug: "tecnico-em-agente-comunitario-de-saude",
        },
        {
          id: 2,
          title: "Técnico em Análises Clínicas",
          description:
            "Aprenda a realizar exames laboratoriais com precisão, auxiliando no diagnóstico de doenças.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
            alt: "Análises Clínicas",
          },
          slug: "tecnico-em-analises-clinicas",
        },
        {
          id: 3,
          title: "Técnico em Cuidados de Idosos",
          description:
            "Formação para atuar no cuidado humanizado a idosos, promovendo qualidade de vida e bem-estar.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg",
            alt: "Cuidados de Idosos",
          },
          slug: "tecnico-em-cuidados-de-idosos",
        },
        {
          id: 4,
          title: "Técnico em Enfermagem",
          description:
            "Profissão essencial na saúde, com prática hospitalar e comunitária em diferentes áreas do cuidado.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/5207015/pexels-photo-5207015.jpeg",
            alt: "Enfermagem",
          },
          slug: "tecnico-em-enfermagem",
        },
        {
          id: 5,
          title: "Técnico em Equipamentos Biomédicos",
          description:
            "Aprenda a manter e reparar equipamentos hospitalares, garantindo a segurança de pacientes e profissionais.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/7470817/pexels-photo-7470817.jpeg",
            alt: "Equipamentos Biomédicos",
          },
          slug: "tecnico-em-equipamentos-biomedicos",
        },
        {
          id: 6,
          title: "Técnico em Farmácia",
          description:
            "Formação para atuar em farmácias, drogarias, hospitais e indústrias farmacêuticas com ética e responsabilidade.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/4021808/pexels-photo-4021808.jpeg",
            alt: "Farmácia",
          },
          slug: "tecnico-em-farmacia",
        },
        {
          id: 7,
          title: "Técnico em Gerência em Saúde",
          description:
            "Desenvolva competências para administrar serviços de saúde com foco em gestão eficiente e qualidade.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/6627938/pexels-photo-6627938.jpeg",
            alt: "Gerência em Saúde",
          },
          slug: "tecnico-em-gerencia-em-saude",
        },
        {
          id: 8,
          title: "Técnico em Nutrição e Dietética",
          description:
            "Aprenda a planejar cardápios, orientar práticas alimentares e atuar em hospitais, escolas e empresas.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/1172019/pexels-photo-1172019.jpeg",
            alt: "Nutrição e Dietética",
          },
          slug: "tecnico-em-nutricao-e-dietetica",
        },
        {
          id: 9,
          title: "Técnico em Radiologia",
          description:
            "Formação para operar equipamentos de diagnóstico por imagem, com foco em segurança e precisão.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg",
            alt: "Radiologia",
          },
          slug: "tecnico-em-radiologia",
        },
        {
          id: 10,
          title: "Técnico em Saúde Bucal",
          description:
            "Capacite-se para auxiliar cirurgiões-dentistas, cuidando da prevenção e promoção da saúde bucal.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/6627315/pexels-photo-6627315.jpeg",
            alt: "Saúde Bucal",
          },
          slug: "tecnico-em-saude-bucal",
        },
        {
          id: 11,
          title: "Técnico em Veterinária",
          description:
            "Aprenda técnicas de cuidado, prevenção e tratamento para atuar junto a médicos veterinários.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/5487067/pexels-photo-5487067.jpeg",
            alt: "Veterinária",
          },
          slug: "tecnico-em-veterinaria",
        },
      ],
    },
    {
      // ===============================
      // Área de Administração e Gestão
      // ===============================
      title: "Administração e Gestão",
      description:
        "Domine as habilidades de gestão e impulsione sua carreira. Cursos práticos com professores experientes e certificação reconhecida.",
      category: "Administração",
      flag: "Administracao",
      img: {
        src: "/Administracao.webp",
        alt: "Administração Logo",
      },
      courses: [
        {
          id: 12,
          title: "Técnico em Administração",
          description:
            "Aprenda a atuar em processos administrativos, gestão de equipes e apoio estratégico para empresas.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/7876786/pexels-photo-7876786.jpeg",
            alt: "Administração",
          },
          slug: "tecnico-em-administracao",
        },
        {
          id: 13,
          title: "Técnico em Contabilidade",
          description:
            "Capacite-se em rotinas contábeis e financeiras, apoiando a tomada de decisões nas organizações.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/4476375/pexels-photo-4476375.jpeg",
            alt: "Contabilidade",
          },
          slug: "tecnico-em-contabilidade",
        },
        {
          id: 14,
          title: "Técnico em Logística",
          description:
            "Desenvolva competências em transporte, armazenamento e cadeia de suprimentos para o setor logístico.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg",
            alt: "Logística",
          },
          slug: "tecnico-em-logistica",
        },
        {
          id: 15,
          title: "Técnico em Marketing",
          description:
            "Aprenda a desenvolver campanhas, pesquisas de mercado e estratégias de comunicação eficazes.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg",
            alt: "Marketing",
          },
          slug: "tecnico-em-marketing",
        },
        {
          id: 16,
          title: "Técnico em Qualidade",
          description:
            "Formação para implantar sistemas de qualidade e garantir padrões em processos industriais e de serviços.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/5532842/pexels-photo-5532842.jpeg",
            alt: "Qualidade",
          },
          slug: "tecnico-em-qualidade",
        },
        {
          id: 17,
          title: "Técnico em Recursos Humanos",
          description:
            "Aprenda a recrutar, treinar e gerir pessoas, promovendo o desenvolvimento humano nas organizações.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg",
            alt: "Recursos Humanos",
          },
          slug: "tecnico-em-recursos-humanos",
        },
        {
          id: 18,
          title: "Técnico em Secretaria Escolar",
          description:
            "Capacite-se para atuar no setor administrativo escolar, apoiando processos educacionais.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/7648004/pexels-photo-7648004.jpeg",
            alt: "Secretaria Escolar",
          },
          slug: "tecnico-em-secretaria-escolar",
        },
        {
          id: 19,
          title: "Técnico em Segurança do Trabalho",
          description:
            "Aprenda a identificar riscos e implementar práticas de segurança para proteger ambientes de trabalho.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
            alt: "Segurança do Trabalho",
          },
          slug: "tecnico-em-seguranca-do-trabalho",
        },
        {
          id: 20,
          title: "Técnico em Serviços Jurídicos",
          description:
            "Formação para apoiar advogados e escritórios jurídicos na execução de tarefas administrativas e técnicas.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
            alt: "Serviços Jurídicos",
          },
          slug: "tecnico-em-servicos-juridicos",
        },
        {
          id: 21,
          title: "Técnico em Transações Imobiliárias",
          description:
            "Prepare-se para atuar no setor imobiliário, auxiliando em negociações, vendas e gestão de imóveis.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg",
            alt: "Transações Imobiliárias",
          },
          slug: "tecnico-em-transacoes-imobiliarias",
        },
        {
          id: 22,
          title: "Técnico em Vendas",
          description:
            "Aprenda técnicas de negociação, atendimento ao cliente e estratégias comerciais para diversos mercados.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg",
            alt: "Vendas",
          },
          slug: "tecnico-em-vendas",
        },
        {
          id: 23,
          title: "Curso Técnico em Eventos",
          description:
            "Capacite-se para planejar, organizar e executar eventos corporativos, culturais e sociais.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
            alt: "Eventos",
          },
          slug: "curso-tecnico-em-eventos",
        },
      ],
    },
    {
      // ===============================
      // Área da Tecnologia e Informática
      // ===============================
      title: "Tecnologia e Informática",
      description:
        "Domine as tecnologias mais avançadas e destaque-se no mercado de trabalho. Cursos práticos com certificação reconhecida.",
      category: "Tecnologia",
      flag: "Informatica",
      img: {
        src: "/Informatica.webp",
        alt: "Tecnologia Logo",
      },
      courses: [
        {
          id: 24,
          title: "Técnico em Biotecnologia",
          description:
            "Capacite-se em técnicas de laboratório e inovação biotecnológica aplicadas à saúde, agricultura e meio ambiente.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/3912518/pexels-photo-3912518.jpeg",
            alt: "Biotecnologia",
          },
          slug: "tecnico-em-biotecnologia",
        },
        {
          id: 25,
          title: "Técnico em Design Gráfico",
          description:
            "Aprenda a criar peças visuais, logotipos, materiais digitais e impressos com foco em comunicação visual.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg",
            alt: "Design Gráfico",
          },
          slug: "tecnico-em-design-grafico",
        },
        {
          id: 26,
          title: "Técnico em Desenvolvimento de Sistemas",
          description:
            "Domine linguagens de programação, bancos de dados e metodologias ágeis para criar sistemas e softwares.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
            alt: "Desenvolvimento de Sistemas",
          },
          slug: "tecnico-em-desenvolvimento-de-sistemas",
        },
        {
          id: 27,
          title: "Técnico em Informática para Internet",
          description:
            "Formação em criação e manutenção de sites, aplicações web e integração de sistemas online.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
            alt: "Informática para Internet",
          },
          slug: "tecnico-em-informatica-para-internet",
        },
        {
          id: 28,
          title: "Técnico em Redes de Computadores",
          description:
            "Aprenda a instalar, configurar e gerenciar redes de computadores e dispositivos de comunicação.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
            alt: "Redes de Computadores",
          },
          slug: "tecnico-em-redes-de-computadores",
        },
        {
          id: 29,
          title: "Técnico em Sistemas de Energia Renovável",
          description:
            "Formação para atuar em projetos e manutenção de sistemas de energia solar, eólica e outras fontes renováveis.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
            alt: "Sistemas de Energia Renovável",
          },
          slug: "tecnico-em-sistemas-de-energia-renovavel",
        },
        {
          id: 30,
          title: "Técnico em Telecomunicações",
          description:
            "Aprenda a trabalhar com sistemas de telefonia, internet, TV digital e comunicação de dados.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/15483318/pexels-photo-15483318.jpeg",
            alt: "Telecomunicações",
          },
          slug: "tecnico-em-telecomunicacoes",
        },
        {
          id: 31,
          title: "Técnico em Tradução e Interpretação de Libras",
          description:
            "Capacite-se para atuar como tradutor e intérprete da Língua Brasileira de Sinais em diferentes contextos.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/10031326/pexels-photo-10031326.jpeg",
            alt: "Tradução e Interpretação de Libras",
          },
          slug: "tecnico-em-traducao-e-interpretacao-de-libras",
        },
      ],
    },
    {
      // ===============================
      // Área da Engenharia e Manutenção
      // ===============================
      title: "Engenharia e Manutenção",
      description:
        "Aprenda com os melhores profissionais e garanta sua certificação. Trabalhe em projetos inovadores e tenha uma carreira de sucesso.",
      category: "Engenharia",
      flag: "Engenharia",
      img: {
        src: "/Engenharia.webp",
        alt: "Engenharia Logo",
      },
      courses: [
        {
          id: 32,
          title: "Técnico em Automação Industrial",
          description:
            "Aprenda a implementar e manter sistemas automatizados, integrando tecnologias na indústria.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/8113500/pexels-photo-8113500.jpeg",
            alt: "Automação Industrial",
          },
          slug: "tecnico-em-automacao-industrial",
        },
        {
          id: 33,
          title: "Técnico em Eletromecânica",
          description:
            "Formação para atuar em manutenção e operação de sistemas eletromecânicos em diferentes setores industriais.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/9242824/pexels-photo-9242824.jpeg",
            alt: "Eletromecânica",
          },
          slug: "tecnico-em-eletromecanica",
        },
        {
          id: 34,
          title: "Técnico em Eletrotécnica",
          description:
            "Aprenda a projetar, instalar e manter sistemas elétricos industriais e prediais com segurança.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
            alt: "Eletrotécnica",
          },
          slug: "tecnico-em-eletrotecnica",
        },
        {
          id: 35,
          title: "Técnico em Eletrônica",
          description:
            "Capacite-se para desenvolver e manter sistemas eletrônicos aplicados em diversas áreas tecnológicas.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/39290/mother-board-electronics-computer-board-39290.jpeg",
            alt: "Eletrônica",
          },
          slug: "tecnico-em-eletronica",
        },
        {
          id: 36,
          title: "Técnico em Manutenção de Máquinas Industriais",
          description:
            "Aprenda a identificar falhas e executar manutenções em equipamentos utilizados em processos produtivos.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
            alt: "Máquinas Industriais",
          },
          slug: "tecnico-em-manutencao-de-maquinas-industriais",
        },
        {
          id: 37,
          title: "Técnico em Máquinas Pesadas",
          description:
            "Formação para operar e realizar manutenção em equipamentos de grande porte utilizados na construção e mineração.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/1716008/pexels-photo-1716008.jpeg",
            alt: "Máquinas Pesadas",
          },
          slug: "tecnico-em-maquinas-pesadas",
        },
        {
          id: 38,
          title: "Técnico em Metalurgia",
          description:
            "Aprenda a trabalhar com processos de transformação e tratamento de metais para diversas aplicações industriais.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/10037658/pexels-photo-10037658.jpeg",
            alt: "Metalurgia",
          },
          slug: "tecnico-em-metalurgia",
        },
        {
          id: 39,
          title: "Técnico em Refrigeração e Climatização",
          description:
            "Formação para instalar e realizar manutenção em sistemas de refrigeração e climatização residenciais e industriais.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/5463587/pexels-photo-5463587.jpeg",
            alt: "Refrigeração e Climatização",
          },
          slug: "tecnico-em-refrigeracao-e-climatizacao",
        },
        {
          id: 40,
          title: "Técnico em Soldagem",
          description:
            "Capacite-se para executar processos de soldagem em estruturas metálicas com qualidade e segurança.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg",
            alt: "Soldagem",
          },
          slug: "tecnico-em-soldagem",
        },
        {
          id: 41,
          title: "Técnico em Manutenção de Máquinas Navais",
          description:
            "Aprenda a operar e manter sistemas e máquinas navais, atuando em portos e embarcações.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/2076828/pexels-photo-2076828.jpeg",
            alt: "Máquinas Navais",
          },
          slug: "tecnico-em-manutencao-de-maquinas-navais",
        },
      ],
    },
    {
      // ===============================
      // Área da Construção e Infraestrutura
      // ===============================
      title: "Construção e Infraestrutura",
      description:
        "Construa seu futuro com cursos práticos e certificação reconhecida. Aprenda com profissionais experientes e destaque-se no mercado.",
      category: "Infraestrutura",
      flag: "Infraestrutura",
      img: {
        src: "/infraestrutura.webp",
        alt: "Infraestrutura Logo",
      },
      courses: [
        {
          id: 42,
          title: "Técnico em Agrimensura",
          description:
            "Capacite-se em medições, levantamentos topográficos e georreferenciamento para projetos de engenharia e obras.",
          category: "Construção",
          flag: "Construcao",
          img: {
            src: "https://images.pexels.com/photos/7499043/pexels-photo-7499043.jpeg",
            alt: "Agrimensura",
          },
          slug: "tecnico-em-agrimensura",
        },
        {
          id: 43,
          title: "Técnico em Edificações",
          description:
            "Aprenda a elaborar projetos, supervisionar obras e acompanhar processos construtivos.",
          category: "Construção",
          flag: "Construcao",
          img: {
            src: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
            alt: "Edificações",
          },
          slug: "tecnico-em-edificacoes",
        },
        {
          id: 44,
          title: "Técnico em Mineração",
          description:
            "Formação para atuar na extração mineral, segurança em minas e controle de processos de beneficiamento.",
          category: "Construção",
          flag: "Construcao",
          img: {
            src: "https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg",
            alt: "Mineração",
          },
          slug: "tecnico-em-mineracao",
        },
        {
          id: 45,
          title: "Técnico em Segurança do Trabalho",
          description:
            "Aprenda a prevenir acidentes e garantir condições seguras em canteiros de obras e ambientes industriais.",
          category: "Construção",
          flag: "Construcao",
          img: {
            src: "https://images.pexels.com/photos/8482822/pexels-photo-8482822.jpeg",
            alt: "Segurança do Trabalho",
          },
          slug: "tecnico-em-seguranca-do-trabalho",
        },
        {
          id: 46,
          title: "Técnico em Prevenção e Combate ao Incêndio",
          description:
            "Capacite-se em técnicas de prevenção, combate a incêndios e resposta a emergências.",
          category: "Construção",
          flag: "Construcao",
          img: {
            src: "https://images.pexels.com/photos/8603020/pexels-photo-8603020.jpeg",
            alt: "Prevenção e Combate ao Incêndio",
          },
          slug: "tecnico-em-prevencao-e-combate-ao-incendio",
        },
        {
          id: 47,
          title: "Curso Técnico em Defesa Civil",
          description:
            "Formação para atuar na gestão de riscos, emergências e desastres naturais.",
          category: "Construção",
          flag: "Construcao",
          img: {
            src: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg",
            alt: "Defesa Civil",
          },
          slug: "curso-tecnico-em-defesa-civil",
        },
        {
          id: 48,
          title: "Curso Técnico em Trânsito",
          description:
            "Capacite-se para atuar em educação, fiscalização e gestão de trânsito urbano e rodoviário.",
          category: "Construção",
          flag: "Construcao",
          img: {
            src: "https://images.pexels.com/photos/20850198/pexels-photo-20850198.jpeg",
            alt: "Trânsito",
          },
          slug: "curso-tecnico-em-transito",
        },
      ],
    },
    {
      // ===============================
      // Área do Meio Ambiente e Agropecuária
      // ===============================
      title: "Meio Ambiente e Agropecuária",
      description:
        "Contribua para um mundo mais sustentável com cursos práticos e certificação reconhecida. Aprenda com especialistas e faça a diferença.",
      category: "Meio Ambiente",
      flag: "Meio-Ambiente",
      img: {
        src: "/MeioAmbiente.webp",
        alt: "Meio Ambiente Logo",
      },
      courses: [
        {
          id: 49,
          title: "Técnico em Agricultura",
          description:
            "Aprenda técnicas modernas de cultivo e manejo agrícola, garantindo produtividade e sustentabilidade.",
          category: "Agro",
          flag: "Agro",
          img: {
            src: "https://images.pexels.com/photos/7299993/pexels-photo-7299993.jpeg",
            alt: "Agricultura",
          },
          slug: "tecnico-em-agricultura",
        },
        {
          id: 50,
          title: "Técnico em Agropecuária",
          description:
            "Formação para atuar na criação de animais, manejo de propriedades rurais e produção agropecuária.",
          category: "Agro",
          flag: "Agro",
          img: {
            src: "https://images.pexels.com/photos/10041321/pexels-photo-10041321.jpeg",
            alt: "Agropecuária",
          },
          slug: "tecnico-em-agropecuaria",
        },
        {
          id: 51,
          title: "Técnico em Agroindústria",
          description:
            "Capacite-se na transformação de produtos agrícolas em alimentos, bebidas e outros produtos industrializados.",
          category: "Agro",
          flag: "Agro",
          img: {
            src: "https://images.pexels.com/photos/5213973/pexels-photo-5213973.jpeg",
            alt: "Agroindústria",
          },
          slug: "tecnico-em-agroindustria",
        },
        {
          id: 52,
          title: "Técnico em Aquicultura",
          description:
            "Aprenda a criar, manejar e comercializar espécies aquáticas com técnicas sustentáveis.",
          category: "Agro",
          flag: "Agro",
          img: {
            src: "https://images.pexels.com/photos/30737277/pexels-photo-30737277.jpeg",
            alt: "Aquicultura",
          },
          slug: "tecnico-em-aquicultura",
        },
        {
          id: 53,
          title: "Técnico em Meio Ambiente",
          description:
            "Formação para atuar na preservação ambiental, gestão de resíduos e projetos sustentáveis.",
          category: "Agro",
          flag: "Agro",
          img: {
            src: "https://images.pexels.com/photos/1230157/pexels-photo-1230157.jpeg",
            alt: "Meio Ambiente",
          },
          slug: "tecnico-em-meio-ambiente",
        },
      ],
    },
    {
      // ===============================
      // Área de Serviços
      // ===============================
      title: "Serviços",
      description:
        "Aprenda as melhores práticas de atendimento e garanta sua certificação. Trabalhe em diversas áreas de serviços e tenha uma carreira promissora.",
      category: "Serviços",
      flag: "Servicos",
      img: {
        src: "/gastronomia.webp",
        alt: "Serviços Logo",
      },
      courses: [
        {
          id: 54,
          title: "Técnico em Gastronomia",
          description:
            "Aprenda técnicas de cozinha, elaboração de cardápios e gestão de alimentos e bebidas.",
          category: "Serviços",
          flag: "Servicos",
          img: {
            src: "https://images.pexels.com/photos/671956/pexels-photo-671956.jpeg",
            alt: "Gastronomia",
          },
          slug: "tecnico-em-gastronomia",
        },
        {
          id: 55,
          title: "Técnico em Óptica",
          description:
            "Capacite-se na fabricação, manutenção e ajuste de lentes, óculos e instrumentos ópticos.",
          category: "Serviços",
          flag: "Servicos",
          img: {
            src: "https://images.pexels.com/photos/32593246/pexels-photo-32593246.jpeg",
            alt: "Óptica",
          },
          slug: "tecnico-em-optica",
        },
        {
          id: 56,
          title: "Curso Técnico em Design de Interiores",
          description:
            "Aprenda a planejar, projetar e decorar ambientes com criatividade e funcionalidade.",
          category: "Serviços",
          flag: "Servicos",
          img: {
            src: "https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg",
            alt: "Design de Interiores",
          },
          slug: "curso-tecnico-em-design-de-interiores",
        },
        {
          id: 57,
          title: "Curso Técnico em Guia de Turismo",
          description:
            "Capacite-se para conduzir turistas, organizar roteiros e promover experiências culturais e de lazer.",
          category: "Serviços",
          flag: "Servicos",
          img: {
            src: "https://images.pexels.com/photos/8828439/pexels-photo-8828439.jpeg",
            alt: "Guia de Turismo",
          },
          slug: "curso-tecnico-em-guia-de-turismo",
        },
      ],
    },
  ];
}
// src/utils/storeged.tsx

// A interface `CardPageProps` não é mais necessária aqui,
// pois usaremos a interface `Area` definida abaixo.
// Remova esta linha:
// import type { CardPageProps } from "../types/cousers";

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
  slug: string;
  whatYouWillLearn: string[];
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

// Corrigido: A função agora retorna a interface 'Area'
// que está definida neste mesmo arquivo.
export default function Storaged(): Area[] {
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
          whatYouWillLearn: [
            "Realizar visitas domiciliares e identificar necessidades de saúde da população.",
            "Promover a educação em saúde, orientando sobre prevenção de doenças e hábitos saudáveis.",
            "Coletar dados epidemiológicos para auxiliar na formulação de políticas públicas de saúde.",
            "Atuar como elo entre a comunidade e a equipe de saúde, facilitando o acesso aos serviços.",
          ],
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
          whatYouWillLearn: [
            "Coletar, processar e analisar amostras biológicas (sangue, urina, fezes, etc.).",
            "Operar equipamentos e sistemas de automação de laboratório.",
            "Interpretar e validar resultados de exames, auxiliando no diagnóstico e tratamento de doenças.",
            "Aplicar normas de biossegurança e controle de qualidade em laboratórios.",
          ],
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
          whatYouWillLearn: [
            "Oferecer cuidados diários e assistência em atividades básicas como higiene e alimentação.",
            "Reconhecer e lidar com as especificidades do envelhecimento, incluindo doenças crônicas e desafios de mobilidade.",
            "Promover atividades de lazer e socialização para o bem-estar mental e físico do idoso.",
            "Garantir um ambiente seguro e adaptado para as necessidades do idoso.",
          ],
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
          whatYouWillLearn: [
            "Prestar assistência direta a pacientes, monitorando sinais vitais e administrando medicamentos.",
            "Realizar curativos e procedimentos básicos de primeiros socorros.",
            "Auxiliar enfermeiros e médicos em procedimentos clínicos e cirúrgicos.",
            "Aplicar normas de biossegurança e prevenção de infecções hospitalares.",
          ],
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
          whatYouWillLearn: [
            "Instalar e configurar equipamentos médicos e hospitalares.",
            "Realizar manutenções preventivas e corretivas em aparelhos biomédicos.",
            "Diagnosticar e solucionar problemas técnicos em equipamentos como monitores cardíacos e ventiladores.",
            "Garantir a calibração e o bom funcionamento dos equipamentos conforme as normas de segurança.",
          ],
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
          whatYouWillLearn: [
            "Organizar e dispensar medicamentos, controlando estoques e validades.",
            "Orientar pacientes sobre o uso correto de medicamentos e efeitos colaterais.",
            "Manipular fórmulas e medicamentos, seguindo as boas práticas de fabricação.",
            "Atuar em farmácias hospitalares, drogarias e indústrias farmacêuticas.",
          ],
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
          whatYouWillLearn: [
            "Gerenciar equipes, recursos e processos em clínicas e hospitais.",
            "Desenvolver e implementar planos de gestão e projetos de melhoria na área da saúde.",
            "Analisar indicadores de desempenho e custos para otimizar serviços.",
            "Conhecer a legislação e as políticas públicas para a gestão em saúde.",
          ],
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
          whatYouWillLearn: [
            "Planejar e elaborar cardápios nutricionalmente adequados para diferentes públicos.",
            "Supervisionar a preparação de alimentos, garantindo a higiene e a segurança alimentar.",
            "Orientar pacientes e comunidades sobre hábitos alimentares saudáveis.",
            "Atuar em refeitórios de empresas, escolas, hospitais e clínicas de nutrição.",
          ],
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
          whatYouWillLearn: [
            "Operar equipamentos de Raio-X, tomografia computadorizada e ressonância magnética.",
            "Posicionar pacientes e garantir a qualidade das imagens radiológicas.",
            "Aplicar normas de proteção radiológica para a segurança do paciente e da equipe.",
            "Realizar exames de radiologia em hospitais, clínicas e laboratórios de imagem.",
          ],
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
          whatYouWillLearn: [
            "Preparar o ambiente de atendimento, instrumentos e materiais odontológicos.",
            "Auxiliar o cirurgião-dentista em procedimentos e exames clínicos.",
            "Realizar a profilaxia bucal e orientar pacientes sobre higiene oral.",
            "Organizar e controlar o prontuário de pacientes em clínicas odontológicas.",
          ],
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
          whatYouWillLearn: [
            "Prestar primeiros socorros e auxiliar em cirurgias e exames veterinários.",
            "Realizar a coleta de amostras e a administração de medicamentos em animais.",
            "Garantir a limpeza e a desinfecção de ambientes clínicos e cirúrgicos.",
            "Orientar tutores sobre a saúde e o bem-estar de seus animais de estimação.",
          ],
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
          whatYouWillLearn: [
            "Executar rotinas de finanças, marketing e logística.",
            "Elaborar e controlar orçamentos, contas a pagar e a receber.",
            "Apoiar a gestão de equipes, auxiliando em processos de recrutamento e treinamento.",
            "Organizar a documentação e os arquivos de uma empresa de forma eficiente.",
          ],
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
          whatYouWillLearn: [
            "Lançar e analisar demonstrações contábeis como balancete e DRE.",
            "Calcular impostos e taxas, auxiliando no planejamento tributário.",
            "Elaborar relatórios financeiros para a tomada de decisões gerenciais.",
            "Conhecer as normas contábeis brasileiras e o sistema SPED.",
          ],
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
          whatYouWillLearn: [
            "Gerenciar o fluxo de materiais, do fornecedor ao cliente final.",
            "Otimizar processos de estoque, armazenamento e distribuição.",
            "Coordenar o transporte de mercadorias, escolhendo as melhores rotas e modais.",
            "Utilizar softwares de gestão logística para rastreamento e controle.",
          ],
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
          whatYouWillLearn: [
            "Realizar pesquisas de mercado para identificar tendências e público-alvo.",
            "Desenvolver estratégias de marketing digital, incluindo mídias sociais e e-mail marketing.",
            "Acompanhar o desempenho de campanhas utilizando métricas e análise de dados.",
            "Criar planos de comunicação e promoção para produtos e serviços.",
          ],
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
          whatYouWillLearn: [
            "Implementar e auditar sistemas de gestão da qualidade, como a ISO 9001.",
            "Controlar a qualidade de produtos e serviços em diferentes etapas do processo.",
            "Identificar e solucionar problemas, aplicando ferramentas de melhoria contínua.",
            "Elaborar manuais e procedimentos de qualidade para a padronização de processos.",
          ],
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
          whatYouWillLearn: [
            "Conduzir processos de recrutamento e seleção, desde a divulgação de vagas até a contratação.",
            "Elaborar e aplicar programas de treinamento e desenvolvimento de equipes.",
            "Gerenciar a folha de pagamento, benefícios e a documentação dos colaboradores.",
            "Mediar conflitos e promover um ambiente de trabalho saudável e produtivo.",
          ],
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
          whatYouWillLearn: [
            "Gerenciar a vida acadêmica dos alunos, incluindo matrículas, transferências e emissão de diplomas.",
            "Organizar e manter atualizados os prontuários e a documentação escolar.",
            "Prestar atendimento a pais, alunos e professores, solucionando dúvidas e problemas administrativos.",
            "Utilizar softwares de gestão educacional para otimizar as rotinas da secretaria.",
          ],
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
          whatYouWillLearn: [
            "Identificar riscos e elaborar planos de prevenção de acidentes.",
            "Inspecionar ambientes de trabalho, garantindo que as normas de segurança sejam cumpridas.",
            "Realizar treinamentos e campanhas de conscientização sobre segurança para os colaboradores.",
            "Preencher documentos e relatórios técnicos, como o Programa de Prevenção de Riscos Ambientais (PPRA).",
          ],
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
          whatYouWillLearn: [
            "Organizar e arquivar processos e documentos jurídicos.",
            "Elaborar petições, contratos e procurações sob a supervisão de um advogado.",
            "Auxiliar no acompanhamento de audiências e no controle de prazos.",
            "Realizar pesquisas jurídicas para apoiar a atuação de profissionais do direito.",
          ],
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
          whatYouWillLearn: [
            "Avaliar imóveis e identificar o valor de mercado para venda ou locação.",
            "Conduzir negociações e intermediar a compra, venda e locação de propriedades.",
            "Elaborar contratos imobiliários e gerenciar a documentação necessária.",
            "Entender as tendências e o funcionamento do mercado imobiliário.",
          ],
        },
        {
          id: 22,
          title: "Técnico em Vendas",
          description:
            "Aprenda a técnicas de negociação, atendimento ao cliente e estratégias comerciais para diversos mercados.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg",
            alt: "Vendas",
          },
          slug: "tecnico-em-vendas",
          whatYouWillLearn: [
            "Aplicar técnicas de prospecção e negociação para fechar vendas.",
            "Construir e manter um bom relacionamento com os clientes.",
            "Gerenciar carteiras de clientes e identificar novas oportunidades de negócio.",
            "Elaborar planos de vendas e atingir metas comerciais.",
          ],
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
          whatYouWillLearn: [
            "Planejar e organizar eventos de pequeno, médio e grande porte.",
            "Gerenciar orçamentos, cronogramas e fornecedores de eventos.",
            "Coordenar a montagem e a desmontagem de estruturas, garantindo a segurança do público.",
            "Elaborar a divulgação de eventos e atrair participantes.",
          ],
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
          whatYouWillLearn: [
            "Realizar experimentos em laboratórios de biotecnologia, seguindo protocolos de segurança.",
            "Manipular organismos para a produção de alimentos, medicamentos e combustíveis.",
            "Analisar dados de pesquisa e desenvolver soluções inovadoras.",
            "Atuar em indústrias farmacêuticas, de alimentos, ou de biocombustíveis.",
          ],
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
          whatYouWillLearn: [
            "Criar identidades visuais e logotipos para marcas e empresas.",
            "Utilizar softwares de edição de imagem e vetor, como Adobe Photoshop e Illustrator.",
            "Desenvolver peças gráficas para mídias sociais, sites e materiais impressos.",
            "Entender os princípios de tipografia, cores e layout para uma comunicação visual eficaz.",
          ],
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
          whatYouWillLearn: [
            "Programar em linguagens como JavaScript, Python e outras linguagens de backend.",
            "Projetar e gerenciar bancos de dados relacionais e não-relacionais.",
            "Desenvolver APIs e integrar diferentes sistemas de software.",
            "Aplicar metodologias ágeis como Scrum para gerenciar projetos de software.",
          ],
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
          whatYouWillLearn: [
            "Criar e otimizar sites usando HTML, CSS e JavaScript.",
            "Desenvolver aplicações web dinâmicas e responsivas.",
            "Gerenciar servidores web e garantir a segurança de sites.",
            "Utilizar frameworks e bibliotecas modernas como React e Next.js.",
          ],
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
          whatYouWillLearn: [
            "Instalar e configurar roteadores, switches e firewalls.",
            "Gerenciar a segurança de redes e proteger dados contra ataques.",
            "Realizar a manutenção e o diagnóstico de problemas em redes de computadores.",
            "Entender os protocolos de rede, como TCP/IP, e o funcionamento da internet.",
          ],
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
          whatYouWillLearn: [
            "Projetar e instalar sistemas de energia solar fotovoltaica e eólica.",
            "Realizar a manutenção de equipamentos eólicos e painéis solares.",
            "Analisar a viabilidade econômica de projetos de energias renováveis.",
            "Conhecer as políticas e legislações de energias renováveis no Brasil.",
          ],
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
          whatYouWillLearn: [
            "Instalar e configurar equipamentos de redes de comunicação, como roteadores e antenas.",
            "Realizar a manutenção de sistemas de telefonia, internet e TV a cabo.",
            "Garantir a qualidade do sinal e a segurança das redes de telecomunicações.",
            "Entender o funcionamento de tecnologias como fibra óptica e comunicação via satélite.",
          ],
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
          whatYouWillLearn: [
            "Dominar a gramática, a sintaxe e a semântica da Língua Brasileira de Sinais (Libras).",
            "Realizar a interpretação simultânea e consecutiva em eventos, palestras e reuniões.",
            "Traduzir textos escritos para Libras e vice-versa.",
            "Atuar como ponte de comunicação entre pessoas surdas e ouvintes em diversos ambientes sociais.",
          ],
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
          whatYouWillLearn: [
            "Programar controladores lógicos programáveis (CLPs) e robôs industriais.",
            "Projetar e instalar sistemas de controle automatizado em linhas de produção.",
            "Realizar a manutenção de equipamentos e sistemas de automação.",
            "Integrar tecnologias de automação para otimizar a eficiência de processos industriais.",
          ],
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
          whatYouWillLearn: [
            "Instalar e realizar a manutenção de máquinas e equipamentos que combinam eletricidade e mecânica.",
            "Diagnosticar e solucionar falhas em sistemas de automação e controle industrial.",
            "Ler e interpretar diagramas elétricos e mecânicos para montagem e reparo de equipamentos.",
            "Aplicar normas de segurança e qualidade em ambientes industriais.",
          ],
        },
        {
          id: 34,
          title: "Técnico em Edificações",
          description:
            "Capacite-se para atuar no planejamento, execução e controle de obras da construção civil.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?_gl=1*xnjs12*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NTcwODI5ODAkbzQkZzEkdDE3NTcwODUwNDQkajU5JGwwJGgw",
            alt: "Edificações",
          },
          slug: "tecnico-em-edificacoes",
          whatYouWillLearn: [
            "Elaborar e interpretar projetos arquitetônicos e estruturais.",
            "Gerenciar o cronograma e o orçamento de obras, controlando o uso de materiais.",
            "Supervisionar equipes de trabalho e garantir a qualidade e a segurança na construção.",
            "Atuar em construtoras, escritórios de arquitetura e órgãos públicos.",
          ],
        },
        {
          id: 35,
          title: "Técnico em Eletrônica",
          description:
            "Aprenda a projetar, montar e fazer a manutenção de sistemas e circuitos eletrônicos.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/7286020/pexels-photo-7286020.jpeg?_gl=1*bhupgw*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NTcwODI5ODAkbzQkZzEkdDE3NTcwODUxNjAkajM4JGwwJGgw",
            alt: "Eletrônica",
          },
          slug: "tecnico-em-eletronica",
          whatYouWillLearn: [
            "Projetar e montar circuitos eletrônicos analógicos e digitais.",
            "Realizar a manutenção e o reparo de equipamentos eletrônicos.",
            "Programar microcontroladores e sistemas embarcados.",
            "Entender o funcionamento de componentes como transistores, resistores e capacitores.",
          ],
        },
        {
          id: 36,
          title: "Técnico em Eletrotécnica",
          description:
            "Formação para atuar com instalação, manutenção e projetos de sistemas elétricos de potência e controle.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/33694022/pexels-photo-33694022.jpeg?_gl=1*utf1mp*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NTcwODI5ODAkbzQkZzEkdDE3NTcwODUyMTkkajQ0JGwwJGgw",
            alt: "Eletrotécnica",
          },
          slug: "tecnico-em-eletrotecnica",
          whatYouWillLearn: [
            "Instalar e fazer a manutenção de redes elétricas de baixa e média tensão.",
            "Projetar sistemas elétricos residenciais, comerciais e industriais.",
            "Realizar o controle e a automação de processos industriais baseados em eletricidade.",
            "Aplicar normas de segurança em instalações elétricas, como a NR-10.",
          ],
        },
        {
          id: 37,
          title: "Técnico em Manutenção Automotiva",
          description:
            "Capacite-se para fazer a manutenção e o reparo de veículos leves e pesados, incluindo sistemas mecânicos, elétricos e eletrônicos.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/4315574/pexels-photo-4315574.jpeg?_gl=1*1p7nwtj*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NTcwODI5ODAkbzQkZzEkdDE3NTcwODUyNjgkajU2JGwwJGgw",
            alt: "Manutenção Automotiva",
          },
          slug: "tecnico-em-manutencao-automotiva",
          whatYouWillLearn: [
            "Diagnosticar e solucionar problemas em motores a combustão interna.",
            "Realizar a manutenção de sistemas de freios, suspensão e transmissão.",
            "Utilizar equipamentos de diagnóstico eletrônico para identificar falhas.",
            "Conhecer as novas tecnologias automotivas, como carros elétricos e híbridos.",
          ],
        },
        {
          id: 38,
          title: "Técnico em Manutenção de Aeronaves",
          description:
            "Formação para atuar com a manutenção de aeronaves, garantindo a segurança de voo e a conformidade com as normas da aviação.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/32662306/pexels-photo-32662306.jpeg?_gl=1*i5c2u9*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NTcwODI5ODAkbzQkZzEkdDE3NTcwODUzMDYkajE4JGwwJGgw",
            alt: "Manutenção de Aeronaves",
          },
          slug: "tecnico-em-manutencao-de-aeronaves",
          whatYouWillLearn: [
            "Inspecionar e fazer a manutenção de fuselagens, motores e sistemas de aeronaves.",
            "Realizar o reparo e a substituição de componentes, seguindo os manuais de fabricação.",
            "Conhecer as normas de segurança e os regulamentos da Agência Nacional de Aviação Civil (ANAC).",
            "Trabalhar em equipes de manutenção em aeroportos e hangares.",
          ],
        },
        {
          id: 39,
          title: "Técnico em Mecânica",
          description:
            "Aprenda a operar, instalar e fazer a manutenção de máquinas e equipamentos industriais.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/51320/drill-milling-milling-machine-drilling-51320.jpeg?_gl=1*xuc0zw*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NTcwODI5ODAkbzQkZzEkdDE3NTcwODUzNjckajI5JGwwJGgw",
            alt: "Mecânica",
          },
          slug: "tecnico-em-mecanica",
          whatYouWillLearn: [
            "Montar e desmontar máquinas e equipamentos, identificando falhas mecânicas.",
            "Realizar a manutenção preventiva e corretiva em sistemas mecânicos.",
            "Interpretar desenhos e projetos de peças e componentes mecânicos.",
            "Utilizar ferramentas e equipamentos de medição para garantir a precisão dos reparos.",
          ],
        },
        {
          id: 40,
          title: "Técnico em Metalurgia",
          description:
            "Formação para atuar em processos de extração, produção e tratamento de metais e ligas metálicas.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?_gl=1*1kk5asq*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NTcwODI5ODAkbzQkZzEkdDE3NTcwODQ4NzkkajM2JGwwJGgw",
            alt: "Metalurgia",
          },
          slug: "tecnico-em-metalurgia",
          whatYouWillLearn: [
            "Controlar e monitorar processos de fundição, laminação e forjamento.",
            "Analisar a composição de metais e ligas em laboratórios de metalurgia.",
            "Aplicar tratamentos térmicos e superficiais para melhorar as propriedades dos materiais.",
            "Trabalhar em indústrias de base, como siderúrgicas e fundições.",
          ],
        },
        {
          id: 41,
          title: "Técnico em Mecatrônica",
          description:
            "Desenvolva competências em eletrônica, mecânica e programação para projetar e controlar sistemas mecatrônicos.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?_gl=1*1v8hk9d*_ga*MTcxNzA2Mzc4OC4xNzU1NjI1MjMx*_ga_8JE65Q40S6*czE3NTcwODI5ODAkbzQkZzEkdDE3NTcwODU1MzUkajEwJGwwJGgw",
            alt: "Mecatrônica",
          },
          slug: "tecnico-em-mecatronica",
          whatYouWillLearn: [
            "Projetar e montar sistemas de automação industrial, combinando mecânica, eletrônica e software.",
            "Programar robôs e controladores para a otimização de linhas de produção.",
            "Realizar a manutenção de sistemas mecatrônicos, diagnosticando falhas complexas.",
            "Atuar em indústrias de manufatura, automotiva e de tecnologia.",
          ],
        },
      ],
    },
  ];
}
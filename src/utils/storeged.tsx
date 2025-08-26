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
  whatYouWillLearn: string[]; // Adicionada a nova propriedade
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
            "Aprenda técnicas de negociação, atendimento ao cliente e estratégias comerciais para diversos mercados.",
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
            "Projetar e montar sistemas eletromecânicos, como motores e geradores.",
            "Aplicar normas de segurança no trabalho com máquinas e equipamentos.",
          ],
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
          whatYouWillLearn: [
            "Projetar e instalar circuitos elétricos em edifícios residenciais e comerciais.",
            "Realizar a manutenção de sistemas de baixa e alta tensão.",
            "Fazer o dimensionamento de cabos, disjuntores e outros componentes elétricos.",
            "Aplicar as normas técnicas e de segurança (NR-10) em instalações elétricas.",
          ],
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
          whatYouWillLearn: [
            "Analisar e projetar circuitos eletrônicos analógicos e digitais.",
            "Realizar a montagem e a manutenção de placas de circuito impresso (PCIs).",
            "Trabalhar com microcontroladores e sistemas embarcados para automação.",
            "Diagnosticar e reparar defeitos em equipamentos eletrônicos de consumo e industriais.",
          ],
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
          whatYouWillLearn: [
            "Realizar manutenções preventivas e corretivas em equipamentos de linha de produção.",
            "Identificar e solucionar falhas em sistemas mecânicos, elétricos e hidráulicos.",
            "Interpretar manuais técnicos e desenhos de máquinas industriais.",
            "Utilizar ferramentas e equipamentos de medição para diagnosticar problemas.",
          ],
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
          whatYouWillLearn: [
            "Operar com segurança tratores, escavadeiras, carregadeiras e outras máquinas pesadas.",
            "Realizar a manutenção de rotina e o diagnóstico de falhas em sistemas hidráulicos e mecânicos.",
            "Interpretar manuais de operação e esquemas de máquinas pesadas.",
            "Trabalhar em canteiros de obras, minas e projetos de infraestrutura.",
          ],
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
          whatYouWillLearn: [
            "Conhecer as propriedades e as ligas de diferentes tipos de metais.",
            "Aplicar processos de tratamento térmico, fundição e conformação de metais.",
            "Utilizar equipamentos de soldagem, usinagem e forjamento.",
            "Realizar o controle de qualidade e a inspeção de peças e estruturas metálicas.",
          ],
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
          whatYouWillLearn: [
            "Instalar e configurar sistemas de ar condicionado, câmaras frias e geladeiras industriais.",
            "Realizar a manutenção preventiva e corretiva em sistemas de refrigeração.",
            "Identificar e solucionar problemas em compressores, condensadores e evaporadores.",
            "Trabalhar com fluidos refrigerantes e aplicar normas de segurança e meio ambiente.",
          ],
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
          whatYouWillLearn: [
            "Dominar diferentes processos de soldagem, como TIG, MIG/MAG e eletrodo revestido.",
            "Preparar materiais e equipamentos para a execução de soldas.",
            "Inspecionar a qualidade de soldas e identificar possíveis falhas.",
            "Aplicar normas de segurança e utilizar equipamentos de proteção individual (EPIs).",
          ],
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
          whatYouWillLearn: [
            "Realizar a manutenção de motores, bombas e sistemas de propulsão de embarcações.",
            "Diagnosticar e solucionar falhas em sistemas hidráulicos e elétricos navais.",
            "Aplicar normas de segurança em ambientes de trabalho marinhos.",
            "Trabalhar em estaleiros, portos e a bordo de embarcações.",
          ],
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
          whatYouWillLearn: [
            "Utilizar equipamentos topográficos como estações totais e GPS.",
            "Realizar levantamentos de terrenos para projetos de construção e engenharia.",
            "Elaborar mapas e plantas topográficas com precisão.",
            "Aplicar técnicas de georreferenciamento de imóveis rurais e urbanos.",
          ],
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
          whatYouWillLearn: [
            "Interpretar e elaborar projetos de arquitetura e engenharia civil.",
            "Supervisionar e gerenciar todas as etapas de uma obra, do início ao fim.",
            "Controlar a qualidade dos materiais e a execução dos serviços em canteiros de obras.",
            "Fazer o planejamento e o orçamento de projetos de construção.",
          ],
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
          whatYouWillLearn: [
            "Identificar e classificar minerais e rochas em jazidas.",
            "Operar equipamentos de perfuração, desmonte e transporte de minérios.",
            "Realizar o beneficiamento de minérios, separando-os de acordo com a qualidade.",
            "Aplicar normas de segurança e técnicas de monitoramento ambiental em áreas de mineração.",
          ],
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
          whatYouWillLearn: [
            "Elaborar e implementar programas de prevenção de riscos, como o PCMSO e o PPRA.",
            "Inspecionar ambientes de trabalho, identificando perigos e condições insalubres.",
            "Conduzir treinamentos sobre o uso de EPIs e as normas de segurança.",
            "Investigar acidentes de trabalho e propor medidas de correção.",
          ],
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
          whatYouWillLearn: [
            "Conhecer as classes de incêndio e os agentes extintores adequados.",
            "Inspecionar e manter equipamentos de combate a incêndio, como extintores e hidrantes.",
            "Elaborar planos de emergência e rotas de fuga para edifícios e empresas.",
            "Conduzir treinamentos de evacuação e primeiros socorros em caso de sinistro.",
          ],
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
          whatYouWillLearn: [
            "Analisar riscos de desastres naturais, como inundações e deslizamentos.",
            "Elaborar planos de contingência e protocolos de resposta a emergências.",
            "Coordenar equipes de resgate e evacuação em áreas de risco.",
            "Conduzir campanhas de conscientização e educação da população sobre autoproteção.",
          ],
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
          whatYouWillLearn: [
            "Gerenciar o fluxo de veículos e pedestres para melhorar a mobilidade urbana.",
            "Realizar a fiscalização e a aplicação de multas, de acordo com o Código de Trânsito Brasileiro.",
            "Conduzir programas de educação para o trânsito em escolas e comunidades.",
            "Analisar dados de acidentes e propor melhorias para a segurança viária.",
          ],
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
          whatYouWillLearn: [
            "Aplicar técnicas de manejo do solo, fertilização e irrigação para diferentes culturas.",
            "Identificar pragas e doenças em lavouras e aplicar métodos de controle sustentável.",
            "Utilizar tecnologias modernas, como agricultura de precisão e drones.",
            "Gerenciar o plantio, a colheita e a comercialização de produtos agrícolas.",
          ],
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
          whatYouWillLearn: [
            "Manejar rebanhos bovinos, ovinos e suínos, garantindo a saúde e a nutrição dos animais.",
            "Gerenciar a produção de grãos e pastagens para a alimentação animal.",
            "Aplicar técnicas de inseminação artificial e controle sanitário em animais.",
            "Administrar propriedades rurais, otimizando recursos e aumentando a produtividade.",
          ],
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
          whatYouWillLearn: [
            "Conhecer os processos de transformação de matéria-prima em produtos finais.",
            "Garantir a qualidade e a segurança de alimentos e bebidas na linha de produção.",
            "Operar e manter equipamentos de processamento industrial de alimentos.",
            "Gerenciar o controle de estoque e a embalagem de produtos agroindustriais.",
          ],
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
          whatYouWillLearn: [
            "Projetar e construir viveiros e tanques para a criação de peixes e camarões.",
            "Gerenciar a alimentação e a saúde de espécies aquáticas.",
            "Analisar a qualidade da água e o ambiente de cultivo.",
            "Aplicar técnicas de reprodução e manejo sustentável em aquiculturas.",
          ],
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
          whatYouWillLearn: [
            "Elaborar e implementar programas de gestão ambiental em empresas e comunidades.",
            "Monitorar a qualidade da água, do ar e do solo, aplicando técnicas de análise ambiental.",
            "Gerenciar a coleta seletiva e a destinação correta de resíduos sólidos e líquidos.",
            "Atuar em projetos de recuperação de áreas degradadas e de educação ambiental.",
          ],
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
          whatYouWillLearn: [
            "Dominar técnicas de corte, cocção e preparo de alimentos.",
            "Elaborar cardápios e receitas, considerando a sazonalidade e a nutrição.",
            "Gerenciar a rotina de uma cozinha profissional, controlando estoque e custos.",
            "Aplicar as normas de higiene e segurança alimentar para a produção de alimentos.",
          ],
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
          whatYouWillLearn: [
            "Medir e ajustar lentes de grau para a fabricação de óculos.",
            "Utilizar equipamentos para a montagem e a manutenção de armações e lentes.",
            "Prestar atendimento ao cliente, orientando sobre os diferentes tipos de lentes e tratamentos.",
            "Entender as principais ametropias e doenças visuais para auxiliar na escolha de óculos.",
          ],
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
          whatYouWillLearn: [
            "Elaborar projetos de design de interiores em softwares como SketchUp ou AutoCAD.",
            "Selecionar e combinar cores, texturas, iluminação e mobiliário para criar ambientes harmoniosos.",
            "Gerenciar o orçamento e o cronograma de projetos de decoração.",
            "Atender clientes e entender suas necessidades para criar espaços personalizados.",
          ],
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
          whatYouWillLearn: [
            "Conduzir grupos de turistas em roteiros e passeios, apresentando os pontos turísticos.",
            "Organizar a logística de viagens, incluindo transporte, hospedagem e alimentação.",
            "Dominar o conhecimento cultural e histórico de diferentes locais.",
            "Prestar assistência e suporte a turistas em situações de emergência ou dúvidas.",
          ],
        },
      ],
    },
  ];
}
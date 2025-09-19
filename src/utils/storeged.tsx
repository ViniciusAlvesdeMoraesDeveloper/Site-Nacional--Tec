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

export default function Storaged(): Area[] {
  return [
    {
      // ===============================
      // Área da Saúde
      // ===============================
      // SEO: Título mais direto e com palavra-chave principal.
      title: "Cursos Técnicos na Área da Saúde",
      // SEO: Descrição enriquecida com palavras-chave como "formação técnica", "mercado de trabalho" e "certificação".
      description:
        "Invista em uma formação técnica na área da saúde. Aprenda com especialistas, obtenha uma certificação reconhecida e prepare-se para o mercado de trabalho no setor que mais cresce no Brasil!",
      category: "Saúde",
      flag: "Saude",
      img: {
        src: "/agente de saude.webp",
        // SEO: Alt text mais descritivo para a imagem da área.
        alt: "Ícone representando os cursos técnicos da área da saúde",
      },
      courses: [
        {
          id: 1,
          title: "Curso Técnico em Agente Comunitário de Saúde",
          // SEO: Descrição focada em benefícios e campo de atuação.
          description:
            "Torne-se um elo vital entre a comunidade e os serviços de saúde. Este curso capacita você para atuar na promoção da saúde e prevenção de doenças.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/4167543/pexels-photo-4167543.jpeg",
            // SEO: Alt text específico sobre a imagem do curso.
            alt: "Aluna do curso Técnico em Agente Comunitário de Saúde sorrindo",
          },
          // SEO: Slug otimizado com a palavra "curso".
          slug: "curso-tecnico-em-agente-comunitario-de-saude",
          whatYouWillLearn: [
            "Realizar visitas domiciliares para identificar as necessidades de saúde da população.",
            "Promover a educação em saúde, orientando sobre prevenção de doenças e hábitos saudáveis.",
            "Mapear e coletar dados epidemiológicos para a formulação de políticas públicas.",
            "Atuar como elo entre a comunidade e a equipe de saúde, facilitando o acesso aos serviços.",
          ],
        },
        {
          id: 2,
          title: "Curso Técnico em Análises Clínicas",
          description:
            "Capacite-se para realizar exames laboratoriais com precisão, uma função essencial para o diagnóstico e tratamento de doenças em hospitais e laboratórios.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
            alt: "Profissional realizando análises clínicas em laboratório",
          },
          slug: "curso-tecnico-em-analises-clinicas",
          whatYouWillLearn: [
            "Coletar, processar e analisar amostras biológicas como sangue, urina e tecidos.",
            "Operar equipamentos de alta tecnologia e sistemas de automação laboratorial.",
            "Interpretar e validar resultados de exames para auxiliar no diagnóstico médico.",
            "Aplicar rigorosas normas de biossegurança e controle de qualidade.",
          ],
        },
        {
          id: 3,
          title: "Curso Técnico em Cuidados de Idosos",
          description:
            "Receba uma formação especializada para o cuidado humanizado de idosos, promovendo qualidade de vida, bem-estar e autonomia na terceira idade.",
          category: "Saúde",
          flag: "Saude",
          img: {
            src: "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg",
            alt: "Técnico em cuidados de idosos auxiliando um paciente",
          },
          slug: "curso-tecnico-em-cuidados-de-idosos",
          whatYouWillLearn: [
            "Prestar cuidados diários e assistência em atividades como higiene, alimentação e medicação.",
            "Lidar com as especificidades do envelhecimento, incluindo doenças crônicas e mobilidade.",
            "Promover atividades de lazer e socialização para o bem-estar físico e mental do idoso.",
            "Garantir um ambiente seguro, confortável e adaptado às necessidades da pessoa idosa.",
          ],
        },
        // ... (aplicar as mesmas melhorias para os outros cursos)
      ],
    },
    {
      // ===============================
      // Área de Administração e Gestão
      // ===============================
      title: "Cursos Técnicos em Administração e Gestão",
      description:
        "Desenvolva habilidades de liderança e gestão para impulsionar sua carreira. Nossos cursos técnicos oferecem formação prática com certificação reconhecida para atuar em empresas de todos os portes.",
      category: "Administração",
      flag: "Administracao",
      img: {
        src: "/Administracao.webp",
        alt: "Ícone representando os cursos técnicos da área de Administração e Gestão",
      },
      courses: [
        {
          id: 12,
          title: "Curso Técnico em Administração",
          description:
            "Aprenda na prática a gerenciar processos administrativos, financeiros e de recursos humanos, tornando-se um profissional versátil e essencial para qualquer empresa.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/7876786/pexels-photo-7876786.jpeg",
            alt: "Estudantes do curso técnico em administração colaborando em um projeto",
          },
          slug: "curso-tecnico-em-administracao",
          whatYouWillLearn: [
            "Executar rotinas financeiras, como controle de fluxo de caixa e contas a pagar/receber.",
            "Aplicar estratégias de marketing para divulgar produtos e serviços.",
            "Apoiar a gestão de pessoas, auxiliando em processos de recrutamento e treinamento.",
            "Gerenciar a logística e a organização de documentos e arquivos de uma empresa.",
          ],
        },
        {
          id: 13,
          // SEO: Título padronizado para intenção de busca.
          title: "Curso Técnico em Contabilidade",
          // SEO: Descrição com palavras-chave como "saúde financeira", "legislação tributária".
          description:
            "Domine as rotinas contábeis e financeiras e torne-se essencial para a saúde financeira das empresas, garantindo conformidade com a legislação tributária.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/4476375/pexels-photo-4476375.jpeg",
            // SEO: Alt text específico descrevendo a imagem.
            alt: "Técnico em contabilidade analisando planilhas financeiras em um escritório.",
          },
          // SEO: Slug otimizado com a palavra "curso".
          slug: "curso-tecnico-em-contabilidade",
          whatYouWillLearn: [
            "Realizar lançamentos e analisar demonstrações contábeis, como balancetes e DRE.",
            "Calcular impostos, taxas e contribuições, auxiliando no planejamento tributário.",
            "Elaborar relatórios financeiros detalhados para apoiar a tomada de decisões.",
            "Operar com base nas normas contábeis brasileiras e no sistema SPED (Sistema Público de Escrituração Digital).",
          ],
        },
        {
          id: 14,
          title: "Curso Técnico em Logística",
          description:
            "Aprenda a gerenciar de forma eficiente o transporte, o armazenamento e a distribuição de mercadorias, uma área vital para o sucesso de indústrias e comércios.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg",
            alt: "Profissional de logística conferindo o estoque em um grande armazém.",
          },
          slug: "curso-tecnico-em-logistica",
          whatYouWillLearn: [
            "Gerenciar todo o fluxo de materiais, da matéria-prima ao cliente final (cadeia de suprimentos).",
            "Otimizar processos de controle de estoque, armazenamento e distribuição de produtos.",
            "Coordenar o transporte de cargas, definindo as melhores rotas e modais logísticos.",
            "Utilizar softwares de gestão (WMS, TMS) para rastreamento e controle de operações.",
          ],
        },
        {
          id: 15,
          title: "Curso Técnico em Marketing",
          description:
            "Desenvolva habilidades para criar campanhas de marketing digital e tradicional, analisar o mercado e construir estratégias de comunicação que geram resultados.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg",
            alt: "Equipe de marketing planejando uma campanha em uma reunião colaborativa.",
          },
          slug: "curso-tecnico-em-marketing",
          whatYouWillLearn: [
            "Realizar pesquisas de mercado para identificar tendências, concorrentes e o público-alvo.",
            "Planejar e executar estratégias de marketing digital, incluindo SEO, mídias sociais e e-mail marketing.",
            "Analisar o desempenho de campanhas utilizando métricas e ferramentas de web analytics.",
            "Criar planos de comunicação e promoção para o lançamento de produtos e serviços.",
          ],
        },
        {
          id: 16,
          title: "Curso Técnico em Qualidade",
          description:
            "Capacite-se para implementar sistemas de gestão da qualidade, auditar processos e garantir os mais altos padrões em produtos e serviços na indústria.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/5532842/pexels-photo-5532842.jpeg",
            alt: "Técnico em qualidade inspecionando um produto em uma linha de produção industrial.",
          },
          slug: "curso-tecnico-em-qualidade",
          whatYouWillLearn: [
            "Implementar e auditar sistemas de gestão da qualidade baseados em normas como a ISO 9001.",
            "Aplicar ferramentas de controle de qualidade para monitorar produtos e serviços.",
            "Identificar não conformidades e aplicar métodos de melhoria contínua como PDCA e Lean.",
            "Elaborar manuais, procedimentos e instruções de trabalho para padronizar processos.",
          ],
        },
        {
          id: 17,
          title: "Curso Técnico em Recursos Humanos",
          description:
            "Aprenda a recrutar talentos, desenvolver equipes e gerenciar rotinas de departamento pessoal, promovendo um ambiente de trabalho produtivo e motivador.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg",
            alt: "Profissional de Recursos Humanos conduzindo uma entrevista de emprego.",
          },
          slug: "curso-tecnico-em-recursos-humanos",
          whatYouWillLearn: [
            "Conduzir processos de recrutamento e seleção, da divulgação da vaga à contratação.",
            "Elaborar e aplicar programas de treinamento, integração e desenvolvimento de equipes.",
            "Gerenciar a folha de pagamento, benefícios, férias e a documentação de colaboradores.",
            "Atuar na mediação de conflitos e na promoção de um clima organizacional saudável.",
          ],
        },
        {
          id: 18,
          title: "Curso Técnico em Secretaria Escolar",
          description:
            "Torne-se a peça-chave na organização administrativa de uma instituição de ensino, gerenciando documentos, matrículas e o atendimento à comunidade escolar.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/7648004/pexels-photo-7648004.jpeg",
            alt: "Secretária escolar organizando prontuários de alunos em um arquivo.",
          },
          slug: "curso-tecnico-em-secretaria-escolar",
          whatYouWillLearn: [
            "Gerenciar a vida acadêmica dos alunos: matrículas, transferências, históricos e diplomas.",
            "Organizar e manter atualizados os arquivos, prontuários e a documentação da escola.",
            "Prestar atendimento a pais, alunos e professores, solucionando questões administrativas.",
            "Utilizar sistemas de gestão educacional para otimizar as rotinas da secretaria.",
          ],
        },
        {
          id: 19,
          title: "Curso Técnico em Segurança do Trabalho",
          description:
            "Capacite-se para prevenir acidentes e doenças ocupacionais. Aprenda a identificar riscos, implementar normas de segurança e proteger a vida dos trabalhadores.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
            alt: "Técnico em segurança do trabalho com capacete e prancheta em uma obra.",
          },
          slug: "curso-tecnico-em-seguranca-do-trabalho",
          whatYouWillLearn: [
            "Identificar riscos nos ambientes de trabalho e elaborar planos de prevenção de acidentes.",
            "Inspecionar locais de trabalho para garantir o cumprimento das Normas Regulamentadoras (NRs).",
            "Realizar treinamentos e campanhas de conscientização sobre o uso de EPIs e segurança.",
            "Elaborar e gerenciar documentos como PPRA, PCMSO e laudos técnicos.",
          ],
        },
        {
          id: 20,
          title: "Curso Técnico em Serviços Jurídicos",
          description:
            "Atue como um profissional de apoio indispensável em escritórios de advocacia e departamentos jurídicos, auxiliando em rotinas administrativas e processuais.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg",
            alt: "Profissional de serviços jurídicos organizando processos em uma estante de livros de direito.",
          },
          slug: "curso-tecnico-em-servicos-juridicos",
          whatYouWillLearn: [
            "Organizar e arquivar processos e documentos em sistemas físicos e digitais.",
            "Elaborar petições simples, contratos e procurações sob supervisão de um advogado.",
            "Acompanhar o andamento de processos judiciais e administrativos, controlando prazos.",
            "Realizar pesquisas de legislação e jurisprudência para apoiar a equipe jurídica.",
          ],
        },
        {
          id: 21,
          title: "Curso Técnico em Transações Imobiliárias (TTI)",
          description:
            "Prepare-se para atuar como Corretor de Imóveis. Aprenda a avaliar, negociar, vender e alugar imóveis, conquistando sua credencial CRECI.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg",
            alt: "Corretor de imóveis apresentando uma casa para um cliente interessado.",
          },
          slug: "curso-tecnico-em-transacoes-imobiliarias-tti",
          whatYouWillLearn: [
            "Realizar a avaliação mercadológica de imóveis para venda e locação.",
            "Conduzir a intermediação na compra, venda, locação e permuta de propriedades.",
            "Elaborar contratos imobiliários e gerenciar toda a documentação da transação.",
            "Obter o registro no CRECI para atuar legalmente como Corretor de Imóveis.",
          ],
        },
        {
          id: 22,
          title: "Curso Técnico em Vendas",
          description:
            "Aprenda a dominar as mais eficazes técnicas de negociação, prospecção e fidelização de clientes para se destacar e atingir metas em qualquer setor do mercado.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg",
            alt: "Vendedor profissional apertando a mão de um cliente para fechar um negócio.",
          },
          slug: "curso-tecnico-em-vendas",
          whatYouWillLearn: [
            "Aplicar técnicas de prospecção, abordagem e negociação para fechar mais vendas.",
            "Utilizar estratégias de CRM para construir e manter um bom relacionamento com clientes.",
            "Gerenciar uma carteira de clientes e identificar novas oportunidades de negócio.",
            "Elaborar um plano de vendas estratégico e trabalhar para o atingimento de metas.",
          ],
        },
        {
          id: 23,
          title: "Curso Técnico em Eventos",
          description:
            "Capacite-se para o dinâmico mercado de eventos. Aprenda a planejar, organizar e executar desde congressos corporativos a shows e eventos sociais.",
          category: "Gestão",
          flag: "Gestao",
          img: {
            src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
            alt: "Salão de eventos preparado para uma conferência corporativa.",
          },
          slug: "curso-tecnico-em-eventos",
          whatYouWillLearn: [
            "Planejar todas as etapas de um evento, do conceito à execução.",
            "Gerenciar orçamentos, negociar com fornecedores e controlar cronogramas.",
            "Coordenar a logística de montagem, operação e desmontagem de estruturas.",
            "Criar estratégias de divulgação e captação de público para eventos de sucesso.",
          ],
        },
      ],
    },
    {
      // ===============================
      // Área da Tecnologia e Informática
      // ===============================
      title: "Cursos Técnicos em Tecnologia e Informática",
      description:
        "Prepare-se para as profissões do futuro. Domine as tecnologias mais demandadas pelo mercado, com cursos práticos que abrem portas para uma carreira em inovação.",
      category: "Tecnologia",
      flag: "Informatica",
      img: {
        src: "/informatica.webp",
        alt: "Ícone representando os cursos técnicos da área de Tecnologia e Informática",
      },
      courses: [
        {
          id: 24,
          title: "Curso Técnico em Biotecnologia",
          description:
            "Atue na fronteira da ciência. Aprenda técnicas de laboratório para inovação em saúde, agronegócio e meio ambiente em um dos setores mais promissores.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/3912518/pexels-photo-3912518.jpeg",
            alt: "Cientista em laboratório de biotecnologia manuseando amostras em um microscópio.",
          },
          slug: "curso-tecnico-em-biotecnologia",
          whatYouWillLearn: [
            "Executar experimentos em laboratórios de biotecnologia seguindo protocolos de segurança.",
            "Manipular microrganismos e células para a produção de alimentos, medicamentos e biocombustíveis.",
            "Aplicar técnicas de biologia molecular para análise e diagnóstico.",
            "Atuar no controle de qualidade de processos biotecnológicos em diversas indústrias.",
          ],
        },
        {
          id: 25,
          title: "Curso Técnico em Design Gráfico",
          description:
            "Transforme criatividade em profissão. Aprenda a usar as principais ferramentas para criar logotipos, identidades visuais e peças gráficas para mídias digitais e impressas.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg",
            alt: "Designer gráfico trabalhando em um projeto de identidade visual em seu computador.",
          },
          slug: "curso-tecnico-em-design-grafico",
          whatYouWillLearn: [
            "Criar identidades visuais completas e logotipos para marcas e empresas.",
            "Dominar softwares profissionais como Adobe Photoshop, Illustrator e InDesign.",
            "Desenvolver layouts para websites, posts de mídias sociais e materiais impressos.",
            "Aplicar conceitos de tipografia, teoria das cores e composição em projetos gráficos.",
          ],
        },
        {
          id: 26,
          // SEO: Título padronizado.
          title: "Curso Técnico em Desenvolvimento de Sistemas",
          // SEO: Descrição com palavras-chave como "desenvolvedor", "front-end", "back-end", "aplicações web e mobile".
          description:
            "Torne-se um desenvolvedor de software completo. Aprenda a programar do zero, construindo aplicações web e mobile com as tecnologias mais usadas no mercado.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
            // SEO: Alt text descritivo da imagem.
            alt: "Desenvolvedor de sistemas programando com múltiplos monitores em um ambiente de trabalho.",
          },
          slug: "curso-tecnico-em-desenvolvimento-de-sistemas",
          whatYouWillLearn: [
            "Desenvolver o front-end e o back-end de aplicações utilizando linguagens como JavaScript e Python.",
            "Projetar, criar e gerenciar bancos de dados SQL (relacionais) e NoSQL (não-relacionais).",
            "Construir e documentar APIs para a integração entre diferentes sistemas.",
            "Trabalhar em equipe utilizando metodologias ágeis, como Scrum e Kanban.",
          ],
        },
        {
          id: 27,
          title: "Curso Técnico em Informática para Internet",
          description:
            "Especialize-se na criação de sites e aplicações web. Aprenda a desenvolver interfaces ricas e responsivas e a gerenciar a infraestrutura online.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
            alt: "Código HTML, CSS e JavaScript exibido na tela de um notebook.",
          },
          slug: "curso-tecnico-em-informatica-para-internet",
          whatYouWillLearn: [
            "Estruturar páginas web semanticamente com HTML5 e estilizá-las com CSS3 e frameworks.",
            "Criar interatividade e dinamismo em sites utilizando JavaScript e bibliotecas como React.",
            "Desenvolver aplicações web responsivas que funcionam em desktops e dispositivos móveis.",
            "Publicar e gerenciar sites, incluindo a configuração de servidores e domínios.",
          ],
        },
        {
          id: 28,
          title: "Curso Técnico em Redes de Computadores",
          description:
            "Torne-se um especialista em infraestrutura de TI. Aprenda a projetar, instalar, configurar e proteger redes de computadores para empresas de todos os portes.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
            alt: "Técnico em redes de computadores trabalhando em um data center com servidores.",
          },
          slug: "curso-tecnico-em-redes-de-computadores",
          whatYouWillLearn: [
            "Instalar e configurar ativos de rede como roteadores, switches e access points.",
            "Implementar políticas de segurança, firewalls e VPNs para proteger redes contra ameaças.",
            "Realizar a manutenção e o diagnóstico de problemas de conectividade em redes cabeadas e Wi-Fi.",
            "Dominar os protocolos do modelo TCP/IP e o funcionamento da internet.",
          ],
        },
        {
          id: 29,
          title: "Curso Técnico em Sistemas de Energia Renovável",
          description:
            "Prepare-se para o mercado de energia limpa. Especialize-se na instalação e manutenção de sistemas de energia solar fotovoltaica e outras fontes sustentáveis.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg",
            alt: "Técnico instalando painéis de energia solar fotovoltaica em um telhado.",
          },
          slug: "curso-tecnico-em-sistemas-de-energia-renovavel",
          whatYouWillLearn: [
            "Projetar e dimensionar sistemas de energia solar fotovoltaica para residências e empresas.",
            "Realizar a instalação e a manutenção preventiva de painéis solares e inversores.",
            "Analisar a viabilidade técnica e financeira de projetos de energia renovável.",
            "Conhecer as normas e regulamentações do setor elétrico brasileiro para geração distribuída.",
          ],
        },
        {
          id: 30,
          title: "Curso Técnico em Telecomunicações",
          description:
            "Capacite-se para instalar e manter a infraestrutura que conecta o mundo: redes de fibra óptica, telefonia, internet e comunicação de dados.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/15483318/pexels-photo-15483318.jpeg",
            alt: "Técnico em telecomunicações trabalhando no topo de uma torre de celular.",
          },
          slug: "curso-tecnico-em-telecomunicacoes",
          whatYouWillLearn: [
            "Instalar, configurar e realizar a manutenção de redes de fibra óptica e sistemas de rádio.",
            "Trabalhar com infraestrutura de telefonia fixa e móvel (4G/5G).",
            "Diagnosticar e solucionar problemas em serviços de internet, TV a cabo e VoIP.",
            "Aplicar normas de segurança para trabalho em altura e em redes elétricas.",
          ],
        },
        {
          id: 31,
          title: "Curso Técnico em Tradução e Interpretação de Libras",
          description:
            "Promova a inclusão e a acessibilidade. Torne-se um profissional qualificado para traduzir e interpretar a Língua Brasileira de Sinais (Libras) em diversos contextos.",
          category: "Tecnologia",
          flag: "Tecnologia",
          img: {
            src: "https://images.pexels.com/photos/10031326/pexels-photo-10031326.jpeg",
            alt: "Intérprete de Libras fazendo um sinal com as mãos durante uma apresentação.",
          },
          slug: "curso-tecnico-em-traducao-e-interpretacao-de-libras",
          whatYouWillLearn: [
            "Dominar a fluência e a gramática da Língua Brasileira de Sinais (Libras).",
            "Realizar a interpretação simultânea e consecutiva do português para Libras e vice-versa.",
            "Atuar em eventos, palestras, instituições de ensino e na produção de conteúdo acessível.",
            "Compreender os aspectos culturais e éticos da comunidade surda e da profissão.",
          ],
        },
      ],
    },
    {
      // ===============================
      // Área da Engenharia e Manutenção
      // ===============================
      title: "Cursos Técnicos em Engenharia e Manutenção",
      description:
        "Prepare-se para atuar na espinha dorsal da indústria. Nossos cursos formam profissionais para projetar, construir e manter sistemas e equipamentos em diversos setores.",
      category: "Engenharia",
      flag: "Engenharia",
      img: {
        src: "/Engenharia.webp",
        alt: "Ícone representando os cursos técnicos da área de Engenharia e Manutenção",
      },
      courses: [
        {
          id: 32,
          title: "Curso Técnico em Automação Industrial",
          description:
            "Prepare-se para a Indústria 4.0. Aprenda a projetar, instalar e programar sistemas automatizados, robôs e controladores lógicos programáveis (CLPs).",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/8113500/pexels-photo-8113500.jpeg",
            alt: "Técnico em automação industrial programando um robô em uma linha de produção.",
          },
          slug: "curso-tecnico-em-automacao-industrial",
          whatYouWillLearn: [
            "Programar Controladores Lógicos Programáveis (CLPs) e Interfaces Homem-Máquina (IHMs).",
            "Instalar e configurar sensores, atuadores e robôs industriais.",
            "Realizar a manutenção de sistemas automatizados para garantir a eficiência da produção.",
            "Integrar tecnologias de automação para otimizar processos industriais.",
          ],
        },
        {
          id: 33,
          title: "Curso Técnico em Eletromecânica",
          description:
            "Torne-se um profissional polivalente, capaz de atuar na manutenção e operação de sistemas que integram as áreas elétrica e mecânica na indústria.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/9242824/pexels-photo-9242824.jpeg",
            alt: "Técnico em eletromecânica realizando a manutenção de um motor industrial.",
          },
          slug: "curso-tecnico-em-eletromecanica",
          whatYouWillLearn: [
            "Instalar e realizar a manutenção de máquinas e equipamentos eletromecânicos.",
            "Diagnosticar falhas em sistemas de automação, motores, painéis elétricos e componentes mecânicos.",
            "Ler e interpretar diagramas elétricos e desenhos técnicos mecânicos.",
            "Aplicar normas de segurança, qualidade e eficiência energética em processos industriais.",
          ],
        },
        {
          id: 34,
          title: "Curso Técnico em Edificações",
          description:
            "Atue diretamente no coração da construção civil. Aprenda a planejar, executar e fiscalizar obras, desde a fundação até o acabamento.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg",
            alt: "Técnico em edificações com capacete e planta da obra em um canteiro de obras.",
          },
          slug: "curso-tecnico-em-edificacoes",
          whatYouWillLearn: [
            "Elaborar e interpretar projetos arquitetônicos, estruturais e de instalações.",
            "Acompanhar o cronograma físico-financeiro de obras, gerenciando materiais e mão de obra.",
            "Supervisionar equipes e garantir o cumprimento das normas técnicas e de segurança.",
            "Realizar levantamentos topográficos e ensaios tecnológicos de materiais de construção.",
          ],
        },
        {
          id: 35,
          title: "Curso Técnico em Eletrônica",
          description:
            "Aprenda a desenvolver, montar e realizar a manutenção de circuitos e equipamentos eletrônicos, uma habilidade essencial para diversas indústrias.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/7286020/pexels-photo-7286020.jpeg",
            alt: "Técnico em eletrônica soldando componentes em uma placa de circuito impresso (PCB).",
          },
          slug: "curso-tecnico-em-eletronica",
          whatYouWillLearn: [
            "Projetar e montar circuitos eletrônicos analógicos e digitais.",
            "Realizar a manutenção e o reparo de equipamentos, como TVs, celulares e sistemas industriais.",
            "Programar microcontroladores (como Arduino) e sistemas embarcados.",
            "Utilizar instrumentos de medição, como multímetro e osciloscópio, para testes e diagnósticos.",
          ],
        },
        {
          id: 36,
          title: "Curso Técnico em Eletrotécnica",
          description:
            "Domine a geração, transmissão e distribuição de energia elétrica. Atue em projetos, instalação e manutenção de sistemas elétricos residenciais, comerciais e industriais.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/33694022/pexels-photo-33694022.jpeg",
            alt: "Eletrotécnico realizando a manutenção em um painel elétrico de alta tensão.",
          },
          slug: "curso-tecnico-em-eletrotecnica",
          whatYouWillLearn: [
            "Projetar e executar instalações elétricas de baixa e média tensão.",
            "Realizar a manutenção em redes elétricas, motores, transformadores e painéis de controle.",
            "Aplicar e fiscalizar o cumprimento de normas de segurança, como a NR-10.",
            "Atuar com sistemas de automação e controle de processos industriais.",
          ],
        },
        {
          id: 37,
          title: "Curso Técnico em Manutenção Automotiva",
          description:
            "Torne-se um especialista em mecânica de automóveis. Aprenda a diagnosticar problemas e realizar a manutenção de todos os sistemas de veículos leves e pesados.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/4315574/pexels-photo-4315574.jpeg",
            alt: "Mecânico automotivo utilizando uma ferramenta para consertar o motor de um carro.",
          },
          slug: "curso-tecnico-em-manutencao-automotiva",
          whatYouWillLearn: [
            "Diagnosticar e solucionar falhas em motores, sistemas de injeção eletrônica e transmissão.",
            "Realizar a manutenção de sistemas de freios, suspensão e direção.",
            "Utilizar scanners e equipamentos de diagnóstico eletrônico para identificar avarias.",
            "Compreender o funcionamento de veículos elétricos e híbridos.",
          ],
        },
        {
          id: 38,
          title: "Curso Técnico em Manutenção de Aeronaves",
          description:
            "Ingresse em uma carreira de alta responsabilidade na aviação. Capacite-se para inspecionar e manter aeronaves, garantindo a máxima segurança de voo.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/32662306/pexels-photo-32662306.jpeg",
            alt: "Técnico em manutenção de aeronaves inspecionando a turbina de um avião em um hangar.",
          },
          slug: "curso-tecnico-em-manutencao-de-aeronaves",
          whatYouWillLearn: [
            "Inspecionar e realizar a manutenção da fuselagem (célula), motores e sistemas de aeronaves.",
            "Reparar e substituir componentes seguindo rigorosamente os manuais dos fabricantes.",
            "Cumprir as normas e regulamentos da Agência Nacional de Aviação Civil (ANAC).",
            "Preencher documentação técnica e ordens de serviço para controle de manutenção.",
          ],
        },
        {
          id: 39,
          title: "Curso Técnico em Mecânica",
          description:
            "Aprenda a projetar, fabricar, instalar e manter máquinas e equipamentos industriais. Uma formação essencial para toda a indústria de manufatura.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/51320/drill-milling-milling-machine-drilling-51320.jpeg",
            alt: "Torno mecânico usinando uma peça de metal em uma oficina industrial.",
          },
          slug: "curso-tecnico-em-mecanica",
          whatYouWillLearn: [
            "Realizar a manutenção preventiva e corretiva em sistemas mecânicos, hidráulicos e pneumáticos.",
            "Interpretar desenhos técnicos e projetos de componentes mecânicos.",
            "Operar máquinas-ferramenta, como tornos, fresas e retíficas.",
            "Utilizar instrumentos de medição para garantir a precisão na fabricação e reparo de peças.",
          ],
        },
        {
          id: 40,
          title: "Curso Técnico em Metalurgia",
          description:
            "Explore o universo dos metais. Atue nos processos de extração, transformação, fundição e tratamento de metais e suas ligas na indústria de base.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg",
            alt: "Trabalhador da metalurgia despejando metal fundido em um molde.",
          },
          slug: "curso-tecnico-em-metalurgia",
          whatYouWillLearn: [
            "Controlar processos de fundição, laminação, forjamento e soldagem de metais.",
            "Realizar ensaios metalográficos para analisar a microestrutura e propriedades dos materiais.",
            "Aplicar tratamentos térmicos para alterar as características de dureza e resistência.",
            "Atuar no controle de qualidade de matéria-prima e produtos acabados em siderúrgicas e fundições.",
          ],
        },
        {
          id: 41,
          title: "Curso Técnico em Mecatrônica",
          description:
            "Integre mecânica, eletrônica e computação. Projete e opere equipamentos de automação e robótica, preparando-se para a vanguarda da tecnologia industrial.",
          category: "Engenharia",
          flag: "Engenharia",
          img: {
            src: "https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg",
            alt: "Braço robótico industrial em operação em uma linha de montagem de alta tecnologia.",
          },
          slug: "curso-tecnico-em-mecatronica",
          whatYouWillLearn: [
            "Projetar e montar sistemas que combinam mecânica, eletrônica e software.",
            "Programar robôs industriais e CLPs para otimizar linhas de produção.",
            "Realizar a manutenção integrada de sistemas mecatrônicos, diagnosticando falhas complexas.",
            "Desenvolver soluções de automação para a indústria de manufatura, automotiva e de tecnologia.",
          ],
        },
      ],
    },
  ];
}
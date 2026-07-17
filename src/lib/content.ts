export const FORMACOES = [
  {
    id: 'fullstack',
    nome: 'DevClub Full Stack',
    descricao:
      'A formação principal: HTML, CSS, JavaScript, React, Node.js e banco de dados. Do primeiro "Hello World" ao deploy em produção.',
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'PostgreSQL'],
    destaque: true,
    gradient: 'from-emerald-500/25 via-green-600/10 to-transparent',
    duracao: '12 meses',
    nivel: 'Do zero ao primeiro emprego',
    aprendizados: [
      'Lógica de programação, HTML, CSS e JavaScript do absoluto zero',
      'React com projetos reais de portfólio',
      'APIs com Node.js, Express e autenticação',
      'Banco de dados PostgreSQL na prática',
      'Deploy em produção e portfólio pronto pra vagas',
      'Preparação pra entrevistas técnicas',
    ],
  },
  {
    id: 'frontend',
    nome: 'Front-end Club',
    descricao:
      'Mais de 20 módulos para dominar interfaces modernas com as ferramentas que o mercado usa de verdade.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React'],
    destaque: false,
    gradient: 'from-sky-500/25 via-blue-600/10 to-transparent',
    duracao: '8 meses',
    nivel: 'Iniciante a intermediário',
    aprendizados: [
      'HTML5 semântico e CSS3 moderno (Flexbox e Grid)',
      'JavaScript profundo: DOM, eventos e assincronismo',
      'React com hooks e componentização',
      'Responsividade e acessibilidade',
      'Mais de 20 módulos com projetos práticos',
    ],
  },
  {
    id: 'data',
    nome: 'Data Club',
    descricao:
      'Análise de dados do zero: cada gráfico e cada dataset é uma chance de desvendar insights valiosos.',
    tags: ['Python', 'SQL', 'Dashboards'],
    destaque: false,
    gradient: 'from-amber-500/25 via-yellow-600/10 to-transparent',
    duracao: '6 meses',
    nivel: 'Do zero à análise profissional',
    aprendizados: [
      'Python aplicado a dados',
      'SQL para consultas e modelagem',
      'Visualização e dashboards profissionais',
      'Estatística aplicada ao dia a dia de análise',
      'Projetos com datasets reais',
    ],
  },
  {
    id: 'ia',
    nome: 'IA Club',
    descricao:
      'Conhecimento técnico e aplicação prática em Inteligência Artificial e Automação para o novo cenário digital.',
    tags: ['LLMs', 'Automação', 'Prompt Engineering'],
    destaque: false,
    gradient: 'from-purple-500/25 via-violet-600/10 to-transparent',
    duracao: '6 meses',
    nivel: 'Todos os níveis',
    aprendizados: [
      'Fundamentos de LLMs e IA generativa',
      'Prompt engineering profissional',
      'Automações com IA no trabalho real',
      'Integração de IA em aplicações',
      'Visão estratégica das tecnologias de IA',
    ],
  },
  {
    id: 'mba',
    nome: 'MBA em IA e Automações',
    descricao:
      'Inteligência Artificial e Automações aplicadas a negócios: da engenharia de prompt às aplicações práticas.',
    tags: ['IA para Negócios', 'Automações', 'Engenharia de Prompt'],
    destaque: false,
    gradient: 'from-rose-500/25 via-pink-600/10 to-transparent',
    duracao: '12 meses',
    nivel: 'Profissionais e empreendedores',
    aprendizados: [
      'Fundamentos e arquitetura tecnológica da IA',
      'Engenharia de prompt aplicada a negócios',
      'Tecnologias, ferramentas e integrações',
      'Aplicações práticas por área de negócio',
      'Estratégia de adoção de IA em empresas',
    ],
  },
  {
    id: 'elite',
    nome: 'DevClub Elite',
    descricao:
      'O caminho para os mais altos níveis de proficiência técnica, com mentoria dos melhores e desafios de classe elite.',
    tags: ['React', 'Node.js', 'NestJS', 'MongoDB', 'PostgreSQL'],
    destaque: false,
    gradient: 'from-yellow-400/30 via-amber-600/10 to-transparent',
    duracao: '12 meses',
    nivel: 'Avançado',
    aprendizados: [
      'Arquitetura avançada com React e Node.js',
      'NestJS e APIs de nível enterprise',
      'MongoDB e PostgreSQL em profundidade',
      'Mentoria direta com o time DevClub',
      'Desafios técnicos de nível elite',
    ],
  },
] as const;

export const DEPOIMENTOS = [
  {
    nome: 'Carlos Mendes',
    cargo: 'Antes: técnico de suporte → Hoje: Dev Full Stack',
    texto:
      'Foram várias noites em claro estudando. Tive muitos "não" e nunca abaixei a cabeça. Hoje tenho uma vaga que eu nem sonhava.',
    avatar: 'CM',
  },
  {
    nome: 'Thais Ribeiro',
    cargo: 'Antes: dona de hamburgueria → Hoje: Dev Front-End',
    texto:
      'Me separei com duas filhas e voltei pra casa dos meus pais. Entendi que precisava estudar se quisesse me erguer. A programação foi a porta.',
    avatar: 'TR',
  },
  {
    nome: 'André Nascimento',
    cargo: 'Antes: professor de matemática → Hoje: Front-End Jr',
    texto:
      'Comecei como full stack jr, mudei de cargo, recebi proposta melhor em menos de 2 anos. A curva de crescimento é real.',
    avatar: 'AN',
  },
] as const;

export const EMPRESAS = [
  'Santander', 'BTG Pactual', 'Toro Investimentos', 'iFood',
  'Stone', 'PagSeguro', 'Hostinger', 'Mercado Livre',
] as const;

export const STATS = [
  { valor: 22000, prefixo: '+', sufixo: '', label: 'Alunos formados' },
  { valor: 7000, prefixo: 'R$', sufixo: '+', label: 'Salário médio dos alunos' },
  { valor: 5, prefixo: '', sufixo: '+', label: 'Anos formando devs' },
  { valor: 4.9, prefixo: '', sufixo: '/5', label: 'Avaliação média', decimal: true },
] as const;

export const TIME = [
  {
    nome: 'Rodolfo Mori',
    papel: 'Fundador & CEO — ex-Santander, BTG e Toro',
    avatar: 'RM',
  },
  { nome: 'George Lima', papel: 'Tech Lead', avatar: 'GL' },
  { nome: 'Andrey Souza', papel: 'Engenheiro Front-End', avatar: 'AS' },
  { nome: 'Gabriel Rocha', papel: 'Engenheiro Full Stack', avatar: 'GR' },
] as const;
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
    nome: 'Lucas  Silva',
    antes: 'Auxiliar administrativo',
    hoje: 'Dev Full Stack',
    empresa: 'InV-Stack, Minas Gerais',
    tempo: '4  meses de estudo',
    texto:
      'Foram várias noites em claro estudando igual um maluco. Tive muitos "não" e nunca abaixei a cabeça. Criei network com outros devs, montei portfólio com projetos reais e hoje tenho uma vaga que eu nem sonhava. O método do DevClub me deu o caminho — o resto foi persistência.',
    avatar: 'LS',
    foto: '/images/depoimentos/lucas.jpg',
  },
  {
    nome: 'Thais Ribeiro',
    antes: 'Dona de hamburgueria',
    hoje: 'Dev Front-End',
    empresa: 'startup de logística',
    tempo: '14 meses de estudo',
    texto:
      'Me separei com duas filhas e voltei pra casa dos meus pais com uma mão na frente e outra atrás. Entendi que precisava estudar se quisesse me erguer. Um amigo programador me indicou o DevClub e mergulhei de cabeça. Hoje trabalho remoto, busco minhas filhas na escola e ganho mais do que a hamburgueria dava.',
    avatar: 'TR',
    foto: '/images/depoimentos/thais.jpg',
  },
  {
    nome: 'André Nascimento',
    antes: 'Professor de matemática',
    hoje: 'Front-End Jr',
    empresa: 'consultoria de tecnologia',
    tempo: '9 meses de estudo',
    texto:
      'A lógica da matemática me ajudou, mas foi o método que fez a diferença: projeto real, código revisado e preparação de entrevista. Comecei como full stack jr, mudei de cargo e recebi proposta melhor em menos de 2 anos. A curva de crescimento dessa área é real.',
    avatar: 'AN',
    foto: '/images/depoimentos/andre.jpg',
  },
  {
    nome: 'Juliana Castro',
    antes: 'Vendedora de loja',
    hoje: 'Dev Front-End',
    empresa: 'e-commerce nacional',
    tempo: '12 meses de estudo',
    texto:
      'Trabalhava 10 horas em pé no shopping e estudava de madrugada. Teve dia de querer desistir, mas a comunidade não deixou. Quando publiquei meu primeiro projeto no LinkedIn, três recrutadores me chamaram na mesma semana. Assinei CLT com salário que dobrou minha renda.',
    avatar: 'JC',
    foto: '/images/depoimentos/juliana.jpg',
  },
  {
    nome: 'Roberto Farias',
    antes: 'Motorista de aplicativo',
    hoje: 'Dev Back-End',
    empresa: 'empresa de pagamentos',
    tempo: '13 meses de estudo',
    texto:
      'Dirigia 12 horas por dia e ouvia aula de programação no trânsito. Com 3 horas de estudo por noite, em pouco mais de um ano saí do volante pro teclado. Hoje trabalho de casa, tenho plano de saúde e tempo com a família. Melhor decisão que já tomei.',
    avatar: 'RF',
    foto: '/images/depoimentos/roberto.jpg',
  },
  {
    nome: 'Fernanda Lopes',
    antes: 'Analista administrativa',
    hoje: 'Dev Full Stack',
    empresa: 'software house',
    tempo: '10 meses de estudo',
    texto:
      'Vi minha função sendo automatizada e decidi ficar do lado de quem constrói a automação. Aprendi a programar usando IA como ferramenta, do jeito que o mercado pede agora. Em menos de um ano, saí de planilhas pra entregar features em produção.',
    avatar: 'FL',
    foto: '/images/depoimentos/fernanda.jpg',
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
    papel: 'Fundador & CEO',
    bio: 'Passou por Santander, BTG Pactual e Toro antes de fundar o DevClub. Já formou milhares de devs com o mesmo método que usava pra contratar em empresas parceiras.',
    avatar: 'RM',
    foto: '/images/time/rodolfo.jpg',
  },
  {
    nome: 'George Lima',
    papel: 'Tech Lead',
    bio: 'Lidera a engenharia dos produtos DevClub. Referência do time em arquitetura e boas práticas, revisa e eleva o nível do código que os alunos aprendem.',
    avatar: 'GL',
    foto: '/images/time/george.jpg',
  },
  {
    nome: 'Andrey Souza',
    papel: 'Engenheiro Front-End',
    bio: 'Especialista em interfaces e experiência do usuário. Constrói as páginas e plataformas do ecossistema DevClub com foco em performance e detalhe visual.',
    avatar: 'AS',
    foto: '/images/time/andrey.jpg',
  },
  {
    nome: 'Gabriel Rocha',
    papel: 'Engenheiro Full Stack',
    bio: 'Atua de ponta a ponta nos sistemas internos do DevClub, do banco de dados à interface. A ponte entre o que o aluno aprende e o que o mercado usa.',
    avatar: 'GR',
    foto: '/images/time/gabriel.jpg',
  },
] as const;
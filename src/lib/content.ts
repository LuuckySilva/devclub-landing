export const FORMACOES = [
  {
    id: 'fullstack',
    nome: 'Formação Full Stack',
    descricao:
      'HTML, CSS, JavaScript, React, Node.js e banco de dados. Do primeiro "Hello World" ao deploy em produção.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    destaque: true,
  },
  {
    id: 'frontend',
    nome: 'Front-End Profissional',
    descricao:
      'Interfaces modernas com React, TypeScript e as ferramentas que o mercado usa de verdade.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    destaque: false,
  },
  {
    id: 'ia',
    nome: 'IA para Devs',
    descricao:
      'Integre LLMs em aplicações reais: OpenAI API, agentes, automação e prompt engineering.',
    tags: ['OpenAI', 'Agentes', 'Automação'],
    destaque: false,
  },
  {
    id: 'carreira',
    nome: 'Aceleração de Carreira',
    descricao:
      'LinkedIn, portfólio, entrevistas técnicas e negociação salarial. A ponte entre o código e o contrato.',
    tags: ['Portfólio', 'Entrevistas', 'LinkedIn'],
    destaque: false,
  },
] as const;

export const DEPOIMENTOS = [
  {
    nome: 'Mariana Costa',
    cargo: 'Dev Front-End na TechBank',
    texto:
      'Saí do atendimento ao cliente para o meu primeiro emprego dev em 11 meses. O método funciona: projeto real, código revisado e preparação de entrevista.',
    avatar: 'MC',
  },
  {
    nome: 'Rafael Oliveira',
    cargo: 'Full Stack na StartupXYZ',
    texto:
      'Fiz 3 bootcamps antes e nada. Aqui em 8 meses eu tinha portfólio, GitHub organizado e proposta assinada. A diferença é o foco em empregabilidade.',
    avatar: 'RO',
  },
  {
    nome: 'Juliana Santos',
    cargo: 'Dev Júnior na FinCorp',
    texto:
      'Mãe, 34 anos, zero experiência em tech. Hoje trabalho remoto ganhando 3x o que ganhava. O suporte da comunidade fez toda a diferença.',
    avatar: 'JS',
  },
] as const;

export const EMPRESAS = [
  'TechBank', 'FinCorp', 'StartupXYZ', 'DataLabs',
  'CloudNine', 'PixelSoft', 'CodeWave', 'NexGen',
] as const;

export const STATS = [
  { valor: 50000, sufixo: '+', label: 'Alunos formados' },
  { valor: 87, sufixo: '%', label: 'Empregados em até 12 meses' },
  { valor: 4200, sufixo: '+', label: 'Empresas contratantes' },
  { valor: 4.9, sufixo: '/5', label: 'Avaliação média', decimal: true },
] as const;

export const TIME = [
  { nome: 'Rodolfo Mori', papel: 'Fundador & CEO', avatar: 'RM' },
  { nome: 'George Lima', papel: 'Tech Lead', avatar: 'GL' },
  { nome: 'Andrey Souza', papel: 'Engenheiro Front-End', avatar: 'AS' },
  { nome: 'Gabriel Rocha', papel: 'Engenheiro Full Stack', avatar: 'GR' },
] as const;
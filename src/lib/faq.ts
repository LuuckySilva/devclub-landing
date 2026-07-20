interface FaqEntry {
  keywords: string[];
  resposta: string;
}

export const SUGESTOES = [
  'Quais formações existem?',
  'Preciso ter experiência?',
  'Quanto custa?',
  'Como funciona a comunidade?',
];

const FAQ: FaqEntry[] = [
  {
    keywords: ['formaç', 'curso', 'trilha', 'existem'],
    resposta:
      'Temos 6 formações: DevClub Full Stack (a principal), Front-end Club, Data Club, IA Club, MBA em IA e Automações e DevClub Elite. Dá uma olhada na seção Formações — clicando em cada card você vê duração, nível e o que vai aprender! 🚀',
  },
  {
    keywords: ['experiência', 'experiencia', 'iniciante', 'zero', 'começar', 'comecar', 'faculdade'],
    resposta:
      'Não precisa de experiência, faculdade nem inglês fluente! O método foi feito pra quem está começando do absoluto zero. Mais de 22.000 alunos já fizeram essa transição — muitos vindos de áreas totalmente diferentes.',
  },
  {
    keywords: ['custa', 'preço', 'preco', 'valor', 'pagamento', 'parcel'],
    resposta:
      'Os valores variam por formação e sempre têm condições especiais de lançamento. Clica em "Seja membro" que você recebe as informações completas da próxima turma! 💚',
  },
  {
    keywords: ['comunidade', 'network', 'suporte', 'ajuda', 'sozinho'],
    resposta:
      'A comunidade é o coração do DevClub: milhares de devs, revisão de código, lives semanais e suporte humano de verdade. Você nunca estuda sozinho.',
  },
  {
    keywords: ['emprego', 'vaga', 'trabalh', 'contrat', 'salário', 'salario'],
    resposta:
      'Nosso foco é empregabilidade: portfólio com projetos reais, preparação pra entrevistas e método validado. O salário médio dos nossos alunos é R$7.000+. Confere as Histórias reais na página!',
  },
  {
    keywords: ['aluno', 'login', 'entrar', 'acesso', 'plataforma'],
    resposta:
      'Se você já é aluno, clica em "Área do aluno" no topo da página pra acessar a plataforma. 😉',
  },
  {
    keywords: ['ia', 'inteligência artificial', 'inteligencia'],
    resposta:
      'IA é parte do método: você aprende a programar usando IA como ferramenta, do jeito que o mercado pede. E temos o IA Club e o MBA em IA pra quem quer se aprofundar.',
  },
];

const FALLBACK =
  'Boa pergunta! Essa eu não sei responder por aqui, mas o time humano sabe: clica em "Seja membro" e deixa seu contato que a gente te responde. Ou pergunta de outro jeito que eu tento de novo! 🙂';

export function responder(pergunta: string): string {
  const texto = pergunta.toLowerCase();
  const match = FAQ.find((f) => f.keywords.some((k) => texto.includes(k)));
  return match?.resposta ?? FALLBACK;
}
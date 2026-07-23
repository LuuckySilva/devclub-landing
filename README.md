# DevClub — Página Institucional

Página institucional conceitual do DevClub, construída para o concurso de vaga Full Stack.
O centro da experiência é um herói em WebGL onde milhares de partículas convergem do caos
para formar o logo da marca, reagindo ao movimento do mouse em tempo real — sobre um campo
de partículas em hipervelocidade viajando em direção à câmera.

**🔗 Demo ao vivo:** https://devclub-landing-three.vercel.app

> Página conceitual desenvolvida como desafio técnico. Todos os depoimentos, nomes de
> alunos, preços e números de empresas são fictícios, conforme autorizado no edital do concurso.

---

## Stack

| Camada | Tecnologia | Por quê |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Server Components por padrão: HTML renderizado no servidor, JS só onde há interação |
| Linguagem | **TypeScript** | Contratos de dados tipados em todo o conteúdo da página |
| Estilos | **Tailwind CSS v4** | Design tokens consistentes sem CSS órfão |
| 3D / WebGL | **React Three Fiber + drei + postprocessing** | Three.js declarativo, com cleanup automático de geometrias e materiais |
| Animação | **GSAP 3.13 + ScrollTrigger + SplitText** | Gratuito desde abr/2025; ScrollTrigger não tem substituto real para scroll coreografado |
| Scroll | **Lenis** | Smooth scroll que integra nativamente com o ScrollTrigger |
| Tipografia | **Space Grotesk, JetBrains Mono, Orbitron, VT323** | Display, código e as palavras cinematográficas do herói |
| Ícones | **react-icons** (Simple Icons + Feather) | Logos de tecnologias e empresas |
| Deploy | **Vercel** | CI/CD automático a cada push na `main` |

---

## Funcionalidades

### Herói interativo em WebGL
- Logo do DevClub formado por ~14.600 partículas (desktop) amostradas pixel a pixel de um PNG
- Animação de convergência: as partículas nascem em uma nuvem esférica e viajam até a forma do logo
- Repulsão de mouse em tempo real — o cursor "abre buracos" na forma
- **Clique no logo dispara uma explosão radial**: as partículas voam para fora e a mesma física da convergência as traz de volta
- **Campo estelar em hipervelocidade** ao fundo: partículas ambientes viajam em Z na direção da câmera, em loop contínuo
- **Palavras "fantasma" derivando** no espaço do herói (`{ código }`, `< futuro />`, `.dev`...), com tipografia cinematográfica e deriva CSS independente por palavra
- Entrada coreografada: título, subtítulo e CTAs entram em cascata sincronizados com a convergência

### Interações e microinterações
- Carrossel coverflow 3D das formações: navegação por teclado (← →), scroll, setas e indicadores
- Modal de detalhes de cada formação (duração, nível, currículo) e **fluxo de checkout visual** com resumo do pedido, formas de pagamento e estado de sucesso
- Cards com inclinação 3D e brilho radial que segue o cursor
- Botões magnéticos nos CTAs principais (retorno com easing elástico)
- Marquee infinito de empresas com cores de marca
- Contadores animados que sobem ao entrar na viewport
- Reveals em cascata por seção (batch com stagger)
- Modal visual da área do aluno
- Assistente de dúvidas com sugestões rápidas e respostas por correspondência de palavras-chave
- **Assinatura no console do navegador** — abre o DevTools ;)

### Conversão
- Menu com CTA primário ("Seja membro") e secundário ("Área do aluno")
- Seção de comunidade e formulário de captura de contato com estado de sucesso

---
## Como rodar localmente

Pré-requisitos: Node.js 18.18+ e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/LuuckySilva/devclub-landing.git
cd devclub-landing

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000`.

```bash
# Build de produção
npm run build && npm start
```

**Variáveis de ambiente:** nenhuma. A página é totalmente estática e não depende de serviços externos.

---

## Arquitetura

```
src/
├── app/
│   ├── layout.tsx           # Fontes (Space Grotesk, JetBrains Mono, Orbitron, VT323) e metadata
│   ├── page.tsx             # Composição das seções (Server Component)
│   └── globals.css          # Design tokens, grid técnico e animações de deriva
├── components/
│   ├── sections/            # Uma seção por arquivo (Hero, Formações, Histórias...)
│   ├── three/               # Cena WebGL: HeroCanvas, ParticleLogo, AmbientParticles, FloatingWords
│   └── ui/                  # Peças reutilizáveis (Navbar, Avatar, Magnetic, ChatWidget, CheckoutModal...)
├── hooks/
│   └── useImageParticles.ts # Amostragem de pixels → posições 3D
└── lib/
    ├── content.ts           # Todo o conteúdo da página (fonte única de verdade)
    ├── stackIcons.tsx       # Mapas tag → ícone e empresa → cor de marca
    ├── faq.ts               # Base de conhecimento do assistente
    ├── consoleSignature.ts  # Assinatura ASCII no console do navegador
    └── gsap.ts              # Registro centralizado dos plugins GSAP
```

### Decisões de arquitetura

**Conteúdo separado de apresentação.** Formações, depoimentos, time, estatísticas e empresas
vivem em `src/lib/content.ts`. Os componentes apenas renderizam. Trocar os dados fictícios por
dados reais significa editar um arquivo — nenhum componente é tocado.

**Server Components por padrão.** Apenas os componentes com estado ou animação carregam
`'use client'`. As demais seções chegam ao navegador como HTML puro, sem JavaScript.

**Canvas 3D isolado no cliente.** O `HeroCanvas` é importado com `next/dynamic` e `ssr: false`,
porque o Three.js acessa APIs de navegador. Isso também mantém o bundle inicial leve — o chunk
3D só é baixado no cliente, com um fundo em gradiente como estado de carregamento.

**HTML onde HTML é melhor.** As palavras flutuantes do herói são camada HTML com animação CSS,
não texto WebGL: mesma fonte da identidade da página, custo zero de GPU, texto acessível e
nenhuma dependência de carregamento de fonte 3D.

**Degradação em cascata.** Ícone de tecnologia ausente renderiza só o texto; foto de pessoa
ausente renderiza as iniciais; JavaScript desabilitado ainda entrega a página completa em HTML.
Nada quebra por falta de um recurso opcional.

---

## Performance e acessibilidade

Lighthouse em produção (desktop): **Desempenho 76 · Acessibilidade 96 · Boas práticas 96 · SEO 100**.

Otimizações aplicadas ao herói WebGL:
- `devicePixelRatio` limitado (≤2 desktop, ≤1.5 mobile) — evita renderizar pixels invisíveis
- Contagem de partículas reduzida no mobile via passo de amostragem maior (~4.800 vs ~14.600)
- Pós-processamento (Bloom) desativado no mobile — é o passe mais caro de GPU
- Loop de render pausado quando o herói sai da viewport (`IntersectionObserver`)
- Nuvem inicial de partículas gerada de forma determinística, evitando divergência de hidratação
- Palavras do herói animadas no compositor CSS, fora do loop WebGL

Acessibilidade:
- `prefers-reduced-motion` respeitado no GSAP (`gsap.matchMedia()`) e nas animações CSS — sem animação, a página aparece completa
- Foco de teclado visível no carrossel, com navegação por setas
- Rótulos ARIA nos controles do carrossel, modais e assistente
- Contraste WCAG AA no texto sobre fundos escuros

---


## Autor

**Lucas Silva** — Desenvolvedor Full Stack

- GitHub: [github.com/LuuckySilva](https://github.com/LuuckySilva)
- LinkedIn: [linkedin.com/in/olucas-silvaa](https://linkedin.com/in/olucas-silvaa)

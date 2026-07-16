'use client';

import dynamic from 'next/dynamic';

const HeroCanvas = dynamic(
  () => import('@/components/three/HeroCanvas').then((m) => m.HeroCanvas),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0a0f]">
      {/* Camada 0: canvas de partículas (fundo interativo) */}
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      {/* Camada 1: gradiente sutil pra dar contraste ao texto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />

      {/* Camada 2: conteúdo */}
      <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <span className="mb-6 inline-block rounded-full border border-[#39d353]/30 bg-[#39d353]/10 px-4 py-1.5 font-mono text-sm text-[#39d353]">
            +50.000 devs formados
          </span>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Do zero ao{' '}
            <span className="bg-gradient-to-r from-[#39d353] to-[#26a641] bg-clip-text text-transparent">
              primeiro emprego
            </span>{' '}
            em programação
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
            A formação mais completa do Brasil para quem quer viver de
            tecnologia. Aprenda com quem já colocou milhares de devs no
            mercado.
          </p>

          <div className="pointer-events-auto mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#formacoes"
              className="rounded-full bg-[#39d353] px-8 py-4 font-semibold text-[#0a0a0f] shadow-[0_0_30px_rgba(57,211,83,0.4)] transition-shadow hover:shadow-[0_0_50px_rgba(57,211,83,0.6)]"
            >
              Quero começar agora
            </a>
            <a
              href="#sobre"
              className="rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/5"
            >
              Conhecer o DevClub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
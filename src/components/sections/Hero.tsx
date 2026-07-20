'use client';

import dynamic from 'next/dynamic';

const HeroCanvas = dynamic(
  () => import('@/components/three/HeroCanvas').then((m) => m.HeroCanvas),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#09090b]">
      {/* Camada 0: partículas (logo centralizado na metade superior) */}
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      {/* Camada 1: vinheta radial pro texto respirar */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,#09090b_0%,transparent_60%)]" />

      {/* Camada 2: conteúdo centralizado na parte inferior */}
      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-end pb-20 text-center">
        <div className="max-w-3xl px-6">
          <span className="mb-6 inline-block rounded-full border border-[#39d353]/40 bg-[#0a0a0f]/80 px-4 py-1.5 font-mono text-sm text-[#39d353] backdrop-blur-sm">
  +22.000 devs formados
</span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            A maior escola de{' '}
            <span className="bg-gradient-to-r from-[#39d353] to-[#26a641] bg-clip-text text-transparent">
              programação
            </span>{' '}
            do Brasil
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-400">
            Do zero ao primeiro emprego. Sem faculdade, sem inglês fluente —
            com método, projeto real e IA como ferramenta.
          </p>

          <div className="pointer-events-auto mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#formacoes"
              className="rounded-full bg-[#39d353] px-8 py-4 font-semibold text-[#0a0a0f] shadow-[0_0_30px_rgba(57,211,83,0.4)] transition-shadow hover:shadow-[0_0_50px_rgba(57,211,83,0.6)]"
            >
              Quero começar agora
            </a>
            <a
              href="#time"
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
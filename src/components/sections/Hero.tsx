'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { gsap, SplitText, useGSAP } from '@/lib/gsap';
import { Magnetic } from '@/components/ui/Magnetic';

const HeroCanvas = dynamic(
  () => import('@/components/three/HeroCanvas').then((m) => m.HeroCanvas),
  { ssr: false }
);

export function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Divide a headline em palavras (SplitText — grátis desde o GSAP 3.13)
        const split = new SplitText('[data-hero-title]', {
          type: 'lines',
          mask: 'lines',
          linesClass: 'hero-line',
        });

        // Timeline única: cada elemento entra em sequência, cronometrado
        // com a convergência das partículas (~1.5s de duração no load)
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from('[data-hero-badge]', { y: 24, autoAlpha: 0, duration: 0.6 }, 0.5)
          .from(
            split.lines,
            { yPercent: 120, autoAlpha: 0, duration: 0.9, stagger: 0.15 },
            0.7
          )
          .from('[data-hero-sub]', { y: 24, autoAlpha: 0, duration: 0.6 }, '-=0.35')
          .from(
            '[data-hero-ctas] > *',
            { y: 20, autoAlpha: 0, duration: 0.5, stagger: 0.12 },
            '-=0.25'
          );

        // Cleanup: desfaz a divisão em palavras ao desmontar
        return () => split.revert();
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className="relative h-screen w-full overflow-hidden bg-[#09090b]"
    >
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,#09090b_0%,transparent_60%)]" />

      <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-end pb-20 text-center">
        <div className="max-w-3xl px-6">
          <span
            data-hero-badge
            className="mb-6 inline-block rounded-full border border-[#39d353]/40 bg-[#0a0a0f]/80 px-4 py-1.5 font-mono text-sm text-[#39d353] backdrop-blur-sm"
          >
            +22.000 devs formados
          </span>

          <h1
            data-hero-title
            className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
          >
            A maior escola de{' '}
            <span className="bg-gradient-to-r from-[#39d353] to-[#26a641] bg-clip-text text-transparent">
              programação
            </span>{' '}
            do Brasil
          </h1>

          <p
            data-hero-sub
            className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-400"
          >
            Do zero ao primeiro emprego. Sem faculdade, sem inglês fluente —
            com método, projeto real e IA como ferramenta.
          </p>

          <div
            data-hero-ctas
            className="pointer-events-auto mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Magnetic>
              <a
                href="#formacoes"
                className="inline-block rounded-full bg-[#39d353] px-8 py-4 font-semibold text-[#0a0a0f] shadow-[0_0_30px_rgba(57,211,83,0.4)] transition-shadow hover:shadow-[0_0_50px_rgba(57,211,83,0.6)]"
              >
                Quero começar agora
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#sobre"
                className="inline-block rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/5"
              >
                Conhecer o DevClub
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
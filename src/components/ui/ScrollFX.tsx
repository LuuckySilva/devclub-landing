'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';

export function ScrollFX() {
  // ---- Lenis: smooth scroll sincronizado com o ScrollTrigger ----
  useEffect(() => {
    const lenis = new Lenis();

    // A cada scroll do Lenis, o ScrollTrigger recalcula posições
    lenis.on('scroll', ScrollTrigger.update);

    // Lenis dirigido pelo ticker do GSAP: UM loop só na página inteira
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  // ---- Reveals + counters (só se o usuário aceita movimento) ----
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Estado inicial: escondido e deslocado pra baixo
      gsap.set('[data-reveal]', { y: 50, opacity: 0 });

      // batch: elementos que entram na viewport juntos animam juntos,
      // com stagger — cards de um grid sobem em cascata
      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 85%',
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            overwrite: true,
          }),
      });

      // Counters: animam um objeto {val} e escrevem no DOM a cada update
      gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((el) => {
        const target = parseFloat(el.dataset.counter ?? '0');
        const isDecimal = el.dataset.decimal === 'true';
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => {
            el.textContent = isDecimal
              ? obj.val.toFixed(1).replace('.', ',')
              : Math.round(obj.val).toLocaleString('pt-BR');
          },
        });
      });
    });
  });

  return null; // não renderiza nada — só efeitos
}
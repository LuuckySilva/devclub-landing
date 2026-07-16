'use client';

import dynamic from 'next/dynamic';

// ssr: false → o chunk do Three.js (pesado) nunca roda no servidor
// e só é baixado no cliente. Bundle inicial fica leve.
const HeroCanvas = dynamic(
  () => import('@/components/three/HeroCanvas').then((m) => m.HeroCanvas),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#0a0a0f]">
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>
    </section>
  );
}
'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { ParticleLogo } from './ParticleLogo';

export function HeroCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches
    );
  });

  // Detecção de mobile: tela pequena OU ponteiro "grosso" (touch).
  // Roda só no cliente (useEffect) — nunca no servidor.
  useEffect(() => {
    const update = () => {
      setIsMobile(
        window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches
      );
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Pausa o loop de render quando o herói sai da tela:
  // rolou pra baixo = GPU em repouso, bateria e FPS preservados
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting)
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="h-full w-full">
      <Canvas
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        frameloop={visible ? 'always' : 'never'}
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{
          antialias: false,
          powerPreference: isMobile ? 'low-power' : 'high-performance',
        }}
      >
        <ParticleLogo samplingStep={isMobile ? 7 : 4} />

        {/* Bloom SÓ no desktop: pós-processamento é o maior custo
            de GPU do herói — no mobile, o AdditiveBlending das
            partículas já entrega o brilho essencial */}
        {!isMobile && (
          <EffectComposer>
            <Bloom
              intensity={1.2}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
}
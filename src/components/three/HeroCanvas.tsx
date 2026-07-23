'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { FloatingWords } from './FloatingWords';
import { AmbientParticles } from './AmbientParticles';
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

  // roda apenas no cliente
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
        camera={{ position: [0, 0, isMobile ? 11 : 8], fov: 50 }}
        gl={{
          antialias: false,
          powerPreference: isMobile ? 'low-power' : 'high-performance',
        }}
      >
    
          <AmbientParticles count={isMobile ? 250 : 450} />
        <ParticleLogo samplingStep={isMobile ? 7 : 4} compact={isMobile} />

        {/* Bloom apenas no desktop: passe mais caro de GPU */}
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
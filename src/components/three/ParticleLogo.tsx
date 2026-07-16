'use client';

import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useImageParticles } from '@/hooks/useImageParticles';

export function ParticleLogo() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useImageParticles('/images/logo-silhouette.png', {
    samplingStep: 4,
    scale: 0.012,
  });

  // Roda a cada frame (~60x/segundo): rotação sutil pra dar vida
  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    pointsRef.current.rotation.y = Math.sin(t * 0.3) * 0.15;
  });

  // O hook é assíncrono (espera a imagem carregar) — 1º render vem null
  if (!positions) return null;

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#39d353"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}
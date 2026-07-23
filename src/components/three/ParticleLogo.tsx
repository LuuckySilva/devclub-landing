'use client';

import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useImageParticles } from '@/hooks/useImageParticles';

const REPULSION_RADIUS = 1.2;
const REPULSION_STRENGTH = 0.6;
const CONVERGENCE_SPEED = 0.06;
const LOGO_OFFSET_X = 0;

interface ParticleLogoProps {
  samplingStep?: number;
  compact?: boolean;
}

export function ParticleLogo({ samplingStep = 4, compact = false }: ParticleLogoProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const explodindoAte = useRef(0); // timestamp até quando ignora o alvo

  const home = useImageParticles('/images/logo-silhouette.png', {
    samplingStep,
    scale: compact ? 0.008 : 0.010,
  });

  const offsetY = compact ? 0.3 : 0.8;

  const scattered = useMemo(() => {
    if (!home) return null;

    const arr = new Float32Array(home.length);
    for (let i = 0; i < arr.length; i += 3) {
      const seed = (i / 3) % 17;
      const r = 6 + (seed % 7) * 0.8;
      const theta = (seed / 17) * Math.PI * 2;
      const phi = Math.acos(2 * (seed / 16) - 1);
      arr[i] = r * Math.sin(phi) * Math.cos(theta);
      arr[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i + 2] = r * Math.cos(phi);
    }

    return arr;
  }, [home]);

  const explodir = () => {
    const points = pointsRef.current;
    if (!points || !home) return;

    const attr = points.geometry.attributes.position;
    const arr = attr.array as Float32Array;

    // empurra cada partícula radialmente para fora do centro do logo
   for (let i = 0; i < arr.length; i += 3) {
      const dx = arr[i] - LOGO_OFFSET_X;
      const dy = arr[i + 1] - offsetY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 0.001;
      const forca = 2.5 + Math.random() * 1.5;   // reduzido de 5-8 para 2.5-4
      arr[i]     += (dx / dist) * forca;
      arr[i + 1] += (dy / dist) * forca;
      arr[i + 2] += (Math.random() - 0.5) * 1.5; // reduzido de 4 para 1.5
    }

    attr.needsUpdate = true;
    explodindoAte.current = performance.now() + 600; // reduzido de 900 para 600
  };

  useFrame((state) => {
    if (!pointsRef.current || !home) return;

    const attr = pointsRef.current.geometry.attributes.position;
    const arr = attr.array as Float32Array;

    const explodindo = performance.now() < explodindoAte.current;

    const mx = (state.pointer.x * state.viewport.width) / 2 - LOGO_OFFSET_X;
    const my = (state.pointer.y * state.viewport.height) / 2 - offsetY;

    for (let i = 0; i < arr.length; i += 3) {
      let tx = home[i];
      let ty = home[i + 1];
      const tz = home[i + 2];

      const dx = tx - mx;
      const dy = ty - my;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (!explodindo && dist < REPULSION_RADIUS && dist > 0.001) {
        const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH;
        tx += (dx / dist) * force;
        ty += (dy / dist) * force;
      }

      // durante a explosão, convergência quase zerada: partículas voam livres
      const forcaConvergencia = explodindo ? 0.02 : CONVERGENCE_SPEED;

      arr[i]     += (tx - arr[i])     * forcaConvergencia;
      arr[i + 1] += (ty - arr[i + 1]) * forcaConvergencia;
      arr[i + 2] += (tz - arr[i + 2]) * forcaConvergencia;
    }

    attr.needsUpdate = true;
  });

  if (!home || !scattered) return null;

  return (
    <Points
      ref={pointsRef}
      positions={scattered}
      stride={3}
      position={[LOGO_OFFSET_X, offsetY, 0]}
      onClick={explodir}
    >
      <PointMaterial
        transparent
        color="#39d353"
        size={compact ? 0.045 : 0.035}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}